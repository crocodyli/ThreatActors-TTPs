| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| cmd.exe /Q /c net user [ADMIN_USER] '[PASSWORD]' /dom 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1 | Combination of multiple instructions to add a user to a domain and redirect command output to a file on a network share |
| cmd.exe /Q /c net user [ADMIN_USER] '[PASSWORD]' /add 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1 | Combination of multiple instructions to add a user and redirect command output to a file on a network share |
| cmd.exe /c net user <name> /add | Used to create a new user in Windows |
| cmd.exe /c net localgroup Administrators <name> /add | CMD instruction that adds a specific user to the local Administrators group of the computer |
| cmd.exe /c net localgroup Administrators | Used to display all members of the local "Administrators" group on the system |
| net localgroup Administrators [USERNAME] /ADD | Adds a specific user to the admin group |
| net localgroup 'Remote Desktop Users' [USERNAME] /add | Adds user to the RDP group |
| net localgroup Remote Desktop Users [USERNAME] /add 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1 | Combination of multiple instructions to add a user and redirect command output to a file on a network share |
