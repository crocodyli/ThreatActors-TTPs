# Mapped by: carlosadrianosj

## CLOP

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | T1566.001 | T1566.001 | Arrives via phishing emails that have Get2 Loader, which will download the SDBot and FlawedAmmy RAT |
| Initial Access | T1190 | T1190 | Arrives via any the following exploits:/ CVE-2021-27101/ CVE-2021-27102/ CVE-2021-27103/ CVE-2021-27104/ CVE-2021-35211 |
| Execution | T1106 | T1106 | Uses native API to execute various commands/routines |
| Execution | T1059 | T1059 | Uses various scripting interpreters like PowerShell, Windows command shell and Visual Basic (macro in documents) |
| Persistence | T1547 | T1547 | Creates registry run entries to execute the ransomware as a service |
| Persistence | T1543.003 | T1543.003 | Creates a service to execute the ransomware |
| Privilege Escalation | T1484.001 | T1484.001 | Uses stolen credentials to access the AD servers to gain administrator privilege and attack other machines within the network |
| Privilege Escalation | T1068 | T1068 | Makes use of CVE-2021-27102 to escalate privilege |
| Privilege Escalation | T1574 | T1574 | UAC bypass |
| Defense Evasion | T1562.001 | T1562.001 | Disables security-related software by terminating them |
| Defense Evasion | T1140 | T1140 | The tool used for exfiltration has a part of its malware trace removal, and it drops a base-64 encoded file. |
| Defense Evasion | T1070.004 | T1070.004 | Deletes traces of itself in the infected machine |
| Defense Evasion | T1055.001 | T1055.001 | To deliver other tools and payload, a tool has the capability to inject its downloaded payload. |
| Defense Evasion | T1202 | T1202 | A startup script runs just before the system gets to the login screen via startup registry. |
| Defense Evasion | T1070.001 | T1070.001 | Clears the Event Viewer log files |
| Discovery | T1083 | T1083 | Searches for specific files and the directory related to its encryption |
| Discovery | T1018 | T1018 | Makes use of tools for network scans |
| Discovery | T1057 | T1057 | Discovers certain processes for process termination |
| Discovery | T1082 | T1082 | Identifies keyboard layout and other system information |
| Discovery | T1012 | T1012 | Queries certain registries as part of its routine |
| Discovery | T1063 | T1063 | Discovers security software for reconnaissance and termination |
| Lateral Movement | T1570 | T1570 | Can make use of RDP to transfer the ransomware or tools within the network |
| Lateral Movement | T1021.002 | T1021.002 | Drops a copy of the payload to the compromised AD and then create a service on the target machine to execute the copy of the payload |
| Collection | T1005 | T1005 | Might make use of RDP to manually search for valuable files or information |
| Command and Control | T1071 | T1071 | Uses http/s to communicate to its C&C; server |
| Exfiltration | T1567 | T1567 | DEWMODE web shell extracts list of available files from a MySQL database on the FTA and lists these files and corresponding their metadata. These will then be downloaded using the DEWMODE web shell. |
| Impact | T1486 | T1486 | Uses a combination of Salsa20, AES, and ECDH to encrypt the files and key |
| Impact | T1490 | T1490 | Deletes shadow copies |