**Comandos identificados em IR relacionados a manipulação de contas de usuários para persistência, privilégios e outros.**

cmd.exe /Q /c net user [ADMIN_USER] ‘[PASSWORD]’ /dom 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1

cmd.exe /Q /c net user [ADMIN_USER] ‘[PASSWORD]’ /add 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1
