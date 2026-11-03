# Aula 07 - Automatização de Configurações - IaC

**Terça-feira, 27 Out 2026** (3h)

**Objetivos / conteúdos do programa:** C3 - Automatização da configuração e provisionamento através de Infrastructure as Code: declarativo vs imperativo, idempotência, gestão de configuração (Ansible - playbooks, roles, handlers, templates, facts; Puppet/Chef), provisionamento declarativo (Terraform - providers, state file, plan/apply), infraestrutura mutável vs imutável, gestão de segredos, CI/CD e GitOps.

## Teoria
- Aula 07 - Automatizacao de Configuracoes - IaC.tex

## Sebenta
- Sebenta 07 - Automatizacao de Configuracoes - IaC.tex (uma página por slide, 33 slides; imagens em Sebenta/slides)

## Diagramas
Fonte editável (`.drawio`) e PNG em `Diagramas/`:
- a07-plan-apply
- a07-provisionamento-config
- a07-manual-vs-iac
- a07-imperativo-declarativo
- a07-agentless-agent
- a07-ansible-estrutura
- a07-terraform-estado
- a07-mutavel-imutavel
- a07-pipeline-iac
- a07-gitops
- a07-devops-infinito
- a07-integracao-stack (Git/Terraform/Ansible/Docker/Kubernetes)
- a07-resumo-aula (graphical abstract, logos GitHub/Terraform/Ansible via simple-icons)

## Notas para o docente
Aula expositiva, sem componente laboratorial. Dar ênfase à distinção entre gestão de configuração e provisionamento, pois é a fonte de confusão mais comum — o diagrama `a07-provisionamento-config` é o recurso central para isso.

Ao explicar idempotência, vale a pena descrever (mesmo sem execução ao vivo) o cenário de correr o mesmo playbook duas vezes seguidas e obter "nada mudou" na segunda — e o cenário de drift (alguém altera manualmente o servidor e a próxima execução repõe o estado declarado). São os dois exemplos que tornam o conceito concreto.

Esta aula prepara o terreno para a Aula 08, onde a automatização volta a aparecer como base para o auto-scaling.
