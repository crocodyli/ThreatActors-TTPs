**Comandos no registros executados por operações de Ransomwares**

REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\mXoRpcSsx /VE /T REG_SZ /F /D Service

REG QUERY HKLM\SYSTEM\CurrentControlSet\Control /v SystemStartOptions

REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\VSS /VE /T REG_SZ /F /D Service
