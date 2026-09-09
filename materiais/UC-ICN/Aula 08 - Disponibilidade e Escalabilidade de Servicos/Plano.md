# Aula 08 - Disponibilidade e Escalabilidade de Serviços

**Terça-feira, 3 Nov 2026** (3h)

**Objetivos / conteúdos do programa:** C4 - Disponibilidade e escalabilidade de serviços na nuvem: escalabilidade vertical e horizontal, serviços stateless vs stateful, auto-scaling (métricas, políticas reativas e preditivas), algoritmos de balanceamento de carga, camada 4 vs camada 7, health checks, estratégias de implantação sem downtime (rolling, blue-green, canary), caching e CDNs, lei de Amdahl, e escalabilidade no Kubernetes (HPA, VPA, Cluster Autoscaler).

## Teoria
- Aula 08 - Disponibilidade e Escalabilidade de Servicos.tex

## Prática / laboratório
- Guiao 08 - Balanceamento de Carga e Escalabilidade no Kubernetes.tex

## Notas para o docente
Retomar explicitamente os conceitos de SLA e Tiers da Aula 02 para ancorar a discussão sobre disponibilidade.

O guião prático foi redesenhado para assentar no **cluster Kubernetes da Aula 05**, em vez de contentores Docker soltos com Nginx/HAProxy. Isto dá continuidade ao semestre e permite exercícios mais ricos: HPA com carga real, rolling update monitorizado com `curl` contínuo, e queda de um nó inteiro pelo Proxmox durante o serviço.

**Pré-requisito crítico:** o cluster da Aula 05 tem de estar montado. Decidir logo na Aula 05 se fica de pé entre aulas — se não, prever tempo de remontagem, ou ter um cluster de demonstração pronto.

**Risco técnico:** o `metrics-server` requer quase sempre a flag `--kubelet-insecure-tls` em clusters kubeadm de laboratório (certificados autoassinados); o guião já inclui o patch, mas convém validar antes. Sem metrics-server, o HPA fica com métricas `<unknown>` e a Parte 3 não funciona.

Momento mais demonstrativo da aula: o rolling update com o `curl` contínuo a mostrar `200` ininterruptos — torna tangível a ligação entre health checks e implantação sem downtime. Esta aula estabelece a base que a Aula 09 complementa com redundância e desacoplamento.
