$targetDir = "trionica-site"
$newBase = "https://onhighmng.github.io/Trionica/"

Write-Host "Starting link fix in $targetDir..."

Get-ChildItem $targetDir -Recurse -Include *.html,*.css,*.js | ForEach-Object {
    $content = Get-Content $_ -Raw
    # Replace /wp-content/ with wp-content/ (relative path fix)
    $newContent = $content -replace '/wp-content/', 'wp-content/'
    
    # If we knew the old domain, we would replace it here.
    # For now, we only fix the wp-content paths which is the most critical for static assets.
    
    if ($content -ne $newContent) {
        Set-Content -Path $_ -Value $newContent -NoNewline
        Write-Host "Fixed: $_"
    }
}

Write-Host "Link fix complete."
