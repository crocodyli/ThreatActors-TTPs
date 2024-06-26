| Tactic                               | Technique                                                                                        | ID      |
|--------------------------------------|--------------------------------------------------------------------------------------------------|----------|
| Initial Access                       | External Remote Services                                                                         | T1133    |
|                                      | Valid Accounts: Local Accounts                                                                   | T1078.003|
| Execution                            | Native API                                                                                       | T1106    |
|                                      | User Execution: Malicious File                                                                   | T1204.002|
|                                      | Command and Scripting Interpreter: PowerShell                                                    | T1059.001|
|                                      | Command and Scripting Interpreter: Windows Command Shell                                         | T1059.003|
|                                      | System Services: Service Execution                                                               | T1569.002|
| Defense Evasion                     | Masquerading: Match Legitimate Name Local                                                        | T1036.005|
|                                      | Discovery: Time Discovery                                                                       | T1124    |
|                                      | Network Share Discovery                                                                         | T1135    |
|                                      | Remote System Discovery                                                                         | T1018    |
|                                      | File and Directory Discovery                                                                    | T1083    |
|                                      | Process Discovery                                                                               | T1057    |
|                                      | Network Configuration Discovery: Network Connection Enumeration                                  | T1016.001|
|                                      | Exploitation for Privilege Escalation                                                            | T1068    |
| Lateral Movement                    | Tool Transfer                                                                                   | T1570    |
|                                      | External Remote Services                                                                         | T1333    |
| Credential Access                   | Exploitation for Credential Access                                                               | T1212    |
|                                      | Remote Services: External Remote Services                                                         | T1021.002|
| Command and Control                | Remote Desktop Protocol                                                                          | T1219    |
|                                      | Multi-hop Proxy                                                                                 | T1090.003|
|                                      | Application Layer Protocol: DNS                                                                  | T1071.004|
|                                      | Application Layer Protocol: Web Protocols                                                        | T1071.001|
