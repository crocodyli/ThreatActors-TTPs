# **AKIRA RANSOMWARE**

The Akira ransomware group emerged in March 2023, with speculation about potential ties to the former CONTI group. Following the end of CONTI's operations, many affiliates moved on to independent campaigns, such as Royal, BlackBasta, and others. Reports suggest that Akira affiliates also collaborate with other ransomware operations, including Snatch and BlackByte, especially after an open directory of tools used by an Akira operator was identified, which showed connections with Snatch ransomware.

The first version of Akira ransomware was developed in C++, appending the ".akira" extension to encrypted files and creating a ransom note named "akira_readme.txt." This initial version, partially based on the Conti V2 source code, had a decryption flaw that led Avast to release a decryptor on June 29, 2023. Shortly after, a new version was released on July 2, 2023, fixing this decryption flaw and introducing significant changes, including the transition to the Rust programming language and a new filename, "megazord.exe." This version began encrypting files with the ".powerranges" extension.

In mid-August 2023, a new Akira variant, known as "Megazord," introduced further changes to encrypted file names, now using the ".Powerrangers" extension. This variant was attributed to the Akira group due to the ransom note, which pointed to Akira’s Data Leak Site (DLS) on the Tor network. While maintaining similarities with the original Akira ransomware, the Megazord variant was developed in Rust — a language widely used by other ransomware groups, such as Alphv/Black Cat — contrasting with the original Akira, which was developed in C++.

Among the Tactics, Techniques, and Procedures (TTPs) of the Akira group, one notable change is the requirement of a "buildid" at runtime for encryption to occur, making analysis difficult without the specific key. The group frequently uses brute-force attempts on Cisco VPN devices with single-factor authentication as an initial access vector and exploits vulnerabilities, including CVEs: CVE-2019-6693 and CVE-2022-40684.

After encryption, the Akira ransomware instructs victims to access a negotiation portal on the Tor network. These methods and techniques have been covered in other intelligence reports, providing a comprehensive overview of the group’s activities, practices, and tools.

```
akiralkzxzq2dsrzsrvbr2xgbbu2wgsmxryd4csgfameg52n7efvr2id[.]onion

akiral2iz6a7qgd3ayp3l6yub7xx2uep76idk3u2kollpj5z3z636bad[.]onion
``` 

![akira](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/e86fd08d-620a-4a90-975e-9280a76371c8)
