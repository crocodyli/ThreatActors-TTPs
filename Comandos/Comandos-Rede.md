**Comandos utilizados para softwares e também comandos de rede**

**Comando com manipulação do Microsoft Edge**

"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --flag-switches-begin --flag-switches-end --no-startup-window /prefetch:5

** Mapeamento de unidade de rede para uma unidade local:**

net use \\[computer name]  /user:[domain]\[user] [password] /persistent:no


net localgroup Administrators [USERNAME] /ADD

net localgroup ‘Remote Desktop Users’ [USERNAME] /add

net localgroup Administrators [USERNAME] /add 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1
