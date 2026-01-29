# 0apt — TTPs

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Exploit Public-Facing Application | T1190 | Exploitation of internet-facing applications (focus on firewalls and VPNs). |
| Execution | Native API | T1106 | Direct system calls to bypass EDRs based on API hooks. |
| Persistence | Create or Modify System Process: Systemd Service | T1543.002 | Creation of fake services on Linux systems (systemd). |
| Defense Evasion | Debugger Evasion | T1622 | The 0apt payload contains "useless math" loops to delay sandbox analysis. |
| Discovery | Network Service Scanning | T1046 | Use of custom tools that mimic legitimate monitoring traffic. |
| Exfiltration | Exfiltration Over Web Service: Exfiltration to Cloud Storage | T1567.002 | Sending data via HTTPS tunnels to legitimate AWS S3 instances. |
