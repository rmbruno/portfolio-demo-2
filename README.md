# HelpCore — Dashboard SaaS de Helpdesk

HelpCore é um projeto fictício de dashboard administrativo SaaS para suporte técnico, helpdesk, atendimento interno, gestão de chamados e controle de SLA.

## Objetivo

Criar uma demo navegável e profissional para portfólio, demonstrando domínio de HTML, CSS e JavaScript puro na construção de uma interface administrativa moderna, responsiva e funcional.

## Nicho

Suporte técnico, helpdesk, atendimento interno, gestão de chamados, controle de SLA e produtividade da equipe de TI.

## Tipo de projeto

Dashboard administrativo SaaS + landing page curta de apresentação + páginas internas navegáveis.

## Funcionalidades

- Landing page comercial curta;
- Dashboard principal com métricas, alertas, gráficos e atividades;
- Listagem de chamados com busca e filtros;
- Modal de detalhes do chamado;
- Modal de novo chamado fictício;
- Simulação de criação de chamado em localStorage;
- Fila Kanban com avanço de status;
- Página de clientes com busca e filtro por plano;
- Página de técnicos com filtro por especialidade;
- Relatórios com gráficos CSS/JS;
- Configurações simuladas;
- Tema claro/escuro;
- Sidebar responsiva e recolhível;
- Menu mobile;
- Toasts de sucesso;
- Botão voltar ao topo;
- Dados mockados no JavaScript.

## Páginas incluídas

- `index.html` — landing page do produto;
- `dashboard.html` — painel principal;
- `chamados.html` — lista de chamados, filtros e modais;
- `fila.html` — kanban de atendimento;
- `clientes.html` — empresas atendidas;
- `tecnicos.html` — equipe técnica;
- `relatorios.html` — indicadores e gráficos;
- `configuracoes.html` — preferências simuladas.

## Tecnologias usadas

- HTML5;
- CSS3;
- JavaScript puro;
- Google Fonts;
- SVG inline e elementos visuais em CSS;
- Dados fictícios mockados no JavaScript.

## Estrutura de pastas

```txt
helpcore/
├── index.html
├── dashboard.html
├── chamados.html
├── fila.html
├── clientes.html
├── tecnicos.html
├── relatorios.html
├── configuracoes.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── img/
        └── README.txt
```

## Como rodar localmente

Não é necessário instalar dependências.

1. Baixe ou clone o repositório;
2. Abra a pasta do projeto;
3. Clique duas vezes no arquivo `index.html`;
4. Navegue pelas páginas usando o menu.

Também é possível abrir com a extensão Live Server do VS Code, mas não é obrigatório.

## Como publicar no GitHub Pages

1. Envie todos os arquivos para o repositório no GitHub;
2. Acesse `Settings` > `Pages`;
3. Em `Build and deployment`, selecione `Deploy from a branch`;
4. Escolha a branch `main` e a pasta `/root`;
5. Salve;
6. Aguarde a publicação do GitHub Pages.

## Observação

Este projeto é totalmente fictício e foi criado para fins de portfólio. Nenhum dado é real, não há backend, banco de dados, autenticação, APIs privadas ou integração com serviços externos.

## Sugestões de melhorias futuras

- Implementar autenticação real;
- Criar backend com API para chamados;
- Adicionar drag and drop real no Kanban;
- Implementar gráficos com dados reais;
- Criar permissões por perfil de usuário;
- Integrar notificações por e-mail;
- Adicionar exportação de relatórios em PDF;
- Criar tela de base de conhecimento;
- Adicionar anexos aos chamados.
