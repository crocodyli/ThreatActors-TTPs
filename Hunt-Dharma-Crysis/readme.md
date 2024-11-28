# Ransomware Hunt-Dharma-Crysis

Hunt ransomware is a variant of the Dharma/CrySIS ransomware family. This variant creates a unique ID for each victim, appends the extension '.hunt' to encrypted files, and leaves a ransom note known as info-hunt.txt.

The Dharma/CrySIS ransomware family emerged around mid-2016 as a Ransomware-as-a-Service (RaaS) program, utilizing various initial intrusion methods such as phishing, disguising as legitimate software, and exploiting open RDP connections.

This variant uses AES-256 encryption (CBC mode) or DES+RSA and demands payment to recover files. Upon execution, the ransomware generates a 256-bit AES decryption key, which is then encrypted along with random bytes using the RSA-1024 algorithm and stored at the end of the encrypted file.

The ransomware is written in C/C++ and compiled using MS Visual Studio. Regarding geographic attribution, it has been identified in use by threat actors from Russia, Ukraine, India, and other countries.

![image](https://github.com/user-attachments/assets/69baa7e6-24f8-445e-bc2d-9f8ed35e9ce0)
