| TACTIC  	| TECHNIQUE  	| DETAILS 	|
|:---:	|:---:	|:---:	|
| Execution   (TA0002) 	| Command and Scripting   Interpreter (T1059) 	| Accept command line arguments 	|
| Execution   (TA0002) 	| Native API (T1106) 	| Adversaries may interact with   the native OS application programming interface (API) to execute behaviors. 	|
| Execution   (TA0002) 	| Shared Modules (T1129) 	| Link function at runtime on   Windows. 	|
| Persistence   (TA0003) 	| Boot or Logon Autostart   Execution (T1547) 	| Adversaries may configure   system settings to automatically execute a program during system boot or   logon to maintain persistence or gaing higher-lever privileges on compromised   systems. 	|
| Persistence   (TA0003) 	| Registry Run Keys/ Startup   Folder (T1547.001) 	| Creates na autostart registry   key. 	|
| Privilege   Escalation (TA0004) 	| Boot or Logon Autostart   Execution (T1547) 	| Adversaries may configure   system settings to automatically execute a program during system boot or   logon to maintain persistence or gaing higher-lever privileges on compromised   systems. 	|
| Defense   Evasion (TA0005) 	| Obfuscated Files or Information   (T1027) 	| Binary may include packed or   crypted data. 	|
| Defense   Evasion (TA0005) 	| Software Packing (T1027.002) 	| .NET source code contains   method to dynamically call methods. 	|
| Defense   Evasion (TA0005) 	| Masquerading (T1036) 	| Creates files inside the user   directory. 	|
| Defense   Evasion (TA0005) 	| Timestomp (T1070.006) 	| Binary contais a suspicious   time stamp. 	|
| Defense   Evasion (TA0005) 	| Modify registry (T1112) 	| The ransomware interact with   the Windows Registry. 	|
| Defense   Evasion (TA0005) 	| Deobfuscate/Decode Files or   Information (T1140) 	| .NET source code contais calls   to encryption/decryption functios. 	|
| Defense   Evasion (TA0005) 	| Virtualization/Sandbox Evasion   (T1497) 	| Contains logs sleeps >= 3   minutos 	|
| Defense   Evasion (TA0005) 	| Disable or Modify Tools   (T1562.001) 	| Disables zone checking for all   users. 	|
| Credential   Access (TA006) 	| Input Capture (T1056) 	| Use and collected credencials. 	|
| Discovery   (TA0007) 	| Process Discovery (T1057) 	| Queries a list of all running   processes. 	|
| Discovery   (TA0007) 	| System Information Discovery   (T1082) 	| Queries the volume information   (name, serial number etc) of a devide. 	|
| Discovery   (TA0007) 	| File and Directory Discovery   (T1083) 	| Get common file path. 	|
| Discovery   (TA0007) 	| Security Software Discovery   (T1518.001) 	| AV process strings found. 	|
| Impact   (TA0034) 	| Data Encrypted for Impact   (T1486) 	| Renames files by appending the   extension “.hitobito”. 	|
