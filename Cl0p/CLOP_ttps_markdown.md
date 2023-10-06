# Mapped by: carlosadrianosj

## CLOP
| Tatica ID | Tecnica ID | Nome | Descricao |
|---|---|---|---|
| Tatica ID | Tecnica ID | Nome | Descrição |
| Initial Access TA0001 | T1566.001  | Phishing: Spear-phishing attachment | Arrives via phishing emails that have Get2 Loader, which will download the SDBot and FlawedAmmy RAT |
| Initial Access TA0001 | T1190  | Exploit public-facing application | Arrives via any the following exploits:/ CVE-2021-27101/ CVE-2021-27102/ CVE-2021-27103/ CVE-2021-27104/ CVE-2021-35211 |
| Initial Access TA0001 | T1078  | Valid accounts | Have been reported to make used of compromised accounts to access victims via RDP |
| Execution TA0002  | T1106   | Native API | Uses native API to execute various commands/routines |
| Execution TA0002  | T1059  | Command and scripting interpreter | Uses various scripting interpreters like PowerShell, Windows command shell and Visual Basic (macro in documents) |
| Execution TA0002  | T1204  | User execution | User execution is needed to carry out the payload from the spear-phishing link/attachments |
| Persistence TA0003 | T1547  | Boot or logon autostart execution | Creates registry run entries to execute the ransomware as a service |
| Persistence TA0003 | T1543.003 | Create or modify system process: Windows service | Creates a service to execute the ransomware |
| Privilege Escalation TA0004 | T1484.001 | Domain Policy modification: Group Policy modification | Uses stolen credentials to access the AD servers to gain administrator privilege and attack other machines within the network |
| Privilege Escalation TA0004 | T1068  | Exploitation for privilege escalation | Makes use of CVE-2021-27102 to escalate privilege |
| Privilege Escalation TA0004 | T1574 | Hijack execution flow | UAC bypass |
| Defense Evasion TA0005 | T1036.001  | Masquerading: invalid code signature | Makes use of the following digital signatures:/ DVERI/ FADO/ TOV |
| Defense Evasion TA0005 | T1562.001  |  Impair defenses: disable or modify tools | Disables security-related software by terminating them |
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
| Discovery TA0007 | T1063  | Security software discovery | Discovers security software for reconnaissance and termination |
| Lateral Movement TA0008 | T1570  | Lateral tool transfer | Can make use of RDP to transfer the ransomware or tools within the network |
| Lateral Movement TA0008 | T1021.002  | Remote services: SMB/Windows admin shares | Drops a copy of the payload to the compromised AD and then create a service on the target machine to execute the copy of the payload |
| Collection TA0009 | T1005  | Data from local system | Might make use of RDP to manually search for valuable files or information |
| Command and Control TA0011 | T1071  | Application Layer Protocol | Uses http/s to communicate to its C&C; server |
| Exfiltration TA0010 | T1567  |  Exfiltration over web service | DEWMODE web shell extracts list of available files from a MySQL database on the FTA and lists these files and corresponding their metadata. These will then be downloaded using the DEWMODE web shell. |
| Impact TA0040 | T1486  | Data encrypted for impact | Uses a combination of Salsa20, AES, and ECDH to encrypt the files and key |
| Impact TA0040 | T1490  |  Inhibit system recovery | Deletes shadow copies |
