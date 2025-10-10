# 8Base Ransomware Group

## Overview

The **8Base ransomware group** emerged in **March 2022**, operating quietly before rapidly expanding its activity in **2023**. Like many ransomware actors, 8Base adopted a **double extortion model**, encrypting and exfiltrating victim data, followed by threats of public exposure on its **data leak site**.

## Rapid Rise in 2023

Between **May and June 2023**, 8Base experienced a surge, listing **131 organizations** on its leak site within three months.  
The site, launched in **March 2023**, presented a deceptive public-relations narrative promoting “honesty and simplicity” — a tactic aimed at manipulating public perception and increasing victim pressure.

## Nomenclature, Code, and TTPs

8Base does **not develop its own ransomware**. Instead, the group uses **leaked ransomware builders** and customizes ransom notes to brand attacks as part of the “8Base” operation.

- **Ransomware Family:** Identified as using **Phobos Ransomware v2.9.1**, suggesting 8Base acts as an **affiliate** or leverages **Ransomware-as-a-Service (RaaS)**.  
- **Loader:** Uses **SmokeLoader** for initial obfuscation and payload injection.  
- **Similarity:** Reports (e.g., VMware) note overlaps with **RansomHouse** in leak site design and ransom note format.

**Summary:**  
8Base is an **opportunistic, high-volume threat actor** that achieved significant success during 2023 by repurposing existing ransomware code (notably Phobos) and maintaining a strong focus on extortion. Despite its scale, most of its operations remain underreported outside its own leak platform.

## Current Status (2025): Disruption and Decline

By **2025**, 8Base’s operations have been **effectively dismantled** due to **international law enforcement actions**.

### 1. Law Enforcement Actions and Arrests
- **Operation PHOBOS AETOR (Feb 2025):** Coordinated international action led to the arrest of **four Russian nationals** in Thailand, suspected of leading 8Base.  
- **Formal Charges:** The **U.S. DOJ** indicted *Roman Berezhnoy* and *Egor Nikolaevich Glebov* (a.k.a. *Affiliate 2803*) for deploying Phobos ransomware, extorting over 1,000 victims.  
- **Infrastructure Seizure:** 8Base’s leak site was seized by **Bavarian State Police (Germany)**, and **27 servers** linked to the group were taken down.

### 2. Operational Cessation
- **End of Leak Activity:** Threat intel reports from Q2 2025 confirm 8Base ceased publishing new victims.  
- **Decline in 2024:** Activity already showed reduction in 2024, attributed to enforcement pressure targeting the broader Phobos network.

### 3. Victim Impact and Mitigation
- **Free Decryptor Released:** In **July 2025**, Japan’s National Police Agency released a **decryptor** for **Phobos/8Base ransomware**, enabling recovery without ransom payment.  
- **Victim Notifications:** Over **400 organizations** were warned of ongoing or imminent ransomware activity through coordinated law enforcement operations.

## Conclusion

By **2025**, 8Base has been **neutralized as an active threat**, marking the end of one of the most prolific Phobos-based ransomware affiliates.  
However, **vigilance remains critical** — remnants and affiliates of 8Base may **rebrand or migrate** to other **Ransomware-as-a-Service (RaaS)** ecosystems.

**Reference:** [ransomware.live/group/8base](https://www.ransomware.live/group/8base)
