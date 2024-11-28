# Ransomware Brain Cipher

In mid-June 2024, a new ransomware operation named Brain Cipher emerged, notably targeting Indonesia's National Data Center. This attack disrupted immigration operations at airports and various other government services.

The payload employed by this group is based on the leaked LockBit 3.0 builder. Comparative analyses have confirmed significant similarities between Brain Cipher and LockBit 3.0 samples. Notably, the attackers modified the ransomware to not only append a new extension to encrypted files but also to encrypt the filenames themselves.

![Imagem1](https://github.com/user-attachments/assets/5ee6e2ac-4882-4d4e-af43-74e5ee682a46)

Additionally, it was identified that the group appears to be in its early stages, as evidenced by their use of the leaked LockBit 3.0 builder and their recent operations. After encrypting the data, the ransomware generates ransom notes named “added_extension.README.txt.” These notes contain a description of what occurred and a link to the attackers' website hosted on the Tor network.

![image](https://github.com/user-attachments/assets/db7e8109-b020-4971-bac0-3a475d5edda1)

Other variants of ransom notes used by the group were also observed, with the note named: “How To Restore Your Files.txt.”

![image](https://github.com/user-attachments/assets/eab540bc-f864-4fd4-bb75-afcf42e1a7a7)

It is worth mentioning that each variant generates an ID for accessing the group's website and initiating contact with the threat actors to obtain decryption methods for the data. With the generated ID, the victim must access the onion network site, which acts as a validator and directs them to the appropriate chat.

![image](https://github.com/user-attachments/assets/9822e576-6c72-4394-99cd-cd26b05d776b)

The group also created another related website that serves as their Data Leak Site (DLS), where victims are directly announced by the group. This functions as a form of secondary extortion.

![image](https://github.com/user-attachments/assets/9baf1728-5b47-4fae-b1f7-ed4b336a126d)

The company Sangfor conducted a comparison of two samples, one from BRAIN CIPHER and another from LOCKBIT 3.0, confirming a 99% similarity between them.

![image](https://github.com/user-attachments/assets/5eb1969d-01d9-4e7d-a603-09080714efee)
