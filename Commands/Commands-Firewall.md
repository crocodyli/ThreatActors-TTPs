| COMMAND | DESCRIPTION |
|--------------------------------------------|--------------------------------------------------------------------------------------|
| netsh.exe" advfirewall firewall set rule "group="Network Discovery"" new enable=Yes | Used to enable the firewall rule that allows network discovery |
| netsh firewall set opmode mode=disable | Completely disable Windows Firewall, but this command applies to older versions of Windows such as Windows XP and Windows Server 2003 |
| netsh advfirewall set currentprofile state off | Used to disable Windows firewall for the currently used network profile. Generally, this turns off the firewall for the specific network profile currently active, such as public, private or domain. This command requires elevated privileges to run successfully. |
