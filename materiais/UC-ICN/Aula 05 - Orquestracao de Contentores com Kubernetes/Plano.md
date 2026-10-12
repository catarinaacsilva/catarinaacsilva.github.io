# Aula 05 - Orquestração de Containers com Kubernetes

**Terça-feira, 13 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C3 - Orquestração de containers: arquitetura Kubernetes (control plane e worker nodes), objetos principais (Pod, Deployment, ReplicaSet, Service, Namespace), ciclo de reconciliação, tipos de Service e modelo de rede (CNI, kube-proxy, CoreDNS), ConfigMaps/Secrets, armazenamento persistente (PV/PVC/StorageClass/StatefulSet), agendamento (requests, limits, afinidade) e mecanismos de self-healing.

## Teoria
- Aula 05 - Orquestracao de Containers com Kubernetes.tex

## Laboratório
- Laboratorio 05 - Primeiro Contacto com Kubernetes.tex

Trabalho em equipamento próprio do aluno, com Docker, `kind` e `kubectl`. Não requer acesso ao servidor da UC. **Não é para entregar**. Sete passos: verificar ferramentas, criar cluster de três nós, lançar um Deployment, apagar um Pod, expor com Service, atualizar e reverter, limpar. Inclui desafio opcional (perder um nó) e secção de resolução de problemas.

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a05-arquitetura
- a05-objetos
- a05-reconciliacao
- m05-cluster-passos
- Diagramas dos slides adicionados (17): a05-roteiro, a05-porque, a05-fluxo-pedido, a05-pod-interior, a05-namespaces, a05-pod-fases, a05-declarativo, a05-self-healing-no, a05-tipos-service, a05-rede-pods, a05-config-secret, a05-pv-pvc, a05-job-cronjob, a05-requests-limits, a05-alternativas, a05-mapa, a05-ligacoes (deck com 41 slides)
- g05-percurso, g05-ferramentas, g05-cluster, g05-yaml, g05-reconciliacao, g05-dois-terminais, g05-service, g05-etiquetas, g05-rollout, g05-no-perdido, g05-limpeza (guião do laboratório)

## Notas para o docente
Aula expositiva com laboratório de realização autónoma (kind). Esta aula assume os conceitos de container da Aula 04 (namespaces, cgroups, imagens); vale a pena relembrar brevemente que um Pod é, na prática, um ou mais containers a partilhar rede.

O diagrama `m05-cluster-passos` e a analogia de self-healing (parar um nó e observar a recriação dos Pods noutro) são o recurso central para tornar tangível o ciclo de reconciliação sem acesso a um cluster real — vale a pena descrevê-lo passo a passo como se estivesse a acontecer ao vivo.

Ponto a não perder: antes de introduzir o CNI, deixar claro porque é que um nó fica `NotReady` e o CoreDNS `Pending` sem uma rede de Pods instalada — é o gancho natural para a Aula 06 (SDN), que aprofunda o modelo de rede aqui apresentado.
