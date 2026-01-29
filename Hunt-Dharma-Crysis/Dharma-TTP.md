| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Execution | Command and Scripting   Interpreter | T1059 | Accept command line arguments |
| Execution | Shared Modules | T1129 | Link function at runtime on   Windows. |
| Execution | Service Execution | T1569.002 | O ransomware abuse the Windows   service control manager to execute malicious commands or payloads. |
| Persistence | Boot or Logon Autostart   Execution | T1547 | Adversaries may configure   system settings to automatically execute a program during system boot or   logon to maintain persistence or gaing higher-lever privileges on compromised   systems. |
| Persistence | Registry Run Keys/ Startup   Folder | T1547.001 | Creates na autostart registry   key. |
| Discovery | Process Discovery | T1057 | Queries a list of all running   processes. |
| Discovery | System Information Discovery | T1082 | Queries the volume information   (name, serial number etc) of a devide. |
| Discovery | File and Directory Discovery | T1083 | Get common file path. |
| Discovery | Security Software Discovery | T1518.001 | AV process strings found. |
| Impact | Data Encrypted for Impact | T1486 | Renames files by appending the   extension “.hitobito”. |
| Privilege   Escalation () | Boot or Logon Autostart   Execution | T1547 | Adversaries may configure   system settings to automatically execute a program during system boot or   logon to maintain persistence or gaing higher-lever privileges on compromised   systems. |
| Defense   Evasion () | Obfuscated Files or Information | T1027 | Binary may include packed or   crypted data. |
| Defense   Evasion () | Software Packing | T1027.002 | .NET source code contains   method to dynamically call methods. |
| Defense   Evasion () | Masquerading | T1036 | Creates files inside the user   directory. |
| Defense   Evasion () | Timestomp | T1070.006 | Binary contais a suspicious   time stamp. |
| Defense   Evasion () | Modify registry | T1112 | The ransomware interact with   the Windows Registry. |
| Defense   Evasion () | Deobfuscate/Decode Files or   Information | T1140 | .NET source code contais calls   to encryption/decryption functios. |
| Defense   Evasion () | Virtualization/Sandbox Evasion | T1497 | Contains logs sleeps >= 3   minutos |
| Defense   Evasion () | Disable or Modify Tools | T1562.001 | Disables zone checking for all   users. |
| Credential   Access () | Input Capture | T1056 | Use and collected credencials. |