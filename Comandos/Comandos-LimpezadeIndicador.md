#Utilizado pelo BlackSuit para deletar o arquivo de Ransom.
cmd /v/c "set f={Nome do arquivo de malware}&for /l %l in () do if exist !f! (del /f/a "!f!") else (exit)"
