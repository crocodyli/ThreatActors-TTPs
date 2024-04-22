## History

Before we delve into the history and details of the Hunters International ransomware operation, let’s discuss some aspects of the Ransomware Hive operation. 

The Ransomware Hive, a ransomware-as-a-service (RaaS) operation, began in June 2021, targeting healthcare facilities, non-profit organizations, retailers, energy providers, and other sectors. The Hive operators employ common ransomware tactics, techniques, and procedures to compromise devices, exfiltrate sensitive data, and encrypt files. 

After encryption, the affected files receive the ‘.hive’ extension. The malicious software, written in Go, utilizes AES+RSA encryption and demands a Bitcoin ransom for file recovery. The malware’s graphic design includes 100 different RSA keys, ranging in size from 1024 to 5120 bits, a 10MB one-time pad (OTP), and a custom stream cipher. Decrypting the files, even after paying the ransom and providing the key, can be a time-consuming process.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/a284e0e7-1130-49fd-b4e1-542dcf52c610)

After encryption, a ransom note file “HOW_TO_DECRYPTO.txt” is created.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/47fd0800-a43d-44bd-ad8a-9d54e977b0ab)

The ransom note directs the victim to the Hive group's operating website to log in.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/a6dbc0cf-4a75-4b2c-bd9c-255effc1a639)


In October 2021, Europol announced the arrest of 12 individuals suspected of being involved in ransomware attacks against 1,800 victims in 71 countries, using ransomware variants such as LockerGoga, MegaCortex, HIVE and Dharma.
https://www.bleepingcomputer.com/news/security/police-arrest-hackers-behind-over-1-800-ransomware-attacks/

A similar episode occurred in November 2023, when, in an operation coordinated with other countries, Europol made several arrests, detaining cybercriminals related to the use of the previously mentioned ransomware.
https://www.bleepingcomputer.com/news/security/police-dismantle-ransomware-group-behind-attacks-in-71-countries/

In mid-October 2023, just a few days before the Europol operation, the source code of the Ransomware Hive was sold, along with its website and older versions developed in Golang and C (although this purchase has only been reported by the actors without concrete evidence). The buyer of this new source code was the group Hunters International, who claimed to have fixed the bugs in the Ransomware Hive that were responsible for preventing file decryption in some cases. The group also stated that file encryption would not be their primary focus; instead, they would use data theft as a method to pressure victims during extortion attempts.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/8a5d24e8-2279-4ff4-b9f1-89cf3bf87d96)

According to researcher **@rivitna2**, the code of the **Hunters International ransomware** bears a resemblance to the **Hive ransomware**, with over **60% of the code** being similar, correlating to the version of the purchased source code.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/145f47f6-ef87-4133-93b4-a38ac017cee2)

During the investigation, it was possible to observe that the group had used several servers in Russia for hosting their services, as well as one server in the USA. 

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/ab4aa2a7-3ebd-43d8-a3c9-60c470aa4def)

Ref: https://twitter.com/crocodylii/status/1781290861680038183 

Below is the mapping and the IP addresses used.

193.106.175[.]48

185.185.68[.]40

193.106.174[.]58

109.172.85[.]126

185.185.69[.]129

185.12.127[.]116







