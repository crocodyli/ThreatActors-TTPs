# Vice Society

## Overview

Vice Society is an intrusion, exfiltration, and extortion ransomware group that first appeared in summer 2021. Unlike many ransomware-as-a-service (RaaS) operators, Vice Society does not use a ransomware variant of unique origin. Instead, the actors deploy forks of pre-existing ransomware families including HelloKitty (FiveHands) and Zeppelin ransomware purchased from dark web marketplaces.

The group is known for disproportionately targeting the **education sector** (particularly K-12 institutions) and **healthcare organisations** across the United States and Europe. Vice Society employs double extortion tactics, threatening to publish stolen data on their leak site if ransom demands are not met.

## Aliases

- DEV-0832 (Microsoft)
- Vanilla Tempest (Microsoft)

## Target Sectors

- Education (K-12, Universities) - ~40% of victims
- Healthcare
- State and Local Government
- Manufacturing

## TTPs (MITRE ATT&CK)

### Initial Access
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1190 | Exploit Public-Facing Application | Exploits vulnerabilities in internet-facing applications including PrintNightmare (CVE-2021-34527) |
| T1078 | Valid Accounts | Uses compromised credentials for initial access |
| T1133 | External Remote Services | Leverages exposed RDP and VPN services |

### Execution
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1059.001 | PowerShell | Uses PowerShell scripts for reconnaissance, data collection, and exfiltration |
| T1059.003 | Windows Command Shell | Executes commands via cmd.exe |
| T1047 | Windows Management Instrumentation | Uses WMI for remote execution and reconnaissance |

### Persistence
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1547.001 | Registry Run Keys / Startup Folder | Zeppelin ransomware adds itself to Registry Run Key (HKEY_CURRENT_USER) |
| T1543.003 | Windows Service | Installs malicious services for persistence |

### Privilege Escalation
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1068 | Exploitation for Privilege Escalation | Exploits PrintNightmare (CVE-2021-34527) for privilege escalation |

### Defence Evasion
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1070.001 | Clear Windows Event Logs | Deletes Windows event logs to hinder forensic analysis |
| T1070.004 | File Deletion | Removes tools and evidence after use |
| T1562.001 | Disable or Modify Tools | Disables security tools and EDR agents |

### Credential Access
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1003.003 | NTDS | Dumps NTDS.dit via Volume Shadow Copy for credential harvesting |
| T1555.003 | Credentials from Web Browsers | Collects credentials stored in browsers using PowerShell scripts |

### Discovery
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1018 | Remote System Discovery | Uses network scanning tools to identify targets |
| T1082 | System Information Discovery | Gathers system information for targeting |
| T1083 | File and Directory Discovery | Identifies valuable data for exfiltration |
| T1087 | Account Discovery | Enumerates domain accounts |
| T1046 | Network Service Discovery | Uses Advanced Port Scanner for network reconnaissance |

### Lateral Movement
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1021.001 | Remote Desktop Protocol | Uses RDP for lateral movement |
| T1021.002 | SMB/Windows Admin Shares | Uses PsExec over SMB for execution on remote hosts |
| T1021.004 | SSH | Uses WinSCP for file transfer to Linux/ESXi hosts |

### Collection
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1005 | Data from Local System | Collects sensitive files from compromised systems |
| T1039 | Data from Network Shared Drive | Targets network shares for valuable data |
| T1119 | Automated Collection | Uses custom PowerShell scripts (w1.ps1) for automated data gathering |

### Command and Control
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1071.001 | Web Protocols | Uses HTTP/HTTPS for C2 communications |
| T1090.003 | Multi-hop Proxy | Uses SystemBC with TOR for anonymised C2 |
| T1105 | Ingress Tool Transfer | Downloads additional tools to compromised systems |

### Exfiltration
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1041 | Exfiltration Over C2 Channel | Exfiltrates data over C2 infrastructure |
| T1567 | Exfiltration Over Web Service | Uses custom PowerShell scripts to exfiltrate via HTTP POST requests |

### Impact
| Technique ID | Technique Name | Description |
|--------------|----------------|-------------|
| T1486 | Data Encrypted for Impact | Deploys HelloKitty (Linux/ESXi) and Zeppelin (Windows) ransomware |
| T1490 | Inhibit System Recovery | Deletes Volume Shadow Copies to prevent recovery |
| T1489 | Service Stop | Stops critical services before encryption |

## Tools Used

- **SystemBC** - RAT and SOCKS5 proxy with TOR support for C2
- **Cobalt Strike** - Post-exploitation framework for lateral movement
- **PowerShell Empire** - PowerShell-based post-exploitation agent
- **PsExec** - Remote execution tool for ransomware deployment
- **Mimikatz** - Credential harvesting
- **Advanced Port Scanner** - Network reconnaissance
- **WinSCP** - File transfer to Linux/ESXi hosts
- **SessionGopher** - PowerShell script for harvesting remote session credentials
- **Custom Go DLLs** - Proprietary backdoors with proxy functionality

## Ransomware Variants

- **HelloKitty (FiveHands)** - Used for Linux/ESXi host encryption
- **Zeppelin** - Used for Windows host encryption

## CVEs Exploited

| CVE | Description |
|-----|-------------|
| CVE-2021-34527 | PrintNightmare - Windows Print Spooler Remote Code Execution |

## Notable Attacks

- **Los Angeles Unified School District (LAUSD)** - September 2022 - Second largest school district in the US
- **Linn-Mar Community School District** - August 2022 - Iowa K-12 district
- **Medical University of Innsbruck** - June 2022 - Affected 3,400 students and 2,200 employees
- **Eskenazi Health Center** - 2021 - Healthcare organisation in Indiana
- **United Health Centers** - September 2021 - California healthcare provider

## History

| Date | Event |
|------|-------|
| June 2021 | Vice Society first observed using HelloKitty ransomware with .v-society extension |
| August 2021 | Exploited PrintNightmare vulnerability (CVE-2021-34527) |
| 2021-2022 | Adopted Zeppelin ransomware for Windows encryption |
| September 2022 | Joint FBI/CISA/MS-ISAC advisory (AA22-249A) issued |
| 2023 | Unit 42 identified custom PowerShell exfiltration script (w1.ps1) |
| 2023 | Group activity declined; some researchers link operators to Rhysida emergence |

## Detection Opportunities

- Monitor for Volume Shadow Copy deletion commands
- Alert on NTDS.dit access via Volume Shadow Copy
- Detect PowerShell scripts accessing browser credential stores
- Monitor for PsExec execution patterns
- Alert on SystemBC network signatures
- Monitor for unusual RDP connections from compromised hosts

## References

- [CISA Advisory AA22-249A](https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-249a)
- [Sygnia - Vice Society TTPs](https://www.sygnia.co/blog/the-vice-society-ransomware-investigation/)
- [Unit 42 - Vice Society Profiling](https://unit42.paloaltonetworks.com/vice-society-targets-education-sector/)
- [Unit 42 - Vice Society PowerShell Exfiltration](https://unit42.paloaltonetworks.com/vice-society-ransomware-powershell/)
- [Microsoft - DEV-0832/Vanilla Tempest](https://www.microsoft.com/en-us/security/blog/)

---

*Contributors: Rich Mayall (@EssexRich)*
*Last Updated: January 2026*
