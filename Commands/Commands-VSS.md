| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| vssadmin.exe delete shadows /all /quiet | Command that can affect VSS functionality |
| "wmic.exe" SHADOWCOPY DELETE /nointeractive | Command that can affect VSS functionality |
| REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\VSS /VE /T REG_SZ /F /D Service | Command that can affect VSS functionality |
| powershell.exe -Command "Get-WmiObject Win32_Shadowcopy \| Remove-WmiObject" | Command that can affect VSS functionality |
