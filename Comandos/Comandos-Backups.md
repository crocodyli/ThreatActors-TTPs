Este arquivo mantém comandos identificados que podem afetar o funcionamento do Backup no Windows, cujos comandos são executados por ransomwares. 

**Usado para excluir todas as cópias de backup do estado do sistema no Windows Server Backup, mantendo zero versões.**

"wbadmin.exe" delete systemstatebackup -keepVersions:0 -quiet

**Utilizado para excluir uma cópia de backup do estado do sistema Windows Server Backup.**

"wbadmin.exe" DELETE SYSTEMSTATEBACKUP

**Utilizado para excluir a cópia mais antiga do backup do sistema no Windows Server Backup.**

"wbadmin.exe" DELETE SYSTEMSTATEBACKUP -deleteOldest
