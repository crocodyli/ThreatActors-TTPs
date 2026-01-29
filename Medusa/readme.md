# Ransomware Medusa
The ransomware landscape remains active in 2024, with various ransomware groups attacking a wide range of organizations. In this context, Medusa Ransomware has emerged as a significant cyber threat, standing out for its data encryption and extortion operations.
Medusa Ransomware appeared in 2021, quickly becoming one of the most feared cyber threats. This malware encrypts critical files and demands ransoms in cryptocurrency, exploiting vulnerabilities in corporate and institutional systems. Known for its advanced phishing tactics, Medusa infiltrates networks with ease, causing significant damage.
Critical sectors such as healthcare and finance have been severely impacted, facing operational disruptions and substantial financial losses. The ransomware continuously evolves, making it difficult for security experts to neutralize it. Medusa's rapid adaptation to new security defenses underscores the urgent need for more robust cybersecurity measures, emphasizing the importance of proactive cybersecurity.
The rise of Medusa Ransomware serves as a global warning about the dangers of sophisticated cyber threats and the need for ongoing preparedness.
![image](https://github.com/user-attachments/assets/478cae5e-3d1d-4a4f-abf6-4157eca717bf)
As previously mentioned, Medusa Ransomware is a growing threat known for its sophisticated attacks against various industries, including banking. The attack chain typically begins with phishing, the use of compromised credentials, exploitation of vulnerabilities, or poorly configured or vulnerable RDP services.
Once inside the network, the ransomware employs "living-off-the-land" (LotL) techniques, leveraging legitimate tools such as PowerShell, Nmap, PDQ Deploy, Cobalt Strike, and Mimikatz to conceal its malicious activities. For persistence, it creates specific registry keys like HKCU\Software\Microsoft\Windows\CurrentVersion\Run to ensure automatic restarts.
### Possible Arguments in the Windows Variant
The Windows encryptor accepts command-line options that allow the threat actor to configure how files will be encrypted on the device, as shown in the image below.
![image](https://github.com/user-attachments/assets/b6c680f9-38df-4386-890a-bb847a374450)
The TTPs include disabling security services using PowerShell commands such as Stop-Service -Name "WindowsDefender".
File encryption is performed using robust algorithms, often AES-256. The AES-256 key is configured using a 32-byte key and a 16-byte initialization vector.
Ransom notes are left in text files (.txt) in all affected directories. An example of such a note is shown below:
![image](https://github.com/user-attachments/assets/21f9d67a-827d-4e1c-90e4-79d347a5e872)
Encrypted files are given the extension .MEDUSA, and a ransom note named "!!!READ_ME_MEDUSA!!!.txt" is left, instructing victims on how to proceed with the ransom payment and recover their data. Medusa Ransomware not only encrypts data but also exfiltrates sensitive information, which is published online if the ransom is not paid.
![image](https://github.com/user-attachments/assets/81b25a35-b065-425f-bfc6-71e5f7af074b)
