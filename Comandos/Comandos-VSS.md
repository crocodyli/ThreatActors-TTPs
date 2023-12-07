Este arquivo mantém comandos identificados que podem afetar o funcionamento do VSS, cujos comandos são executados por ransomwares. 

vssadmin.exe delete shadows /all /quiet

"wmic.exe" SHADOWCOPY DELETE /nointeractive

REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\VSS /VE /T REG_SZ /F /D Service

powershell.exe -Command "Get-WmiObject Win32_Shadowcopy | Remove-WmiObject"

