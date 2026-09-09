# Aula 09 - Redundância e Desacoplamento de Serviços

**Terça-feira, 10 Nov 2026** (3h)

**Objetivos / conteúdos do programa:** C4 - Redundância ativa-ativa vs ativa-passiva, single points of failure, métricas de recuperação (RTO/RPO), desacoplamento e comunicação síncrona vs assíncrona, mensageria com RabbitMQ/AMQP (exchanges, bindings, filas), garantias de entrega e idempotência, dead letter queues e backpressure, message brokers vs event streaming, e redundância no Kubernetes (PodDisruptionBudget, anti-affinity, StatefulSet).

## Teoria
- Aula 09 - Redundancia e Desacoplamento de Servicos.tex

## Prática / laboratório
- Guiao 09 - Mensageria e Desacoplamento com RabbitMQ.tex

## Notas para o docente
Retomar o balanceamento de carga da Aula 08 como forma de redundância ativa-ativa, contrastando com o modelo ativa-passiva (failover).

O guião corre agora **sobre o cluster Kubernetes** (broker + workers como Deployments), dando continuidade às Aulas 05 e 08. **Se o cluster não estiver disponível, o guião inclui uma alternativa explícita com Docker na VM `icn-lab`** — nesse caso saltam-se as Partes 1 e 5, e o exercício central (Parte 4) mantém-se intacto.

Momento pedagógico central, a não cortar: **reduzir os workers a zero e continuar a enviar mensagens**. Ver o produtor a funcionar sem erros enquanto a fila acumula é a demonstração mais direta de desacoplamento temporal. A recuperação subsequente (escalar de novo e ver as mensagens serem processadas) fecha o argumento.

**Nota técnica assumida no guião:** o RabbitMQ é implantado sem PersistentVolume, pelo que o estado se perde ao recriar o Pod. Isto é intencional — o passo da durabilidade pede aos alunos que expliquem o resultado e digam o que faltaria (StatefulSet + PV). Se preferir mostrar o comportamento correto, acrescentar um PVC exige uma StorageClass funcional no cluster, o que num cluster kubeadm simples não existe por omissão — validar antes se quiser seguir esse caminho.

Os workers são injetados por ConfigMap sobre a imagem `python:3.12-slim`, para evitar construir e distribuir imagens próprias; note-se que isso implica um `pip install` a cada arranque de Pod (precisa de rede a partir dos nós).

Esta aula fecha o bloco C4; a Aula 10 muda de tema para armazenamento.
