# Ransomware DoNex

The ransomware group known as DoNex was first identified in mid-March 2024. According to the data collected, the samples used by the group were compiled in mid-February, suggesting that it is a relatively new operation.

It's worth noting that there is no information related to their Tactics, Techniques, or Procedures used for initial access purposes.

The encryption settings are defined by the operator according to a file, as presented below:

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/f46524aa-97cc-499b-8c8e-9362bcf7a7c8)

It is worth noting that the ransomware encrypts data on local and network drives. Additionally, according to the encryption, a victim ID is added as an extension to the encrypted files, and their icons are also altered.

The ransomware payload utilizes a combination of Salsa20 + RSA algorithms for file encryption.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/73c1c743-4272-4d9f-a533-9070b4bc573d)

The ransomware is typically configured to delete Volume Shadow Copies (VSS), making it difficult to recover the compromised environment.

After encryption, the ransomware creates a ransom note file called "Readme.<Victim ID>.txt," which demands that contact with the actor be made through the Tor network website, chat (TOX), or via email.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/b3be60fe-1b7f-4e13-aa01-77c18c68bde4)

It's worth mentioning that the ransomware known as DarkRace, which emerged in mid-2023, bears significant similarities to DoNex, particularly in the ransom note and the encryption payload configuration file.

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/0a8ff8a2-2d0b-46a2-86b5-a18323b9560a)

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/aefc5357-8130-4dfa-9246-d12a021fe79f)

It was possible to gain insight into the data leak site used by DoNex, as recent access to the site (20/05/2024), hosted on the Onion network, was offline. (http[:]//g3h3klsev3eiofxhykmtenmdpi67wzmaixredk5pjuttbx7okcfkftqd[.]onion/)

![image](https://github.com/crocodyli/ThreatActors-TTPs/assets/113185400/847fb373-0507-4a23-805c-60f2c02e7acb)


As there have been no records after February 27, 2024, it is speculated that the operation of this ransomware group was terminated and did not proceed with its objectives.

To assist in identification and a more detailed analysis of the artifact, the commands used by the ransomware to remove shadow copies of files are:

```
• wmic shadowcopy delete /nointeractive
• vssadmin Delete Shadows /All /Quiet
• wmic shadowcopy delete /nointeractive
• C:\Windows\SysWOW64\shutdown.exe shutdown -r -f -t 0
```

Finally, we have added the Tactics, Techniques, and Procedures (TTPs) used by the ransomware on the operating system, as well as identified indicators of compromise from this group.


### References

https://www.fortinet.com/blog/threat-research/ransomware-roundup-keganohitobito-and-donex







