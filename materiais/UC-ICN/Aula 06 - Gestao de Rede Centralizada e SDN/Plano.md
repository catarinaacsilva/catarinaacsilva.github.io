# Aula 06 - Gestão de Rede Centralizada e SDN

**Terça-feira, 20 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C3 - Gestão de rede centralizada: separação entre plano de controlo e plano de dados, arquitetura SDN, OpenFlow (entradas de fluxo, prioridades, contadores, timeouts), modelos reativo e proativo, controllers SDN, Open vSwitch, redes overlay (VLAN, VXLAN, Geneve; underlay vs overlay), NFV, microssegmentação e políticas de rede, e a concretização destes conceitos no Proxmox e no Kubernetes.

## Teoria
- Aula 06 - Gestao de Rede Centralizada e SDN.tex

## Sebenta
- Sebenta 06 - Gestao de Rede Centralizada e SDN.tex (uma página por slide, 36 slides)

## Laboratório
- Laboratorio 06 - Primeiro Contacto com SDN.tex (Mininet, Open vSwitch, Ryu, túnel VXLAN; máquina virtual Ubuntu 22.04 com Multipass; não é para entregar)

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- Teoria (a06-*): roteiro, limites, planos, arquitetura, tabela-fluxos, reativo-proativo, packet-in, ovs, overlay, vxlan-quadro, nfv, microssegmentacao, k8s-cni, networkpolicy, controller-ha, mapa
- Laboratório (g06-*): percurso, ferramentas, topologia, terminais, politica, vxlan-ns, limpeza
- m06-tres-terminais (versão anterior, não usada)

## Notas para o docente
Aula expositiva (36 slides) com laboratório de apoio. Esta aula retoma explicitamente a rede usada (mas não explicada) pelo Kubernetes na Aula 05 — vale a pena começar por recordar esse gancho antes de introduzir SDN.

O diagrama `a06-packet-in` (percurso de um pacote sem regra instalada) é o recurso central para tornar concreto, só com slides, porque é que um switch sozinho não sabe encaminhar tráfego sem controller — é o mesmo raciocínio que explicaria, num ambiente real, a diferença entre `pingall` sem e com controller ligado.

Esta aula prepara o terreno para a Aula 07, onde a automatização de configuração se estende da rede para toda a infraestrutura.
