# Variant "megazord" Akira Ransomware

| TACTIC  	| TECHNIQUE  	| DETAILS 	|
|:---:	|:---:	|:---:	|
| Initial   Access 	| Valid Accounts (T1078) 	| Use of valid accounts for initial   access via VPN or other means within the client's environment. 	|
| Initial   Access 	| Exploit Public-Facing   Application (T1190) 	| Exploitation of vulnerabilities for   initial access, such as CVE-2023-20269 and CVE-2020-3259. 	|
| Initial   Access 	| Phishing (T1566) 	| Threat actors may use phishing   techniques. 	|
| Initial   Access 	| External Remote Services (T1133) 	| Akira actors use remote access   services to gain initial access. 	|
| Initial   Access 	| Phishing: Spearphishing   Attachment (T1566.001) 	| Akira actors use phishing emails with   malicious attachments to gain initial access. 	|
| Initial   Access 	| Phishing: Spearphishing Link   (T1566.002) 	| Akira actors use phishing emails   containing malicious links for initial access. 	|
| Credential   Access 	| Credential Dumping (T1003) 	| Use of techniques stored on   compromised systems or in system memory. 	|
| Credential   Access 	| Unsecured Credentials:   Credentials In Files (T1552.001) 	| This technique involves capturing   password hashes of Active Directory service users. 	|
| Credential   Access 	| OS Credential Dumping: LSASS   Memory (T1003.001) 	| Akira actors use information stored in   LSASS memory through dumping. 	|
| Credential   Access 	| Unsecured Credentials:   Credentials in Registry (T1552.002) 	| Actors may search the registry on   compromised systems for insecurely stored credentials. 	|
| Credential   Access 	| Steal Web Session Cookie   (T1555.003) 	| Actors extract information stored in   users' browsers, such as Chrome, to initiate user sessions. 	|
| Credential   Access 	| OS Credential Dumping: Security   Account Manager (T1003.002) 	| Actors use credentials from the   Security Account Manager (SAM) database. 	|
| Discovery 	| Account Discovery (T1087) 	| Actors scan the domain to discover   other user accounts and groups. 	|
| Discovery 	| System Network Configuration   Discovery (T1016) 	| Akira actors use tools to scan devices   and networks, identifying running remote services. 	|
| Discovery 	| Domain Trust Discovery (T1482) 	| Akira actors use network commands to   enumerate domain information. 	|
| Discovery 	| System Information Discovery   (T1082) 	| Akira actors use the PCHunter64 tool   to gather details about processes and system information. 	|
| Discovery 	| Remote System Discovery (T1018) 	| Discovery of remote systems in the   organization’s environment. 	|
| Discovery 	| Network Service Discovery   (T10146) 	| Involves scanning network services to   identify active services. 	|
| Discovery 	| Permission Groups Discovery   (T1069) 	| Discovers permission groups in the   environment. 	|
| Discovery 	| File and Directory Discovery   (T1083) 	| Involves discovering files and   directories in the environment. 	|
| Discovery 	| Process Discovery (T1057) 	| Actors observe typing activities on   terminals and running processes. 	|
| Persistence 	| Create Account (T1136.002) 	| Actors create domain accounts using   the net1 command. 	|
| Persistence 	| Create or Modify System Process:   Windows Service (T1543.003) 	| Actors use LOLBINS to create a service   named sysmon that executes tunneling tools. 	|
| Defense   Evasion 	| Impair Defenses: Disable or   Modify Tools (T1562.001) 	| Actors disable security software to   evade detection. 	|
| Defense   Evasion 	| Impair Defenses: Disable Windows   Event Loggin (T1562.002) 	| Actors disable real-time monitoring of   Windows Defender using native commands. 	|
| Defense   Evasion 	| Abuse Elevation Control   Mechanism: Bypass User Account Control (T1088) 	| Actors use the runas command to   execute commands in the context of a different user, possibly to bypass   security restrictions or gain privileges. 	|
| Execution 	| Command and Scripting   Interpreter (T1059) 	| Actors use .bat files to execute   ransomware on other devices. 	|
| Collection 	| Archive Collected Data: Archive   via Utility (T1560.001) 	| Akira actors use tools like WinRAR to   compress collected files. 	|
| Comand   and Control 	| Web Service (T1071.004) 	| Actors use tools like AnyDesk,   DWAgent, MobaXterm, RustDesk, and Cloudflare Tunnel to establish persistent   remote access to various systems. 	|
| Command   and Control 	| Remote File Copy (T1105) 	| Actors use the rclone command to copy   files from one location to another, possibly for data exfiltration. 	|
| Command   and Control 	| Remote Services (T1021.002) 	| Actors use the cmd.exe command to   execute a custom trojan that communicates with an IP address controlled by   the attackers to maintain access to the compromised environment. 	|
| Exfiltration 	| Exfiltration Over Command and   Control Channel (T1567) 	| Akira uses tools like WinRAR, WinSCP,   rclone, and MEGA to exfiltrate sensitive information. 	|
| Exfiltration 	| Exfiltration Over Alternativa   Protocol (T1048) 	| Akira actors use tools like WinSCP for   data exfiltration. 	|
| Exfiltration 	| Transfer Data to Cloud Account   (T1537) 	| Akira actors use tools like CloudZilla   to exfiltrate information to the cloud. 	|
| Exfiltration 	| Exfiltration Over Other Network   Medium (T1567.001) 	| Actors use rclone to exfiltrate data   to attacker-controlled IP addresses over port 22. 	|
| Exfiltration 	| Exfiltration Over Web Service:   Exfiltration to Cloud Storage (T1567.002) 	| Actors use the RClone tool to sync   files to the cloud and exfiltrate them. 	|
| Impact 	| Data Encrypted for Impact   (T1486) 	| Akira actors execute the Akira   payload, subsequently appending the extensions ".akira" and   ".powerranger." 	|
| Impact 	| Service Stop (T1489) 	| Actors stop services to enable   encryption of files. 	|
