# RANSOMWARE BLACKBASTA 

The BlackBasta ransomware, first identified in April 2022, quickly emerged as a significant threat, with clear parallels to the Conti ransomware group. Strong evidence suggests that BlackBasta may be a spin-off of Conti, which previously conducted devastating attacks on critical infrastructure. This suspicion is reinforced by similarities in operational methods, data leak site infrastructure, and communication styles used by both groups. Although Conti’s operators have denied any connection, evidence such as leaked chats suggests that former Conti members may be involved with BlackBasta.

BlackBasta’s operation involves a complex and highly structured attack chain, using a combination of customized tools and advanced techniques. The group exploits known vulnerabilities, such as ZeroLogon, NoPac, and PrintNightmare, to escalate privileges and deploy their payload. Additionally, BlackBasta uses tools like RClone for data exfiltration and disables security solutions before encrypting victim files. Tools like SystemBC, WindefCheck.exe, and the BIRDDOG backdoor have been associated with the group, with possible ties to the cybercrime group FIN7, also known as Carbanak.

The association with FIN7, an active financial group since 2012, strengthens the hypothesis that BlackBasta is an evolution of operations conducted by Conti and other Russian-based ransomware groups. The use of advanced tools like KNOTROCK, which optimizes data exfiltration and encryption, and persistence in exploiting security gaps with techniques like Living-off-the-Land (LotL), demonstrate the group’s ability to adapt and evolve its operations. These factors make BlackBasta one of the most sophisticated and dangerous cyber threats today.

## Group History

The BlackBasta ransomware group (Black Basta), part of the cybercrime group known as Cardinal (Storm-1811 and UNC4393), was identified in mid-April 2022 and operates as a Ransomware-as-a-Service (RaaS) operation. The gang’s affiliate program is closed, granting access only to selected members, and there is no evidence of marketing or promotion of their operation in underground forums. The group is known for conducting double extortion attacks, and according to collected data, its origin is Russian.

The group is financially motivated and extensively leverages initial access gained through botnet infections, such as QakBot, associated with entities UNC2633 and UNC2500, to deploy the ransomware.

Additionally, there are strong suspicions that BlackBasta’s operation is a rebranding of the Conti ransomware group, as well as a possible link to other Russian ransomware operations.

The first ransomware variant affected at least 12 companies within the month it was identified, and victims, after having their files encrypted, noticed the addition of the “.basta” extension to files and the display of a ransom note.

In some operations, affiliates were identified using Gh0st RAT for infiltration into victims’ networks. Moreover, the encryptor version did not bypass the victim's UAC (User Account Control), prompting permission to run as administrator.

The variant also reboots the device into Safe Mode with Networking, where the Windows service is used to automatically initiate file encryption. The encryption algorithm used is ChaCha20, and the generated key is then encrypted with the RSA-4096 public key embedded in the executable.

Encrypted files have their icons changed. After file encryption and extortion attempts, if the victim does not pay the ransom, the ransomware publishes the data on its Data Leak Site (DLS) to pressure the victim into making the payment.

```
http://stniiomyjliimcgkvdszvgen3eaaoz55hreqqx6o77yvmpwt7gklffqd.onion/
https://bastad5huzwkepdixedg2gekg7jk22ato24zyllp6lnjx7wdtyctgvyd.onion/
```

![image](https://github.com/user-attachments/assets/ae180150-5163-47e1-800b-1bf2fc10e592)
