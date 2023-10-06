# Mapped by: carlosadrianosj


## BlackCat
| Tatica ID | Tecnica ID | Nome | Descricao |
|---|---|---|---|
| Tatica ID | Tecnica ID | Nome | Descrição |
| Initial Access TA0001 | T1078 | Valid Accounts  | Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.  |
| Collection TA0009 | T1005 | Data from Local System | Adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to Exfiltration. |
| Collection TA0009 | T1560 | Data from Local System | An adversary may compress and/or encrypt data that is collected prior to exfiltration.  |
| Persistence TA0003 | T1543.003 | Create or Modify System Process:Windows Service  | Adversaries may create or modify Windows services to repeatedly execute malicious payloads as part of persistence.  |
| Defense Evasion TA0005 | T1112 | Modify Registry | Adversaries may interact with the Windows Registry to hide configuration information within Registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution. |
| Defense Evasion TA0005 | T1562.001 | Impair Defenses: Disable or Modify Tools | Adversaries may modify and/or disable security tools to avoid possible detection of their malware/tools and activities. |
| Defense Evasion TA0005 | T1027 | Obfuscated Files or Information | Adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit |
| Defense Evasion TA0005 | T1027.002 | Obfuscated Files or Information: Software Packing | Adversaries may perform software packing or virtual machine software protection to conceal their code. |
| Defense Evasion TA0005 | T1140 | Deobfuscate/Decode Files or Information | Adversaries may use Obfuscated Files or Information to hide artifacts of an intrusion from analysis. They may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. |
| Defense Evasion TA0005 | T1202 | Indirect Command Execution | Adversaries may abuse utilities that allow for command execution to bypass security restrictions that limit the use of command-line interpreters.  |
| Defense Evasion TA0005 | T1550.002 | Use Alternate Authentication Material: Pass the Hash | Adversaries may "pass the hash" using stolen password hashes to move laterally within an environment, bypassing normal system access controls. |
| Defense Evasion TA0005 | T1218.003 | System Binary Proxy Execution: CMSTP | Adversaries may abuse CMSTP to proxy execution of malicious code.  |
| Credential Access TA0006 | T1003.004 | OS Dump lsass  | Adversaries with SYSTEM access to a host may attempt to access Local Security Authority (LSA) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. |
| Credential Access TA0006 | T1552 | Unsecured Credentials | Adversaries may search compromised systems to find and obtain insecurely stored credentials. |
| Credential Access TA0006 | T1557.001 | Adversary-in-the-Middle:LLMNR/NBT-NS Poisoning and SMB Relay | By responding to LLMNR/NBT-NS network traffic, adversaries may spoof an authoritative source for name resolution to force communication with an adversary controlled system.  |
| Exfiltration TA0010 | T1567.002 | Exfiltration Over Web Service: Exfiltration to Cloud Storage | Adversaries may exfiltrate data to a cloud storage service rather than over their primary command and control channel |
| Execution TA0002 | T1047 | Windows Management Instrumentation | Adversaries may abuse Windows Management Instrumentation (WMI) to execute malicious commands and payloads.  |
| Execution TA0002 | T1053.003 | Scheduled Task/Job:Cron | Adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. |
| Execution TA0002 | T1059 | Command and Scripting Interpreter  | Adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. |
| Execution TA0002 | T1129 | Shared Modules | Adversaries may execute malicious payloads via loading shared modules.  |
| Execution TA0002 | T1569.002 | System Services: Service Execution | Adversaries may abuse the Windows service control manager to execute malicious commands or payloads.  |
| Discovery TA0007 | T1049 | System Network Connections Discovery | Adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network. |
| Discovery TA0007 | T1007 | System Service Discovery | Adversaries may try to gather information about registered local system services. |
| Discovery TA0007 | T1057 | Process Discovery | Adversaries may attempt to get information about running processes on a system. |
| Discovery TA0007 | T1082 | System Information Discovery | An adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. |
| Discovery TA0007 | T1083 | File and Directory Discovery | Adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. |
| Lateral Moviment TA0008 | T1021.002 | SMB/Windows Admin Shares  | Adversaries may use Valid Accounts to interact with a remote network share using Server Message Block (SMB). |
| Lateral Moviment TA0008 | T1021.001 | RDP | Adversaries may use Valid Accounts to log into a computer using the Remote Desktop Protocol (RDP). |
| Lateral Moviment TA0008 | T1570 | Lateral Tool Transfer | Adversaries may transfer tools or other files between systems in a compromised environment.  |
| Command and Control TA0011 | T1090.003 | Proxy: Multi-hop Proxy | To disguise the source of malicious traffic, adversaries may chain together multiple proxies. |
| Command and Control TA0011 | T1105 | Ingress Tool Transfer | Adversaries may transfer tools or other files from an external system into a compromised environment. |
| Impact TA0040 | T1485 | Data Destruction | Adversaries may destroy data and files on specific systems or in large numbers on a network to interrupt availability to systems, services, and network resources.  |
| Impact TA0040 | T1486 | Data Encrypted for Impact  | Adversaries may encrypt data on target systems or on large numbers of systems in a network to interrupt availability to system and network resources.  |
| Impact TA0040 | T1489 | Service Stop | Adversaries may stop or disable services on a system to render those services unavailable to legitimate users. |
| Impact TA0040 | T1490 | Inhibit System Recovery | Adversaries may delete or remove built-in operating system data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery. |
| Impact TA0040 | T1498 | Network Denial of Service | Adversaries may perform Network Denial of Service (DoS) attacks to degrade or block the availability of targeted resources to users. |
| Impact TA0040 | T1499 | Endpoint Denial of Service  | Adversaries may perform Endpoint Denial of Service (DoS) attacks to degrade or block the availability of services to users. |
| Impact TA0040 | T1531 | Account Access Removal  | Adversaries may interrupt availability of system and network resources by inhibiting access to accounts utilized by legitimate users.  |
