# Aula 04 - Contentores e Isolamento de Processos

**Terça-feira, 6 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C2 - Contentores como forma de virtualização ao nível do sistema operativo: namespaces, cgroups (v1 e v2), limites do isolamento (capabilities, seccomp, AppArmor/SELinux), union filesystems, arquitetura Docker, redes e volumes, boas práticas de construção de imagens, contentores de aplicação vs de sistema, e o standard OCI.

## Teoria
- Aula 04 - Contentores e Isolamento de Processos.tex

## Prática / laboratório
- Guiao 04 - Docker - Primeiros Contentores.tex

## Notas para o docente
Dar ênfase à distinção entre contentores e VMs a partir das primitivas do kernel (namespaces e cgroups), não apenas como "VMs mais leves" — isto prepara o terreno conceptual para a Aula 05 (Kubernetes), onde estes conceitos reaparecem ao nível do Pod.

O guião prático abre agora com uma secção de **observação direta dos namespaces e cgroups** (`/proc/<pid>/ns`, `/sys/fs/cgroup`), antes do trabalho normal com Docker. É a parte com maior valor conceptual: torna visível aquilo que na Aula 03 ainda era abstrato. Reservar tempo para ela e não a cortar se a aula atrasar — preferir cortar a parte final de redes/volumes, que os alunos conseguem repetir sozinhos.

Todo o laboratório corre **dentro da VM `icn-lab` do Proxmox**, não no portátil dos alunos. Vale a pena explicitar a sobreposição de camadas (contentor dentro de VM dentro do hypervisor) — é matéria da última questão de verificação.

A versão de cgroups (v1 vs v2) depende da imagem Ubuntu usada no template; confirmar antes da aula com `stat -fc %T /sys/fs/cgroup` na VM de referência, para saber qual dos dois caminhos os alunos vão encontrar. Ponto de atenção habitual: garantir que todos conseguem correr `docker run hello-world` antes de avançar.
