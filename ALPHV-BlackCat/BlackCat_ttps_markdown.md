# Mapped by: carlosadrianosj


## BlackCat
| Tatica ID | Tecnica ID | Nome | Descricao |
|---|---|---|---|
| Tatica ID | Tecnica ID | Nome | Descrição |
| Initial Access TA0001 | T1078 | Valid Accounts  | Adversaries may obtain and abuse credentials of existing accounts as a means of gaining Initial Access, Persistence, Privilege Escalation, or Defense Evasion.  |
| Collection TA0009 | T1005 | Data from Local System | Adversaries may search local system sources, such as file systems and configuration files or local databases, to find files of interest and sensitive data prior to Exfiltration. |
| Collection TA0009 
| Persistence TA0003 
| Defense Evasion TA0005 | T1112 | Modify Registry | Adversaries may interact with the Windows Registry to hide configuration information within Registry keys, remove information as part of cleaning up, or as part of other techniques to aid in persistence and execution. |
| Defense Evasion TA0005 
| Defense Evasion TA0005 | T1027 | Obfuscated Files or Information | Adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit |
| Defense Evasion TA0005 | T1027.002 | Obfuscated Files or Information: Software Packing | Adversaries may perform software packing or virtual machine software protection to conceal their code. |
| Defense Evasion TA0005 | T1140 | Deobfuscate/Decode Files or Information | Adversaries may use Obfuscated Files or Information to hide artifacts of an intrusion from analysis. They may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. |
| Defense Evasion TA0005 | T1202 | Indirect Command Execution | Adversaries may abuse utilities that allow for command execution to bypass security restrictions that limit the use of command-line interpreters.  |
| Defense Evasion TA0005 
| Defense Evasion TA0005 | T1218.003 | System Binary Proxy Execution: CMSTP | Adversaries may abuse CMSTP to proxy execution of malicious code.  |
| Credential Access TA0006 | T1003.004 | OS Dump lsass  | Adversaries with SYSTEM access to a host may attempt to access Local Security Authority (LSA) secrets, which can contain a variety of different credential materials, such as credentials for service accounts. |
| Credential Access TA0006 
| Credential Access TA0006 
| Exfiltration TA0010 
| Execution TA0002 | T1047 | Windows Management Instrumentation | Adversaries may abuse Windows Management Instrumentation (WMI) to execute malicious commands and payloads.  |
| Execution TA0002 | T1053.003 | Scheduled Task/Job:Cron | Adversaries may abuse the cron utility to perform task scheduling for initial or recurring execution of malicious code. |
| Execution TA0002 | T1059 | Command and Scripting Interpreter  | Adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. |
| Execution TA0002 | T1129 | Shared Modules | Adversaries may execute malicious payloads via loading shared modules.  |
| Execution TA0002 
| Discovery TA0007 | T1049 | System Network Connections Discovery | Adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network. |
| Discovery TA0007 | T1007 | System Service Discovery | Adversaries may try to gather information about registered local system services. |
| Discovery TA0007 | T1057 | Process Discovery | Adversaries may attempt to get information about running processes on a system. |
| Discovery TA0007 | T1082 | System Information Discovery | An adversary may attempt to get detailed information about the operating system and hardware, including version, patches, hotfixes, service packs, and architecture. |
| Discovery TA0007 | T1083 | File and Directory Discovery | Adversaries may enumerate files and directories or may search in specific locations of a host or network share for certain information within a file system. |
| Lateral Moviment TA0008 | T1021.002 | SMB/Windows Admin Shares  | Adversaries may use Valid Accounts to interact with a remote network share using Server Message Block (SMB). |
| Lateral Moviment TA0008 | T1021.001 | RDP | Adversaries may use Valid Accounts to log into a computer using the Remote Desktop Protocol (RDP). |
| Lateral Moviment TA0008 
| Command and Control TA0011 | T1090.003 | Proxy: Multi-hop Proxy | To disguise the source of malicious traffic, adversaries may chain together multiple proxies. |
| Command and Control TA0011 | T1105 | Ingress Tool Transfer | Adversaries may transfer tools or other files from an external system into a compromised environment. |
| Impact TA0040 
| Impact TA0040 
| Impact TA0040 
| Impact TA0040 
| Impact TA0040 
| Impact TA0040 
| Impact TA0040 
