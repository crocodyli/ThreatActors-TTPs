| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| bcdedit.exe" /set {default} recoveryenabled No | Used to manipulate the Boot Configuration Data (BCD) configuration in Windows, disables system recovery in the Windows boot menu. |
| bcdedit.exe" /set {default} bootstatuspolicy ignoreallfailures | Used to configure Windows boot policy to ignore all failures |
| %windir%\System32\svchost.exe –k WerSvcGroup | Starts the svchost.exe process specifying that it should belong to the service group responsible for "Windows Error Reporting Service" |
