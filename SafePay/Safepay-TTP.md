| TACTIC | TECHNIQUE | DETAILS |
|:---:|:---:|:---:|
| Initial Access    | Remote Desktop Protocol (T1076)        | SafePay gains access via exposed or vulnerable RDP services.                                                    |
| Initial Access    | External Remote Services (T1133)       | SafePay may gain initial access through various remote management software.                                      |
| Execution         | Command and Scripting Interpreter (T1059) | SafePay uses PowerShell to execute malicious commands and scripts during attacks.                                 |
| Persistence       | Application Layer Protocol (T1071)     | SafePay maintains access using valid credentials after initial access.                                          |
| Privilege Escalation | Abuse Elevation Control Mechanism (T1548.002) | SafePay bypasses UAC using a COM object (CMSTPLUA), leveraging `DllHost.exe` for elevated privileges.           |
| Defense Evasion   | Disabling Security Tools (T1089)       | SafePay disables Windows Defender settings to evade detection and remain undetected.                            |
| Defense Evasion   | System Binary Proxy Execution (T1202)  | SafePay uses `Regsvr32.exe` to execute malicious DLLs and avoid detection.                                     |
| Credential Access | Credential Dumping (T1003)            | SafePay harvests user credentials from compromised systems to facilitate lateral movement.                        |
| Discovery         | Network Share Discovery (T1135)        | SafePay conducts reconnaissance to discover accessible network shares within the targeted environment.          |
| Collection        | Archive Collected Data (T1560.001)    | SafePay utilizes WinRAR to archive sensitive data before exfiltration.                                         |
| Exfiltration      | Exfiltration Over Alternative Protocol (T1048) | SafePay uses FTP (via FileZilla) to exfiltrate data from compromised systems.                                   |
| Impact            | Data Encrypted for Impact (T1486)     | SafePay encrypts files on network shares to extort ransom from victims.                                        |
| Resource Development | Acquire Access (T1650)               | SafePay may leverage brokers to gain initial access, similar to tactics observed in other ransomware groups.    |



## Mapped by: Sudesh Yalavarthi