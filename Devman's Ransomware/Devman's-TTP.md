| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
|  | Initial Access | T1210 - Exploitation of Remote Services | Use of the MS17-010 (EternalBlue) exploit to |
|  | Execution | T1059.001 - PowerShell | Execution of PowerShell commands to extract files |
|  | Execution | T1203 - Exploitation for Client Execution | Command execution using MS17-010 via Metasploit |
|  | Persistence | T1078 - Valid Accounts | Maintaining access with created administrator account |
|  | Privilege Escalation | T1068 - Exploitation for Privilege Escalation | Escalation to SYSTEM privileges |
|  | Defense Evasion | T1036 - Masquerading | Use of an innocuous name for the ransomware payload (iamdidy.e |
|  | Defense Evasion | T1562.001 - Disable or Modify Tools | No security tools detected on target systems |
|  | Credential Access | T1003 - OS Credential Dumping | Implied by acquisition and use of admin credentials |
|  | Discovery | T1018 - Remote System Discovery | Network mapping using CrackMapExec |
|  | Discovery | T1046 - Network Service Scanning | Scanning IP ranges and SMB services |
|  | Discovery | T1082 - System Information Discovery | Using tasklist and whoami to collect system info |
|  | Lateral Movement | T1021.002 - SMB/Windows Admin Shares | Lateral movement through SMB confirmed by CME |
|  | Collection | T1005 - Data from Local System | File extraction from local system using PowerShell |
|  | Exfiltration | T1041 - Exfiltration Over C2 Channel | Downloading files like notepad.exe via smbclient |
|  | Impact | T1486 - Data Encrypted for Impact | Encryption of files with .devman extension (Changed at the operator's request) |
|  | Impact | T1490 - Inhibit System Recovery | Disabling backups and system recovery |
|  | Impact | T1489 - Service Stop | Halting operations and rendering systems unavailable |
|  | Impact | T1491 - Defacement | Ransom notes (ransom.txt) deployed across infected systems |