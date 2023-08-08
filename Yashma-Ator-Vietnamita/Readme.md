A empresa Cisco Talos identificou um novo agente de ameaça desconhecido de origem vietnamita, conduzindo uma operação de ransomware que começou pelo menos em 04 de junho de 2023. 

O ataque em andamento utiliza uma variante do Ransomware Yashma que provavelmente visa várias áreas geográficas, imitando as características do WannaCry. 

O agente de ameaça utiliza uma técnica incomum para entregar a nota de resgate, sendo que ao invés de incorporar as strings da nota de resgate no binário, o agente realiza o download da nota de resgate do repositório GitHub controlado pelo ator executando um arquivo em lote incorporado.

![ransomware1](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/d9f9c8d2-f844-48b3-bc04-3a4cdeb9799e)

(GitHub do Ator Malicioso)


A Talos afirmou que este ator de ameaça tem como alvo vítimas em países de língua inglesa, Bulgária, China e Vietnã, já que a conta do GitHub do ator “nguyenvientphat”, tem notas de ransomwares escritas nos idiomas dos países. A presença da nota de resgate pode indicar que o ator pretende expandir a sua área geográfica de atuação. 

A empresa afirmou ainda que o agente de ameaça poderá ter oriegem vietnamita porque o nome da conta do GitHub e contato de e-mail nas notas do ransomware falsificam o nome de uma organização legítima. A nota de resgate também pede que as vítimas entre em contato entre 19h e 23h UTC +07:00, o que coincide com o fuso horário do Vietnã.

Foi identificado ainda uma diferença na nota de resgate do idioma vietnamita, pois começa com “Desculpe, seu arquivo está criptografado!”, em comparação com as outras notas que apresenta “Oops, seus arquivos estão criptografados!”. Ao dizer “desculpe”, o agente de ameaça pode ter a intenção de mostrar uma maior sensibilidade em relação às vítimas no Vietnã, o que pode indicar que os próprios atacantes são vietnamitas. 

A Talos ainda que o agente da ameaça iniciou a campanha por volta de 04 de junho de 2023, porque se juntou ao GitHub e criou um repositório público chamado “Ransomware”. No repositório, o ator de ameaça adicionou arquivos de texto de notas de resgates em cinco idiomas: inglês, búlgaro, vietnamita, chinês simplificado e chinês tradicional.
 

Na nota é apresentado o endereço de e-mail “nguyenvietphat[.]n@gmail[.]com, para que as vítims possam contatá-los. No momento da análise, não foi observado nenhum Bitcoin na carteira, e a nota de resgate não especificava um valor, indicando que a operação do ransomware ainda poderia estar em estágio inicial. 

Exemplos de notas de resgates:

 ![nota1](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/af93dcc8-89c7-40bf-94c0-ae87a0dd1fbd)
 
![nota2](https://github.com/crocodyli/Ransomwares-TTP/assets/113185400/aaa95efd-1c01-48f8-a1c4-7d5d66096808)

 

O agente de ameaça implantou uma variante do ransomware Yashma, que eles compilaram em 04 de junho de 2023. Vale salientar que o Yashma é um executável de 32 bits escrito em .NET e uma versão renomeada do Chaos Ransomware V5, que apareceu em maio de 2022. Na variante, a maioria dos recursos do Yashma permaneceram inalterados e foram descritos pelos pesquisadores de segurança da BlackBerry, com exceção de algumas modificações notáveis.

O ransomware armazena o texto da nota de resgate como strings no binário, porém esta variante do Yashma executa um arquivo de lote incorporado, que possui os comandos para baixar a nota de resgate do repositório GitHub controlado pelo ator. A referida modificação evita soluções de detecções de endpoint e software antivírus, que geralmente detectam sequência de notas de resgates incorporadas ao binário.

As versões anteriores do Yashma estabeleceram persistência na máquina da vítima na chave de registro Run e descartando um arquivo de atalho do Windows apontando para o caminho executável do Ransomware na pasta de inicialização. 
A variante identificada também estabeleceu persistência na chave de registro Run. Ainda assim, ele teria sido modificado para criar um arquivo de favoritos “.url” na pasta de inicialização que aponta para o executável localizado em “%AppData%\Roaming\svchost.exe”

Além disso, o agente optou por manter nessa variante é a capacidade antirecuperação do Yashma. Depois da criptografia de um arquivo, o ransomware limpa o conteúdo dos arquivos originais não criptografados, escreve um único caractere “?” e, em seguida, exclui o arquivo. A referida técnica torna mais difícil os respondentes de incidentes e a forense de recuperar os arquivos excluídos do disco rígido da vítima.

Referência:
https://blog.talosintelligence.com/new-threat-actor-using-yashma-ransomware/

 	Por fim, podemos afirmar que a adaptação do código do Ransomware Yashma é perceptível quanto a utilização e evolução do agente de ameaça para a sua operação, apresentando desta vez, detalhes de uma operação no início.
