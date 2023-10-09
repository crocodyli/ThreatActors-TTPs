Este arquivo mantém comandos identificados que podem afetar o funcionamento da Inicialização do Sistema Operacional Windows, cujos comandos são executados por ransomwares. 


**Utilizado para manipular a configuração do Boot Configuration Data (BDC) no Windows, desabilita a recuperação do sistema no menu de inicialização do Windows.**

"bcdedit.exe" /set {default} recoveryenabled No

**Utilizado para configurar a política de inicialização do Windows para ignorar todas as falhas.**

"bcdedit.exe" /set {default} bootstatuspolicy ignoreallfailures

**O comando %windir%\System32\svchost.exe –k WerSvcGroup está iniciando o processo svchost.exe e especificando que ele deve pertencer ao grupo de serviços responsável pelo "Windows Error Reporting Service"**

%windir%\System32\svchost.exe –k WerSvcGroup
