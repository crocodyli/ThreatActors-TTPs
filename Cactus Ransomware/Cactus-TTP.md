| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Exploit Public-Facing   Application | T1190 | The group exploits vulnerabilities in VPN applications |
| Execution | Scheduled Task/Job: Scheduled Task | T1053.005 | The group uses task scheduling for file execution for C2 communication and uses ransomware payload persistence. |
| Execution | Software Deployment Tools | T1072 | Actors attempt to gain access and use a set of third-party software installed on the network for lateral movement. |
| Persistence | Create Account | T1136 | The group creates a service/system account to launch the ransomware. |
| Defense Evasion | Disable or Modify   Tools | T1562.001 | The group uses modification and disabling of security tools to avoid possible malware and access detection. |
| Defense Evasion | Obfuscated Files or Infomation | T1027 | The group uses file obfuscation techniques to avoid detection by defenses. |
| Defense Evasion | Obfuscated Files or   Infomation: Software Packing | T1027.002 | Actors use packing in ransomware payload to avoid detection by defenses. |
| Credential Access | Credentials from Web   Browsers | T1555.003 | The group searches for key files from users' browsers to locate stored passwords to proceed with the attack and access other accounts. |
| Credential Access | OS Credential Dumping | T1003.001 | The group performs LSASS memory dump to identify credentials. |
| Discovery | System Network   Connections Discovery | T1049 | Actors use tools to scan the organization's infrastructure systems. |
| Discovery | Account Discovery: Domain Account | T1087.002 | Actors use scripts to identify domain accounts of connected users through Windows event logs. |
| Discovery | Remote System   Discovery | T1018 | Actors attempt to obtain a list of other systems, hosts, IPs, and any other identifier for lateral movement. |
| Discovery | Account Discovery | T1087 | Actors attempt to obtain a list of accounts, user names, and valid email addresses for later access. |
| Lateral Movement | Remote Services: SSH | T1021.004 | The group uses initial access to set up an SSH tunnel to C2. |
| Lateral Movement | Remote Desktop Protocol | T1021.001 | Cactus actors use valid accounts to log into devices via RDP. |
| Lateral Movement | Lateral Tool Transfer | T1570 | Actors use tools or other files between systems to prepare files and encrypt data. |
| Command and Control | Remote Access Software | T1219 | Actors use RDP connection to access other devices on the internal network. |
| Command and Control | Proxy | T1090 | Actors use connection proxy to route network traffic between systems to avoid detection by security solutions. |
| Exfiltration | Exfiltration to Cloud   Storage | T1567.002 | Actors exfiltrate data to a cloud storage service through tools such as Rclone and others. |
| Impact | Data Encrypted for Impact | T1486 | Actors use ransomware payload to encrypt data and change extensions. |
| Resource Development | Malvertising | T1538.008 | The threat actor was identified by Microsoft as responsible for the Danabot campaign via malvertising for final delivery of Ransomware Cactus. |