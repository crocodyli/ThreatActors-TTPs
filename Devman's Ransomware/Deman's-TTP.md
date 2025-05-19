| Tactic 	| Tactic 	| Technique (ID - Name) 	| Details 	|
|:---:	|:---:	|:---:	|:---:	|
| TA0001 	| Initial Access 	| T1210 - Exploitation of Remote Services 	| Use of the MS17-010 (EternalBlue) exploit to 	|
| TA0001 	| Initial Access 	| T1078 - Valid Accounts 	| Use of valid credentials (malharbi) to access systems 	|
| TA0002 	| Execution 	| T1059.001 - PowerShell 	| Execution of PowerShell commands to extract files 	|
| TA0002 	| Execution 	| T1203 - Exploitation for Client Execution 	| Command execution using MS17-010 via Metasploit 	|
| TA0003 	| Persistence 	| T1078 - Valid Accounts 	| Maintaining access with created administrator account 	|
| TA0004 	| Privilege Escalation 	| T1068 - Exploitation for Privilege Escalation 	| Escalation to SYSTEM privileges 	|
| TA0005 	| Defense Evasion 	| T1036 - Masquerading 	| Use of an innocuous name for the ransomware payload (iamdidy.e 	|
| TA0005 	| Defense Evasion 	| T1562.001 - Disable or Modify Tools 	| No security tools detected on target systems 	|
| TA0006 	| Credential Access 	| T1003 - OS Credential Dumping 	| Implied by acquisition and use of admin credentials 	|
| TA0007 	| Discovery 	| T1018 - Remote System Discovery 	| Network mapping using CrackMapExec 	|
| TA0007 	| Discovery 	| T1046 - Network Service Scanning 	| Scanning IP ranges and SMB services 	|
| TA0007 	| Discovery 	| T1082 - System Information Discovery 	| Using tasklist and whoami to collect system info 	|
| TA0008 	| Lateral Movement 	| T1021.002 - SMB/Windows Admin Shares 	| Lateral movement through SMB confirmed by CME 	|
| TA0009 	| Collection 	| T1005 - Data from Local System 	| File extraction from local system using PowerShell 	|
| TA0010 	| Exfiltration 	| T1041 - Exfiltration Over C2 Channel 	| Downloading files like notepad.exe via smbclient 	|
| TA0040 	| Impact 	| T1486 - Data Encrypted for Impact 	| Encryption of files with .apos extension 	|
| TA0040 	| Impact 	| T1490 - Inhibit System Recovery 	| Disabling backups and system recovery 	|
| TA0040 	| Impact 	| T1489 - Service Stop 	| Halting operations and rendering systems unavailable 	|
| TA0040 	| Impact 	| T1491 - Defacement 	| Ransom notes (ransom.txt) deployed across infected systems 	|
