# Coinbase Cartel

The **Coinbase Cartel** (also known by the codename **shinysp1d3r**) is a cybercrime group that emerged in mid-September 2025. The group gained attention for adopting a model aggressively focused on **data exfiltration (pure extortion)** rather than traditional file encryption, although it possesses technical capabilities for both.

## Operational Model

### Leak-Only/Direct Extortion
Unlike classic ransomware groups, Coinbase Cartel frequently focuses on stealing large volumes of sensitive data and threatening public disclosure on their **Data Leak Site (DLS)** to force payment, without necessarily locking the victim's operations with ransomware.

### Target Segments
Initially focused on **Transportation and Logistics**, the group rapidly expanded to **IT and Telecommunications** sectors.

### Key Observation
The group monitors code repositories (GitHub/Bitbucket) searching for exposed API keys.

## Tactics, Techniques and Procedures (TTPs)

The group demonstrates a sophisticated level of infiltration, especially in cloud and virtualization environments:

### Initial Access
- Use of **insider recruitment** (bribing employees or third-party contractors)
- **Vishing campaigns** (voice phishing)
- Abuse of **malicious OAuth applications** to bypass MFA

### Cloud Environments
- Exploit credentials exposed in code repositories (Bitbucket, GitHub) and AWS keys
- Use custom Python scripts that mimic legitimate tools (such as Salesforce Data Loader) to exfiltrate data in bulk without raising alerts

### Virtualization (ESXi)
- Utilize a loader called **shinysp1d3r**, which operates in memory via shell scripts on VMware ESXi hosts
- Capability to disable snapshots and encrypt VMDK disks in parallel

### Persistence
- Create hidden administrative accounts
- Add authorized SSH keys on compromised servers

## Technical Capabilities

| Capability | Description |
|------------|-------------|
| Data Exfiltration | Primary focus - large-scale data theft for extortion |
| Ransomware Encryption | Secondary capability - VMDK encryption via shinysp1d3r loader |
| Cloud Compromise | Advanced techniques for AWS, Azure, Salesforce, Microsoft 365 |
| ESXi Attacks | Memory-based loader with snapshot disabling and parallel encryption |

## Indicators

- **Loader Name**: shinysp1d3r
- **Target Platforms**: VMware ESXi, AWS, Azure, SaaS platforms
- **Exfiltration Tools**: Rclone, custom Python scripts
- **Communication**: Onion-based Data Leak Site (DLS)
