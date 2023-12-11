| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| cmd.exe /Q /c net user [ADMIN_USER] ‘[PASSWORD]’ /dom 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1 | Combinação de várias instruções para adicionar um usuário em um domínio e redirecionar a saída do comando para um arquivo em um compartilhamento de rede |
| cmd.exe /Q /c net user [ADMIN_USER] ‘[PASSWORD]’ /add 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1 | Combinação de várias instruções para adicionar um usuário e redirecionar a saída do comando para um arquivo em um compartilhamento de rede |
| cmd.exe /c net user <nome> /add | Utilizado para criar novo usuário no Windows |
| cmd.exe /c net localgroup Administrators <nome> /add | Instrução para o CMD que adiciona um usuário específico ao grupo local de Administradores do computador |
| cmd.exe /c net localgroup Administrators | Utilizado para exibir todos os membros do grupo local "Administrators" no sistema |
