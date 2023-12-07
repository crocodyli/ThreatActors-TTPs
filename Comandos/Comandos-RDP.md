Enter-PSSession -ComputerName [EQUIPMENT]

netsh advfirewall firewall add rule name= »allow RemoteDesktop » dir=in 

protocol=TCP localport=3389 action=allow
