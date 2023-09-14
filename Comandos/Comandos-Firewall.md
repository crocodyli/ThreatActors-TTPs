Este arquivo mantém comandos identificados que podem afetar o funcionamento do Firewall, cujos comandos são executados por ransomwares. 

**Utilizado para ativar a regra do Firewall que permite a descoberta de rede.**

"netsh.exe" advfirewall firewall set rule "group=”Network Discovery”" new enable=Yes
