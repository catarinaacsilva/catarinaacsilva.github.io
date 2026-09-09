# Aula 05 - Orquestração de Contentores com Kubernetes

**Terça-feira, 13 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C3 - Orquestração de contentores: arquitetura Kubernetes (control plane e worker nodes), objetos principais (Pod, Deployment, ReplicaSet, Service, Namespace), ciclo de reconciliação, tipos de Service e modelo de rede (CNI, kube-proxy, CoreDNS), ConfigMaps/Secrets, armazenamento persistente (PV/PVC/StorageClass/StatefulSet), agendamento (requests, limits, afinidade) e mecanismos de self-healing.

## Teoria
- Aula 05 - Orquestracao de Contentores com Kubernetes.tex

## Prática / laboratório
- Guiao 05 - Cluster Kubernetes em VMs Proxmox.tex

## Notas para o docente
Esta aula assume os conceitos de contentor da Aula 04 (namespaces, cgroups, imagens); vale a pena relembrar brevemente que um Pod é, na prática, um ou mais contentores a partilhar rede.

O guião prático foi substituído: em vez do Minikube (nó único, no portátil), os alunos montam um **cluster real de dois nós com `kubeadm`**, sobre VMs provisionadas no Proxmox. Isto permite exercícios que um cluster de nó único não permite — sobretudo **parar a VM do worker pelo Proxmox e observar a recriação dos Pods no nó restante**, que é o momento mais marcante da aula.

**Atenção ao tempo:** montar um cluster com kubeadm demora. Se a turma for grande, organizar por grupos (2 VMs por grupo, não por aluno) e considerar ter as VMs já pré-preparadas até ao fim da Parte 2 (pacotes instalados, swap desativada), deixando para a aula apenas o `kubeadm init`/`join` em diante. Confirmar antecipadamente a versão do repositório de pacotes do Kubernetes indicada no guião, pois o URL é específico da série de versões.

**Atenção aos recursos:** duas VMs por grupo com 2 GB cada consomem rapidamente a RAM do servidor partilhado. Fazer as contas antes da aula.

Momento pedagógico a não perder: antes de instalar o Flannel, mostrar o nó em `NotReady` e o CoreDNS em `Pending` — torna concreto o papel do CNI, que de outro modo fica abstrato. Liga diretamente com a Aula 06 (SDN), onde se aprofunda o modelo de rede aqui usado, e com as Aulas 08 e 09, que reutilizam este cluster (decidir à partida se fica montado entre aulas).
