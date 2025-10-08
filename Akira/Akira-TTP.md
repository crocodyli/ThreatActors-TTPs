# Akira Ransomware — Consolidated TTPs (2023–2025)

The table below consolidates and groups all **Tactics, Techniques, and Procedures (TTPs)** observed in **Akira ransomware operations** from its emergence in 2023 through 2025.  
It merges public reporting, incident analyses, and campaign evolution (e.g., the "megazord" variant, Linux/ESXi expansion, and RaaS operations).


| **TACTIC** | **TECHNIQUE** | **DETAILS** |
|:---:|:---:|:---|
| **Initial Access** | Exploit Public-Facing Application (T1190) | Exploitation of vulnerabilities in exposed VPNs and edge devices — **Cisco ASA/FTD**, **SonicWall SSL VPN**, etc. Known CVEs include **CVE-2020-3259**, **CVE-2023-20269**, and **CVE-2024-40766**. |
| **Initial Access** | External Remote Services (T1133) | Use of **VPN** or **RDP** connections with stolen credentials; exploitation of misconfigured remote access portals. |
| **Initial Access** | Valid Accounts (T1078 / T1078.002) | Reuse of stolen credentials from prior breaches (including MFA-enabled accounts) or inactive/third-party accounts for initial access and re-entry. |
| **Initial Access** | Phishing: Spearphishing Attachment (T1566.001) | Malicious email attachments delivering loaders or credential stealers used for lateral infection. |
| **Initial Access** | Phishing: Spearphishing Link (T1566.002) | Phishing links directing victims to download infected files or credential-harvesting sites. |
| **Initial Access** | Credentials / RDP (Operational Vector) | Login via compromised VPN or RDP accounts; observed use of “ghost” accounts (inactive vendors or suppliers). |
| **Execution** | Command and Scripting Interpreter (T1059) | Use of **PowerShell**, **cmd.exe**, and **Bash** to execute payloads, disable defenses, automate lateral movement, and deploy encryption binaries. |
| **Execution** | Windows Management Instrumentation (T1047) | **WMI** leveraged for remote command execution and persistence tasks. |
| **Execution** | Remote Access Software (T1219) | Abuse of legitimate tools — **AnyDesk**, **Radmin**, **RustDesk**, **ScreenConnect**, **MobaXterm**, **Cloudflare Tunnel**, **Ngrok** — for remote control and payload deployment. |
| **Persistence** | Create Account — Local (T1136.001) | Creation of new local admin accounts to maintain post-compromise access. |
| **Persistence** | Create Account — Domain (T1136.002) | Addition of privileged accounts (e.g., *itadm*) to maintain access in Active Directory environments. |
| **Persistence** | Registry Modifications (T1112) | Modification of registry keys like `UserList` and `DisableRestrictedAdmin` to hide accounts or maintain elevated access. |
| **Privilege Escalation** | Credential Dumping (T1003 / T1003.001 / T1003.002) | Theft of credentials from **LSASS**, **SAM**, or **memory dumps** using tools like **Mimikatz**, **LaZagne**, and **DonPAPI**. |
| **Privilege Escalation** | Kerberoasting (T1558.003 / T1550) | Abuse of the **Kerberos** protocol to obtain service-account hashes for lateral escalation. |
| **Defense Evasion** | Impair Defenses: Disable or Modify Tools (T1562.001) | Disabling AV/EDR using **PowerTool**, **Terminator.exe**, or **ToolPow**; exploitation of vulnerable drivers (**BYOVD**). |
| **Defense Evasion** | Impair Defenses: Disable Windows Event Logging (T1562.002) | Turning off Windows Defender and logging through native PowerShell and registry edits. |
| **Defense Evasion** | Modify Registry (T1112) | Registry changes for evasion, persistence, or disabling protection features. |
| **Defense Evasion** | Clear Event Logs (T1070.001) | Deletion of Windows event logs post-compromise to hide evidence. |
| **Defense Evasion** | Abuse Elevation Control Mechanism: Bypass UAC (T1548.002) | Use of `runas` and custom scripts to elevate privileges without triggering UAC alerts. |
| **Defense Evasion** | Living-off-the-Land Binaries (T1218 / T1059) | Use of native Windows binaries such as **certutil**, **rundll32**, or **wmic** to execute and persist without dropping additional files. |
| **Discovery** | Domain Trust Discovery (T1482) | Enumeration of Active Directory trust relationships using **Nltest**, **AdFind**, and **SharpHound**. |
| **Discovery** | Network & System Discovery (T1016 / T1018 / T1046 / T1082) | Network scanning and system mapping with **Advanced IP Scanner**, **LANsweeper**, **Masscan**, and **PCHunter64**. |
| **Discovery** | Account Discovery (T1087) | Identification of domain users, admin accounts, and permission groups. |
| **Discovery** | File and Directory Discovery (T1083) | Enumeration of files and directories for high-value data (HR, Finance, Legal). |
| **Discovery** | Process Discovery (T1057) | Enumeration of running processes and monitoring for backup or EDR services. |
| **Lateral Movement** | Remote Services: RDP / SSH (T1021.001 / T1021.004) | Use of **RDP**, **SSH**, and **Impacket** modules (**wmiexec.py**, **atexec.py**) for remote execution. |
| **Lateral Movement** | Lateral Tool Transfer (T1570) | Moving tools and payloads between systems for internal propagation. |
| **Lateral Movement** | Rapid Propagation (Operational Behavior) | Transition from initial access to encryption within **4 hours** observed in several 2025 incidents. |
| **Collection** | Archive Collected Data (T1560 / T1560.001) | Compression and staging of data using **7zip**, **WinRAR**, or **zip utilities** before exfiltration. |
| **Exfiltration** | Exfiltration Over Web Service (T1567.002) | Data exfiltration via **Rclone**, **WinSCP**, **FileZilla**, and **CloudZilla** to attacker-controlled storage. |
| **Exfiltration** | Exfiltration Over Alternate Protocol (T1048) | Exfiltration via **SFTP**, **SSH**, or **FTP** channels outside standard HTTP/S. |
| **Exfiltration** | Transfer Data to Cloud Account (T1537) | Upload of archives to cloud storage or attacker-managed infrastructure. |
| **Command & Control** | Web Service / Cloud Tunnel (T1071.004 / T1219) | Persistent command-and-control via **Cloudflare Tunnel**, **Ngrok**, or remote admin tools. |
| **Command & Control** | Remote File Copy (T1105) | File staging and transfer using **rclone**, **scp**, or similar utilities. |
| **Impact** | Data Encrypted for Impact (T1486) | Hybrid encryption combining **ChaCha20** and **RSA**; file extensions **“.akira”**, **“.powerrangers”**, or **“.powerrangers2”** observed. |
| **Impact** | Service Stop (T1489) | Termination of backup, database, and security services using **PsExec** or **cmd**. |
| **Impact** | Inhibit System Recovery (T1490) | Deletion of **Volume Shadow Copies** and restoration points via PowerShell. |
| **Impact** | Linux / ESXi Variants | Deployment of **Akira_v2** targeting **Linux** and **VMware ESXi** environments — focused on virtual infrastructure encryption. |
| **Impact** | Data Theft / Double Extortion | Theft and publication threats on **Tor leak sites**; exfiltrated data used to increase ransom pressure. |
| **Operational Model** | Ransomware-as-a-Service (RaaS) | Affiliate-based structure: core developers provide payloads and leak infrastructure; affiliates conduct intrusions. |
| **Operational Behavior** | Continuous Adaptation (2023–2025) | Shift from **C++** to **Rust** builds, obfuscation improvements, cross-platform expansion, and faster intrusion-to-encryption timelines. |


### Notes

- **2023:** Initial C++ build; decryptor released by Avast after flawed implementation.  
- **2024:** Transition to Rust-based “megazord” variant; adoption of `.powerrangers` extension.  
- **2025:** Targeting of **SonicWall SSL VPNs**, abuse of stolen credentials, faster operations, and use of hybrid encryption (ChaCha20 + RSA).  

Akira’s evolution demonstrates a clear **move from opportunistic exploitation to rapid, credential-driven edge intrusions**, with growing sophistication in defense evasion and cross-platform capabilities.
