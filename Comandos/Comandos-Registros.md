| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\mXoRpcSsx /VE /T REG_SZ /F /D Service | XXX |
| REG QUERY HKLM\SYSTEM\CurrentControlSet\Control /v SystemStartOptions | Verifica as configurações de inicialização do sistema no registro |
| REG ADD HKLM\SYSTEM\CurrentControlSet\Control\SafeBoot\Minimal\VSS /VE /T REG_SZ /F /D Service  | Relacionado a VSS no contexto de inicialização mínima do Windows (Safe Mode) |
| HKLM\SOFTWARE\Microsoft\Windows Media Player NSS\3.0\Servers\D8B548F0-E306-4B2B-BD82-25DAC3208786\(Servidor malicioso) | Utilizado para armazenar configurações e informações relacioandas a sistema e software. Parece estar relacionado à configuração de servidores ou dispositivos associados ao WMP o nome do servidor pode estar disponível |
| HKU\S-1-5-21-4270068108-2931534202-3907561125-1001\Software\Microsoft\Windows\CurrentVersion\Shell Extensions\Cached\{ED50FC29-B964- 48A9-AFB3-15EBB9B97F36} {ADD8BA80-002B-11D0-8F0F-00C04FD7D062} 0xFFFF | Utilizado para recuperar algum tipo de Shell no Sistema Operacional |
| reg add HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters /v MaxMpxCt /d 65535 /t REG_DWORD /f | Configura a entrada de valor no registro para definir o limite máximo de contagens MPX para o serviço LanmanServer como 65535. O valor MaxMpxCt é relacionado a comunicação cliente x servidor em compartilhamento de arquivos |
| cmd.exe /Q /c reg add HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList
/t REG_DWORD /v [USER] /d 0 /f 1> \\127.0.0.1\ADMIN$\__[TIMESTAMP] 2>&1 | Ocultar usuário na tela de Login do Windows |
