# **AKIRA RANSOMWARE**

# The Akira Ransomware Group: History, Evolution, and Consolidation in 2025

The **Akira group**, operating under the **Ransomware-as-a-Service (RaaS)** model and associated with **Storm-1567** (also known as **GOLD SAHARA** or **PUNK SPIDER**), first emerged in **March 2023**.  
By **2025**, Akira had solidified its position as one of the most aggressive global cyber threats, marked by a significant evolution in its tactics and a dramatic increase in attack volume.

---

## Operational Model and Tactics, Techniques, and Procedures (TTPs)

Akira employs the **double-extortion model**, which involves two critical steps:

1. **Exfiltrating (stealing)** the victim’s data.
2. **Encrypting** systems to render them inoperable.

This dual threat—public disclosure of stolen data and system paralysis—is used to maximize pressure on victims to pay the ransom.

### Key TTPs

- **Initial Access:**  
  Targets **Cisco VPN devices** with single-factor authentication using brute-force attempts.  
  Exploits known vulnerabilities such as:
  - `CVE-2019-6693`
  - `CVE-2022-40684`

- **Encryption:**  
  The ransomware requires a **specific buildid at runtime** to execute encryption — a feature designed to impede external analysis.

- **Negotiation:**  
  Victims are directed to a negotiation portal on the **Tor network**, for example:  
  `akiralkzxzq2dsrzsrvbr2xgbbu2wgsmxryd4csgfameg52n7efvr2id[.]onion and akiral2iz6a7qgd3ayp3l6yub7xx2uep76idk3u2kollpj5z3z636bad[.]onion`

---

## Technical Evolution of the Ransomware

The **Akira malware** has rapidly evolved its underlying technology over time.

### Initial Version (March 2023)

- Developed in **C++**
- Used the **.akira** extension for encrypted files
- Created a ransom note named **akira_readme.txt**
- Contained a **decryption flaw**, allowing **Avast** to release a decryptor in **June 2023**

### Transition and New Version (July 2023)

- Fixed the decryption vulnerability  
- Shifted development to the **Rust** programming language  
- Introduced the **megazord.exe** filename  
- Used the **.powerranges** extension for encrypted files

### “Megazord” Variant (Mid-August 2023)

- Subsequent **Rust variant**
- Continued using the **.Powerrangers** extension  
- Firmly linked to Akira through its **Data Leak Site (DLS)** on the Tor network

---

## Growth and Targets in 2025

By **2025**, Akira’s activity had surged:

- In some regions, attacks grew by **300%** in the first five months of 2025 compared to the same period in 2024.
- Cemented its status as one of the **most active and technically advanced ransomware groups** of the year.

### Targeted Industries

Akira operates globally and targets multiple sectors without clear discrimination, including:

- Education  
- Finance  
- Manufacturing  
- IT  
- Energy  
- Healthcare  

A significant portion of its victims are **Small and Medium-sized Enterprises (SMEs)**.

---

## Connections with Other Groups

Akira maintains **strong operational and historical ties** with other major ransomware actors.

### Conti

- Analyses indicate **code similarities** and **operational links** with the now-defunct **Conti** ransomware group.  
- The initial Akira ransomware was **partially based on Conti V2 source code**, suggesting that **former Conti operators** migrated to the Akira operation.

### Other Collaborations

- Akira affiliates have also collaborated with **Snatch** and **BlackByte** ransomware operations.  
- Evidence includes an **open directory of tools** used by an Akira operator showing **shared components** with Snatch ransomware.

---

*This report outlines Akira’s trajectory from its emergence in 2023 to its consolidation as one of the most formidable ransomware threats in 2025, highlighting its adaptive capabilities, advanced TTPs, and strategic partnerships in the cybercrime ecosystem.*


![akira](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/e86fd08d-620a-4a90-975e-9280a76371c8)
