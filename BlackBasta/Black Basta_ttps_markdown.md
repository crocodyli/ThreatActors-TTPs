# Mapped by: carlosadrianosj


## Black Basta
| Tatica ID | Tecnica ID | Nome | Descricao |
|---|---|---|---|
| Tatica ID | Tecnica ID | Nome | Descrição |
| Initial Access TA0001 | T1566.001 | Phishing: Spear phishing Attachment | Victims receive spear phishing emails with attached malicious zip files - typically password protected. That contains malicious doc including .doc, .pdf, .xls |
| Execution TA0002  | T1569.002 | System Services: Service Execution | Black Basta has installed and used PsExec to execute payloads on remote hosts. |
| Execution TA0002  | T1047 | Windows Management Instrumentation | Utilizes Invoke-TotalExec to push out the ransomware binary. |
| Execution TA0002  | T1059.001 | Command and Scripting Interpreter: PowerShell | Black Basta has encoded PowerShell scripts to download additional scripts. |
| Persistence TA0003 | T1136 | Create Account | Black Basta threat actors created accounts with names such as temp, r, or admin./ |
| Persistence TA0003 | T1098 | Account Manipulation | Added newly created accounts to the administrators' group to maintain elevated access. |
| Persistence TA0003 | T1543.003 | Create or Modify System Process: Windows Service | Creates benign-looking services for the ransomware binary. |
| Persistence TA0003 | T1574.001 | Hijack Execution Flow: DLL Search Order Hijacking | Black Basta used Qakbot, which has the ability to exploit Windows 7 Calculator to execute malicious payloads |
| Privilege Escalation TA0004 | T1484.001 | Domain Policy Modification: Group Policy Modification | Black Basta can modify group policy for privilege escalation and defense evasion./ |
| Privilege Escalation TA0004 | T1574.001 | Hijack Execution Flow: DLL Search Order Hijacking | Black Basta used Qakbot, which has the ability to exploit Windows 7 Calculator to execute malicious payloads./ |
| Privilege Escalation TA0004 | T1543.003 | Create or Modify System Process: Windows Service | Creates benign-looking services for the ransomware binary. |
| Defense Evasion TA0005  | T1484.001 | Domain Policy Modification: Group Policy Modification | Black Basta can modify group policy for privilege escalation and defense evasion./ |
| Defense Evasion TA0005  | T1218.010 | System Binary Proxy Execution: Regsvr32 | Black Basta has used regsvr32.exe to execute a malicious DLL./ |
| Defense Evasion TA0005  | T1070.004 | Indicator Removal on Host: File Deletion | Attempts to delete malicious batch files./ |
| Defense Evasion TA0005  | T1112 | Modify Registry | Black Basta makes modifications to the Registry./ |
| Defense Evasion TA0005  | T1140 | Deobfuscate/Decode Files or Information | Initial malicious .zip file bypasses some antivirus detection due to password protection. |
| Defense Evasion TA0005  | T1562.001 | Impair Defenses: Disable or Modify Tools | Disables Windows Defender with batch scripts, such as d.bat or defof.bat |
| Defense Evasion TA0005  | T1562.004 | Impair Defenses: Disable or Modify System Firewall | Uses batch scripts, such as rdp.bat or SERVI.bat, to modify the firewall to allow remote administration and RDP. |
| Defense Evasion TA0005  | T1562.009 | Impair Defenses: Safe Boot Mode | Uses bcdedit to boot the device in safe mode./ |
| Defense Evasion TA0005  | T1574.001 | Hijack Execution Flow: DLL Search Order Hijacking | Black Basta used Qakbot, which has the ability to exploit Windows 7 Calculator to execute malicious payloads. |
| Defense Evasion TA0005  | T1622 | Debugger Evasion | Uses IsDebuggerPresent to check if processes are being debugged./ |
| Credential Access TA0006  | T1555 | Credentials from Password Stores | Black Basta uses Mimikatz to dump passwords./ |
| Discovery TA0007  | T1087.002 | Account Discovery: Domain Account | Used commands such as net user /domain and net group /domain./ |
| Discovery TA0007  | T1016 | System Network Configuration Discovery | Lists internal IP addresses to target in C:\Windows\pc_list.txt – typically found on the Domain Controller./ |
| Discovery TA0007  | T1082 | System Information Discovery | Uses GetComputerName to query the computer name. |
| Discovery TA0007  | T1622 | Debugger Evasion | Uses IsDebuggerPresent to check if processes are being debugged./ |
| Lateral Movement TA0008  | T1021.001 | Remote Services: Remote Desktop Protocol | Black Basta has used RDP for lateral movement./ |
| Collection TA0009  | T1560.001 | Archive Collected Data: Archive via Utility | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |
| Exfiltration TA0010  | T1567 | Exfiltration over Web Service | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |
| Command and Control TA0011  | T1219 | Remote Access Software | Black Basta has installed and used legitimate tools such as TeamViewer and AnyConnect on targeted systems. |
| Command and Control TA0011  | T1573 | Encrypted Channel | Uses Qakbot primarily and Cobalt Strike. |
| Impact TA0040 | T1486 | Data Encrypted for Impact | Black Basta modifies the Desktop background by adding a .jpg in C:\Temp and creating a registry key HKCU\Control Panel\Desktop. Additionally modifies the registry to change the icon of encrypted files./It encrypts files excluding those with a .exe, .cmd, .bat and .com extension. Uses ChaCha20 or RSA-4096 to encrypt victims. |
| Impact TA0040 | T1489 | Service Stop | Uses sc stop and taskkill to stop services. |
| Impact TA0040 | T1490 | Inhibit System Recovery | Black Basta deletes Volume Shadow Copies using vssadmin./ |
