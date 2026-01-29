# Mapped by: carlosadrianosj

## Lockbit
| Tatica ID | Tecnica ID | Nome | Descricao |
|---|---|---|---|
| Tatica ID | Tecnica ID | Nome | Descrição |
| Execution TA0002 
| Execution TA0002 | T1106 | Native API 	 | Copious use of Windows Native API calls / |
| Execution TA0002 | T1047 | WMI  | Used for deleting volume shadow copies / |
| Persistence TA0003  | T1547.001 	 | Registry Run Keys 	 | If started in safe mode, sets registry to start on next normal boot.  |
| Privilege Escalation TA0004  | T1134.001 	 | Token Impersonation 	 | Starts processes with known token with the purpose of duplicating tokens.  |
| Defense EvasionTA0005 | T1562.001 	 | Disable or Modify Tool 	 | Stops and deletes Windows Security Services  |
| Defense EvasionTA0005 | T1562.002 	 | Disable Windows Event Logging 	 | Stops and deletes service responsible for event logging  |
| Defense EvasionTA0005 
| Defense EvasionTA0005 
| Defense EvasionTA0005 | T1078.001 	 | Default Accounts 	 | Attempts to login with default admin credentials  |
| Discovery TA0007 | T1083  | File and Directory Discovery 	 | Traverses mounted disks and file system  |
| Discovery TA0007 | T1135  | Network Share Discovery 	 | Traverses all shared network resources |
| Discovery TA0007 | T1120  | Peripheral Device Discovery 	 | Locates removable storage devices   |
| Discovery TA0007 | T1057  | Process Discovery 	 | Looks for specific processes to stop |
| Discovery TA0007 | T1018 	 | Remote System Discovery 	 | Locates domain controller and DNS server / |
| Discovery TA0007 | T1082  | System Information Discovery | Gets specific information about the operating system |
| Lateral Movement TA0008  | T1021.002 | Windows Admin Shares | User of valid accounts to interact with remote network shares/ |
| Command and Control TA0011 | T1071.001 | Web Protocols | Uses HTTP to communicate with C2  |
| Command and Control TA0011 
| Exfiltration TA0010  | T1041 | Exfiltration Over C2 Channel | Sends basic system information in POST request  |
| Impact TA0040 	 | `T1485 	 | Data Destruction 	 | Recycle bin and shadow copies are deleted/ |
| Impact TA0040 	 
| Impact TA0040 	 
