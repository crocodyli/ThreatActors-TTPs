# MITRE ATT&CK Matrix – 0mega Ransomware
| **TACTIC** | **TECHNIQUE (ID)** | **DETAILS** |
|---|---|---|
| Initial Access | `T1078` — Valid Accounts | Access was obtained through the compromise of global Microsoft SaaS administrator accounts that were weakly protected. |
| Privilege Escalation | `T1136` — Create Account: Cloud Account | After gaining initial access, the group created a new user in Active Directory (AD) named **"0mega"** with multiple administrator roles (e.g., Global Administrator, SharePoint Administrator) to maintain maximum control. |
| Defense Evasion | `T1531` — Account Access Removal | The group systematically deleted over 220 corporate administrator accounts within a two-hour period, impairing the victim’s ability to respond and recover. |
| Collection | `T1119` — Automated Collection | The group collected sensitive data using the obtained permissions. |
| Exfiltration | `T1041` — Exfiltration Over C2 Channel | Data was exfiltrated from environments such as the victim’s SharePoint, consistent with a double extortion tactic. |
| Impact | `T1486` — Data Encrypted for Impact | The attack used AES-256 or RSA encryption on critical files after network mapping, blocking legitimate access. In some cases, the focus was solely on exfiltration and extortion without encryption. |
| Impact | `T1490` — Inhibit System Recovery | The ransomware searched for and disabled connected or online backups to prevent quick data recovery without paying the ransom. |
