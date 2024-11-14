| Tactic 	| Technique 	| Details 	|
|:---:	|:---:	|:---:	|
| Initial Acces 	| Phishing (T1566) 	| The actors use spearphishing emails to gain initial access. 	|
| Initial Acces 	| Spear Phishing Attachment (T1566.001) 	| Victims receive spear phishing emails with attached malicious   zip files - typically password protected. That contains malicious doc   including .doc, .pdf, .xls 	|
| Initial Acces 	| Exploit Public-Facing Application (T1190) 	| Affiliates exploited various vulnerabilities for initial   access to organizations. 	|
| Persistence 	| Create Account (T1136) 	| Black Basta threat actors created accounts with names such as   temp, r, or admin. 	|
| Persistence 	| Valid Accounts (T1078) 	| The actors obtain and abuse existing account credentials for   initial access, persistence, privilege escalation, or defense evasion. 	|
| Persistence 	| Account Manipulation (T1098) 	| The actors may manipulate accounts to maintain or elevate   privileges within the system. Added newly created accounts to the   administrators' group to maintain elevated access. 	|
| Persistence 	| Create or Modify System Process: Windows Service (T1543.003) 	| Black Basta affiliates create and modify Windows services to   execute malicious payloads. 	|
| Persistence 	| Hijack Execution Flow: DLL Search Order Hijacking (T1574.001) 	| Black Basta affiliates use custom libraries for execution. 	|
| Privilege Escalation 	| Domain Policy Modification: Group Policy Modification   (T1484.001) 	| Black Basta can modify group policy for privilege escalation   and defense evasion. 	|
| Privilege Escalation 	| Hijack Execution Flow: DLL Search Order Hijacking (T1574.001) 	| Black Basta used Qakbot, which has the ability to exploit   Windows 7 Calculator to execute malicious payloads. 	|
| Privilege Escalation 	| Exploitation for Privilege Escalation (T1068) 	| Affiliates used credential-stealing tools like Mimikatz,   Zerologon, NoPac, and PrintNightmare for privilege escalation. 	|
| Defense Evasion 	| Masquerading (T1036) 	| Black Basta affiliates conducted reconnaissance using   utilities with innocuous file names like Intel or Dell to evade detection. 	|
| Defense Evasion 	| System Binary Proxy Execution: Regsvr32 (T1218.010) 	| Black Basta uses Regsvr32.exe to proxy malicious code   execution. 	|
| Defense Evasion 	| Indicator Removal: File Deletion (T1070.004) 	| Black Basta deletes files left by their intrusion activity. 	|
| Defense Evasion 	| Modify Registry (1112) 	| Affiliates alter registry entries and configuration settings. 	|
| Defense Evasion 	| Domain or Tenant Policy Modification: Group Policy   Modification (T1484.001) 	| Black Basta affiliates modify GPOs (Group Policy Objects). 	|
| Defense   Evasion 	| Impair Defenses:   Disable or Modfy Tools (T1562.001) 	| Black Basta affiliates implemented a tool called Backstab to   disable endpoint detection and response (EDR) tools. 	|
| Defense Evasion 	| Impair Defenses: Disable or Modfy   Tools (T1562.001) 	| Black Basta affiliates used PowerShell to disable antivirus   products. 	|
| Defense Evasion  	| Impair Defenses: Disable or Modify System Firewall (T1562.004) 	| The actors disable and modify system firewalls to bypass   network usage restrictions. 	|
| Defense Evasion  	| Impair Defenses: Safe Boot Mode (T1562.009) 	| Uses bcdedit to boot the device in safe mode. 	|
| Defense Evasion  	| Debugger Evasion (T1622) 	| Uses IsDebuggerPresent to check if processes are being   debugged. 	|
| Defense Evasion 	| Deobfuscate/Decode Files or Information (T1140) 	| The actors use obfuscation techniques in software, malware,   and scripts. 	|
| Lateral Movement 	| Remote Services: Remote Desktop Protocol (T1021.001) 	| Valid accounts are used for RDP access on multiple devices. 	|
| Credential Access 	| Credentials from Password Stores (T1555) 	| Affiliates attempt to obtain stored user credentials from   device locations. 	|
| Credential Access 	| Steal or Forge Kerberos Tickets (T1558) 	| Affiliates use tools like Mimikatz to collect Kerberos   credentials and tickets to complete the intrusion. 	|
| Discovery  	| System Network Connections Discovery (T1049) 	| Affiliates may attempt to obtain a list of network connections   on the compromised system. 	|
| Discovery  	| System Network Configuration Discovery (T1016) 	| The actors may look for network configuration details, such as   IP addresses of other systems. 	|
| Discovery 	| Sytem Information Discovery (T1082) 	| Affiliates gather detailed information on the OS and hardware,   including version, patches, and other data. 	|
| Discovery 	| Account Discovery: Domain Account (T1087.002) 	| The actors obtain a list of domain accounts using automated   tools like AdFind. 	|
| Execution 	| Command and Scripting Interpreter: PowerSehll (T1059.001) 	| Black Basta affiliates used PowerShell to disable antivirus   products. 	|
| Execution  	| Service Execution (T1569.002) 	| Actors configure services to execute the ransomware payload   and other C2 routines. (Black Basta has installed and used PsExec to execute   payloads on remote hosts.) 	|
| Execution 	| Windows Management Instrumentation (T1047) 	| Actors use WMI to execute malicious files during the attack   and utilizes Invoke-TotalExec to push out the ransomware binary. 	|
| Collection 	| Data from Local System (T1005) 	| The actors may search local system sources, such as file   systems and database configuration files. 	|
| Collection 	| Archive via Utility (T1560.001) 	| Black Basta affiliates use utilities to compress and encrypt   files collected before exfiltration. 	|
| Command and Control  	| Remote Access Software (T1219) 	| Actors use various remote access software to establish C2   communication. 	|
| Command and Control 	| Application Layer Protocol (T1071) 	| Affiliates communicate using OSI application layer protocols   to evade detection. 	|
| Command and Control 	| Proxy (T1090) 	| Actors use proxy connections to route network traffic between   systems. 	|
| Command and Control  	| Exfiltration Over Web Service: Exfiltration to Cloud Storage   (T1567.002) 	| Actors exfiltrate data to a cloud storage service instead of   their primary channel. 	|
| Command and Control 	| Protocol Tunneling (T1572) 	| Actors encapsulate network communications to the victim’s   system within a separate protocol to evade detection. 	|
| Command and Control  	| Encrypted Channel (T1573) 	| Black Basta actors use encryption algorithms for C2 tunneling. 	|
| Impact 	| Inhibit System Recovery (T1490) 	| Affiliates use vssadmin.exe to delete volume shadow copies. 	|
| Impact  	| Service Stop (T1489) 	| Actors may stop or disable services on a system to render it   unavailable. 	|
| Impact 	| Data Encrypted for Impact (T1486) 	| Black Basta affiliates used a public key to fully encrypt   files. 	|


## Mapped by: carlosadrianosj and crocodyli
