# Aula 03 - Virtualização de Sistemas

**Terça-feira, 29 Set 2026** (3h)

**Objetivos / conteúdos do programa:** C2 - Conceito e motivação da virtualização, requisitos de Popek e Goldberg, hypervisors tipo 1 vs tipo 2, anéis de privilégio e estratégias de virtualização de CPU (completa, paravirtualização, assistida por hardware), virtualização de memória/rede/armazenamento, formatos de disco e thin provisioning, snapshots/clones/templates, migração ao vivo e overhead. Introdução ao KVM, ao LXC e à plataforma Proxmox VE.

## Teoria
- Aula 03 - Virtualizacao de Sistemas.tex

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a03-hypervisors
- a03-vm-vs-contentor
- m03-tres-kernels

## Notas para o docente
Aula expositiva, sem componente laboratorial. O diagrama `m03-tres-kernels` (node Proxmox, VM KVM, contentor LXC) é o recurso central para tornar concreta, só com slides, a diferença entre virtualização completa e virtualização ao nível do SO — vale a pena parar nele e não o passar depressa.

Ponto que costuma gerar confusão: o "problema do x86" (instruções sensíveis não privilegiadas) e porque é que isso obrigou a três soluções diferentes (tradução binária, paravirtualização, assistência de hardware) em vez de uma só. Ligar sempre estas técnicas a um exemplo de VMM concreto (VMware, Xen, KVM) para não ficar abstrato.

Liga-se à Aula 04, que aprofunda as primitivas de kernel (namespaces e cgroups) que tornam o LXC aqui apresentado possível.
