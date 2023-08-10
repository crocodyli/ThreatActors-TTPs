|         Tática         |                           Técnica                            |                                                                                  Detalhes                                                                                  |
|:----------------------:|:------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|    Acesso   Inicial    |                           Phishing                           |                                                         Rhsyida utiliza iscas de phishing para acessos   iniciais.                                                         |
|         TA0001         |                             T1566                            |                                                                                                                                                                            |
| Movimentação   Lateral |                    Remote Services: PsExec                   |                                                           Utilização da ferramenta PsExec para execuçao   remota                                                           |
|         TA0008         |                           T1021.002                          |                                                                                                                                                                            |
|                        |                Remote Services: Cobalt Strike                |                                                            Utilização da ferramenta para movimentação   lateral                                                            |
|                        |                           T1021.002                          |                                                                                                                                                                            |
|      Persistência      |          Tarefa/Trabalho agendado: Tarefa   agendada         |                               Quando executado com o argumento “-S”, ele   criará uma tarefa agendada camada Rhsd que executará o Ransomware.                              |
|         TA0003         |                           T1053.005                          |                                                                                                                                                                            |
|        Execução        | Comando e Intérprete de Script:   Shell de comando do Windws |                                                        Ele utiliza o cmd.exe para executar comandos   para execução.                                                       |
|         TA0002         |                           T1059.003                          |                                                                                                                                                                            |
|                        |       Interpretador de Comandos e   Scripts: PowerShell      |                                        Utiliza o PowerShell para criar uma tarefa   agendada chamada Rhsd apontado para o Ransomware                                       |
|                        |                           T1059.001                          |                                                                                                                                                                            |
|   Evasão   de Defesa   |                          SilentKill                          |      Utiliza script para encerrar   processos e serviços relacionados à segurança, excluir cópias de sombra,   modifica configurações de RDP e altera a senha do AD.       |
|         TA0005         |         Remoção do Indicador: Exclusão de   Arquivos         |                                 Rhysida se exclui após a execução. A tarefa   agendada “Rhsd” criada também seria excluída após a execução.                                |
|                        |                           T1070.004                          |                                                                                                                                                                            |
|                        |  Remoção do Indicador: Limpar Logs   de Eventos do Windows   |                                                    Ele utiliza o wevutil.xe para limpar os logs de   eventos do Windows.                                                   |
|                        |                           T1070.001                          |                                                                                                                                                                            |
|       Descoberta       |             Descoberta de arquivos e   diretórios            |                                                Enumera e procura arquivos para criptografar em   todas as unidades locais.                                                 |
|         TA0007         |                             T1083                            |                                                                                                                                                                            |
|                        |            Descoberta de Informações do   Sistema            |                                                                            Obtém as informações:                                                                           |
|                        |                             T1082                            |                                                                                                                                                                            |
|                        |                                                              |                                                                           Número de processadores                                                                          |
|                        |                                                              |                                                                           Informações do Sistema                                                                           |
|         Impacto        |               Inibe a Recuperação do   Sistema               |                                                       Executa o vssadmin para remover cópias de sombra   de volumes.                                                       |
|         TA0040         |                             T1490                            |                                                                                                                                                                            |
|                        |               Dados criptografados para impacto              |                                              Utiliza uma chave RSA de 4096   bits e Cha-Cha20 para criptografia dos arquivos.                                              |
|                        |                             T1486                            |                                                                                                                                                                            |
|                        |                                                              |                                                             Ele evita criptografar arquivos   com as strings:                                                              |
|                        |                                                              |                                                                                                                                                                            |
|                        |                                                              |                                                                              ·           .bat                                                                              |
|                        |                                                              |                                                                              ·           .bin                                                                              |
|                        |                                                              |                                                                              ·           .cab                                                                              |
|                        |                                                              |                                                                              ·           .cmd                                                                              |
|                        |                                                              |                                                                              ·           .com                                                                              |
|                        |                                                              |                                                                              ·           .cur                                                                              |
|                        |                                                              |                                                                            ·           .diagcab                                                                            |
|                        |                                                              |                                                                            ·           .diagcfg                                                                            |
|                        |                                                              |                                                                            ·           .diagpkg                                                                            |
|                        |                                                              |                                                                              ·           .drv                                                                              |
|                        |                                                              |                                                                              ·           .dll                                                                              |
|                        |                                                              |                                                                              ·           .exe                                                                              |
|                        |                                                              |                                                                              ·           .hlp                                                                              |
|                        |                                                              |                                                                              ·           .hta                                                                              |
|                        |                                                              |                                                                              ·           .ico                                                                              |
|                        |                                                              |                                                                              ·           .msi                                                                              |
|                        |                                                              |                                                                              ·           .ocx                                                                              |
|                        |                                                              |                                                                              ·           .ps1                                                                              |
|                        |                                                              |                                                                              ·           .psm1                                                                             |
|                        |                                                              |                                                                              ·           .scr                                                                              |
|                        |                                                              |                                                                              ·           .sys                                                                              |
|                        |                                                              |                                                                              ·           .ini                                                                              |
|                        |                                                              |                                                                           ·           .Thumbs.db                                                                           |
|                        |                                                              |                                                                              ·           .url                                                                              |
|                        |                                                              |                                                                              ·           .iso                                                                              |
|                        |                                                              |                                                                                                                                                                            |
|                        |                                                              |                                                       Evita criptografar arquivos   encontrados nas seguintes pastas:                                                      |
|                        |                                                              |                                                                                                                                                                            |
|                        |                                                              |                                                                          ·           $Recycle.Bin                                                                          |
|                        |                                                              |                                                                              ·           Boot                                                                              |
|                        |                                                              |                                                                     ·           Documents and Settings                                                                     |
|                        |                                                              |                                                                            ·           PerfLogs                                                                            |
|                        |                                                              |                                                                           ·           ProgramData                                                                          |
|                        |                                                              |                                                                            ·           Recovery                                                                            |
|                        |                                                              |                                                                    ·           System Volume Information                                                                   |
|                        |                                                              |                                                                             ·           Windows                                                                            |
|                        |                                                              |                                                                          ·           $RECYCLE.BIN                                                                          |
|                        |                                                              |                                                                             ·           ApzData                                                                            |
|                        |                                                              |                                                                                                                                                                            |
|                        |                                                              |                                                          Ele criptografa todas as   unidades do sistema de A a Z.                                                          |
|                        |                                                              |                                                                                                                                                                            |
|                        |                                                              |                                                                   Ele solta a seguinte nota de   resgate:                                                                  |
|                        |                                                              |                                                                                                                                                                            |
|                        |                                                              |                                                                        “CriticalBreachDetected.pdf”                                                                        |
|                        |             Desfiguração: Desfiguração   interna             | Ele altera o papel de parece da área de trabalho   após a criptografia e impede que o usuário o altere de volta, modificando o   valor do registro “NoChangingWallpaper”.  |
|                        |                           T1491.001                          |                                                                                                                                                                            |




