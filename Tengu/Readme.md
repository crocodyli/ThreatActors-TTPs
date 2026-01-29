# Tengu

**Tengu** is a Ransomware-as-a-Service (RaaS) group that emerged on the cyber intelligence radar in **October 2025**. It differentiates itself by being a highly technical operation that focuses on **hands-on intrusions** and the **double extortion** model.

The name is inspired by the mythological Japanese creature known for being a warrior and protector.

## History and Profile

| Attribute | Description |
|-----------|-------------|
| **Emergence** | October 2025, presenting itself on dark web forums as a mature platform despite being new |
| **Operational Model** | RaaS focused on data exfiltration before encryption. The group directs victims to exclusive Tor portals for negotiation |
| **Target Geography** | Notable concentration of attacks in **Portugal, Indonesia, and Brazil** in late 2025 |
| **Target Sectors** | Manufacturing (due to low downtime tolerance), Retail, and IT Services |

## Technical Characteristics

- **Binary**: Developed in .NET (approximately 534KB)
- **Evasion**: Extensively abuses LOLBins to avoid antivirus signatures
- **Execution**: Intensive use of PowerShell and CMD
- **Persistence**: Scheduled Tasks running with SYSTEM privileges

## Ransom Note Style

The group's ransom note is standardized with the prefix `[ TENGU ]` followed by a unique Ticket ID. They are known for offering **"limited free decoding"** (usually a small file) to try to build a false sense of trust during negotiation.

## Notable Victims

- Ksp Tlm Indonesia
- Lenotech Corporation
- Various medium and large enterprises globally
