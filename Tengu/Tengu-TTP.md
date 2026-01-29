# Tengu — TTPs

Tengu uses .NET binaries (approximately 534KB) and extensively abuses **LOLBins** to avoid antivirus signatures.

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Valid Accounts | T1078 | Abuse of valid accounts (obtained via infostealers or IABs). |
| Execution | Command and Scripting Interpreter: PowerShell | T1059.001 | Intensive use of PowerShell for command and script execution. |
| Execution | Command and Scripting Interpreter: Windows Command Shell | T1059.003 | Use of CMD for command execution. |
| Persistence | Scheduled Task/Job: Scheduled Task | T1053.005 | Creation of Scheduled Tasks that run with SYSTEM privileges to ensure re-infection. |
| Defense Evasion | System Binary Proxy Execution | T1218 | Use of rundll32.exe for proxy execution. |
| Defense Evasion | Indicator Removal | T1070 | Cleaning of event logs. |
| Lateral Movement | Remote Services: Remote Desktop Protocol | T1021.001 | Lateral movement via RDP after compromising administrative credentials. |
| Exfiltration | Exfiltration Over C2 Channel | T1041 | Data exfiltration via C2 channels before starting the encryption routine. |
| Impact | Data Encrypted for Impact | T1486 | File encryption. |
| Impact | Inhibit System Recovery | T1490 | Deletion of Shadow Copies to prevent local recovery. |
