# Play Ransomware

## Resumo da Ameaça:
Inicialmente visto em junho de 2022. O ransomware Play (a.k.a PlayCrypt) opera por meio de duble extortion tendo como alvo muitas organizações da América Latina. Sua forma de Inital Access é bastante similar a de outros ransowmares, envolvendo ataques como: Phishing, Exposed Services to the Internet, Valid Account.
No dia **19/04/2023** a empresa de segurança Symantec publicou duas novas ferramentas desenvolvidas pelo grupo Play. Essas duas ferramentas permitem ao ator maliciso enumerar e exfiltrar dados da rede interna. No post é mencionado o seguinte - "Ps agentes de ameaças usam o infostealer .NET para enumear o software e serviços via WMI, WinRM, Remote Registry e Remote Service. O malware verifica a existência de software de segurança e backup, bem como ferramentas de adminstração remota e outros programas, salvando as informações em arquivos .CSV que são compactados em um arquivo .ZIP para posteriomente poder ser exifiltrado manualmente pelos agentes da ameaça." - Essas ferramentas fazem o uso dos seguintes framework em .NET ([Costura](https://github.com/Fody/Costura), [AlphaVSS](https://github.com/alphaleonis/AlphaVSS)). 

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
