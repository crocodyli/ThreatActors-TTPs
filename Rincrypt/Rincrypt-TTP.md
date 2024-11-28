| TACTIC  	| TECHNIQUE  	| DETAILS 	|
|:---:	|:---:	|:---:	|
| Execution   TA0002 	| Command and Scripting   Interpreter T1059 	| Accepts command-line arguments. 	|
| Execution   TA0002 	| Sared Modules T1129 	| Shares operating system modules. 	|
| Persistência   TA0003 	| DLL Side-Loading T1574.002 	| Attempts to load missing DLLs in the   operating system. 	|
| Privilege   Escalation TA004 	| Abuse Elevation Control   Mechanism T1548 	| Actors may bypass mechanisms designed   to control elevated privileges to gain higher-level permissions. 	|
| Privilege   Escalation TA0004 	| DLL Side-Loading T1574.002 	| Attempts to load missing DLLs in the   operating system. 	|
| Defense   Evasion TA0005 	| Obfuscated Files or Information   T1027 	| Encodes data using an XOR key. 	|
| Defense   Evasion TA0005 	| Masquerading T1036 	| Creates files in the user directory to   manipulate their characteristics. 	|
| Defense   Evasion TA0005 	| Deobfuscate/Decode Files or   Information T1140 	| Uses data extraction from the binary   image. 	|
| Defense   Evasion TA0005 	| Indirect Command Execution T1202 	| Actors abuse utilities that allow   command execution to bypass security restrictions limiting the use of   command-line interpreters. 	|
| Defense   Evasion TA0005 	| System Checks T1497.001 	| References anti-VM strings. 	|
| Defense   Evasion TA0005 	| Abuse Elevation Control   Mechanism T1548 	| Actors may bypass mechanisms designed   to control elevated privileges to gain higher-level permissions. 	|
| Discovery   TA0007 	| System Information Discovery   T1082 	| The ransomware queries information   about volumes, policies, disk details, variables, and other data. 	|
| Discovery   TA0007 	| Files and Directory Discovery   T1083 	| Enumerates the victim's file system. 	|
| Discovery   TA0007 	| Security Software Discovery   T1518.001 	| If antivirus process strings are   found, attempts are made to terminate them. 	|
| Collection   TA0009 	| Data from Local System T1005 	| Actors may search local system sources   such as the file system and configuration files. 	|
| Impacto   TA0034 	| Data Encrypted for Impact T1486 	| Actors use data encryption to target   the organization and device. 	|
