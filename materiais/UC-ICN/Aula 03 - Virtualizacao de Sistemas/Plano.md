# Aula 03 - Virtualização de Sistemas

**Terça-feira, 29 Set 2026** (3h)

**Objetivos / conteúdos do programa:** C2 - Conceito e motivação da virtualização, requisitos de Popek e Goldberg, hypervisors tipo 1 vs tipo 2, anéis de privilégio e estratégias de virtualização de CPU (completa, paravirtualização, assistida por hardware), virtualização de memória/rede/armazenamento, formatos de disco e thin provisioning, snapshots/clones/templates, migração ao vivo e overhead. Introdução ao KVM, ao LXC e à plataforma Proxmox VE.

## Teoria
- Aula 03 - Virtualizacao de Sistemas.tex

## Prática / laboratório
- Guiao 03 - Virtualizacao com KVM e LXC no Proxmox.tex

## Notas para o docente
Esta aula assume o ambiente Proxmox preparado no Guião 01. O guião prático foi redesenhado para usar exclusivamente o servidor central (`qm` para KVM, `pct` para LXC), em vez de VirtualBox no portátil de cada aluno.

Ponto pedagógico central do laboratório: a comparação das **três versões de kernel** (node Proxmox, VM KVM, contentor LXC). É o momento em que a diferença entre virtualização completa e virtualização ao nível do SO deixa de ser abstrata — reservar tempo para que todos cheguem lá com calma.

Antes da aula, confirmar: (a) se os alunos têm acesso à shell do node ou se a componente CLI terá de ser demonstrada pela docente com os alunos a usar a interface web; (b) o nome do storage disponível (`pvesm status`) e o template LXC já descarregado (`pveam list`), pois o download é demorado e deve estar feito à partida; (c) um valor de referência de `sysbench` medido no node, para o caso de os alunos não terem acesso direto.

Atenção à capacidade do servidor partilhado: com uma turma inteira a criar VMs e contentores em simultâneo, insistir no passo de limpeza no final da aula. Liga-se à Aula 04, que aprofunda as primitivas de kernel (namespaces e cgroups) que tornam o LXC visto hoje possível.
