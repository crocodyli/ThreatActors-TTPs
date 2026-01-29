| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Execution | Command and Scripting   Interpreter | T1059 | Accept command line arguments |
| Execution | Shared Modules | T1129 | Link function at runtime on   Windows. |
| Execution | Windows Command Shell | T1059.003 | Uses powershell commands for   reverse shell. |
| Discovery | Process Discovery | T1057 | Queries a list of all running   processes. |
| Discovery | Query Registry | T1012 | Query or enumerate registry   value. |
| Discovery | System Information Discovery | T1082 | Queries the volume information   (name, serial number etc) of a devide. |
| Discovery | File and Directory Discovery | T1083 | Get common file path. |
| Discovery | Network Share Discovery | T1135 | Enumerate network shares. |
| Discovery | Software Discovery | T1518 | Enumerate processes. |
| Discovery | System Location Discovery | T1614 | Get geographical location. |
| Impact | Data Encrypted for Impact | T1486 | Renames files by appending the   extension “.DORRA” |
| Defense   Evasion () | Obfuscated Files or Information | T1027 | Binary may include packed or   crypted data. |
| Defense   Evasion () | Software Packing | T1027.002 | PE file has section (not .text)   which is very likelly to contain packed code. |
| Defense   Evasion () | Indicator Removal | T1070 | Adversaries may delete or   modify artifacts generated within systems to remove evidence of their   presence or hinder defenses. |
| Defense   Evasion () | Indirect Command Execution | T1202 | Adversaries may abuse utilities   that allow for command execution to bypass security restrictions that limit   the use of command-line interpreters. |
| Defense   Evasion () | File and Directory Permissions   Modification | T1222 | Set file attributes. |