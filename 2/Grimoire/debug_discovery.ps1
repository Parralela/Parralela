$baseDir = "d:\ParralelaV2\Site\Parralela_SiteV3\content\ParralelaV2_TXT"
$rootDir = Get-ChildItem -Path $baseDir -Filter "Syst*" | Select-Object -ExpandProperty FullName
Write-Host "RootDir: $rootDir"

if ($rootDir) {
    $txtFiles = Get-ChildItem -Path $rootDir -Recurse -Filter *.txt
    Write-Host "Found $($txtFiles.Count) files."
    $cuirasse = $txtFiles | Where-Object { $_.Name -eq "Cuirasse.txt" }
    if ($cuirasse) {
        Write-Host "Found Cuirasse.txt at $($cuirasse.FullName)"
    }
    else {
        Write-Host "Cuirasse.txt NOT found in list."
    }
}
else {
    Write-Host "RootDir not found matching 'Syst*'"
}
