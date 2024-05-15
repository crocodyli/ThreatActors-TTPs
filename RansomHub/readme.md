#RANSOMHUB HISTORY

A new ransomware group is said to have emerged in the cyber threat landscape. This time, it is a group known as RansomHub. The group emerged in mid-February 2024 and has already listed several organizations as alleged victims of their attacks, resulting from extortion through encryption and data leaks.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/01aaef6e-55b7-47f7-8d66-7313a122e26b)

Some details about the operation can be obtained from the initial message on the .onion website (http[:]//ransomxifxwc5eteopdobynonjctkxxvap77yqifu2emfbecgbqdw6qd[.]onion/about/), where it is noticeable that affiliates have the rule of not carrying out attacks on organizations from countries such as those in the CIS, Cuba, North Korea, and China.

The announcement of the sale of the new Ransomware-as-a-Service (RaaS) by RansomHub was published on one of the Russian-origin forums used by cybercrime to advertise malicious services, known as RAMP4U (or RAMP). A user with the nickname and persona of "koley" announced the affiliate program on February 2, 2024.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/0a9f470b-f08d-449b-85aa-349af4f2b3f2)

In the new RaaS announcement, it was mentioned that the money laundering operation of the paid ransoms is the responsibility of the affiliate. This means that all communication and sending of the decryptor to the victim are done through chat. The split of this RaaS would be 90% of the value for the affiliate and 10% for the developer, who in this case would be the persona of Koley.

Furthermore, according to the publication, the ransomware payload is written in Golang language, uses the asymmetric algorithm based on x25519, and encryption algorithms AES256, ChaCha20, and xChaCha20, standing out for its speed. The encryption is obfuscated using AST.

The payload would support network propagation and encryption of data both in secure and local mode. According to Koley, the ransomware is designed to operate on platforms such as Windows, Linux, and ESXi, as well as other architectures such as ARM and MIPS.

As pointed out by the panel and already highlighted by the intelligence team, Koley stated that the panel uses a .onion domain, allowing the affiliate to organize and manage targets and chat rooms, view access logs, automatically respond when offline, and create private blog pages.

An interesting aspect is that, according to the rules of the RansomHub RaaS program, it is prohibited to carry out attacks against companies that have already paid the ransom and against nonprofit hospitals, although data theft is still allowed. This raises an important question for ransomware operators: by not encrypting the data, are they not still harming a hospital by just stealing data?

So far, no more detailed information has been found about the group's operation, except for some techniques, tactics, and procedures that will be addressed in a specific section of this report. However, it is curious to mention the "supposed" reformulation of ALPHV in RansomHub's operation.

# RANSOMHUB x ALHPV

RansomHub reportedly emerged at the same time that the ransomware group known as ALPHV announced its withdrawal from the cyberattack scene, following the alleged payment of a $22 million ransom by the company Change Healthcare.

It is important to note that Change Healthcare was mentioned by the ALPHV group, with the attack allegedly being conducted by an affiliate known as "Notchy".

So, the question arises: why discuss rebranding the ALPHV brand to RansomHub?

One reason would be the fact that the same company, Change Healthcare, was also announced as the first organization attacked by RansomHub, even after making a payment to the ALPHV group.

This event led the cyber community to consider that there was a rebranding of the groups, classified as follows:

- DarkSide
- BlackMatter
- Black Cat/ALPHV
- RansomHub

Some details still need to be observed before we can draw conclusions about the ALPHV rebrand. The affiliate known as Notchy reportedly posted a complaint on the Russian forum RAMP about ALPHV's departure, along with the theft of the ransom received from Change Healthcare.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/534fbd1a-2e6c-4189-b8ee-e21b0f60833b)

The conversations published by the affiliate with the administrator of the ALPHV ransomware indicate that all negotiations took place in mid-January 2024, a month before the RansomHub group published its first victim.

Comments on the publication were made by the persona of Koley, the alleged administrator of RansomHub, who stated that ALPHV, after having its website seized by the FBI, possibly planned to finalize its operations.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/78df3b44-6118-46a9-82c6-b170e522363e)

As is customary in Russian forums, any kind of violation committed by the administrator of a ransomware, such as receiving ransoms and not passing them on to affiliates, leads to a trial by the forum administrator, who may then decide to ban the persona or operation from all other forums if deemed "guilty".

