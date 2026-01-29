| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Persistence | Create Account | T1136 | The threat actor using the 3AM ransomware performed account creation to ensure persistence. |
| Privilege Escalation | Service Execution | T1543.003 | The threat actor used PsExec to take advantage of a Windows service to escalate from administrator privileges to SYSTEM. |
| Defense Evasion | Disable or Modify System Firewall Settings | T1562.004 | The threat actor uses commands to set the discovery policy of other hosts on the network, altering the Firewall policy. |
| Defense Evasion | Clear Windows Event Logs | T1070.001 | The executable clears Windows event logs after its execution. |
| Discovery | Network Share Discovery | T1135 | The threat actor executed reconnaissance commands like "whoami, netstat, quser, net view, and net share" to enumerate other servers. |
| Discovery | Group Policy Discovery | T1615 | The threat actor used commands like "gpresult" to dump applied policy settings on the computer for a user (Group Policy). |
| Discovery | Remote System Discovery | T1018 | Utilizes Advanced IP Scanner and MASSCAN to discover remote systems. |
| Exfiltration | Exfiltration Over Alternative Protocol | T1048 | The threat actor used the "Wput" tool to exfiltrate files from the victim to their own server via FTP. |
| Impact | Inhibit System Recovery | T1490 | The 3AM ransomware deletes volume shadow copies on the disk and backups through the commands presented in the analysis. |
| Impact | Data Encrypted for Impact | T1486 | The ransomware encrypts files and appends the ".threeamtime" extension after encryption. |