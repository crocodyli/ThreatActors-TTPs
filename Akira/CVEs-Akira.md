# Vulnerabilities and Exploitation by Akira Ransomware (2025)

| **Vulnerability / Issue** | **Description of Exploitation by Akira** |
|:---:|:---|
| **Abuse of Stolen Credentials** | The most common vector involves the use of valid credentials — including accounts protected by MFA/OTP — stolen during previous breaches. Attackers leverage these credentials to log into VPNs even when devices are patched. |
| **CVE-2024-40766** | Improper access control vulnerability in SonicWall SonicOS (SSL VPN). Linked to credential theft campaigns silently executed in 2024 and actively exploited by Akira in 2025. |
| **Unconfirmed Critical Vulnerabilities (CVE-2025-4059x Series)** | Researchers reported new vulnerabilities in SonicWall SMA100 appliances (CVE-2025-40596 through CVE-2025-40599) that may allow authentication bypass or remote code execution. Although not formally attributed to Akira, these flaws represent a high risk for adoption by the group. |
| **CVE-2020-3259** | Information disclosure (memory leak) in Cisco ASA and FTD devices. Enables attackers to extract sensitive data such as VPN credentials directly from device memory. |
| **CVE-2023-20269** | Access control flaw in Cisco ASA SSL VPN. Exploited to bypass authentication and gain initial access to the network. |
| **Other Cisco Vulnerabilities (e.g., CVE-2025-20333)** | In September 2025, new critical vulnerabilities affecting Cisco ASA/FTD products were observed being exploited for Remote Code Execution (RCE). While not officially linked to Akira, these incidents align with the group’s focus on network edge devices. |
| **Single-Factor VPN Access** | VPN services without Multi-Factor Authentication (MFA) remain a primary weakness, allowing stolen credentials from phishing or data leaks to be reused for access. |
| **Exposed or Outdated Firewalls** | In several 2025 incidents, outdated edge firewalls were identified as the point of entry, enabling access to critical infrastructure (e.g., a European healthcare conglomerate). |
| **Inactive or Ghost Accounts** | Akira exploits dormant third-party or vendor accounts that were never deactivated, using them for initial access and privilege escalation. |
| **Operational Observation — Dwell Time** | The average dwell time in these 2025 campaigns is notably short: less than **four hours** from VPN login to full encryption. |
