Este arquivo mantém comandos identificados que podem afetar o funcionamento do Log de Eventos do Windows, cujos comandos são executados por ransomwares. 

**Utilizado o wevutil para limpezar dos logs Security, System e Application.**

"cmd.exe" /c wevtutil cl security

"cmd.exe" /c wevtutil cl system

"cmd.exe" /c wevtutil cl application

fsutil behavior set SymlinkEvaluation R2L:1

for /F \”tokens=*\” %1 in (‘wevtutil.exe el’) DO wevtutil.exe cl \”%1\”
(Utilizado como um loop para percorrer a lsita de registros de eventos e limpar cada um deles). 
