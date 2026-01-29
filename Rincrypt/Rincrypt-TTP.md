| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Execution | Command and Scripting   Interpreter | T1059 | Accepts command-line arguments. |
| Execution | Sared Modules | T1129 | Shares operating system modules. |
| Discovery | System Information Discovery | T1082 | The ransomware queries information   about volumes, policies, disk details, variables, and other data. |
| Discovery | Files and Directory Discovery | T1083 | Enumerates the victim's file system. |
| Discovery | Security Software Discovery | T1518.001 | If antivirus process strings are   found, attempts are made to terminate them. |
| Collection | Data from Local System | T1005 | Actors may search local system sources   such as the file system and configuration files. |
| Impact | Data Encrypted for Impact | T1486 | Actors use data encryption to target   the organization and device. |
| Persistência | DLL Side-Loading | T1574.002 | Attempts to load missing DLLs in the   operating system. |
| Privilege   Escalation | Abuse Elevation Control   Mechanism | T1548 | Actors may bypass mechanisms designed   to control elevated privileges to gain higher-level permissions. |
| Privilege   Escalation | DLL Side-Loading | T1574.002 | Attempts to load missing DLLs in the   operating system. |
| Defense   Evasion | Obfuscated Files or Information | T1027 | Encodes data using an XOR key. |
| Defense   Evasion | Masquerading | T1036 | Creates files in the user directory to   manipulate their characteristics. |
| Defense   Evasion | Deobfuscate/Decode Files or   Information | T1140 | Uses data extraction from the binary   image. |
| Defense   Evasion | Indirect Command Execution | T1202 | Actors abuse utilities that allow   command execution to bypass security restrictions limiting the use of   command-line interpreters. |
| Defense   Evasion | System Checks | T1497.001 | References anti-VM strings. |
| Defense   Evasion | Abuse Elevation Control   Mechanism | T1548 | Actors may bypass mechanisms designed   to control elevated privileges to gain higher-level permissions. |