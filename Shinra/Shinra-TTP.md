| TACTIC  	| TECHNIQUE  	| DETAILS 	|
|:---:	|:---:	|:---:	|
|    <br>Execution (TA0002) 	| Windows Management   Instrumentation T1047 	| The ransomware uses wmic.exe   to query the operating system. 	|
| Execution (TA0002) 	| Command and Scripting   Interpreter T1059 	| Apparent internal use of cmd.exe. 	|
| Execution (TA0002) 	| Shared Modules T1129 	| The ransomware attempts to load processes and malicious functions. 	|
| Persistence (TA0003) 	| Windows Services T1543.003 	| Stops certain types of services. 	|
| Persistence (TA0003) 	| Boot or Logon Autostart   Execution T1547 	| Adversaries may configure the system to automatically run a program   during startup or system login to maintain persistence or gain elevated   privileges on compromised systems. 	|
| Persistence (TA0003) 	| Registry Run Keys/ Startup   Folder T1547.001 	| Creates files and modifies execution registry keys. 	|
| Privilege Escalation (TA0004) 	| Windows Service T1543.003 	| Stops services. 	|
| Privilege Escalation (TA0004) 	| Abuse Elevation Control   Mechanism T1548 	| Actors may bypass mechanisms designed to control elevated privileges to   obtain higher-level permissions. 	|
| Defense Evasion (TA0005) 	| Obfuscated Files or Information   T1027 	| Uses payload data encoding. 	|
| Defense Evasion (TA0005) 	| Indicator Removal from Tools   T1027.005 	| Contains obfuscated stack strings. 	|
| Defense Evasion (TA0005) 	| Embedded Payloads T1027.009 	| Drops interesting files and uses them during execution. 	|
| Defense Evasion (TA0005) 	| Masquerading T1036 	| Creates files within the user directory. Adversaries use these to   manipulate the characteristics of their artifacts to make them appear   legitimate. 	|
| Defense Evasion (TA0005) 	| Scripting T1064 	| Executes .bat files. 	|
| Defense Evasion (TA0005) 	| Clear Windows Event Logs   T1070.001 	| Clears Windows operating system event logs. 	|
| Defense Evasion (TA0005) 	| File Deletion T1070.004 	| Deletes shadow file data and performs self-deletion. 	|
| Defense Evasion (TA0005) 	| Indirect Command Execution T1202 	| The adversary abuses utilities that allow command execution to bypass   security controls. 	|
| Defense Evasion (TA0005) 	| File and Directory Permissions   Modification T1222 	| Retrieves and sets file attributes. 	|
| Defense Evasion (TA0005) 	| Abuse Elevation Control   Mechanism T1548 	| The threat actor uses privilege control bypass mechanisms to gain   permissions. 	|
| Defense Evasion (TA0005) 	| Disable or Modify Tools   T1562.001 	| Uses taskkill to terminate   processes. 	|
| Defense Evasion (TA0005) 	| Hidden Window T1564.003 	| Hides graphical windows. 	|
| Credential Access (TA0006) 	| Input Capture T1056 	| Creates an object generally used for capturing keystrokes. 	|
| Discovery (TA0007) 	| System Service Discovery T1007 	| Enumerates certain services and queries their status. 	|
| Discovery (TA0007) 	| Application Window Discovery   T1010 	| The threat actor attempts to obtain a list of open applications and   processes. 	|
| Discovery (TA0007) 	| System Network Configuration   Discovery T1016 	| Uses ping.exe to check the   status of network devices. 	|
| Discovery (TA0007) 	| Remote System Discovery T1018 	| Uses ping.exe to check the   status of network devices. 	|
| Discovery (TA0007) 	| Process Discovery T1057 	| The malware attempts to gather information about running processes on a   system. 	|
| Discovery (TA0007) 	| System Information   Discovery  T1082 	| Searches for and collects information related to the operating system. 	|
| Discovery (TA0007) 	| File and Directory Discovery   T1083 	| Reads files, retrieves their size, and enumerates them according to   Windows properties. 	|
| Discovery (TA0007) 	| Network Share Discovery  T1135 	| Enumerates the victim’s network shares. 	|
| Discovery (TA0007) 	| Security Software Discovery  T1518.001 	| Attempts to detect virtual machines to hinder analysis. 	|
| Collection (TA0009) 	| Data Staged T1074 	| The actor uses centralized data storage before performing exfiltration. 	|
| Collection (TA0009) 	| Automated Collection   T1119 	| The process attempted to detect the presence of forensic and debugging   utilities. 	|
| Impact (TA0034)    	| Data Encrypted for Impact  T1486 	| The ransomware renames files according to its variant and writes a file   for the ransom note. 	|
| Impact (TA0034)    	| Service Stop T1489 	| Stops certain types of services. 	|
| Impact (TA0034) 	| Inhibit System Recovery T1490 	| The cmd.exe process   invoked by the malware deletes Windows volume shadow copies. 	|
| Impact (TA0034) 	| Data Destruction T1485 	| The ransomware deletes various types of user files. 	|
