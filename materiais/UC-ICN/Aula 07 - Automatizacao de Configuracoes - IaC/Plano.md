# Aula 07 - Automatização de Configurações - IaC

**Terça-feira, 27 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C3 - Automatização da configuração e provisionamento através de Infrastructure as Code: declarativo vs imperativo, idempotência, gestão de configuração (Ansible - playbooks, roles, handlers, templates, facts; Puppet/Chef), provisionamento declarativo (Terraform - providers, state file, plan/apply), infraestrutura mutável vs imutável, gestão de segredos, CI/CD e GitOps.

## Teoria
- Aula 07 - Automatizacao de Configuracoes - IaC.tex

## Prática / laboratório
- Guiao 07 - IaC com Ansible e Terraform no Proxmox.tex

## Notas para o docente
Dar ênfase à distinção entre gestão de configuração e provisionamento, pois é a fonte de confusão mais comum. O guião exercita agora as duas camadas: **Ansible** (Partes 1-2) e **Terraform contra a API do Proxmox** (Parte 3).

Dois momentos pedagógicos a não cortar: (a) correr o playbook **duas vezes seguidas** e comparar os `PLAY RECAP` — é a demonstração mais direta de idempotência; (b) **apagar manualmente o `index.html`** na VM alvo e ver o playbook repor o estado — torna concreto o conceito de drift.

**Decisão a tomar antes da aula:** a Parte 3 exige um API token do Proxmox com permissões de criação de VMs. Consoante a política do servidor, ou se cria um token por aluno/grupo restrito a um pool próprio, ou a parte do Terraform é feita como demonstração. O guião assume o primeiro cenário mas está escrito para funcionar nos dois.

**Risco técnico:** o provider Proxmox para Terraform é da comunidade (Telmate), não oficial, e a sintaxe dos recursos muda entre versões. Testar previamente o `main.tf` com a versão que for instalada e ajustar a referência no guião. O guião já avisa os alunos de que podem ter de consultar a documentação da versão — o que, em si, é um exercício realista.

Aproveitar as VMs já criadas em aulas anteriores para reduzir o tempo de setup. Esta aula prepara o terreno para a Aula 08, onde a automatização volta a aparecer como base para o auto-scaling.
