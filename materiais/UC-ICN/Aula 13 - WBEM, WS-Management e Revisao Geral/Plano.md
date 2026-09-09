# Aula 13 - WBEM, WS-Management e Revisão Geral

**Terça-feira, 22 Dez 2026** (3h)

**Objetivos / conteúdos do programa:** C6 - WBEM e o Common Information Model (CIM: classes, herança, métodos, associações), operações WBEM e transporte CIM-XML, WS-Management sobre SOAP, comparação com o SNMP da Aula 12, gestão fora-de-banda (BMC, IPMI, Redfish), tendência atual para APIs REST e modelos declarativos, e revisão geral de todo o programa (C1-C6) em preparação para o teste escrito.

## Teoria
- Aula 13 - WBEM, WS-Management e Revisao Geral.tex

## Prática / laboratório
- Guiao 13 - WBEM com SFCB e Revisao do Semestre.tex

## Notas para o docente
Última aula do semestre. Retomar explicitamente o SNMP da Aula 12 para justificar a motivação do CIM (modelo orientado a objetos vs árvore plana de OIDs).

O guião passou a instalar o SFCB **diretamente numa VM do Proxmox** (`apt install sfcb sblim-cmpi-base`), em vez de depender de uma imagem Docker de terceiros de disponibilidade incerta.

**Aviso técnico importante:** o SFCB e os seus providers são software pouco mantido e o empacotamento varia entre versões de distribuição; a autenticação do CIMOM é a parte mais frágil. **Testar na imagem do template antes da aula.** O guião já diz aos alunos para registarem o erro obtido e pedirem a alternativa — mas convém ter essa alternativa preparada (dados de demonstração, ou output pré-capturado para análise).

**Exercício central da aula:** a navegação por associações (`ReferenceNames`/`AssociatorNames`). É a única operação sem equivalente no SNMP e, portanto, a que melhor justifica a existência do CIM. Se algo tiver de ser cortado por falta de tempo, não seja esta parte.

A **Parte 2 (API REST do Proxmox)** é opcional mas fecha bem o semestre: mostra os três paradigmas de gestão lado a lado (OID numérico → classe de objetos → URL REST) e liga ao Terraform da Aula 07.

A Parte 3 (roteiro de revisão) não é avaliada como entregável, mas deve ser feita em aula, com tempo reservado para dúvidas transversais antes do teste. Recordar aos alunos a data de entrega do miniprojeto.
