| TACTIC | TECHNIQUE | ID | DETAILS |
|:---|:---|:---:|:---|
| Initial Access | Phishing: Spearphishing (1566.001) |  | Utilizes phishing emails tailored to specific companies (spearphishing) to download trojans or loaders. |
| Execution | Native API | T1106 | Utilizes native API to execute commands and routines. |
| Persistence | Boot or Logon Autostart Execution | T1547 | Manipulates registry for ransomware execution as a service. |
| Privilege Escalation | Domain Policy Modification or GPO Modification | T1484.001 | Uses stolen credentials to access AD servers for obtaining admin privileges and attacking other machines on the network. |
| Defense Evasion | Masquerading: Invalid Code Signature | T1036.001 | Utilizes digital signatures: DVERI, FADO, and TOV. |
| Discovery | File and Directory Discovery | T1083 | Searches for specific files and the directory related to its encryption. |
| Lateral Movement | Tool Transfer | T1570 | Uses RDP to download ransomware or other tools on the network. |
| Collection | Data from Local System | T1005 | Uses RDP to manually search for valuable files or information for operators. |
| Command and Control | Application Layer Protocol | T1071 | Uses http/s for communication with C&C servers |
| Exfiltration | Exfiltration Over Web Service | T1567 | Uses DEWMODE web shell and extracts the available file list from a “MySQL” database of an application. As well as files that are stored and gathered for exfiltration. |
| Impact | Data Encrypted for Impact | T1486 | Uses Salsa20, AES, and ECDH encryption algorithms to encrypt files. |