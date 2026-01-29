# Mapped by: carlosadrianosj

## Lockbit

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Execution | T1559.001 | T1559.001 | Used for deleting volume shadow copies |
| Execution | T1106 | T1106 | Copious use of Windows Native API calls / |
| Execution | T1047 | T1047 | Used for deleting volume shadow copies / |
| Persistence | T1547.001 | T1547.001 | If started in safe mode, sets registry to start on next normal boot. |
| Privilege Escalation | T1134.001 | T1134.001 | Starts processes with known token with the purpose of duplicating tokens. |
| Defense Evasion | T1562.001 | T1562.001 | Stops and deletes Windows Security Services |
| Defense Evasion | T1562.002 | T1562.002 | Stops and deletes service responsible for event logging |
| Defense Evasion | T1562.004 | T1562.004 | Stops and deletes service for Windows Firewall. |
| Defense Evasion | T1562.009 | T1562.009 | Changes behavior if booted in safe mode. / |
| Defense Evasion | T1078.001 | T1078.001 | Attempts to login with default admin credentials |
| Discovery | T1083 | T1083 | Traverses mounted disks and file system |
| Discovery | T1135 | T1135 | Traverses all shared network resources |
| Discovery | T1120 | T1120 | Locates removable storage devices |
| Discovery | T1057 | T1057 | Looks for specific processes to stop |
| Discovery | T1018 | T1018 | Locates domain controller and DNS server / |
| Discovery | T1082 | T1082 | Gets specific information about the operating system |
| Lateral Movement | T1021.002 | T1021.002 | User of valid accounts to interact with remote network shares/ |
| Command and Control | T1071.001 | T1071.001 | Uses HTTP to communicate with C2 |
| Command and Control | T1573 | T1573 | TLS 1.2 |
| Exfiltration | T1041 | T1041 | Sends basic system information in POST request |
| Impact | `T1485 | T1485 | Recycle bin and shadow copies are deleted/ |
| Impact | T1486 | T1486 | Ransomware |
| Impact | T1491.001 | T1491.001 | Desktop changed |