RANSOMWARE TTP - Helth Sector Cybersecurity Coordination Center (HC3)

| Técnica                                                                              | ID        |
|--------------------------------------------------------------------------------------|-----------|
| Reconhecimento                                                                       | TA0043    |
| Verificação Ativa                                                                    | T1595     |
| Phishing para informações                                                            | T1598     |
|                                                                                      |           |
| Desenvolvimento de Recursos                                                          | TA0042    |
| Adquirir Infraestrutura                                                              | T1583     |
| Desenvolver capacidade                                                               | T1587     |
|                                                                                      |           |
| Acesso Inicial                                                                       | TA0001    |
| Phishing                                                                             | T1566     |
| Mecanismo de controle de elevação de   abuso: ignorar o controle de conta do usuário | T1548.002 |
|                                                                                      |           |
| Execução                                                                             | TA0002    |
| Interpretador de Comandos e Scripts                                                  | T1059     |
| Módulos Compartilhados                                                               | T1129     |
|                                                                                      |           |
| Persistência                                                                         | TA0003    |
| Chaves de Execução do Registro/ Pasta de   Inicialização                             | T1547.001 |
|                                                                                      |           |
| Escalação de Privilégios                                                             | TA0004    |
| Injeção de processo                                                                  | T1055     |
| Sequestro de execução de thread                                                      | T1055.003 |
| Chaves de Execução do Registro                                                       | T1547.001 |
|                                                                                      |           |
| Evasão de Defesa                                                                     | TA0005    |
| Arquivos ou informações ofuscadas                                                    | T1027     |
| Remoção do Indicador das Ferramentas                                                 | T1027.005 |
| Mascaramento                                                                         | T1036     |
| Injeção de processo                                                                  | T1055     |
| Sequestro de execução de thread                                                      | T1055.003 |
| Evasão de Virtualização/Sandbox                                                      | T1497     |
| Ocultar Artefatos                                                                    | T1564     |
| Atributos do arquivo NTFS                                                            | T1564.004 |
| Carregamento de código reflexivo                                                     | T1620     |
|                                                                                      |           |
| Descoberta                                                                           | TA0007    |
| Descoberta da janela do aplicativo                                                   | T1010     |
| Descoberta de processo                                                               | T1057     |
| Descoberta de informações do sistema                                                 | T1082     |
| Descoberta de arquivos e diretórios                                                  | T1083     |
| Evasão de Virtualização/Sandbox                                                      | T1497     |
| Descoberta de software de segurança                                                  | T1518.001 |
|                                                                                      |           |
| Coleção                                                                              | TA0009    |
| Dados do Sistema Local                                                               | T1005     |
| Recolha Automática                                                                   | T1119     |
|                                                                                      |           |
| Comando e Controle                                                                   | TA0011    |
| Protocolo da Camada de Aplicação                                                     | T1071     |
| Protocolos Web                                                                       | T1071.001 |
|                                                                                      |           |
| Exfiltração                                                                          | TA0010    |
| Exfiltração sobre o Canal C2                                                         | T1041     |
|                                                                                      |           |
| Impacto                                                                              | TA0040    |
| Dados criptografados para impacto                                                    | T1486     |
