# Aula 10 - Armazenamento de Dados - Arquiteturas e Sistemas Locais

**Terça-feira, 17 Nov 2026** (3h)

**Objetivos / conteúdos do programa:** C5 - Armazenamento local: block/file/object storage, interfaces (SATA/SAS/NVMe), métricas de desempenho (IOPS, débito, latência), níveis de RAID (0/1/5/6/10), RAID por hardware vs software, reconstrução de arrays, LVM (PV/VG/LV), thin provisioning, snapshots copy-on-write, sistemas de ficheiros (ext4, XFS, ZFS, btrfs), estratégias de backup (regra 3-2-1) e tipos de storage do Proxmox VE.

## Teoria
- Aula 10 - Armazenamento de Dados - Arquiteturas e Sistemas Locais.tex

## Prática / laboratório
- Guiao 10 - Armazenamento Local com LVM e RAID.tex

## Notas para o docente
Dar ênfase à distinção entre as três abstrações de armazenamento (bloco, ficheiro, objeto), pois será usada nas duas aulas seguintes.

O guião abre agora com uma **Parte 1 sobre o armazenamento do próprio Proxmox** (`pvesm status`, tipo de storage onde reside o disco da VM) antes de construir a pilha RAID+LVM dentro da VM. Isto torna visível que os alunos estão a reproduzir, uma camada acima, o mesmo mecanismo que o servidor já usa por baixo — matéria da penúltima questão de verificação.

Os discos virtuais passam a ser **anexados pelo Proxmox durante a aula** (Parte 1), em vez de assumidos como pré-existentes.

**Ponto crítico de segurança:** a identificação correta dos dispositivos (`/dev/sdX`) antes de criar o array. Insistir no `lsblk` e no aviso do guião — aplicar `mdadm` ao disco de sistema destrói a VM do aluno.

Novidade com bom retorno pedagógico: a **Parte 3 simula a falha de um disco** (`mdadm --fail`) e mostra o hot spare a entrar automaticamente, com os dados sempre acessíveis. Liga diretamente à discussão teórica sobre o risco do período degradado. Com discos de 1 GB a reconstrução é quase instantânea — vale a pena referir que em produção demoraria horas ou dias.

Esta aula prepara o terreno para a Aula 11, que estende o armazenamento para cenários de rede e distribuídos.
