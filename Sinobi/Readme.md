# Sinobi

**Sinobi** is a ransomware group that emerged on the global scene in **June 2025**. It quickly gained notoriety for its professional structure and aggressive **double extortion** tactics, becoming one of the most active groups in the last quarter of 2025.

## History and Origin

Sinobi did not emerge from scratch. Intelligence research indicates a direct technical lineage:

| Attribute | Description |
|-----------|-------------|
| **Lineage** | Widely considered a rebrand or successor of **Lynx**, which in turn has roots in **INC Ransomware** |
| **Operational Model** | Hybrid and restricted RaaS. Unlike groups that recruit affiliates in public forums, Sinobi maintains a low profile and prefers internal operators or selected partners |
| **Operational Philosophy** | Describes itself as "financially motivated" and adopts a "ninja" (stealth) posture, focusing on invading, exfiltrating, and encrypting as quickly as possible to minimize the detection window |
| **Geography** | Although infrastructure is believed to have connections to Russia, the group focuses almost exclusively on organizations in the **USA, Canada, Australia, and UK**, avoiding Eastern European targets |

## Technical Characteristics

- **Encryption**: AES-128-CTR and Curve-25519
- **File Extension**: `.SINOBI`
- **Techniques**: Living-off-the-Land (LotL), abusing legitimate system tools to go undetected
- **Exfiltration Tool**: Rclone to public cloud providers

## Target Sectors

- **Manufacturing** (due to low downtime tolerance)
- **Retail**
- **IT Services**
- **Healthcare** (documented attacks on medical clinics)

## Activity Metrics (Q4 2025)

- **Ranking**: 3rd most active group in Q4 2025 (ReliaQuest)
- **Growth**: 306% increase in victim listings on their leak site
- **Notable Incident**: Exfiltrated nearly 1TB of data in a single healthcare incident
