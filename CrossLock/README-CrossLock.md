# CrossLock

## Resumo da Ameaça:
CrossLock é uma nova variante da família de ransomware, visto pela primeira ves no dia **16/03/2023**. Sua forma de operação é bastente similar com a do Lockbit, fasendo o usdo de LOLBins. Essa variante é escrito em Golang, e essa variantes faz o uso de um frameworkd chamado [Freeze](https://github.com/optiv/Freeze) utilizado para geração de payload que dificultam engines de EDR detectarem.

## IoC/IoA:
| **Tools** | **Parameters**
| ----- | ----------
| wbadmin.exe | delete catalog -quiet
|  | DELETE SYSTEMSTATEBACKUP
|  | DELETE SYSTEMSTATEBACKUP -deleteOldest
| bcdedit | /set {default} bootstatuspolicy ignoreallfailures
|  | /set {default} recoveryenabled No
| wevtutil | cl application
|  | cl security
|  | cl system
| vssadmin | delete shadows /all /quiet
| eventvwr.exe | HKCU\Software\Classes\mscfile\shell\open\command
| Buildid | TR_mEgwgRBRKBzLqwtCy/CrTSwLAFXgP-LonyC_5w/HFmcLGBkNJTMEENx_Huw/jmKxq_pGZOM9ijCEss6Y
| Ransomnote | — CrossLock_readme_To_Decrypt — .txt
| SHA256 | [495fbfecbcadb103389cc33828db139fa6d66bece479c7f70279834051412d72](https://www.virustotal.com/gui/file/495fbfecbcadb103389cc33828db139fa6d66bece479c7f70279834051412d72/detection)


# Referências:
- [CrossLock a new ransomware in the market](https://medium.com/@Pandemicboy/crosslock-a-new-ransomware-in-the-market-435b3e0b23a8)
- [CrossLock Ransomware Emerges: New GoLang-Based Malware On the Horizon](https://cyble.com/blog/crosslock-ransomware-emerges-new-golang-based-malware-on-the-horizon/)
