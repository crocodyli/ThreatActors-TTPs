| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| Enter-PSSession -ComputerName [EQUIPMENT] | Utilizado no PowerShell para estabelecer uma sessão interativa com um computador remoto. |
| netsh advfirewall firewall add rule name= »allow RemoteDesktop » dir=in  | Utilizado para adicionar regra de firewall para permitir o tráfego de entrada para o RDP (incompleto) |
| netsh advfirewall firewall add rule name="allow RemoteDesktop" dir=in action=allow protocol=TCP localport=3389 | Utilizado para adicionar regra de firewall para permitir o tráfego de entrada para o RDP (completo) |
| protocol=TCP localport=3389 action=allow | Configura regras de firewall para conexão RDP na porta padrão (3389) |
