Este arquivo mantém comandos identificados que podem afetar o funcionamento do VSS, cujos comandos são executados por ransomwares. 

**Excluir todas as cópias de sombra (shadow copies) armazenadas pelo serviço VSS.**

vssadmin.exe delete shadows /all /quiet

**Utilizado para todas as cópias de sombra do sistema usando o WMIC.**

"wmic.exe" SHADOWCOPY DELETE /nointeractive