Because of this, some other statements made by Koley caught our attention, mainly because he encouraged the affiliate Notchy to "keep evidence" against ALPHV.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/b7af9422-58c5-4aee-b47d-21137bf66377)


It's really intriguing that "Koley" instructed the affiliate to keep evidence, especially considering suspicions that the RansomHub group is a rebrand of ALPHV. This leads us to consider two possibilities:

- The group is not a rebrand of ALPHV.
- Koley is also an administrator of the ALPHV ransomware and has adopted a new persona in forums and the new group.

It's worth noting that in the affiliate's post, the ALPHV administrator, using a different persona, commented announcing that the "project" or operation of the ransomware would be terminated and that the ransomware's source code would be sold. This suggests that there could indeed be a rebranding in the future.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/6329eaf4-09f1-4cc7-9397-c04dc82e6e73)


So far, no new evidence has emerged that could directly connect RansomHub and ALPHV, especially regarding their code. While the ALPHV group uses a payload (encryptor) written in the Rust language, RansomHub employs a payload written in Golang and C++.

# Analysis of Code and Attack Chain

The ransomware used by the group follows the same flow as other ransomware groups, which, after encrypting the data, creates a ransom note. It creates an image file containing 6 letter characters in .png format in the folder: ```C:\Users\<username>\AppData\Local\Temp\``` with the aim of altering the device's desktop image.

In addition to this detail, according to Forescout, the payload used by the group employs compression (through VMProtect or other custom packages), confirming that the group's samples are written in the Golang programming language.

The malware employs countermeasures against analysts, such as the use of the "gobfuscate" tool, which makes static analysis complex, adding an additional layer of protection to the payload by requiring a 32-byte password to initiate.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/99895fa0-31ec-4e8c-86f0-c9533724da6a)

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/ce6e3101-71bd-46ba-aa39-01c17da3dcfd)


The payload utilizes some standard task and execution commands used by other ransomware groups by creating additional processes in the operating system using CMD, such as the following commands:
```
- cmd.exe /c iisreset.exe /stop
- cmd.exe /c vssadmin.exe Delete Shadows /all /quiet
- cmd.exe /c wevtutil cl application
- cmd.exe /c wevtutil cl security
- cmd.exe /c wevtutil cl system
- cmd.exe /c wmic.exe Shadowcopy Delete
- cmd.exe /c vssadmin.exe Delete Shadows /all /quiet
```
After execution, the malware creates the ransom note containing information on how to contact and make ransom payments for the encrypted data.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/2b129c30-e414-426f-b610-18a8f1d3f85b)


The analyzed sample contains similarities with the functionalities of the ALPHV ransomware, as it has a JSON embedded in its code that defines the encryption configuration, and some phrases referring to the ransom note of the group were taken from the ransom notes used by the ALPHV group.

Another important detail is that in security incidents involving RansomHub, two files were used as tools to achieve their objectives, namely, encryption. The mentioned files are ```STONESTOP```, ```POORTRY```, and other files found in the Indicators section of this report were used for Defense Evasion, Lateral Movement, and Impact purposes.

The ```disableAV.bat``` files were used to copy an executable file and a .sys file from a local IP address.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/cf536cc2-0c76-4085-ab8c-a1ebca5b6c26)

The executable file is STONESTOP, and the system file is POORTRY. The former is a Windows executable that loads the driver (the second file) and initiates various commands.

One of the earliest identifications of groups using this technique was ```SCATTRED SPIDER``` (UNC3944 identified by Mandiant) to disrupt antivirus software and EDR, with SCATTRED SPIDER group also being linked to deploying and using the ALPHV ransomware in various cases.

The identified variant recursively deletes all files in the Kaspersky AV installation folder and then attempts to identify processes related to this type of AV, as well as Windows Defender.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/9db9d317-edeb-4724-9e39-0df4603cd970)


# REFERENCES

RansomHub Identification, ![Fortinet](https://community.fortinet.com/t5/FortiEDR/Threat-Coverage-How-FortiEDR-protects-against-RansomHub/ta-p/308376)
Attack Analysis, ![Forescout](https://www.forescout.com/blog/analysis-a-new-ransomware-group-emerges-from-the-change-healthcare-cyber-attack/)



