| COMANDO | DESCRIÇÃO |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| cmd.exe" /c wevtutil cl security | Utilizado o wevutil para limpezar dos logs Security, System e Application. |
| cmd.exe" /c wevtutil cl system | Utilizado o wevutil para limpezar dos logs Security, System e Application. |
| cmd.exe" /c wevtutil cl application | Utilizado o wevutil para limpezar dos logs Security, System e Application. |
| fsutil behavior set SymlinkEvaluation R2L:1 | Utilizado para modificar o comportamento de avaliação de links simbólicos (symlinks). Permite que links simbólicos sejam acessados remotamente pelo sistema local |
| for /F \”tokens=*\” %1 in (‘wevtutil.exe el’) DO wevtutil.exe cl \”%1\” | Utilizado como um loop para limpar todos os logs de eventos. |
