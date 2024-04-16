# Play Ransomware

## Threat Summary:
Initially observed in June 2022, the Play ransomware (a.k.a PlayCrypt) operates through double extortion, targeting numerous organizations in Latin America. Its Initial Access method is quite similar to other ransomwares, involving attacks such as Phishing, Exposed Services to the Internet, and Valid Account compromises.

On **April 19, 2023**, the security company Symantec published two new tools developed by the Play group. These tools allow the malicious actor to enumerate and exfiltrate data from the internal network. The post mentions the following: "Play threat actors use the .NET infostealer to enumerate software and services via WMI, WinRM, Remote Registry, and Remote Service. The malware checks for the existence of security and backup software, as well as remote administration tools and other programs, saving the information in .CSV files that are compressed into a .ZIP file for later manual exfiltration by threat actors." These tools make use of the following .NET frameworks ([Costura](https://github.com/Fody/Costura), [AlphaVSS](https://github.com/alphaleonis/AlphaVSS)). 

## CVEs:
| CVE | Vendor | Product | v3 Severity | CVSS Severity |
| --- | ------ | ------- | ----------- | --------------|
| CVE-2018-13379 | Fortnet | Fortinet FortiOS FortiProxy | CRITICAL | 9.8 |
| CVE-2020-12812 | Fortnet | Fortinet FortiOS FortiProxy | CRITICAL | 9.8 |
| CVE-2022-41040 | Microsoft | Exchange Serve | HIGH | 8.8 |
| CVE-2022-41082 | Microsoft | Exchange Serve | HIGH | 8.8 |

## Malware:
| Nome | Referência |
| ---- | ---------- |
| Nekto/PriviCMD | [Trend Micro](https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/Trojan.Win64.PRIVICMD.YACCAT/)

## Tools:
| Nome | Referência |
| ---- | ---------- |
| Process Hacker | https://processhacker.sourceforge.io/ |
| Task Manager | Legítimo |
| Mimikatz | https://malpedia.caad.fkie.fraunhofer.de/details/win.mimikatz |
| WinPEAS | https://github.com/carlospolop/PEASS-ng/tree/master/winPEAS |
| PsExec | Legítimo |
| Cobalt Strike | https://malpedia.caad.fkie.fraunhofer.de/details/win.cobalt_strike |
| AdFind | Legítimo |
| Netscan | Legítimo |
| Bloodhound | https://github.com/BloodHoundAD/BloodHound |

# Referencias:
- [Play Ransomware's Attack Playbook Similar to that of Hive, Nokoyawa](https://www.trendmicro.com/en_us/research/22/i/play-ransomware-s-attack-playbook-unmasks-it-as-another-hive-aff.html)
- [An In-Depth Look at Play Ransomware](https://explore.avertium.com/resource/an-in-depth-look-at-play-ransomware)
- [Play Ransomware Group Using New Custom Data-Gathering Tools](https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/play-ransomware-volume-shadow-copy)
