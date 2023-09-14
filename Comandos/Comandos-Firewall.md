*#Utilizado para ativar a regra do Firewall que permite a descoberta de rede.*

"netsh.exe" advfirewall firewall set rule "group=”Network Discovery”" new enable=Yes
