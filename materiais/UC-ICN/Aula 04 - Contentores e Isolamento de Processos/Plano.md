# Aula 04 - Containers e Isolamento de Processos

**Terça-feira, 6 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C2 - Containers como forma de virtualização ao nível do sistema operativo: namespaces, cgroups (v1 e v2), limites do isolamento (capabilities, seccomp, AppArmor/SELinux), union filesystems, arquitetura Docker, redes e volumes, boas práticas de construção de imagens, containers de aplicação vs de sistema, e o standard OCI.

## Teoria
- Aula 04 - Containers e Isolamento de Processos.tex

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a04-namespaces-cgroups

## Notas para o docente
Aula expositiva, sem componente laboratorial. Dar ênfase à distinção entre containers e VMs a partir das primitivas do kernel (namespaces e cgroups), não apenas como "VMs mais leves" — isto prepara o terreno conceptual para a Aula 05 (Kubernetes), onde estes conceitos reaparecem ao nível do Pod.

Vale a pena explicitar a sobreposição de camadas (container dentro de VM dentro do hypervisor), ligando de volta à Aula 03 e ao diagrama dos "três kernels". Outro ponto a não perder: um container não é uma VM pequena — é um processo isolado por namespaces/cgroups, sem hardware virtualizado nem kernel próprio.

Liga-se à Aula 05, onde o Pod do Kubernetes é apresentado como "um ou mais containers a partilhar rede" — a Aula 04 é o pré-requisito conceptual direto.
