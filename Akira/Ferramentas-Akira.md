Here's the translation and formatting of the table:

| Tática                   | Ferramenta                                                                                                                                                                              |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| External Reconnaissance  | Masscan and ReconFTW                                                                                                                                                                    |
| Internal Enumeration     | PCHunter64, Advanced IP Scanner, LANsweeper, SharpHound, AdFind, SoftPerfect NetScan, and Windows Nltest                                                                               |
| Credential Theft         | Minidump, Mimikatz, LaZagne, and DonPAPI                                                                                                                                                |
| Persistence              | RMM tools such as AnyDesk, RustDesk, Radmin, and ScreenConnect; disabling firewalls followed by enabling RDP and PuTTY. The crimeware RAT SystemBC was also used by Akira.              |
| Defense Evasion          | Disable EDR tools with Terminator.exe and ToolPow, and a batch of scripts to disable LSA protection and Windows Defender.                                                               |
| Lateral Movement         | Impacket (wmiexec.py and atexec.py), RDP, and SSH                                                                                                                                       |
| Collection               | Searching and downloading files from Microsoft SharePoint                                                                                                                               |
| Exfiltration             | Compression Tool (7zip, WinRAR, etc.), Rclone, FileZilla, and WinSCP                                                                                                                   |
| Command and Control      | Cloudflare Tunnel (Cloudflared), MobaXterm, and Ngrok                                                                                                                                   |
| Impact                   | Typically deployed via PsExec.                                                                                                                                                           |
