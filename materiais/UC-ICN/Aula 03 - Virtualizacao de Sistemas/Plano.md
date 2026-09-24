# Aula 03 - Virtualização de Sistemas

**Terça-feira, 29 Set 2026** (3h)

**Objetivos / conteúdos do programa:** C2 - Conceito e níveis de virtualização, requisitos de Popek e Goldberg e classificação de instruções, anéis de privilégio e a limitação do x86, estratégias de virtualização de CPU (tradução binária, paravirtualização, assistência por hardware), arquiteturas de hypervisor, virtualização de memória (tabelas sombra, EPT/NPT), sobrecompromisso (KSM, ballooning), virtualização de I/O (emulação, virtio, passthrough, SR-IOV), formatos de disco e aprovisionamento fino, instantâneos e clones, migração em execução e sobrecarga. Introdução ao KVM, ao LXC e à plataforma Proxmox VE.

## Teoria
- Aula 03 - Virtualizacao de Sistemas.tex

## Sebenta
- Sebenta 03 - Virtualizacao de Sistemas.tex

## Laboratório
- Laboratorio 03 - Primeiro Contacto com Containers.tex

Trabalho em equipamento próprio do aluno, com Docker. Não requer acesso ao servidor da UC. **Não é para entregar**: destina-se a ser explorado durante a aula, ao ritmo de cada aluno. As caixas *Pare e observe* marcam os momentos de interpretação e discussão.

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a03-hypervisors
- a03-vm-vs-container
- a03-percurso-laboratorio (visão geral do guião, do passo 1 ao 7)
- m03-tres-kernels

## Notas para o docente
Aula expositiva com laboratório de realização autónoma. O deck inclui sete questões de escolha múltipla, cada uma seguida da respetiva resolução no slide seguinte.

O ponto que mais gera confusão continua a ser a limitação do x86, isto é, a existência de instruções sensíveis não privilegiadas, e a razão pela qual originou três soluções distintas em vez de uma. As Perguntas 1 e 2 foram construídas precisamente para consolidar esse raciocínio: a primeira estabelece o problema, a segunda obriga a escolher a estratégia aplicável quando duas restrições coexistem.

**Laboratório.** O diagrama `a03-percurso-laboratorio` existe para contextualizar o guião antes de os alunos começarem: mostra os sete passos em progressão, da simples execução ao controlo de recursos, e assinala onde está o ponto central. Aparece no deck (slide "Laboratório: Percurso") e em página landscape no próprio guião.

O momento pedagógico central é a comparação de `uname -r` dentro e fora do container. Em Linux as versões coincidem; em Windows e macOS não, por existir uma máquina virtual Linux interposta pelo Docker Desktop. Este resultado permite mostrar os dois modelos de virtualização a coexistir no mesmo equipamento, e é antecipado pela Pergunta 7. Convém confirmar antes da aula quantos alunos usam cada sistema operativo, para preparar a discussão dos dois casos.

Ponto de atenção: alguns alunos terão dificuldade na instalação, sobretudo em Windows sem WSL 2 ativo. O guião inclui secção de resolução de problemas, mas vale a pena reservar tempo no final da aula para desbloquear casos individuais.

Liga-se à Aula 04, que aprofunda as primitivas de kernel (namespaces e cgroups) responsáveis pelo isolamento e pelos limites de recursos observados no laboratório.
