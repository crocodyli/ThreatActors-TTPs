| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| Enter-PSSession -ComputerName [EQUIPMENT] | Used in PowerShell to establish an interactive session with a remote computer. |
| netsh advfirewall firewall add rule name="allow RemoteDesktop" dir=in | Used to add a firewall rule to allow inbound traffic for RDP (incomplete) |
| netsh advfirewall firewall add rule name="allow RemoteDesktop" dir=in action=allow protocol=TCP localport=3389 | Used to add a firewall rule to allow inbound traffic for RDP (complete) |
| protocol=TCP localport=3389 action=allow | Configures firewall rules for RDP connection on the default port (3389) |
