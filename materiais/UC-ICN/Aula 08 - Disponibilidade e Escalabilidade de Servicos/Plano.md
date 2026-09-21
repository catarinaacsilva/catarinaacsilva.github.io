# Aula 08 - Disponibilidade e Escalabilidade de Serviços

**Terça-feira, 3 Nov 2026** (3h)

**Objetivos / conteúdos do programa:** C4 - Disponibilidade e escalabilidade de serviços na nuvem: escalabilidade vertical e horizontal, serviços stateless vs stateful, auto-scaling (métricas, políticas reativas e preditivas), algoritmos de balanceamento de carga, camada 4 vs camada 7, health checks, estratégias de implantação sem downtime (rolling, blue-green, canary), caching e CDNs, lei de Amdahl, e escalabilidade no Kubernetes (HPA, VPA, Cluster Autoscaler).

## Teoria
- Aula 08 - Disponibilidade e Escalabilidade de Servicos.tex

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a08-health-checks
- a08-rolling-update
- a08-scale

## Notas para o docente
Aula expositiva, sem componente laboratorial. Retomar explicitamente os conceitos de SLA e Tiers da Aula 02 para ancorar a discussão sobre disponibilidade, e os objetos do Kubernetes da Aula 05 para ancorar a discussão sobre escalabilidade (HPA/VPA/Cluster Autoscaler).

O diagrama `a08-rolling-update`, descrito passo a passo, é o recurso central para tornar tangível a ligação entre health checks (readiness/liveness) e implantação sem downtime, mesmo sem execução ao vivo de um `curl` contínuo.

Esta aula estabelece a base que a Aula 09 complementa com redundância e desacoplamento.
