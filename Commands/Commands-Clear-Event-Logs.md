| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| cmd.exe" /c wevtutil cl security | Uses wevtutil to clear Security, System and Application logs. |
| cmd.exe" /c wevtutil cl system | Uses wevtutil to clear Security, System and Application logs. |
| cmd.exe" /c wevtutil cl application | Uses wevtutil to clear Security, System and Application logs. |
| fsutil behavior set SymlinkEvaluation R2L:1 | Used to modify symbolic link (symlink) evaluation behavior. Allows symbolic links to be accessed remotely by the local system |
| for /F \"tokens=*\" %1 in ('wevtutil.exe el') DO wevtutil.exe cl \"%1\" | Used as a loop to clear all event logs. |
