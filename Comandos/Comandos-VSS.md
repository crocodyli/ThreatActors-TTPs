| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| vssadmin.exe delete shadows /all /quiet | Comando que pode afetar o funcionamento do VSS |
| "wmic.exe" SHADOWCOPY DELETE /nointeractive | Comando que pode afetar o funcionamento do VSS |
| REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\VSS /VE /T REG_SZ /F /D Service | Comando que pode afetar o funcionamento do VSS |
| powershell.exe -Command "Get-WmiObject Win32_Shadowcopy | Remove-WmiObject" | Comando que pode afetar o funcionamento do VSS |
