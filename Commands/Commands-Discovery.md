Command used to collect detailed information about users and computers in an Active Directory domain

formatenumerationlimit = -1 
Install-WindowsFeature RSAT-AD-PowerShell Get-ADUser -Filter * -Properties * | Select-Object Enabled, CanonicalName, CN, Name,
SamAccountName, MemberOf, Company, Title, Description, Created, Modified, PasswordLastSet, LastLogonDate, logonCount, Department, telephoneNumber, MobilePhone, OfficePhone, EmailAddress, mail, HomeDirectory, homeMDB 

"> C:\ProgramData\AdUsers.txt Get-ADComputer -Filter * -Property * | Select-Object Enabled, Name, DNSHostName, IPv4Address, OperatingSystem, Description, CanonicalName, servicePrincipalName, LastLogonDate, whenChanged, whenCreated 

"> C:\ProgramData\AdComp.txt
nltest /domaintrusts

**Remove quotes before ">".**


| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| cmd.exe /C ipconfig /all | Used to display detailed information about the computer's network configuration |
| cmd.exe /C ver | Used to check the Windows operating system version being used |
| cmd.exe /C wmic os get osarchitecture | Used to check the operating system architecture |
| cmd.exe /C WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntiVirusProduct Get displayName | Used to list antivirus products installed and recognized by Windows Security Center |
| cmd.exe /C net group /domain Domain Computers | Used to list all computers that are members of the Domain Computers group in AD |
| cmd.exe /C netstat -nap tcp | Used to list actions in Windows and Linux through TCP ports and connections |
| cmd.exe /C whoami | Displays information about the logged-in username along with domain or local computer information |
| cmd.exe /c wevtutil qe Microsoft-Windows-TerminalServices-LocalSessionManager/Operational /c:5 /q:*[System [(EventID=25)]] /rd:true /f:text | Used to query events in the System event logs |
| cmd.exe /c dir /a c:\users\ | Used to list the contents of the C:\Users directory, including hidden or system files and folders |
