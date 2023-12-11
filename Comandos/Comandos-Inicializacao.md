| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| bcdedit.exe" /set {default} recoveryenabled No | Utilizado para manipular a configuração do Boot Configuration Data (BDC) no Windows, desabilita a recuperação do sistema no menu de inicialização do Windows. |
| bcdedit.exe" /set {default} bootstatuspolicy ignoreallfailures | Utilizado para configurar a política de inicialização do Windows para ignorar todas as falhas |
| %windir%\System32\svchost.exe –k WerSvcGroup | Inicia o processo svchost.exe e especificando que ele deve pertencer ao grupo de serviços responsável pelo "Windows Error Reporting Service" |
