$file = Get-ChildItem -Path "d:\ParralelaV2\Site\Parralela_SiteV3\content\ParralelaV2_TXT" -Filter "Cuirasse.txt" -Recurse | Select-Object -First 1
if (-not $file) { Write-Host "File not found"; exit }
$content = Get-Content $file.FullName
foreach ($line in $content) {
    if ($line -match "Très efficace") {
        $leading = $line.Length - $line.TrimStart().Length
        Write-Host "Found 'Très efficace': Leading spaces = $leading"
        # Write-Host "Hex: " + [string]::Join("-", [char[]]$line.Substring(0, $leading) | ForEach-Object { "{0:X}" -f [int]$_ })
    }
    if ($line -match "coups directs") {
        $leading = $line.Length - $line.TrimStart().Length
        Write-Host "Found 'coups directs': Leading spaces = $leading"
    }
}
