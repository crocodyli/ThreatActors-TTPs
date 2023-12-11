Comando utilizado para coletar informações detalhadas sobre usuários e computadores em um domínio do Active Directory

formatenumerationlimit = -1 
Install-WindowsFeature RSAT-AD-PowerShell
Get-ADUser -Filter * -Properties * | Select-Object Enabled, CanonicalName, CN, Name,
SamAccountName, MemberOf, Company, Title, Description, Created,
Modified, PasswordLastSet, LastLogonDate, logonCount, Department,
telephoneNumber, MobilePhone, OfficePhone, EmailAddress, mail, HomeDirectory, homeMDB
"> C:\ProgramData\AdUsers.txt
Get-ADComputer -Filter * -Property * | Select-Object Enabled, Name, DNSHostName, IPv4Address,
OperatingSystem, Description, CanonicalName,
servicePrincipalName, LastLogonDate, whenChanged, whenCreated 
"> C:\ProgramData\AdComp.txt
nltest /domaintrusts
