|     Tactic    	|     Technique    	|     Details    	|
|---	|---	|---	|
|     Execution           TA0002    	|     Windows Management Instrumentation            T1047    	|     The ransomware deletes shadow copies using the WMIC.exe utility.     	|
|     Execution           TA0002    	|     Command and Scripting   Interpreter: Windows Command Shell           T1059.003    	|     The ransomware utilizes cmd.exe to execute various Windows utilities to implement various other techniques.     	|
|     Defense Evasion           TA0005    	|     Indicator Removal: Clear Windows Event Logs           T1070.001    	|     The ransomware clears the victim machine's application, system, and security event logs using the wevtutil.exe utility.    	|
|     Defense Evasion           TA0005    	|     Impair Defenses:   Disable or Modify Tools           T1562    	|     Threat actors use files such as: STONESTOP and POORTRY to load drivers for the purpose of disabling and deleting AV files.    	|
|     Lateral Movement           TA0008    	|     Lateral Tool Transfer            T1570    	|     Affiliates were identified using: psexec.exe, PsExec.exe, and smbexec.exe for lateral movement.    	|
|     Impact            TA0040    	|     Data Encrypted for Impact           T1486    	|     Files are encrypted using file replacement method.     	|
|     Impact            TA0040    	|     Service Stop           T1489    	|     The Windows IIS service stop command is executed using iisreset.exe.            Allows for encryption of web applications hosted on IIS servers as files linked to these applications are typically locked while IIS is running.    	|
|     Impact            TA0040    	|     Inhibit System   Recovery           T1490    	|     The ransomware deletes system shadow copies to inhibit system recovery.     	|
