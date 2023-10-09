Este arquivo mantém comandos identificados que podem afetar o funcionamento do VSS, cujos comandos são executados por ransomwares. 

**Excluir todas as cópias de sombra (shadow copies) armazenadas pelo serviço VSS.**

vssadmin.exe delete shadows /all /quiet

**Utilizado para todas as cópias de sombra do sistema usando o WMIC.**

"wmic.exe" SHADOWCOPY DELETE /nointeractive

**Adiciona um novo valor à cheva de Registro que configura o serviço Volume Shadow Copy para iniciar em modo de inicialização segura mínima**

REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\VSS /VE /T REG_SZ /F /D Service
