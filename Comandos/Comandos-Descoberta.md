Comando utilizado para coletar informações detalhadas sobre usuários e computadores em um domínio do Active Directory
formatenumerationlimit = -1 
Install-WindowsFeature RSAT-AD-PowerShell Get-ADUser -Filter * -Properties * | Select-Object Enabled, CanonicalName, CN, Name,
SamAccountName, MemberOf, Company, Title, Description, Created, Modified, PasswordLastSet, LastLogonDate, logonCount, Department, telephoneNumber, MobilePhone, OfficePhone, EmailAddress, mail, HomeDirectory, homeMDB 
"> C:\ProgramData\AdUsers.txt Get-ADComputer -Filter * -Property * | Select-Object Enabled, Name, DNSHostName, IPv4Address, OperatingSystem, Description, CanonicalName, servicePrincipalName, LastLogonDate, whenChanged, whenCreated 
"> C:\ProgramData\AdComp.txt
nltest /domaintrusts
**Remover as aspas antes de ">".**
| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| cmd.exe /C ipconfig /all | Utilizado para exibir informações detalhadas sobre a configuração de rede do seu computador |
| cmd.exe /C ver | Utilizado para verificar a versão do sistema operacional Windows que está sendo utilizado |
| cmd.exe /C wmic os get osarchitecture | Utilizado para verificar a arquitetura do sistema operacional |
| cmd.exe /C WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntiVirusProduct Get displayName | utilizado para listar os produtos de antivírus instalados e reconhecidos pelo CSW do Windows |
| cmd.exe /C net group /domain Domain Computers | Utilizado para listar todos os computadores que são membros do Domain Computer em um AD |
| cmd.exe /C netstat -nap tcp | Utilizado para listar ações em Windows e Linux por meio de portas e conexões TCP |
| cmd.exe /C whoami | Exibe informações sobre o nome de usuário logado, juntamente com informações relacionadas ao domínio ou ao computador local |
| cmd.exe /c wevtutil qe Microsoft-Windows-TerminalServices- LocalSessionManager/Operational /c:5 /q:*[System [(EventID=25)]] /rd:true /f:text | Utilizado para consultar eventos nos logs de eventos do Sistema |
| cmd.exe /c dir /a c:\users\ | Utilizado para listar o conteúdo do diretório C:\Users, incluido arquivos e pastas ocultos ou de sistema |
