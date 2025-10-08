#  Akira Ransomware TTP's

| TACTIC | TECHNIQUE | DETAILS |
|:---:|:---:|:---|
| Initial Access | Exploit Public-Facing Application (T1190) | Exploitation of vulnerabilities in internet-facing services/devices (e.g., Cisco VPNs without MFA). Notable CVEs: **CVE-2020-3259**, **CVE-2023-20269**. |
| Initial Access | External Remote Services (T1133) | Use of VPN/RDP and other remote access services, often with stolen or purchased credentials. |
| Initial Access | Phishing: Spearphishing Attachment (T1566.001) | Phishing emails with malicious attachments to obtain initial access. |
| Initial Access | Phishing: Spearphishing Link (T1566.002) | Phishing emails containing malicious links to deliver malware or harvest credentials. |
| Initial Access | Valid Accounts (T1078) | Use of valid credentials (e.g., VPN/domain accounts) for initial entry and re-entry. |
| Execution | Command and Scripting Interpreter (T1059) | Use of PowerShell, **cmd.exe**, **.bat** and Bash to execute payloads, automate lateral movement, and disable defenses. |
| Execution | Windows Management Instrumentation (T1047) | WMI used for remote execution and task automation. |
| Persistence | Create Account — Local (T1136.001) | Creation of new local admin accounts to maintain access. |
| Persistence | Create Account — Domain (T1136.002) | Creation of new domain/admin accounts (in some cases an account like **itadm**). |
| Persistence / C2 | Remote Access Software (T1219) | Deployment/abuse of legitimate tools (AnyDesk, Radmin, RustDesk, MobaXterm, DWAgent, Cloudflare Tunnel/Ngrok) for persistent remote access. |
| Discovery | Domain Trust Discovery (T1482) | Use of **Nltest**, **AdFind**, `net`, etc., to map AD trusts in the victim environment. |
| Discovery | Account Discovery (T1087) | Enumeration of users and groups within the domain. |
| Discovery | System Information Discovery (T1082) | Collection of system/process information (e.g., **PCHunter64**, **SharpHound**). |
| Discovery | Remote System Discovery (T1018) | Identification of remote hosts in the environment. |
| Discovery | System Network Configuration Discovery (T1016) | Scanning devices/networks to identify active remote services. |
| Discovery | Network Service Discovery (T1046) | Scanning for active network services/ports. |
| Discovery | Permission Groups Discovery (T1069) | Enumeration of permission groups. |
| Discovery | File and Directory Discovery (T1083) | Enumeration of files and directories. |
| Discovery | Process Discovery (T1057) | Observation of terminal activity and running processes. |
| Credential Access | Credential Dumping (T1003) | Credential dumping on compromised systems/in memory. |
| Credential Access | OS Credential Dumping: LSASS Memory (T1003.001) | Dumping LSASS to extract credentials. |
| Credential Access | OS Credential Dumping: Security Account Manager (T1003.002) | Credentials extracted from the SAM database. |
| Credential Access | Unsecured Credentials: Credentials in Files (T1552.001) | Capturing password hashes/creds stored in files (e.g., AD/backup artifacts). |
| Credential Access | Unsecured Credentials: Credentials in Registry (T1552.002) | Searching Windows Registry for insecurely stored credentials. |
| Credential Access | Steal Web Session Cookie (T1555.003) | Theft of browser session data (e.g., Chrome) to hijack sessions. |
| Defense Evasion | Impair Defenses: Disable or Modify Tools (T1562.001) | Disabling/modifying security software (e.g., PowerTool; driver abuse) to avoid detection. |
| Defense Evasion | Impair Defenses: Disable Windows Event Logging (T1562.002) | Disabling Windows Defender real-time monitoring/logging via native commands. |
| Defense Evasion | Modify Registry (T1112) | Registry changes for evasion/persistence. |
| Defense Evasion | Abuse Elevation Control Mechanism: Bypass UAC (T1548.002) | Use of `runas`/similar methods to execute with elevated privileges. |
| Lateral Movement | Remote Services: Remote Desktop Protocol (T1021.001) | Lateral movement via RDP and other remote services. |
| Lateral Movement | Lateral Tool Transfer (T1570) | Moving tools across hosts to facilitate further actions. |
| Collection | Archive Collected Data: Archive via Utility (T1560.001) | Rapid compression/staging of stolen data (e.g., WinRAR); notably fast on backup servers (e.g., Veeam). |
| Exfiltration | Exfiltration Over Web Service: Exfiltration to Cloud Storage (T1567.002) | Exfiltration to cloud services (e.g., **Rclone**, **MEGA**, **CloudZilla**, **WinSCP**). |
| Exfiltration | Exfiltration Over Alternate Protocol (T1048) | Data transfers over alternate protocols (e.g., SFTP/SSH, FTP). |
| Exfiltration | Transfer Data to Cloud Account (T1537) | Moving data into attacker-controlled cloud accounts. |
| Exfiltration | Exfiltration Over Other Network Medium *(as reported)* (T1567.001) | Use of **rclone** to exfiltrate data to attacker-controlled IPs (e.g., over port 22). |
| Command & Control | Web Service (T1071.004) | C2 and remote operations over web protocols; persistence via remote-access utilities. |
| Command & Control | Remote File Copy (T1105) | Copying/staging files (e.g., **rclone**) across hosts or to external infrastructure. |
| Command & Control | Remote Services (T1021) | Use of remote services and custom trojans (invoked via `cmd.exe`) to maintain access. |
| Impact | Data Encrypted for Impact (T1486) | Akira payload encrypts files (extensions **“.akira”**, **“.powerrangers”**). Observed algorithms include **ChaCha20/ChaCha8**; runtime **buildid** requirement present. |
| Impact | Service Stop (T1489) | Stopping services to enable uninterrupted encryption (e.g., backup/DB/AV). |
| Impact | Inhibit System Recovery (T1490) | Deleting Volume Shadow Copies via PowerShell/commands to hinder rapid restoration. |

