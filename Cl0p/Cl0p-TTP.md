|       Tactic       |                       Technique                       |                                                          Details                                                          |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|   Initial Access   |              Phishing: Spearphishing (1566.001)             | Utilizes phishing emails tailored to specific companies (spearphishing) to download trojans or loaders.                  |
|                    |        Public-Facing Application Exploitation (T1190)        |                                   Exploits vulnerabilities in public-facing services.                                    |
|                    |                  Valid Accounts (T1078)                   |                              Uses compromised accounts for access via RDP.                              |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|     Execution      |                       Native API (T1106)                      |                          Utilizes native API to execute commands and routines.                          |
|                    |           Command and Scripting Interpreter (T1059)           |                Uses script interpreters like Windows Command Shell, Visual Basic, and PowerShell.                |
|                    |                   User Execution (T1204)                    |            User execution to run the payload or phishing link/attachments.            |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|   Persistence     |   Boot or Logon Autostart Execution (T1547)  |        Manipulates registry for ransomware execution as a service.       |
|                    | Create or Modify System Process: Windows Services (T1543.003) |                        Creates a specific service for ransomware execution.                        |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| Privilege Escalation |    Domain Policy Modification or GPO Modification (T1484.001)   |  Uses stolen credentials to access AD servers for obtaining admin privileges and attacking other machines on the network.  |
|                    |       Exploitation for Privilege Escalation (T1068)      |                        Uses vulnerabilities for privilege escalation.                       |
|                    |                  Hijack Execution Flow (T1574)                 |                                          Bypasses UAC verification                                          |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| Defense Evasion |         Masquerading: Invalid Code Signature (T1036.001)         |                  Utilizes digital signatures: DVERI, FADO, and TOV.                  |
|                    |          Impair Defenses by Disabling Tools (T1562.001)         |           Disables security software, effectively terminating it.           |
|                    |                Deobfuscate/Decode Files or Information (T1140)               |  The tool used for data exfiltration discards a base64 encoded file. |
|                    |        Clear Windows Event Log Evasion (T1070.001)        |                          Clears Windows event log.                          |
|                    |               Process Injection: DLL Injection (T1055.001)              |                 Injects payload to other tools or malwares.                 |
|                    |              Indirect Command Execution (T1202)              |      Uses a startup script before the system reaches the login screen through registry.     |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|      Discovery     |              File and Directory Discovery (T1083)              |           Searches for specific files and the directory related to its encryption.           |
|                    |             Remote System Discovery (T1018)             |                        Uses tools for network scans.                        |
|                    |                  Process Discovery (T1057)                   |                        Discovers certain processes for termination.                        |
|                    |         System Information Discovery (T1082)         |                 Identifies keyboard layout and other system information.                 |
|                    |                Query Registry (T1012)               |                   Queries specific registries as part of its routine.                   |
|                    |        Security Software Discovery (T1063)         |      Discovers security software used and subsequently stops it.      |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|   Lateral Movement  |                  Tool Transfer (T1570)                  |                  Uses RDP to download ransomware or other tools on the network.                 |
|                    | Remote Services: SMB/Windows Admin Shares (T1021.002) |          Uses a copy of the payload on the compromised AD and then creates a service on the target machine to execute the payload.         |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|      Collection    |                  Data from Local System (T1005)                  |     Uses RDP to manually search for valuable files or information for operators.     |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
| Command and Control |              Application Layer Protocol (T1071)              |                   Uses http/s for communication with C&C servers                   |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|     Exfiltration    |             Exfiltration Over Web Service (T1567)             |      Uses DEWMODE web shell and extracts the available file list from a “MySQL” database of an application. As well as files that are stored and gathered for exfiltration. |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
|       Impact       |              Data Encrypted for Impact (T1486)             | Uses Salsa20, AES, and ECDH encryption algorithms to encrypt files. |
|                    |          Inhibit System Recovery (T1490)         |                                 Deletes shadow copies of volumes.                                |
|:------------------:|:----------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------:|
