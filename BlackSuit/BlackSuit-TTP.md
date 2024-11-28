| TACTIC                          	| TECHNIQUE                                                                                                     	| DETAILS   	|
|:---:	|:---:	|:---:	|
| Resource   Development 	| Acquire Access   (T1650) 	| BlackSuit actors may   leverage brokers to gain initial access. 	|
| Initial Access 	| Remote Services:   Remote Desktop Protocol (T1021.001) 	| BlackSuit actors use   RDP compromise as a secondary initial access vector. 	|
| Initial Access 	| External Remote   Services (T1133) 	| BlackSuit actors gain   initial access through a variety of RMM software. 	|
| Initial Access 	| Exploit Public Facing   Application (T1190) 	| BlackSuit actors gain   initial access through public-facing applications. 	|
| Initial Access 	| Phishing (T1566) 	| BlackSuit criminals   often obtain initial access to victim networks through phishing. 	|
| Initial Access 	| Phishing: Spear   phishing Attachment (T1566.001) 	| BlackSuit agents have   used malicious PDF document attachments in phishing campaigns. 	|
| Initial Access 	| Phishing: Spear   phishing Link (T1566.002) 	| Actors gain initial   access through malvertising links via emails and public websites. 	|
| Privilege   Escalation 	| Valid   Accounts (T1078) 	| BlackSuit actors used   a legitimate administrator account to gain access privileges to the domain   controller. 	|
| Privilege   Escalation 	| Valid Accounts:   Domain Accounts (T1078.002) 	| BlackSuit actors used   encrypted files to create new administrator user accounts. 	|
| Defense   Evasion 	| Remote   Services: Remote Desktop Protocol (T1021.001) 	| BlackSuit actors used   valid accounts to move laterally through the domain controller using RDP. 	|
| Defense   Evasion 	| Indicator Removal:   Clear Windows Event Logs (T1070.001) 	| BlackSuit actors   deleted shadow files and system and security logs after exfiltration. 	|
| Defense   Evasion 	| Automated Collection   (T1119) 	| BlackSuit actors used   registry keys to extract and collect files automatically. 	|
| Defense   Evasion 	| Domain Policy   Modification: Group Policy Modification (T1484.001) 	| BlackSuit actors   modified Group Policy Objects to bypass antivirus protocols. 	|
| Defense   Evasion 	| Impair Defenses:   Disable or Modify Tools (T1562.001) 	| BlackSuit actors   disabled antivirus protocols. 	|
| Command and   Control 	| Ingress Tool Transfer   (T1105) 	| BlackSuit actors used   C2 infrastructure to download various tools. 	|
| Command and   Control 	| Protocol Tunneling   (T1572) 	| BlackSuit actors used   an encrypted SSH tunnel to communicate within the C2 infrastructure. 	|
| Impact 	| Data Encrypted for   Impact (T1486) 	| BlackSuit actors   encrypted data to identify which files were being used or locked by other   applications. 	|
| Impact 	| Inhibit System   Recovery (T1490) 	| BlackSuit actors   encrypted data to identify which files were being used or locked by other   applications. 	|
