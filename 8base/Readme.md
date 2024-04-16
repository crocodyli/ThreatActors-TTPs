# 8base

The 8base Ransomware group made its first appearance in early March 2022, remaining somewhat quiet after the attacks. This group operates like other ransomware actors, engaging in double extortion.

However, in mid-May and June 2023, the ransomware operation saw a spike in activity against organizations from various sectors, listing 131 organizations in just 3 months.

The 8base data leak site was created and made available in March 2023, claiming honesty and simplicity in its discourse.

VMWare published a report on 8base, drawing some similarities with the ransomware group "RansomHouse," pointing out resemblances such as the website used by 8base and the ransom notes presented in its attacks.

Interestingly, the 8base Ransomware group does not have its own ransomware developed by the group. Instead, the actors took advantage of other leaked ransomware builders to customize the ransom note and present it to the victim organization as 8base's operation.

As an example, I conducted an analysis of the 8base ransomware presented in a security incident, and it was evident that they used a variant of the Phobos Ransomware version 2.9.1 in the attack, with a loader called "SmokeLoader" for initial obfuscations and loading the ransomware into the system.

![Imagem5](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/872dde0a-5268-4b54-8194-f48f9512e640)

The analysis was published on the ISH company's website, where it was possible to indicate the TTPs according to the obtained sample and create a table containing the TTPs used by the Ransomware payload.

There isn't much publicly available information regarding security incidents involving this ransomware, except for the fact that they use builders from other groups.
