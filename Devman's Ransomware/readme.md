# Summary 

DEVMAN is a RaaS (Ransomware-as-a-Service) group that is believed to have emerged in April 2025. The group claimed to be working with other RaaS actors such as Qilin and Apos, and also mentioned DragonForce among its multi-RaaS affiliations.

On its main site hosted on the onion network, the group states that it is “actively buying access to countries,” highlighting the United Kingdom, France, and Canada as priorities. Additionally, they mention on their DLS domain that they will launch an affiliate program for individual RaaS operations.

![image](https://github.com/user-attachments/assets/c6893171-144c-4826-8232-67c5910f58b0)


An interesting detail is that the threat actor itself has released an attack report, although—so far—only the first incident, according to the cyber kill chain outlined by the actor, has been possible to map.

![image](https://github.com/user-attachments/assets/b8a35acc-9a71-436a-8b5c-fc72246cef3b)


Note: There are currently no public reports or confirmed incident disclosures involving this threat actor. The only available information comes from the group’s own claims regarding a specific ransomware attack, in which they detail the tactics, techniques, and procedures (TTPs) they allegedly used.

# Hunting details

During the threat actor hunting process, it was possible to identify the title used on the actor's .onion page: <title>Devman's Place</title>.
Using this title, it was possible to determine that the page is being hosted on two IP addresses:

- 38[.]132.122.214

- 38[.]132.122.213

  ![01-fofa](https://github.com/user-attachments/assets/0b3259c0-b3f0-4148-a2fb-904cfbf5c224)

Whois:

```
NetRange:       38.0.0.0 - 38.255.255.255
CIDR:           38.0.0.0/8
NetName:        COGENT-A
NetHandle:      NET-38-0-0-0-1
Parent:          ()
NetType:        Direct Allocation
OriginAS:       AS174
Organization:   PSINet, Inc. (PSI)
RegDate:        1991-04-16
Updated:        2023-10-11
Comment:        IP allocations within 38.0.0.0/8 are used for Cogent customer static IP assignments.
Comment:        
Comment:        Reassignment information for this block can be found at rwhois.cogentco.com 4321
Comment:        
Comment:        Geofeed https://geofeed.cogentco.com/geofeed.csv
Ref:            https://rdap.arin.net/registry/ip/38.0.0.0



OrgName:        PSINet, Inc.
OrgId:          PSI
Address:        2450 N Street NW
City:           Washington
StateProv:      DC
PostalCode:     20037
Country:        US
RegDate:        
Updated:        2023-10-11
Comment:        Geofeed https://geofeed.cogentco.com/geofeed.csv
Ref:            https://rdap.arin.net/registry/entity/PSI

ReferralServer:  rwhois://rwhois.cogentco.com:4321
```

As research progressed, it was found that both IP addresses had been mentioned by the community as being in use for over 25 days (as of May 19) by the Mythic C2 framework.
An analysis of this was published in the following article:

[Inside the Mind of a Hacker: What Makes Mythic C2 So Powerful](https://medium.com/@yua.mikanana19/inside-the-mind-of-a-hacker-what-makes-mythic-c2-so-powerful-7c569c63b687)

For those interested, there's also a video explanation:

[https://youtu.be/Qq2HbvMqjNY](https://www.youtube.com/watch?v=Qq2HbvMqjNY)

But does it really matter? Attribution? Use of Mythic C2 by Devman’s group? Hmmm...

Ref: 
- https://www.virustotal.com/gui/ip-address/38.132.122.214/community
- https://www.virustotal.com/gui/user/drb_ra/comments

I think that's it for today, the TTPs according to what he released are public in the TTP repository.
