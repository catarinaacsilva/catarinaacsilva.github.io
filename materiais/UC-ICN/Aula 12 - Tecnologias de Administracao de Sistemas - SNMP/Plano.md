# Aula 12 - Tecnologias de Administração de Sistemas - SNMP

**Terça-feira, 15 Dez 2026** (3h)

**Objetivos / conteúdos do programa:** C6 - Tecnologias clássicas de administração e monitorização de sistemas: arquitetura SNMP (manager, agente, MIB, OID), estrutura da árvore MIB e MIB-II, SMI e tipos de dados (Counter, Gauge, TimeTicks), evolução das versões, modelo de segurança do SNMPv3 (USM, VACM), operações GET/GETNEXT/GETBULK/SET e TRAP/INFORM, ferramentas Net-SNMP, polling vs push, alarmística e fadiga de alertas.

## Teoria
- Aula 12 - Tecnologias de Administracao de Sistemas - SNMP.tex

## Prática / laboratório
- Guiao 12 - Monitorizacao com Net-SNMP.tex

## Notas para o docente
Esta é a primeira das duas aulas do bloco C6; vale a pena relembrar brevemente a escala de infraestruturas de cloud vista no início do semestre (C1) para justificar a necessidade de gestão centralizada.

O guião usa agora **duas VMs do Proxmox** (agente e manager), com aviso explícito para **não configurar SNMP no servidor Proxmox partilhado**.

**Melhor momento da aula, novo:** a Parte 3 captura tráfego com `tcpdump` e mostra a *community string* em texto simples no SNMPv2c, depois repete com SNMPv3 `authPriv` e mostra o conteúdo cifrado. Transforma "v2c é inseguro" de afirmação em evidência. Vale a pena reservar tempo para isto.

Acrescentou-se também a leitura de `ifInOctets` duas vezes com intervalo, para os alunos calcularem à mão o débito — é o cálculo que qualquer sistema de monitorização faz internamente, e fixa a distinção Counter/Gauge.

Ponto crítico habitual: a rede entre as duas VMs — confirmar cedo que as portas UDP 161/162 estão acessíveis evita perder tempo depois. Nota: `net-snmp-create-v3-user` exige o `snmpd` parado; se for executado com o serviço a correr, falha de forma pouco clara.

Liga-se diretamente à Aula 13, que introduz o WBEM/WS-Management como alternativa mais rica ao modelo simples do SNMP.
