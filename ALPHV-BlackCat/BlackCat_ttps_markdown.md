# Mapped by: carlosadrianosj


## BlackCat

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Execution | T1047 | T1047 | Adversaries may abuse Windows Management Instrumentation (WMI) to execute malicious commands and payloads. |
| Execution | T1053.003 | T1053.003 | Adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. |
| Execution | T1059 | T1059 | Adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. |
| Execution | T1129 | T1129 | Adversaries may execute malicious payloads via loading shared modules. |
| Execution | T1569.002 | T1569.002 | Adversaries may abuse the Windows service control manager to execute malicious commands or payloads. |
| Persistence | T1543.003 | T1543.003 | Adversaries may create or modify Windows services to repeatedly execute malicious payloads as part of persistence. |
| Defense Evasion | T1112 | T1112 | Adversaries may interact with the Windows Registry to hide configuration information within Registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution. |
| Defense Evasion | T1562.001 | T1562.001 | Adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. |
| Defense Evasion | T1027 | T1027 | Adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit |
| Defense Evasion | T1027.002 | T1027.002 | Adversaries may perform software packing or virtual machine software protection to conceal their code. |
| Defense Evasion | T1140 | T1140 | Adversaries may use Obfuscated Files or Information to hide artifacts of an intrusion from analysis. They may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. |
| Defense Evasion | T1202 | T1202 | Adversaries may abuse utilities that allow for command execution to bypass security restrictions that limit the use of command-line interpreters. |
| Defense Evasion | T1550.002 | T1550.002 | Adversaries may "pass the hash" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. |
| Defense Evasion | T1218.003 | T1218.003 | Adversaries may abuse CMSTP to proxy execution of malicious code. |
| Credential Access | T1003.004 | T1003.004 | Adversaries with SYSTEM access to a host may attempt to access Local Security Authority (LSA) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. |
| Credential Access | T1552 | T1552 | Adversaries may search compromised systems to find and obtain insecurely stored credentials. |
| Credential Access | T1557.001 | T1557.001 | By responding to LLMNR/NBT-NS network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system. |
| Discovery | T1049 | T1049 | Adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network. |
| Discovery | T1007 | T1007 | Adversaries may try to gather information about registered local system services. |
| Discovery | T1057 | T1057 | Adversaries may attempt to get information about running processes on a system. |
| Discovery | T1082 | T1082 | An adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. |
| Discovery | T1083 | T1083 | Adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. |
| Collection | T1005 | T1005 | Adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to Exfiltration. |
| Collection | T1560 | T1560 | An adversary may compress and/or encrypt data that is collected prior to exfiltration. |
| Command and Control | T1090.003 | T1090.003 | To disguise the source of malicious traffic, adversaries may chain together multiple proxies. |
| Command and Control | T1105 | T1105 | Adversaries may transfer tools or other files from an external system into a compromised environment. |
| Exfiltration | T1567.002 | T1567.002 | Adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel |
| Impact | T1485 | T1485 | Adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources. |
| Impact | T1486 | T1486 | Adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources. |
| Impact | T1489 | T1489 | Adversaries may stop or disable services on a system to render those services unavailable to legitimate users. |
| Impact | T1490 | T1490 | Adversaries may delete or remove built-in operating system data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. |
| Impact | T1498 | T1498 | Adversaries may perform Network Denial of Service (DoS) attacks to degrade or block the availability of targeted resources to users. |
| Impact | T1499 | T1499 | Adversaries may perform Endpoint Denial of Service (DoS) attacks to degrade or block the availability of services to users. |
| Impact | T1531 | T1531 | Adversaries may interrupt availability of system and network resources by inhibiting access to accounts utilized by legitimate users. |
| Lateral Moviment | T1021.002 | T1021.002 | Adversaries may use Valid Accounts to interact with a remote network share using Server Message Block (SMB). |
| Lateral Moviment | T1021.001 | T1021.001 | Adversaries may use Valid Accounts to log into a computer using the Remote Desktop Protocol (RDP). |
| Lateral Moviment | T1570 | T1570 | Adversaries may transfer tools or other files between systems in a compromised environment. |