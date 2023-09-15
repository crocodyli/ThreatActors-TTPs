**Reinicialização no Modo de Segurança do Windows com Rede**. 

bcdedit /set {current} safeboot network

Antes que o Windows Vista:
 	
bootcfg /raw /a /safeboot:network /id 1



 	
**Utilizado para remover a configuração de inicialização segurança do Modo de Segurança no BCD do Windows.**

bcdedit /deletevalue {current} safeboot

Antes que o Windows Vista

bootcfg /raw /fastdetect /id 1
