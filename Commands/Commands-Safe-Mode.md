| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| bcdedit /set {current} safeboot network | Restart in Windows Safe Mode with Networking |
| bootcfg /raw /a /safeboot:network /id 1 | Before Windows Vista |
| bcdedit /deletevalue {current} safeboot | Used to remove the safe boot configuration from Safe Mode in Windows BCD |
| bootcfg /raw /fastdetect /id 1 | Before Windows Vista |
| bcdedit.exe /set {current} safeboot minimal | Configures the current boot entry to start in safe boot mode with the minimum essential drivers needed for basic system operation |
