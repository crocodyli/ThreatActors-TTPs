# **Rhysida**
Rhysida is a ransomware-as-a-service (RAAS) group that emerged in May 2023. The group utilizes a namesake ransomware through phishing attacks and Cobalt Strike to breach the targets' networks and deploy their payloads.
The group threatens to publicly distribute exfiltrated data if the ransom is not paid, and it's worth mentioning that Rhysida is still in the early stages of development.
The ransomware leaves PDF notes in the affected folders, instructing victims to contact the group through its portal, and payment is made via Bitcoin.
After encryption, the ransomware appends the extension ".ryshida" to encrypted files.
For encryption purposes, Trend Micro published an analysis stating that the ransomware uses a 4096-bit RSA key and AES-CTR for encryption.
In addition to the encryption method, Trend Micro published an analysis of the Ryshida Ransomware attack chain.
![rhysida-2](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/879c92aa-c99b-4e36-97fd-42ea5fb45994)
Finally, the group has a website on the Tor network hosting the companies that have been breached.
![ransom](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/77fa0ac2-0d8d-4f9c-9f48-9c3728b42823)
## REFERENCES
[Trend Micro Analysis](https://www.trendmicro.com/en_dk/research/23/h/an-overview-of-the-new-rhysida-ransomware.html)
[HHS Sector Alert](https://www.hhs.gov/sites/default/files/rhysida-ransomware-sector-alert-tlpclear.pdf)
