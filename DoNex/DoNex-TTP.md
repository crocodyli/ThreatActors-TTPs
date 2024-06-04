|    <br>Tactics    	|    <br>Technique    	|    <br>Details    	|
|---	|---	|---	|
|    <br>Execution TA0002    	|    <br>Windows Management Instrumentation T1047    	|    <br>The ransomware uses wmic.exe to query the OS.    	|
|    <br>Execution TA0002    	|    <br>Command   and Scripting Interpreter T1059    	|    <br>Apparent   internal use of CMD.exe.    	|
|    <br>Execution TA0002    	|    <br>Scripting T1064    	|    <br>Performs batch file execution.    	|
|    <br>Execution TA0002    	|    <br>Native API   T1106    	|    <br>The   process attempted to delete shadow volume copies (VSS).    	|
|    <br>Execution TA0002    	|    <br>Shared Modules T1129    	|    <br>The ransomware tries to carry out process   loader, malicious functions.    	|
|    <br>Persistence TA0003    	|    <br>Windows   Services T1543.003    	|    <br>Paralyzes   some types of services.     	|
|    <br>Defense Evasion<br>   <br> <br>   <br>TA0005    	|    <br>Obfuscated Files or Information T1027    	|    <br>Uses payload data encoding.    	|
|    <br>Defense Evasion TA0005    	|    <br>Indicator   Removal from Tools T1027.005    	|    <br>Contains   obfuscated stackstrings.     	|
|    <br>Defense Evasion TA0005    	|    <br>Embedded Payloads T1027.009    	|    <br>Discards interesting files and uses them in its   execution.    	|
|    <br>Defense Evasion TA0005    	|    <br>Masquerading   T1036    	|    <br>Creates   files within the user directory. Adversaries use it for purposes of   manipulating characteristics of their artifacts to make them appear   legitimate.    	|
|    <br>Defense Evasion TA0005    	|    <br>Scripting T1064    	|    <br>Execute files in bat.    	|
|    <br>Defense Evasion TA0005    	|    <br>Clear   Windows Event Logs T1070.001    	|    <br>Clears the   Windows Operating System event logs.    	|
|    <br>Defense Evasion TA0005    	|    <br>File Deletion T1070.004    	|    <br>Performs the deletion of shadow file data and   also self-exclusion.    	|
|    <br>Defense Evasion TA0005    	|    <br>Indirect   Command Execution T1202    	|    <br>The   adversary abuses utilities that allow the execution of commands to bypass   security controls.    	|
|    <br>Defense Evasion TA0005    	|    <br>File and Directory Permissions Modification T1222    	|    <br>Retrieves and sets file attributes.     	|
|    <br>Defense Evasion TA0005    	|    <br>Abuse   Elevation Control Mechanism T1548    	|    <br>The threat   actor uses privilege control mechanisms to bypass privilege control   mechanisms to obtain permissions.    	|
|    <br>Defense Evasion TA0005    	|    <br>Disable or Modify Tools T1562.001    	|    <br>Uses taskkill to terminate processes.    	|
|    <br>Defense Evasion TA0005    	|    <br>Hidden   Window T1564.003    	|    <br>Graphical   window operation.    	|
|    <br>Credential Access  TA0006    	|    <br>Input Capture T1056    	|    <br>Creates an object generally used for keystroke   capture purposes.    	|
|    <br>Discovery TA0007    	|    <br>System   Service Discovery T1007    	|    <br>List some   services and check their status.    	|
|    <br>Discovery TA0007    	|    <br>Application Window Discovery T1010    	|    <br>The threat actor attempts to obtain a list of   open applications and processes.    	|
|    <br>Discovery TA0007    	|    <br>System   Network Configuration Discovery T1016    	|    <br>Uses   ping.exe to check the status of network devices.    	|
|    <br>Discovery TA0007    	|    <br>Remote System Discovery T1018    	|    <br>Uses ping.exe to check the status of network   devices.    	|
|    <br>Discovery TA0007    	|    <br>Process   Discovery T1057    	|    <br>Malware   attempts to obtain information about the processes running on a system.    	|
|    <br>Discovery TA0007    	|    <br>System Information Discovery T1082    	|    <br>Searches and collects information related to the   Operating System.    	|
|    <br>Discovery TA0007    	|    <br>File and   Directory Discovery T1083    	|    <br>Reads the   files, gets the size and enumerates according to Windows.    	|
|    <br>Discovery TA0007    	|    <br>Network Share Discovery <br>   <br>T1135    	|    <br>Enumerates the victim's network shares.    	|
|    <br>Discovery TA0007    	|    <br>Security   Software Discovery  T1518.001    	|    <br>Attempts   to detect the virtual machine to make analysis more difficult.    	|
|    <br>Collection TA0009    	|    <br>Data Staged T1074    	|    <br>The actor uses data storage in a central   location before performing exfiltration.    	|
|    <br>Collection TA0009    	|    <br>Automated   Collection T1119    	|    <br>The   process attempted to detect the presence of forensic and debug utilities.    	|
|    <br>Impact TA0034    	|    <br>Data Encrypted for Impact<br>   <br>T1486    	|    <br>The ransomware renames files according to their   variant and writes a file for ransom note purposes.    	|
|    <br>Impact TA0034    	|    <br>Service   Stop T1489    	|    <br>Paralyzes   some types of services.    	|
|    <br>Impact TA0034    	|    <br>Inhibit System Recovery<br>   <br>T1490    	|    <br>The cmd.exe process invoked by the malware   performs the deletion of Windows volume shadow copies.    	|
|    <br>Impact TA0034    	|    <br>Data   Destruction T1485    	|    <br>The   ransomware deletes various types of user files.    	|
