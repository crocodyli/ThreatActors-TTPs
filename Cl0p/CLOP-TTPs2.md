# Mapped by: carlosadrianosj

## CLOP
| Tatica ID | Tecnica ID | Nome | Descricao |
|---|---|---|---|
| Tatica ID | Tecnica ID | Nome | Descrição |
| Initial Access TA0001 
| Initial Access TA0001 | T1190  | Exploit public-facing application | Arrives via any the following exploits:/ CVE-2021-27101/ CVE-2021-27102/ CVE-2021-27103/ CVE-2021-27104/ CVE-2021-35211 |
| Initial Access TA0001 | T1078  | Valid accounts | Have been reported to make used of compromised accounts to access victims via RDP |
| Execution TA0002  | T1106   | Native API | Uses native API to execute various commands/routines |
| Execution TA0002  | T1059  | Command and scripting interpreter | Uses various scripting interpreters like PowerShell, Windows command shell and Visual Basic (macro in documents) |
| Execution TA0002  | T1204  | User execution | User execution is needed to carry out the payload from the spear-phishing link/attachments |
| Persistence TA0003 
| Persistence TA0003 
| Privilege Escalation TA0004 
| Privilege Escalation TA0004 | T1068  | Exploitation for privilege escalation | Makes use of CVE-2021-27102 to escalate privilege |
| Privilege Escalation TA0004 
| Defense Evasion TA0005 | T1036.001  | Masquerading: invalid code signature | Makes use of the following digital signatures:/ DVERI/ FADO/ TOV |
| Defense Evasion TA0005 
| Defense Evasion TA0005 | T1140  | Deobfuscate/Decode files or information | The tool used for exfiltration has a part of its malware trace removal, and it drops a base-64 encoded file. |
| Defense Evasion TA0005 | T1070.004  |  Indicator removal on host: file deletion  | Deletes traces of itself in the infected machine |
| Defense Evasion TA0005 | T1055.001  | Process injection: DLL injection | To deliver other tools and payload, a tool has the capability to inject its downloaded payload. |
| Defense Evasion TA0005 | T1202  | Indirect command execution | A startup script runs just before the system gets to the login screen via startup registry. |
| Defense Evasion TA0005 | T1070.001  | Indicator removal on host: clear Windows event logs | Clears the Event Viewer log files |
| Discovery TA0007 | T1083  | File and directory discovery | Searches for specific files and the directory related to its encryption |
| Discovery TA0007 | T1018  | Remote system discovery | Makes use of tools for network scans |
| Discovery TA0007 | T1057  | Process discovery | Discovers certain processes for process termination |
| Discovery TA0007 | T1082  | System information discovery | Identifies keyboard layout and other system information |
| Discovery TA0007 | T1012  | Query registry | Queries certain registries as part of its routine |
| Discovery TA0007 
| Lateral Movement TA0008 
| Lateral Movement TA0008 | T1021.002  | Remote services: SMB/Windows admin shares | Drops a copy of the payload to the compromised AD and then create a service on the target machine to execute the copy of the payload |
| Collection TA0009 | T1005  | Data from local system | Might make use of RDP to manually search for valuable files or information |
| Command and Control TA0011 | T1071  | Application Layer Protocol | Uses http/s to communicate to its C&C; server |
| Exfiltration TA0010 
| Impact TA0040 
| Impact TA0040 
