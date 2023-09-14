Este arquivo mantém comandos identificados que podem afetar o funcionamento do Log de Eventos do Windows, cujos comandos são executados por ransomwares. 

**Utilizado o wevutil para limpezar dos logs Security, System e Application.**

"cmd.exe" /c wevtutil cl security

"cmd.exe" /c wevtutil cl system

"cmd.exe" /c wevtutil cl application
