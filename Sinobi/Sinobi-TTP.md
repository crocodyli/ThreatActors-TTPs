# Sinobi — TTPs

Sinobi stands out for using **Living-off-the-Land (LotL)** techniques, abusing legitimate system tools to go undetected.

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Exploit Public-Facing Application | T1190 | Exploitation of vulnerabilities in VPNs (SonicWall). |
| Initial Access | Valid Accounts | T1078 | Use of valid credentials from MSPs (Managed Service Providers). |
| Execution | Command and Scripting Interpreter: PowerShell | T1059.001 | Heavy use of PowerShell for script and in-memory command execution. |
| Persistence | Create or Modify System Process: Windows Service | T1543.003 | Creation or modification of Windows services to ensure malware restart. |
| Defense Evasion | Impair Defenses: Disable or Modify Tools | T1562.001 | Active disabling of EDR solutions (such as VMware Carbon Black). |
| Defense Evasion | Indicator Removal | T1070 | Removal of event logs. |
| Lateral Movement | Remote Services: Remote Desktop Protocol | T1021.001 | Use of RDP to navigate between servers after privilege escalation. |
| Exfiltration | Exfiltration Over Web Service: Exfiltration to Cloud Storage | T1567.002 | Use of Rclone tool to send data to public cloud providers before encryption. |
| Impact | Data Encrypted for Impact | T1486 | Data encryption via AES-128-CTR and Curve-25519, adding the .SINOBI extension. |
| Impact | Inhibit System Recovery | T1490 | Deletion of Shadow Copies via vssadmin.exe. |
