SafePay ransomware started in October 2024 as a new ransomware service, using some of the leaked LockBit source code. Soon after launching, the group made a big impact in the ransomware world, hacking at least 33 organizations by December 9.

The first version of SafePay was created by modifying the LockBit source code. It adds the ".safepay" extension to files that it encrypts and includes a ransom note called "readme_safepay.txt." This version uses a three-step XOR method with a random single-byte key, making it hard for security researchers to analyse.

The group's technical infrastructure includes both a dark web blog and a presence on the TON network for victim communications. Their attack methodology follows a double extortion model, combining traditional file encryption with data theft to maximise pressure on victims. SafePay operators typically move from initial access to ransomware deployment in under 24 hours, significantly faster than the industry average.
.
Among the Tactics, Techniques, and Procedures (TTPs) of the SafePay group, notable characteristics include the use of compromised VPN credentials as an initial access vector, extensive use of living-off-the-land binaries (LOLBins), and sophisticated privilege escalation techniques. The group frequently employs ShareFinder.ps1 for network reconnaissance and uses WinRAR for data archival before exfiltration.
Post encryption, SafePay directs victims to their negotiation portal accessible through both Tor and TON networks.

The group has demonstrated sophisticated operational security measures, including a Cyrillic-language-based killswitch that prevents execution in eastern European countries.