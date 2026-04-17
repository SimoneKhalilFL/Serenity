$ErrorActionPreference = 'Stop'
Set-Location "$PSScriptRoot\..\images\lodging"

$renames = @(
    @('ms-01-guest-bath.jpg.jpg',       'ms-01-guest-bath.jpg'),
    @('ms-01-guest-bath.jpg.PNG',       'ms-02-guest-bath.png'),
    @('ms-01-guest-bedroom.jpg.PNG',    'ms-01-guest-bedroom.png'),
    @('ms-01-gulf-balcony.jpg.JPEG',    'ms-01-gulf-balcony.jpg'),
    @('ms-01-living-room.jpg.jpg',      'ms-01-living-room.jpg'),
    @('ms-01outdoor-lake.jpg',          'ms-01-outdoor-lake.jpg'),
    @('ms-01-pool.PNG',                 'ms-01-pool.png'),
    @('ms-01-pool-outdoor.jpg.jpg',     'ms-01-pool-outdoor.jpg'),
    @('ms-02-building-view.jpg.jpg',    'ms-02-building-view.jpg'),
    @('ms-02-condo-view.jpg.jpg',       'ms-02-condo-view.jpg'),
    @('ms-02-dinning-room.jpg.JPEG',    'ms-02-dining-room.jpg'),
    @('ms-02-gulf-balcony.jpg.JPEG',    'ms-02-gulf-balcony.jpg'),
    @('ms-02-gym.jpg.jpg',              'ms-02-gym.jpg'),
    @('ms-02-hottub.jpg.jpg',           'ms-02-hottub.jpg'),
    @('ms-02-living-room.jpg.jpg',      'ms-02-living-room.jpg'),
    @('ms-02-master-bedroom.JPEG',      'ms-02-master-bedroom.jpg'),
    @('ms-02-pickle-ball.jpg.jpg',      'ms-02-pickleball.jpg'),
    @('ms-03-dinning-room.jpg.jpg',     'ms-03-dining-room.jpg'),
    @('ms-03-gulf-balcony.jpg.JPEG',    'ms-03-gulf-balcony.jpg'),
    @('ms-03-living-room.jpg.jpg',      'ms-03-living-room.jpg'),
    @('ms-03-master-bedroom.JPEG',      'ms-03-master-bedroom.jpg'),
    @('ms-04-dinning.jpg',              'ms-04-dining-room.jpg'),
    @('ms-04-gulf-balcony.jpg.PNG',     'ms-04-gulf-balcony.png'),
    @('ms-04-living-room.jpg.JPEG',     'ms-04-living-room.jpg'),
    @('ms-04-master-bedroom.JPEG',      'ms-04-master-bedroom.jpg'),
    @('ms-05-dinning-room.jpg',         'ms-05-dining-room.jpg'),
    @('ms-05-gulf-balcony.jpg.JPEG',    'ms-05-gulf-balcony.jpg'),
    @('ms-05-living-room.jpg.jpg',      'ms-05-living-room.jpg'),
    @('ms-05-master-bedroom.JPEG',      'ms-05-master-bedroom.jpg'),
    @('ms-06-gulf-balcony.jpg.JPEG',    'ms-06-gulf-balcony.jpg'),
    @('ms-06-gulf-balcony.jpg.jpg',     'ms-08-gulf-balcony.jpg'),
    @('ms-06-living-room.jpg.jpg',      'ms-06-living-room.jpg'),
    @('ms-07-gulf-balcony.jpg.jpg',     'ms-07-gulf-balcony.jpg'),
    @('ms-07-living-room.jpg.jpg',      'ms-07-living-room.jpg'),
    @('ms-08-living-room.jpg.jpg',      'ms-08-living-room.jpg'),
    @('ms-08-pool-indoor.jpg.jpg',      'ms-08-pool-indoor.jpg'),
    @('ms-10-sunset-view.jpg.jpg',      'ms-10-sunset-view.jpg'),
    @('ms-12-living-room.jpg.jpg',      'ms-12-living-room.jpg'),
    @('ms-beach-view.JPG',              'ms-beach-view.jpg'),
    @('ms-living-room.jpg',             'ms-11-living-room.jpg')
)

foreach ($pair in $renames) {
    $src = $pair[0]; $dst = $pair[1]
    if (-not (Test-Path -LiteralPath $src)) {
        Write-Host "SKIP (missing): $src"
        continue
    }
    if ($src -ieq $dst) {
        Write-Host "OK  (already clean): $src"
        continue
    }
    if ((Test-Path -LiteralPath $dst) -and ($src -ne $dst)) {
        Write-Host "CONFLICT: '$dst' exists, cannot rename '$src'"
        continue
    }
    Rename-Item -LiteralPath $src -NewName $dst
    Write-Host "RENAMED: $src -> $dst"
}

Write-Host "`nDone."
