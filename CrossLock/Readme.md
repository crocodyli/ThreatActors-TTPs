# CrossLock
## Threat Summary:
CrossLock is a new variant of the ransomware family, first seen on **March 16, 2023**. Its operation is quite similar to that of Lockbit, making use of LOLBins. This variant is written in Golang and utilizes a framework called [Freeze](https://github.com/optiv/Freeze) for generating payloads that hinder EDR engines from detection.
## IoC/IoA:
| **Tools**   | **Parameters**                                          |
| -----------| --------------------------------------------------------|
| wbadmin.exe| delete catalog -quiet                                   |
|            | DELETE SYSTEMSTATEBACKUP                                |
|            | DELETE SYSTEMSTATEBACKUP -deleteOldest                  |
| bcdedit    | /set {default} bootstatuspolicy ignoreallfailures       |
|            | /set {default} recoveryenabled No                       |
| wevtutil   | cl application                                          |
|            | cl security                                             |
|            | cl system                                               |
| vssadmin   | delete shadows /all /quiet                              |
| eventvwr.exe| HKCU\Software\Classes\mscfile\shell\open\command       |
| Buildid    | TR_mEgwgRBRKBzLqwtCy/CrTSwLAFXgP-LonyC_5w/HFmcLGBkNJTMEENx_Huw/jmKxq_pGZOM9ijCEss6Y |
| Ransomnote | — CrossLock_readme_To_Decrypt — .txt                   |
| SHA256     | [495fbfecbcadb103389cc33828db139fa6d66bece479c7f70279834051412d72](https://www.virustotal.com/gui/file/495fbfecbcadb103389cc33828db139fa6d66bece479c7f70279834051412d72/detection) |
# References:
- [CrossLock a new ransomware in the market](https://medium.com/@Pandemicboy/crosslock-a-new-ransomware-in-the-market-435b3e0b23a8)
- [CrossLock Ransomware Emerges: New GoLang-Based Malware On the Horizon](https://cyble.com/blog/crosslock-ransomware-emerges-new-golang-based-malware-on-the-horizon/)
