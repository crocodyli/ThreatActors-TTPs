| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Valid Accounts | T1078 | LockBit 3.0 actors obtain and abuse credentials of existing accounts as a means of gaining initial access. |
| Initial Access | Exploit External Remote Services | T1133 | LockBit 3.0 actors exploit RDP to gain access to victim networks. |
| Initial Access | Drive-by Compromise | T1189 | LockBit 3.0 actors gain access to a system through a user visiting a website over the normal course of browsing. |
| Initial Access | Exploit Public-Facing Application | T1190 | LockBit 3.0 actors exploit vulnerabilities in internet-facing systems to gain access to victims' systems. |
| Initial Access | Phishing | T1566 | LockBit 3.0 actors use phishing and spearphishing to gain access to victims' networks. |
| Execution | Command and Scripting Interpreter: Windows Command Shell | T1059.003 | LockBit affiliates use batch scripts to execute malicious commands. |
| Execution | System Services: Service Execution | T1569.002 | LockBit 3.0 uses PsExec to execute commands or payloads. |
| Execution | Software Deployment Tools | T1072 | LockBit 3.0 uses Chocolatey, a command-line package manager for Windows. |
| Persistence | Valid Accounts | T1078 | LockBit 3.0 uses a compromised user account to maintain persistence on the target network. |
| Persistence | Boot or Logon Autostart Execution | T1547 | LockBit 3.0 enables automatic logon for persistence. |
| Privilege Escalation | Abuse Elevation Control Mechanism | T1548 | LockBit affiliates may use ucmDccwCOM Method in UACMe, a Github collection of User Account Control (UAC) bypass techniques. |
| Privilege Escalation | Valid Accounts | T1078 | LockBit affiliates may use a compromised user account to escalate privileges on a victim's network. |
| Privilege Escalation | Domain Policy Modification: Group Policy Modification | T1484.001 | LockBit affiliates may create Group Policy for lateral movement and can force group policy updates. |
| Privilege Escalation | Boot or Logon Autostart Execution | T1547 | LockBit 3.0 enables automatic logon for privilege escalation. |
| Defense Evasion | Obfuscated Files or Information | T1027 | LockBit 3.0 will send encrypted host and bot information to its C2 servers. |
| Defense Evasion | Obfuscated Files or Information: Software Packing | T1027.002 | LockBit affiliates may perform software packing or virtual machine software protection to conceal their code. Blister Loader has been used for such purpose. |
| Defense Evasion | Impair Defenses: Disable or Modify Tools | T1562.001 | LockBit 3.0 affiliates use Blackstab, Defender Control, GMER, Pchunter, PowerTool, Process Hacker or TDSSKiller to disable EDR processes and services. LockBit 3.0 affiliates use Bat Armor to bypass the PowerShell execution Policy. LockBit affiliates may deploy a batch script, 123.bat, to disable and uninstall antivirus software. LockBit 3.0 may modify and/or disable security tools including EDR and antivirus to avoid possible detection of malware, tools and activities. |
| Defense Evasion | Indicator Removal: Clear Windows Event Logs | T1070.001 | LockBit executable clears the Windows Event Logs files. |
| Defense Evasion | Indicator Removal: File Deletion | T1070.004 | LockBit 3.0 will delete itself from the disk. |
| Defense Evasion | Execution Guardrails: Environmental Keying | T1480.001 | LockBit 3.0 will only decrypt the main component or continue to decrypt and/or decompress data if the correct password is entered. |
| Credential Access | Brute Force | T1110 | LockBit affiliates may leverage VPN or RDP brute force credentials as an initial access. |
| Credential Access | Credentials from Password Stores: Credentials from Web Browsers | T1555.003 | LockBit 3.0 actors use PasswordFox to recover passwords from Firefox Browser. |
| Credential Access | OS Credential Dumping | T1003.001 | LockBit 3.0 actors use ExtPassword or LostMyPassword to recover passwords from Windows systems. |
| Credential Access | OS Credential Dumping: LSASS Memory | T1003.001 | LockBit 3.0 uses Microsoft Sysinternals ProDump to dump the contents of LSASS.exe. |
| Discovery | Network Service Discovery | T1046 | LockBit 3.0 uses SoftPerfect Network Scanner to scan target networks. |
| Discovery | System Information Discovery | T1082 | LockBit 3.0 will enumerate system information to include hostname, host configuration, domain information, local drive configuration, remote shares, and mounted external storage devices. |
| Discovery | System Location Discovery: System Language Discovery | T1614.001 | LockBit 3.0 will not infect machines with language settings that match a defined exclusion list. |
| Lateral Movement | Remote Services: Remote Desktop Protocol | T1021.001 | LockBit 3.0 uses Splashtop remote-desktop software to facilitate lateral movement. |
| Lateral Movement | Remote Services: SMB/Windows Admin Shares | T1021.002 | LockBit affiliates may use Cobalt Strike and target SMB shares for lateral movement. |
| Collection | Archive Collected Data: Archive via Utility | T1560.001 | LockBit affiliates may use 7-zip to compress and/or encrypt collected data prior to exfiltration. |
| Command and Control | Application Layer Protocol: File Transfer Protocols | T1071.002 | LockBit 3.0 uses FileZilla for C2. |
| Command and Control | Application Layer Protocol: Web Protocols | T1071.001 | LockBit affiliates use ThunderShell as a remote access tool that communicates via HTTP requests. |
| Command and Control | Non-Application Layer Protocol | T1095 | LockBit affiliates use Ligolo to establish SOCK5 or TCP tunnels from a reverse connection. |
| Command and Control | Remote Access Software | T1219 | LockBit 3.0 actors use AnyDesk, Atera RMM, ScreenConnect or TeamViewer for C2. |
| Command and Control | Protocol Tunneling | T1572 | LockBit 3.0 uses Plink to automate SSH actions on Windows. |
| Exfiltration | Exfiltration Over Web Service | T1567 | LockBit 3.0 uses publicly available file sharing services to exfiltrate a target's data. |
| Exfiltration | Exfiltration Over Web Service: Exfiltration to Cloud Storage | T1567.002 | LockBit 3.0 actors use (1) rclone, an open source command line cloud storage manager to exfiltrate and (2) MEGA, a publicly available file sharing service for data exfiltration. |
| Exfiltration | Stealbit Custom Tool | TA0010 | LockBit 3.0 uses Stealbit, a custom exfiltration tool first used with LockBit 2.0, to steal data from a target network. |
| Impact | Data Destruction | T1485 | LockBit 3.0 deletes log files and empties the recycle bin. |
| Impact | Data Encrypted for Impact | T1486 | LockBit 3.0 encrypts data on target systems to interrupt availability to system and network resources. |
| Impact | Service Stop | T1489 | LockBit 3.0 terminates processes and services. |
| Impact | Inhibit System Recovery | T1490 | LockBit 3.0 deletes volume shadow copies residing on disk. |
| Impact | Defacement: Internal Defacement | T1491.001 | LockBit 3.0 changes the host system's wallpaper and icons to the LockBit 3.0 wallpaper and icons, respectively. |
