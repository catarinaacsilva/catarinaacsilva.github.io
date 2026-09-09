# Aula 06 - Gestão de Rede Centralizada e SDN

**Terça-feira, 20 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C3 - Gestão de rede centralizada: separação entre plano de controlo e plano de dados, arquitetura SDN, OpenFlow (entradas de fluxo, prioridades, contadores, timeouts), modelos reativo e proativo, controllers SDN, Open vSwitch, redes overlay (VLAN, VXLAN, Geneve; underlay vs overlay), NFV, microssegmentação e políticas de rede, e a concretização destes conceitos no Proxmox e no Kubernetes.

## Teoria
- Aula 06 - Gestao de Rede Centralizada e SDN.tex

## Prática / laboratório
- Guiao 06 - SDN com Mininet e Open vSwitch.tex

## Notas para o docente
Esta aula retoma explicitamente a rede usada (mas não explicada) pelo Kubernetes na Aula 05 -- vale a pena começar por recordar esse gancho antes de introduzir SDN.

O guião tem agora uma **Parte 1 de observação de redes reais** (bridges do Proxmox e overlay do Flannel no cluster da Aula 05) antes de passar ao Mininet. Isto ancora a matéria em infraestrutura que os alunos já usaram, em vez de começar diretamente num ambiente emulado. Se o cluster da Aula 05 já tiver sido desmontado, a parte do Kubernetes pode ser feita como demonstração.

No laboratório, o passo mais ilustrativo continua a ser comparar o `pingall` sem controller (falha) com o `pingall` com o controller Ryu ligado (funciona): reservar tempo para os alunos perceberem por que motivo o switch, sozinho, não sabe encaminhar pacotes.

**Risco técnico a validar antes da aula:** o Ryu é um projeto pouco mantido e a instalação via pip falha com versões recentes de Python/setuptools. O guião já manda instalá-lo num virtualenv, mas convém testar previamente na imagem Ubuntu do template e ter pronta uma alternativa (versão fixada, ou usar o controller de referência do Mininet nos passos que não exigem código próprio).

A modificação do controller para bloquear tráfego entre h1 e h3 costuma exigir apoio individual na identificação dos endereços MAC. Esta aula prepara o terreno para a Aula 07, onde a automatização de configuração se estende da rede para toda a infraestrutura.
