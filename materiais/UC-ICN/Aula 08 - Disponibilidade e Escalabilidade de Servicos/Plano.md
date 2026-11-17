# Aula 08 - Disponibilidade e Escalabilidade de Serviços

**Terça-feira, 3 Nov 2026** (3h)

**Objetivos / conteúdos do programa:** C4 - Disponibilidade e escalabilidade de serviços na nuvem: escalabilidade vertical e horizontal, serviços stateless vs stateful, auto-scaling (métricas, políticas reativas e preditivas), algoritmos de balanceamento de carga, camada 4 vs camada 7, health checks, estratégias de implantação sem downtime (rolling, blue-green, canary), caching e CDNs, lei de Amdahl, e escalabilidade no Kubernetes (HPA, VPA, Cluster Autoscaler).

## Teoria
- Aula 08 - Disponibilidade e Escalabilidade de Servicos.tex

## Sebenta
- Sebenta 08 - Disponibilidade e Escalabilidade de Servicos.tex (um slide por página, com texto de estudo aprofundado)

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a08-disponibilidade (SLA e downtime, série e paralelo)
- a08-scale
- a08-autoscaling-ciclo
- a08-lb-algoritmos
- a08-lb-cascata
- a08-dns-global
- a08-health-checks
- a08-rolling-update
- a08-bluegreen-canary
- a08-cache-cdn
- a08-amdahl
- a08-k8s-autoscaling

## Notas para o docente
Aula expositiva, sem componente laboratorial. Retomar explicitamente os conceitos de SLA e Tiers da Aula 02 para ancorar a discussão sobre disponibilidade, e os objetos do Kubernetes da Aula 05 para ancorar a discussão sobre escalabilidade (HPA/VPA/Cluster Autoscaler).

Os diagramas `a08-health-checks` e `a08-rolling-update`, descritos passo a passo, são o recurso central para tornar tangível a ligação entre health checks (readiness/liveness) e implantação sem downtime, mesmo sem execução ao vivo de um `curl` contínuo.

O caso de balanceamento em camadas baseia-se no artigo da Meta sobre o Katran (2018), que descreve o nível L4 (ECMP, hash consistente sobre o 5-tuple, IPVS e depois XDP/eBPF). O nível L7 do diagrama é um padrão genérico, não parte desse artigo. As percentagens de canary e os números de ligações são ilustrativos.

Esta aula estabelece a base que a Aula 09 complementa com redundância e desacoplamento.
