# ShinyHunters — TTPs

The group's specialty is **identity-based exfiltration**, rarely using traditional malware.

| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Phishing: Spearphishing Voice (Vishing) | T1566.003 | Voice calls to helpdesk pretending to be employees to obtain password reset or MFA bypass. |
| Initial Access | Unsecured Credentials: Private Keys | T1552.004 | Scanning GitHub/Bitbucket repositories for exposed API keys and OAuth tokens (Secret Hunting). |
| Defense Evasion | Use Alternate Authentication Material: Application Access Token | T1550.001 | Use of malicious "Connected" OAuth applications to maintain persistent access to Salesforce and Microsoft 365 environments without needing passwords. |
| Collection | Data from Information Repositories | T1213 | Frequent targets include Confluence, Jira, and SharePoint to collect internal documentation and plaintext credentials. |
| Exfiltration | Exfiltration Over Web Service | T1567 | Use of legitimate cloud tools and native APIs to "drain" data from CRMs (Salesforce) directly to C2 servers. |
