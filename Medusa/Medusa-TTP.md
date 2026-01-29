| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Valid Accounts | T1078 | Initial access   through brute force or compromised credentials of legitimate RDP accounts. |
| Initial Access | Phishing | T1566 | Initial access   through phishing email attachments. |
| Initial Access | External Remote   Services | T1133 | Accesses the victim's   network via an RDP service. |
| Execution | Command and Scripting   Interpreter | T1059 | Uses a series of   Windows commands, such as bcdedit.exe and vssadmin. |
| Execution | Windows Management   Instrumentation | T1047 | Uses a series of   Windows commands, such as bcdedit.exe and vssadmin. |
| Discovery | File and Directory   Discovery | T1083 | Queries specified   files, folders, and file extensions. |
| Discovery | Network Share   Discovery | T1135 | Enumerates network   shares. |
| Exfiltration | Exfiltration Over C2   Channel | T1045 | Transfers data to   attacker-controlled servers via an existing command-and-control (C2) channel. |
| Exfiltration | Exfiltration Over Web   Service | T1567 | Exfiltrates data   using web services like cloud services (e.g., Google Drive, Dropbox, etc.). |
| Exfiltration | Exfiltration Over   Alternative Protocol | T1048 | Exfiltrates data   using alternative protocols, such as FTP/SFTP, to avoid detection by   traditional methods. |
| Impact | Inhibit System   Recovery | T1490 | Deletes shadow copies   and disables the Windows System Restore feature. |
| Impact | Service Stop | T1489 | Terminates processes   and services related to database servers, email servers, and backups. |
| Impact | Data Encrypted for   Impact | T1486 | Uses the AES-256   algorithm to encrypt files on the computer. |
| Defense   Evasion | Impair Defenses | T1562 | Employs Windows   Management Instrumentation (WMIC) command-line to delete shadow copies. |
| Defense   Evasion | Disable or Modify   Tools | T1562.001 | Terminates services   or processes related to antivirus/security tools. |
| Defense   Evasion | Safe Mode Boot | T1562.009 | Abuses Safe Mode to   evade endpoint detection. |
| Credential   Access | Brute Force | T1110 | Uses brute force on   local RDP account passwords. |
| Lateral   Movement | Remote Services | T1021 | Uses remote services   for login and lateral movement via RDP and SMB. |
| Command And   Control | Ingress Tool Transfer | T1105 | Uses certutil to   download malicious files. |