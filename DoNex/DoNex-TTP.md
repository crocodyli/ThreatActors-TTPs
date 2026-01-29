| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Execution | <br>Windows Management Instrumentation | T1047 | <br>The ransomware uses wmic.exe to query the OS. |
| Execution | <br>Command   and Scripting Interpreter | T1059 | <br>Apparent   internal use of CMD.exe. |
| Execution | <br>Scripting | T1064 | <br>Performs batch file execution. |
| Execution | <br>Native API | T1106 | <br>The   process attempted to delete shadow volume copies (VSS). |
| Execution | <br>Shared Modules | T1129 | <br>The ransomware tries to carry out process   loader, malicious functions. |
| Persistence | <br>Windows   Services | T1543.003 | <br>Paralyzes   some types of services. |
| Defense Evasion | <br>Obfuscated Files or Information | T1027 | <br>Uses payload data encoding. |
| Defense Evasion | <br>Indicator   Removal from Tools | T1027.005 | <br>Contains   obfuscated stackstrings. |
| Defense Evasion | <br>Embedded Payloads | T1027.009 | <br>Discards interesting files and uses them in its   execution. |
| Defense Evasion | <br>Masquerading | T1036 | <br>Creates   files within the user directory. Adversaries use it for purposes of   manipulating characteristics of their artifacts to make them appear   legitimate. |
| Defense Evasion | <br>Scripting | T1064 | <br>Execute files in bat. |
| Defense Evasion | <br>Clear   Windows Event Logs | T1070.001 | <br>Clears the   Windows Operating System event logs. |
| Defense Evasion | <br>File Deletion | T1070.004 | <br>Performs the deletion of shadow file data and   also self-exclusion. |
| Defense Evasion | <br>Indirect   Command Execution | T1202 | <br>The   adversary abuses utilities that allow the execution of commands to bypass   security controls. |
| Defense Evasion | <br>File and Directory Permissions Modification | T1222 | <br>Retrieves and sets file attributes. |
| Defense Evasion | <br>Disable or Modify Tools | T1562.001 | <br>Uses taskkill to terminate processes. |
| Defense Evasion | <br>Hidden   Window | T1564.003 | <br>Graphical   window operation. |
| Credential Access | <br>Input Capture | T1056 | <br>Creates an object generally used for keystroke   capture purposes. |
| Discovery | <br>System   Service Discovery | T1007 | <br>List some   services and check their status. |
| Discovery | <br>Application Window Discovery | T1010 | <br>The threat actor attempts to obtain a list of   open applications and processes. |
| Discovery | <br>System   Network Configuration Discovery | T1016 | <br>Uses   ping.exe to check the status of network devices. |
| Discovery | <br>Remote System Discovery | T1018 | <br>Uses ping.exe to check the status of network   devices. |
| Discovery | <br>Process   Discovery | T1057 | <br>Malware   attempts to obtain information about the processes running on a system. |
| Discovery | <br>System Information Discovery | T1082 | <br>Searches and collects information related to the   Operating System. |
| Discovery | <br>File and   Directory Discovery | T1083 | <br>Reads the   files, gets the size and enumerates according to Windows. |
| Discovery | <br>Network Share Discovery <br>   <br>T1135 | T1135 | <br>Enumerates the victim's network shares. |
| Discovery | <br>Security   Software Discovery | T1518.001 | <br>Attempts   to detect the virtual machine to make analysis more difficult. |
| Collection | <br>Data Staged | T1074 | <br>The actor uses data storage in a central   location before performing exfiltration. |
| Collection | <br>Automated   Collection | T1119 | <br>The   process attempted to detect the presence of forensic and debug utilities. |
| Impact | <br>Data Encrypted for Impact<br>   <br>T1486 | T1486 | <br>The ransomware renames files according to their   variant and writes a file for ransom note purposes. |
| Impact | <br>Service   Stop | T1489 | <br>Paralyzes   some types of services. |
| Impact | <br>Inhibit System Recovery<br>   <br>T1490 | T1490 | <br>The cmd.exe process invoked by the malware   performs the deletion of Windows volume shadow copies. |
| Impact | <br>Data   Destruction | T1485 | <br>The   ransomware deletes various types of user files. |