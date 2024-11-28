| TACTIC  	| TECHNIQUE  	| DETAILS 	|
|:---:	|:---:	|:---:	|
| Execution   (TA0002) 	| Command and Scripting   Interpreter (T1059) 	| Accept command line arguments 	|
| Execution   (TA0002) 	| Shared Modules (T1129) 	| Link function at runtime on   Windows. 	|
| Execution   (TA0002) 	| Windows Command Shell   (T1059.003) 	| Uses powershell commands for   reverse shell. 	|
| Defense   Evasion (TA0005) 	| Obfuscated Files or Information   (T1027) 	| Binary may include packed or   crypted data. 	|
| Defense   Evasion (TA0005) 	| Software Packing (T1027.002) 	| PE file has section (not .text)   which is very likelly to contain packed code. 	|
| Defense   Evasion (TA0005) 	| Indicator Removal (T1070) 	| Adversaries may delete or   modify artifacts generated within systems to remove evidence of their   presence or hinder defenses. 	|
| Defense   Evasion (TA0005) 	| Indirect Command Execution   (T1202) 	| Adversaries may abuse utilities   that allow for command execution to bypass security restrictions that limit   the use of command-line interpreters.  	|
| Defense   Evasion (TA0005) 	| File and Directory Permissions   Modification (T1222) 	| Set file attributes. 	|
| Defense   Evasion (TA0005) 	| Hidden Windows (T1564.003) 	| Hide graphical window. 	|
| Discovery   (TA0007) 	| Process Discovery (T1057) 	| Queries a list of all running   processes. 	|
| Discovery   (TA0007) 	| Query Registry (T1012) 	| Query or enumerate registry   value. 	|
| Discovery   (TA0007) 	| System Information Discovery   (T1082) 	| Queries the volume information   (name, serial number etc) of a devide. 	|
| Discovery   (TA0007) 	| File and Directory Discovery   (T1083) 	| Get common file path. 	|
| Discovery   (TA0007) 	| Network Share Discovery (T1135) 	| Enumerate network shares. 	|
| Discovery   (TA0007) 	| Software Discovery (T1518) 	| Enumerate processes. 	|
| Discovery   (TA0007) 	| System Location Discovery   (T1614) 	| Get geographical location.  	|
| Impact   (TA0034) 	| Data Encrypted for Impact   (T1486) 	| Renames files by appending the   extension “.DORRA” 	|
