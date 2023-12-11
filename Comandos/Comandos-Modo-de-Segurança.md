| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| bcdedit /set {current} safeboot network | Reinicialização no Modo de Segurança do Windows com Rede |
| bootcfg /raw /a /safeboot:network /id 1 | Antes que o Windows Vista |
| bcdedit /deletevalue {current} safeboot | Utilizado para remover a configuração de inicialização segurança do Modo de Segurança no BCD do Windows |
| bootcfg /raw /fastdetect /id 1 | Antes que o Windows Vista |
| bcdedit.exe /set {current} safeboot minimal
 | Configura a entrada de inicialização atual para iniciar no modo de inicialização segura com os drivers essenciais mínimos necessários para o funcionamento básico do sistema |
