# Aula 11 - Armazenamento Remoto e Distribuído

**Terça-feira, 24 Nov 2026** (3h)

**Objetivos / conteúdos do programa:** C5 - Armazenamento em rede (NAS vs SAN), NFS e iSCSI em detalhe (exports, IQN, LUN), sistemas de ficheiros distribuídos, arquitetura Ceph (OSD, MON, MDS, CRUSH), object storage e API S3, consistência e teorema CAP, modelo PACELC, replicação, sharding e erasure coding, e armazenamento distribuído no Proxmox (storage partilhado, migração ao vivo) e no Kubernetes (PV/PVC, CSI, modos de acesso).

## Teoria
- Aula 11 - Armazenamento Remoto e Distribuido.tex

## Prática / laboratório
- Guiao 11 - NFS, iSCSI e Object Storage com MinIO.tex

## Notas para o docente
Esta aula assenta diretamente nos conceitos de armazenamento local da Aula 10, pelo que vale a pena começar com uma revisão rápida de block vs. file vs. object storage antes de introduzir NAS/SAN.

O guião tem agora uma **Parte A sobre o storage de rede do Proxmox**, que liga o tema à migração ao vivo (Aula 03): storage partilhado é o que dispensa copiar o disco ao migrar. É uma pergunta de verificação.

**Momento pedagógico central, novo:** o contraste de acesso concorrente. Na Parte B os alunos montam a mesma partilha NFS em dois sítios e escrevem de ambos com sucesso; na Parte C o guião explica (com um aviso explícito de *não fazer*) porque é que o mesmo com iSCSI corromperia o ext4. É a forma mais direta de fixar a diferença entre ficheiro e bloco, e reaparece na Parte E a propósito do `ReadWriteMany`.

A **Parte E (NFS como PersistentVolume no Kubernetes)** é opcional e depende do cluster do Guião 05 estar de pé; fecha o arco entre esta aula e a Aula 05. Os `--overrides` em JSON são verbosos — se houver tempo apertado, pode-se dar os manifests já escritos.

O ponto de maior dificuldade prática continua a ser a configuração dos IQNs no iSCSI (servidor e cliente têm de corresponder ao ACL definido) -- reservar tempo extra para depuração. O teorema CAP e o PACELC devem ficar ao nível introdutório, sem provas formais.
