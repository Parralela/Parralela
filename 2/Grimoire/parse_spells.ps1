$baseDir = "d:\ParralelaV2\Site\Parralela_SiteV3\content\ParralelaV2_TXT"
$rootDir = Get-ChildItem -Path $baseDir -Filter "Syst*" | Select-Object -ExpandProperty FullName
if (-not $rootDir) {
    Write-Host "Directory not found!"
    exit
}


$spells = @()
$global:idCounter = 1

function Get-SpellData {
    param (
        [string]$filePath
    )

    # Use .NET to force UTF-8 reading correctly even without BOM
    $content = [System.IO.File]::ReadAllLines($filePath, [System.Text.Encoding]::UTF8)
    if ($null -eq $content) { return $null }

    $spell = [PSCustomObject]@{
        id            = $global:idCounter
        name          = ""
        type          = "Inconnu"
        complexity    = 0
        affinities    = @()
        desc          = ""
        full_desc     = ""
        mana          = "Non specifie"
        duration      = "Non specifie"
        range         = "Non specifie"
        incantation   = ""
        particularity = @()
        notes         = @()
        lore          = "Nature du sort a definir..."
        origin        = "Origine a definir..."
        symbol        = "" 
    }

    # --- NAME ---
    $nameLine = $content[0]
    if ($nameLine) {
        $spell.name = $nameLine -replace "^[^a-zA-Z0-9\u00C0-\u017F]+", ""
        $spell.name = $spell.name.Trim()
    }
    if (-not $spell.name) {
        $spell.name = [System.IO.Path]::GetFileNameWithoutExtension($filePath)
    }

    # --- PARSING LINE BY LINE ---
    $currentSection = $null
    $effectBuffer = @()
    
    foreach ($rawLine in $content) {
        $line = $rawLine.Trim()
        if ($line -eq "") { continue }

        if ($line.StartsWith("Affinité :")) {
            $affText = ($line -split ":")[1].Trim()
            $potentialAffinities = @("Pyros", "Aquaria", "Aeris", "Lumia", "Umbra", "Fulgora", "Verdania", "Terra", "Bestia")
            foreach ($aff in $potentialAffinities) {
                if ($affText -like "*$aff*") {
                    $spell.affinities += $aff
                }
            }
        }
        elseif ($line.StartsWith("Grimoire :")) {
            $parts = $line -split ":"
            if ($parts.Count -gt 1) { $spell.origin = $parts[1].Trim() }
        }
        elseif ($line.StartsWith("- Type :")) {
            $parts = $line -split ":"
            if ($parts.Count -gt 1) { $spell.type = $parts[1].Trim() }
        }
        elseif ($line -match "complexit") {
            # Normalize line to avoid encoding issues with accents
            if ($line -match "basique") { $spell.complexity = 1 }
            elseif ($line -match "interm") { $spell.complexity = 2 }
            elseif ($line -match "avanc") { $spell.complexity = 3 }
            elseif ($line -match "maître" -or $line -match "légendaire" -or $line -match "extreme") { $spell.complexity = 4 }
        }
        # --- NEW GRANULAR FIELDS ---
        elseif ($line -match "- Consommation de mana") {
            $parts = $line -split ":"
            if ($parts.Count -gt 1) { $spell.mana = $parts[1].Trim() }
            $currentSection = "mana"
        }
        elseif ($line -match "- Dur.e") {
            $parts = $line -split ":"
            if ($parts.Count -gt 1) { $spell.duration = $parts[1].Trim() }
            $currentSection = "duration"
        }
        elseif ($line -match "- Port.e") {
            $parts = $line -split ":"
            if ($parts.Count -gt 1) { $spell.range = $parts[1].Trim() }
            $currentSection = "range"
        }
        elseif ($line -match "- Incantation") {
            $parts = $line -split ":"
            if ($parts.Count -gt 1 -and $parts[1].Trim().Length -gt 0) { 
                $spell.incantation = $parts[1].Trim() 
            }
            $currentSection = "incantation"
        }
        elseif ($line -match "- Particularit") {
            $currentSection = "particularity"
        }
        elseif ($line -match "- Note") {
            $currentSection = "notes"
        }
        elseif ($line -match "- Effet magique") {
            $currentSection = "effect"
        }
        # --- CAPTURE CONTENT ---
        else {
            if ($currentSection -eq "effect") {
                $effectBuffer += $line
            }
            elseif ($currentSection -eq "incantation") {
                if ($spell.incantation.Length -gt 0) { $spell.incantation += " " + $line }
                else { $spell.incantation = $line }
            }
            elseif ($currentSection -eq "particularity") {
                if ($rawLine.StartsWith("    -") -or $rawLine.StartsWith("    •")) {
                    $cleanLine = "SUB::" + $line.Substring(1).Trim()
                    $spell.particularity += $cleanLine
                }
                elseif ($line.StartsWith("-") -or $line.StartsWith("•")) {
                    $cleanLine = $line.Substring(1).Trim()
                    $spell.particularity += $cleanLine
                }
                elseif ($spell.particularity.Count -gt 0) {
                    $spell.particularity[$spell.particularity.Count - 1] += " " + $line
                }
                else {
                    $spell.particularity += $line
                }
            }
            elseif ($currentSection -eq "notes") {
                if ($rawLine.StartsWith("    -") -or $rawLine.StartsWith("    •")) {
                    $cleanLine = "SUB::" + $line.Substring(1).Trim()
                    $spell.notes += $cleanLine
                }
                elseif ($line.StartsWith("-") -or $line.StartsWith("•")) {
                    $cleanLine = $line.Substring(1).Trim()
                    $spell.notes += $cleanLine
                }
                elseif ($spell.notes.Count -gt 0) {
                    $spell.notes[$spell.notes.Count - 1] += " " + $line
                }
                else {
                    $spell.notes += $line
                }
            }
            elseif ($currentSection -eq "mana") {
                if ($spell.mana.Length -lt 2 -or $spell.mana -eq "Non specifie") { $spell.mana = $line }
                else { $spell.mana += " " + $line }
            }
            elseif ($currentSection -eq "duration") {
                if ($spell.duration.Length -lt 2 -or $spell.duration -eq "Non specifie") { $spell.duration = $line }
                else { $spell.duration += " " + $line }
            }
            elseif ($currentSection -eq "range") {
                if ($spell.range.Length -lt 2 -or $spell.range -eq "Non specifie") { $spell.range = $line }
                else { $spell.range += " " + $line }
            }
            # For mana, duration, range types that might span multiple lines? usually distinct.
            # If they span, we might want to append. But usually short.
        }
    }

    # --- POST PROCESSING ---
    $spell.full_desc = ($effectBuffer -join "<br>")

    if ($effectBuffer.Count -gt 0) {
        $firstBlock = $effectBuffer[0]
        if ($firstBlock.Contains(".")) {
            $spell.desc = $firstBlock.Substring(0, $firstBlock.IndexOf(".") + 1)
        }
        elseif ($firstBlock.Contains("!")) {
            $spell.desc = $firstBlock.Substring(0, $firstBlock.IndexOf("!") + 1)
        }
        else {
            $spell.desc = $firstBlock
        }
        
        if ($spell.desc.Length -lt 50 -and $effectBuffer.Count -gt 1) {
            $spell.desc += " " + $effectBuffer[1]
        }
    }
    else {
        $spell.desc = "Description indisponible."
    }

    # Affinities Fallback
    if ($spell.affinities.Count -eq 0) {
        $parentDir = Split-Path (Split-Path $filePath -Parent) -Leaf
        $grandParent = Split-Path (Split-Path (Split-Path $filePath -Parent) -Parent) -Leaf
        
        $validAffinities = @("Pyros", "Aquaria", "Aeris", "Lumia", "Umbra", "Fulgora", "Verdania", "Terra", "Bestia")
        
        if ($validAffinities -contains $parentDir) {
            $spell.affinities += $parentDir
        }
        elseif ($validAffinities -contains $grandParent) {
            $spell.affinities += $grandParent
        }
    }
    
    return $spell
}

# Recursively find all .txt files
$txtFiles = Get-ChildItem -Path $rootDir -Recurse -Filter *.txt

foreach ($file in $txtFiles) {
    $spellData = Get-SpellData -filePath $file.FullName
    if ($spellData) {
        $spells += $spellData
        $global:idCounter++
    }
}

# Filter out non-spells (Type Inconnu AND Desc unavailable), and also ensure we don't have empty names
$filteredSpells = $spells | Where-Object { 
    -not ($_.type -eq "Inconnu" -and $_.desc -eq "Description indisponible.") -and $_.name.Length -gt 0
}

# Convert to JSON with depth to keep structure
$jsonContent = $filteredSpells | ConvertTo-Json -Depth 4

# Wrap in JS const
$jsContent = "const spellsDB = $jsonContent;"

$jsFile = "d:\ParralelaV2\Site\Parralela_SiteV3\js\db_spells.js"
$utf8WithBom = New-Object System.Text.UTF8Encoding $true
[System.IO.File]::WriteAllText($jsFile, $jsContent, $utf8WithBom)

Write-Host "Parsed $($spells.Count) files. Kept $($filteredSpells.Count) spells. Saved to $jsFile"
