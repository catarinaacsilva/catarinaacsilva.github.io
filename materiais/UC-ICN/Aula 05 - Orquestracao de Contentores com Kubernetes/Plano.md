# Aula 05 - Orquestração de Contentores com Kubernetes

**Terça-feira, 13 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C3 - Orquestração de contentores: arquitetura Kubernetes (control plane e worker nodes), objetos principais (Pod, Deployment, ReplicaSet, Service, Namespace), ciclo de reconciliação, tipos de Service e modelo de rede (CNI, kube-proxy, CoreDNS), ConfigMaps/Secrets, armazenamento persistente (PV/PVC/StorageClass/StatefulSet), agendamento (requests, limits, afinidade) e mecanismos de self-healing.

## Teoria
- Aula 05 - Orquestracao de Contentores com Kubernetes.tex

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a05-arquitetura
- a05-objetos
- a05-reconciliacao
- m05-cluster-passos

## Notas para o docente
Aula expositiva, sem componente laboratorial. Esta aula assume os conceitos de contentor da Aula 04 (namespaces, cgroups, imagens); vale a pena relembrar brevemente que um Pod é, na prática, um ou mais contentores a partilhar rede.

O diagrama `m05-cluster-passos` e a analogia de self-healing (parar um nó e observar a recriação dos Pods noutro) são o recurso central para tornar tangível o ciclo de reconciliação sem acesso a um cluster real — vale a pena descrevê-lo passo a passo como se estivesse a acontecer ao vivo.

Ponto a não perder: antes de introduzir o CNI, deixar claro porque é que um nó fica `NotReady` e o CoreDNS `Pending` sem uma rede de Pods instalada — é o gancho natural para a Aula 06 (SDN), que aprofunda o modelo de rede aqui apresentado.
