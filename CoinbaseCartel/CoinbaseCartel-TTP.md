# Coinbase Cartel — TTPs

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Valid Accounts: Cloud Accounts | T1078.004 | Massive focus on credential theft from SaaS platforms (Salesforce, Microsoft 365). |
| Initial Access | Phishing: Spearphishing Voice (Vishing) | T1566.003 | Use of voice social engineering to induce employees to authorize malicious OAuth applications. |
| Initial Access | Replication Through Removable Media | T1091 | Although less common, there are records of attempts via service providers (corrupted insiders/third parties). |
| Initial Access | External Remote Services | T1133 | Abuse of VPNs and RDP using credentials harvested by infostealers or purchased from IABs (Initial Access Brokers). |
| Execution | Command and Scripting Interpreter: Python | T1059.006 | Use of custom scripts that mimic legitimate tools (e.g., Salesforce Data Loader) for rapid exfiltration. |
| Execution | Command and Scripting Interpreter: Unix Shell | T1059.004 | The shinysp1d3r loader is executed via shell scripts on ESXi systems. |
| Execution | User Execution: Malicious File | T1204.002 | Deceiving users into executing fake OAuth connectors. |
| Persistence | Create Account: Local Account | T1136.001 | Creation of "ghost" administrator users on VMware hosts. |
| Persistence | Account Manipulation: Additional Cloud Credentials | T1098.003 | Adding new secrets or keys to existing OAuth applications to maintain access even after password changes. |
| Defense Evasion | Indicator Removal: Clear Windows Event Logs | T1070.001 | Systematic cleaning of syslogs and audit logs in ESXi environments. |
| Defense Evasion | Impair Defenses: Disable or Modify Tools | T1562.001 | Disabling virtual machine snapshots before encryption (when they opt for it). |
| Defense Evasion | Masquerading: Match Legitimate Name or Location | T1036.005 | Renaming malicious binaries to names of critical VMware processes or backup tools. |
| Discovery | File and Directory Discovery | T1083 | Scanning vCenter datastores to identify critical VMs and databases. |
| Discovery | Remote System Discovery | T1018 | Enumeration of Active Directory objects from non-privileged user accounts. |
| Discovery | Cloud Service Dashboard | T1538 | Exploration of AWS/Azure consoles to identify EBS volumes and S3 instances. |
| Exfiltration | Exfiltration Over Web Service: Exfiltration to Cloud Storage | T1567.002 | Use of tools like Rclone to send data to providers such as Mega or Dropbox. |
| Impact | Data Encrypted for Impact | T1486 | Secondary technique, focused on .vmdk files via shinysp1d3r loader. |
| Impact | Financial Theft | T1657 | Direct extortion based on the threat of leaking data on Onion forums (DLS). |
