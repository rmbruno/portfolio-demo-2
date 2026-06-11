
/* ==========================================================
   HelpCore — Interações e dados mockados
   ========================================================== */
(function () {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const storageKey = 'helpcoreTicketsDemo';
  const themeKey = 'helpcoreTheme';

  const clients = [
    { name: 'Alpha Contabilidade', plan: 'Professional', tickets: 32, contract: 'Ativo', owner: 'Juliana Castro', last: 'Hoje, 10:42' },
    { name: 'NorteLog Transportes', plan: 'Enterprise', tickets: 41, contract: 'Ativo', owner: 'Renato Lima', last: 'Hoje, 09:18' },
    { name: 'Clínica VivaMais', plan: 'Professional', tickets: 24, contract: 'Ativo', owner: 'Patrícia Gomes', last: 'Ontem, 16:05' },
    { name: 'Mercado Central', plan: 'Starter', tickets: 18, contract: 'Ativo', owner: 'Silvio Moraes', last: 'Ontem, 13:21' },
    { name: 'Conecta Provedor', plan: 'Enterprise', tickets: 47, contract: 'Ativo', owner: 'Bruna Alves', last: 'Segunda, 11:12' },
    { name: 'Escritório Prime', plan: 'Professional', tickets: 29, contract: 'Ativo', owner: 'Fernanda Reis', last: 'Terça, 15:40' },
    { name: 'Escola Futuro', plan: 'Starter', tickets: 15, contract: 'Em renovação', owner: 'Carlos Braga', last: 'Quarta, 08:55' },
    { name: 'Oficina Ágil', plan: 'Starter', tickets: 12, contract: 'Ativo', owner: 'Mauro Nunes', last: 'Quarta, 17:32' }
  ];

  const technicians = [
    { name: 'Bruno Machado', initials: 'BM', role: 'Analista sênior', specialty: 'Infraestrutura', assigned: 18, resolved: 64, sla: 96, status: 'Disponível' },
    { name: 'Camila Rocha', initials: 'CR', role: 'Especialista de sistemas', specialty: 'Sistemas', assigned: 16, resolved: 58, sla: 94, status: 'Ocupado' },
    { name: 'Rafael Antunes', initials: 'RA', role: 'Analista de redes', specialty: 'Redes', assigned: 14, resolved: 49, sla: 91, status: 'Disponível' },
    { name: 'Mariana Lopes', initials: 'ML', role: 'Atendimento técnico', specialty: 'Atendimento', assigned: 21, resolved: 72, sla: 89, status: 'Ocupado' },
    { name: 'Diego Martins', initials: 'DM', role: 'Segurança da informação', specialty: 'Segurança', assigned: 9, resolved: 33, sla: 97, status: 'Ausente' },
    { name: 'Aline Pereira', initials: 'AP', role: 'Suporte nível 1', specialty: 'Suporte N1', assigned: 24, resolved: 81, sla: 88, status: 'Disponível' }
  ];

  const defaultTickets = [
    { code: '#HC-1024', title: 'Computador não liga', client: 'Alpha Contabilidade', technician: 'Bruno Machado', category: 'Hardware', priority: 'Alta', status: 'Em atendimento', sla: 'Em risco', opened: '11/06/2026 08:14', age: '2h 18min', description: 'Estação principal do financeiro não inicia após queda de energia.' },
    { code: '#HC-1025', title: 'Erro ao acessar sistema financeiro', client: 'Escritório Prime', technician: 'Camila Rocha', category: 'Sistema', priority: 'Crítica', status: 'Novo', sla: 'Atrasado', opened: '11/06/2026 09:03', age: '1h 42min', description: 'Usuários recebem mensagem de erro ao autenticar no sistema financeiro.' },
    { code: '#HC-1026', title: 'Impressora não aparece na rede', client: 'Clínica VivaMais', technician: 'Rafael Antunes', category: 'Impressora', priority: 'Média', status: 'Aguardando cliente', sla: 'No prazo', opened: '10/06/2026 15:30', age: '19h', description: 'Impressora do setor de recepção não aparece nas estações novas.' },
    { code: '#HC-1027', title: 'E-mail institucional bloqueado', client: 'NorteLog Transportes', technician: 'Mariana Lopes', category: 'E-mail', priority: 'Alta', status: 'Em atendimento', sla: 'Em risco', opened: '11/06/2026 07:55', age: '2h 37min', description: 'Conta institucional bloqueada após múltiplas tentativas de senha.' },
    { code: '#HC-1028', title: 'Lentidão na internet', client: 'Conecta Provedor', technician: 'Rafael Antunes', category: 'Rede', priority: 'Média', status: 'Resolvido', sla: 'No prazo', opened: '09/06/2026 14:20', age: '2 dias', description: 'Lentidão intermitente em setor administrativo resolvida com ajuste de DNS.' },
    { code: '#HC-1029', title: 'Solicitação de novo usuário', client: 'Escola Futuro', technician: 'Aline Pereira', category: 'Acesso', priority: 'Baixa', status: 'Novo', sla: 'No prazo', opened: '11/06/2026 10:11', age: '34min', description: 'Criar usuário para novo colaborador da secretaria.' },
    { code: '#HC-1030', title: 'Backup não finalizou', client: 'Mercado Central', technician: 'Diego Martins', category: 'Segurança', priority: 'Alta', status: 'Em atendimento', sla: 'No prazo', opened: '10/06/2026 17:48', age: '17h', description: 'Rotina de backup exibiu alerta de arquivo bloqueado.' },
    { code: '#HC-1031', title: 'Notebook superaquecendo', client: 'Oficina Ágil', technician: 'Bruno Machado', category: 'Hardware', priority: 'Média', status: 'Novo', sla: 'No prazo', opened: '11/06/2026 09:50', age: '55min', description: 'Equipamento desliga após alguns minutos de uso intenso.' },
    { code: '#HC-1032', title: 'Sistema de vendas sem emissão', client: 'Mercado Central', technician: 'Camila Rocha', category: 'Sistema', priority: 'Crítica', status: 'Em atendimento', sla: 'Atrasado', opened: '11/06/2026 06:22', age: '4h 20min', description: 'PDV não conclui emissão em dois caixas.' },
    { code: '#HC-1033', title: 'Wi-Fi instável na diretoria', client: 'Alpha Contabilidade', technician: 'Rafael Antunes', category: 'Rede', priority: 'Média', status: 'Aguardando cliente', sla: 'No prazo', opened: '10/06/2026 11:10', age: '23h', description: 'Oscilação em sala com baixa intensidade de sinal.' },
    { code: '#HC-1034', title: 'Troca de senha em lote', client: 'Clínica VivaMais', technician: 'Aline Pereira', category: 'Acesso', priority: 'Baixa', status: 'Resolvido', sla: 'No prazo', opened: '08/06/2026 10:30', age: '3 dias', description: 'Solicitada redefinição de senhas para equipe administrativa.' },
    { code: '#HC-1035', title: 'Atualização de antivírus pendente', client: 'NorteLog Transportes', technician: 'Diego Martins', category: 'Segurança', priority: 'Alta', status: 'Novo', sla: 'Em risco', opened: '11/06/2026 07:12', age: '3h 30min', description: 'Console apontou estações com antivírus desatualizado.' },
    { code: '#HC-1036', title: 'Scanner não reconhecido', client: 'Escritório Prime', technician: 'Bruno Machado', category: 'Hardware', priority: 'Média', status: 'Encerrado', sla: 'No prazo', opened: '07/06/2026 13:40', age: '4 dias', description: 'Driver reinstalado e scanner validado com usuário.' },
    { code: '#HC-1037', title: 'Assinatura de e-mail incorreta', client: 'Escola Futuro', technician: 'Mariana Lopes', category: 'E-mail', priority: 'Baixa', status: 'Resolvido', sla: 'No prazo', opened: '09/06/2026 09:22', age: '2 dias', description: 'Padronização de assinatura institucional concluída.' },
    { code: '#HC-1038', title: 'VPN desconectando', client: 'Conecta Provedor', technician: 'Rafael Antunes', category: 'Rede', priority: 'Alta', status: 'Em atendimento', sla: 'No prazo', opened: '10/06/2026 16:15', age: '18h', description: 'Usuários externos perdem conexão VPN após 20 minutos.' },
    { code: '#HC-1039', title: 'Erro em planilha compartilhada', client: 'Oficina Ágil', technician: 'Camila Rocha', category: 'Software', priority: 'Média', status: 'Aguardando cliente', sla: 'No prazo', opened: '10/06/2026 12:43', age: '22h', description: 'Planilha apresenta conflito de versões entre usuários.' },
    { code: '#HC-1040', title: 'Criar acesso ao financeiro', client: 'Alpha Contabilidade', technician: 'Aline Pereira', category: 'Acesso', priority: 'Baixa', status: 'Novo', sla: 'No prazo', opened: '11/06/2026 10:25', age: '20min', description: 'Novo colaborador precisa de acesso ao módulo financeiro.' },
    { code: '#HC-1041', title: 'Impressão lenta em etiquetas', client: 'Mercado Central', technician: 'Bruno Machado', category: 'Impressora', priority: 'Média', status: 'Resolvido', sla: 'No prazo', opened: '08/06/2026 08:50', age: '3 dias', description: 'Fila de impressão ajustada para etiquetas do estoque.' },
    { code: '#HC-1042', title: 'Alerta de login suspeito', client: 'NorteLog Transportes', technician: 'Diego Martins', category: 'Segurança', priority: 'Crítica', status: 'Em atendimento', sla: 'Em risco', opened: '11/06/2026 08:40', age: '2h 05min', description: 'Acesso incomum detectado em conta administrativa.' },
    { code: '#HC-1043', title: 'Sistema escolar travando', client: 'Escola Futuro', technician: 'Camila Rocha', category: 'Sistema', priority: 'Alta', status: 'Novo', sla: 'No prazo', opened: '11/06/2026 09:35', age: '1h 10min', description: 'Tela de cadastro de alunos trava ao salvar registros.' }
  ];

  function escapeHTML(value) {
    return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  function getTickets() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      return Array.isArray(saved) && saved.length ? saved : defaultTickets.slice();
    } catch (error) {
      return defaultTickets.slice();
    }
  }

  function saveTickets(tickets) {
    localStorage.setItem(storageKey, JSON.stringify(tickets));
  }

  let tickets = getTickets();

  function priorityClass(priority) {
    return { Baixa: 'badge--low', Média: 'badge--medium', Alta: 'badge--high', Crítica: 'badge--critical' }[priority] || 'badge--info';
  }
  function statusClass(status) {
    return { Novo: 'badge--new', 'Em atendimento': 'badge--doing', 'Aguardando cliente': 'badge--waiting', Resolvido: 'badge--resolved', Encerrado: 'badge--closed' }[status] || 'badge--info';
  }
  function slaClass(sla) {
    return { 'No prazo': 'badge--sla-good', 'Em risco': 'badge--sla-risk', Atrasado: 'badge--sla-late' }[sla] || 'badge--info';
  }
  function statusDotClass(status) {
    if (status === 'Ocupado') return 'status-dot--busy';
    if (status === 'Ausente') return 'status-dot--away';
    return '';
  }

  function showToast(message) {
    const toast = $('[data-toast]');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
  }

  function setupTheme() {
    const saved = localStorage.getItem(themeKey);
    if (saved === 'dark') document.body.classList.add('dark-theme');
    const sync = () => $$('[data-theme-checkbox]').forEach(input => { input.checked = document.body.classList.contains('dark-theme'); });
    sync();
    $$('[data-theme-toggle]').forEach(button => button.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      localStorage.setItem(themeKey, document.body.classList.contains('dark-theme') ? 'dark' : 'light');
      sync();
      showToast('Tema atualizado com sucesso.');
    }));
    $$('[data-theme-checkbox]').forEach(input => input.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme', input.checked);
      localStorage.setItem(themeKey, input.checked ? 'dark' : 'light');
      sync();
      showToast('Preferência de tema salva.');
    }));
  }

  function setupNavigation() {
    const current = location.pathname.split('/').pop() || 'index.html';
    $$('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href === current) link.classList.add('active');
    });

    const publicToggle = $('[data-public-menu-toggle]');
    const publicNav = $('[data-public-nav]');
    if (publicToggle && publicNav) {
      publicToggle.addEventListener('click', () => {
        const isOpen = publicNav.classList.toggle('is-open');
        publicToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }

    const sidebar = $('[data-sidebar]');
    const mobileSidebar = $('[data-mobile-sidebar]');
    const backdrop = $('[data-sidebar-backdrop]');
    const collapse = $('[data-sidebar-collapse]');

    if (mobileSidebar && sidebar) {
      mobileSidebar.addEventListener('click', () => {
        sidebar.classList.add('is-open');
        backdrop?.classList.add('is-visible');
        document.body.classList.add('no-scroll');
      });
    }
    if (backdrop && sidebar) {
      backdrop.addEventListener('click', () => {
        sidebar.classList.remove('is-open');
        backdrop.classList.remove('is-visible');
        document.body.classList.remove('no-scroll');
      });
    }
    if (collapse) {
      collapse.addEventListener('click', () => document.body.classList.toggle('sidebar-collapsed'));
    }
  }

  function setupBackToTop() {
    const button = $('[data-back-to-top]');
    if (!button) return;
    const toggle = () => button.classList.toggle('is-visible', window.scrollY > 460);
    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  function setupReveal() {
    const elements = $$('.reveal');
    if (!elements.length) return;
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    elements.forEach(el => observer.observe(el));
  }

  function renderStatusChart() {
    const el = $('#statusChart');
    if (!el) return;
    const statuses = ['Novo', 'Em atendimento', 'Aguardando cliente', 'Resolvido', 'Encerrado'];
    const counts = statuses.map(status => ({ status, count: tickets.filter(t => t.status === status).length }));
    const max = Math.max(...counts.map(item => item.count), 1);
    el.innerHTML = counts.map(item => `
      <div class="status-bar">
        <strong>${item.count}</strong>
        <div class="status-bar__fill" style="--height:${Math.max(16, (item.count / max) * 100)}%"></div>
        <span>${item.status}</span>
      </div>
    `).join('');
  }

  function renderDashboard() {
    renderStatusChart();
    const recent = $('#recentTicketsTable');
    if (recent) {
      recent.innerHTML = tickets.slice(0, 6).map(ticket => `
        <tr>
          <td><strong>${ticket.code}</strong></td>
          <td>${escapeHTML(ticket.title)}</td>
          <td>${escapeHTML(ticket.client)}</td>
          <td><span class="badge ${priorityClass(ticket.priority)}">${ticket.priority}</span></td>
          <td><span class="badge ${statusClass(ticket.status)}">${ticket.status}</span></td>
          <td><span class="badge ${slaClass(ticket.sla)}">${ticket.sla}</span></td>
        </tr>
      `).join('');
    }
    const slaAlerts = $('#slaAlerts');
    if (slaAlerts) {
      const alerts = tickets.filter(t => t.sla !== 'No prazo').slice(0, 5);
      slaAlerts.innerHTML = alerts.map(ticket => `
        <div class="sla-item"><div><strong>${ticket.code}</strong><small>${escapeHTML(ticket.title)}</small></div><span class="badge ${slaClass(ticket.sla)}">${ticket.sla}</span></div>
      `).join('') || '<div class="empty-state">Nenhum alerta de SLA no momento.</div>';
    }
    const featured = $('#featuredTechs');
    if (featured) {
      featured.innerHTML = technicians.slice(0, 4).map(tech => `
        <div class="tech-item"><span class="avatar avatar--sm">${tech.initials}</span><div><strong>${tech.name}</strong><small>${tech.specialty} • ${tech.assigned} atribuídos</small></div><span class="status-dot ${statusDotClass(tech.status)}">${tech.status}</span></div>
      `).join('');
    }
    const activities = $('#activityList');
    if (activities) {
      const items = [
        ['#HC-1025', 'Chamado crítico classificado para Camila Rocha', 'há 12 min'],
        ['#HC-1027', 'Cliente respondeu com evidências do bloqueio de e-mail', 'há 28 min'],
        ['#HC-1042', 'Alerta de login suspeito marcado como prioridade crítica', 'há 41 min'],
        ['#HC-1028', 'Chamado resolvido e aguardando encerramento automático', 'há 1h'],
      ];
      activities.innerHTML = items.map(item => `<div class="activity-item"><div><strong>${item[0]}</strong><small>${item[1]}</small></div><span>${item[2]}</span></div>`).join('');
    }
  }

  function populateNewTicketForm() {
    $$('select[name="client"]').forEach(select => {
      if (!select.options.length) select.innerHTML = clients.map(c => `<option>${c.name}</option>`).join('');
    });
    $$('select[name="technician"]').forEach(select => {
      if (!select.options.length) select.innerHTML = technicians.map(t => `<option>${t.name}</option>`).join('');
    });
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }
  function closeModals() {
    $$('.modal').forEach(modal => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    });
    document.body.classList.remove('no-scroll');
  }

  function setupModals() {
    $$('[data-close-modal]').forEach(btn => btn.addEventListener('click', closeModals));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModals(); });
    $$('[data-open-new-ticket]').forEach(button => button.addEventListener('click', () => {
      populateNewTicketForm();
      openModal($('[data-new-ticket-modal]'));
    }));
  }

  function renderTicketsTable() {
    const tbody = $('#ticketsTableBody');
    if (!tbody) return;
    const search = ($('#ticketSearch')?.value || '').toLowerCase().trim();
    const status = $('#statusFilter')?.value || '';
    const priority = $('#priorityFilter')?.value || '';
    const category = $('#categoryFilter')?.value || '';

    const filtered = tickets.filter(ticket => {
      const haystack = `${ticket.code} ${ticket.title} ${ticket.client} ${ticket.technician}`.toLowerCase();
      return (!search || haystack.includes(search)) && (!status || ticket.status === status) && (!priority || ticket.priority === priority) && (!category || ticket.category === category);
    });

    tbody.innerHTML = filtered.map(ticket => `
      <tr>
        <td><strong>${ticket.code}</strong></td>
        <td>${escapeHTML(ticket.title)}</td>
        <td>${escapeHTML(ticket.client)}</td>
        <td>${escapeHTML(ticket.technician)}</td>
        <td>${ticket.category}</td>
        <td><span class="badge ${priorityClass(ticket.priority)}">${ticket.priority}</span></td>
        <td><span class="badge ${statusClass(ticket.status)}">${ticket.status}</span></td>
        <td><span class="badge ${slaClass(ticket.sla)}">${ticket.sla}</span></td>
        <td>${ticket.opened}</td>
        <td><button class="btn btn--soft" type="button" data-view-ticket="${ticket.code}">Ver</button></td>
      </tr>
    `).join('');
    const empty = $('#ticketsEmpty');
    if (empty) empty.hidden = filtered.length !== 0;
  }

  function showTicketDetails(code) {
    const ticket = tickets.find(item => item.code === code);
    const content = $('#ticketModalContent');
    if (!ticket || !content) return;
    content.innerHTML = `
      <span class="eyebrow">Detalhes do chamado</span>
      <h2 id="ticketModalTitle">${ticket.code} — ${escapeHTML(ticket.title)}</h2>
      <p class="muted">${escapeHTML(ticket.description || 'Solicitação técnica registrada no fluxo de atendimento.')}</p>
      <div class="ticket-detail-grid">
        <div><span>Cliente</span><strong>${escapeHTML(ticket.client)}</strong></div>
        <div><span>Técnico</span><strong>${escapeHTML(ticket.technician)}</strong></div>
        <div><span>Categoria</span><strong>${ticket.category}</strong></div>
        <div><span>Prioridade</span><strong><span class="badge ${priorityClass(ticket.priority)}">${ticket.priority}</span></strong></div>
        <div><span>Status</span><strong><span class="badge ${statusClass(ticket.status)}">${ticket.status}</span></strong></div>
        <div><span>SLA</span><strong><span class="badge ${slaClass(ticket.sla)}">${ticket.sla}</span></strong></div>
        <div><span>Abertura</span><strong>${ticket.opened}</strong></div>
        <div><span>Tempo em aberto</span><strong>${ticket.age}</strong></div>
      </div>
      <div class="form-actions"><button class="btn btn--ghost" type="button" data-close-modal>Fechar</button></div>
    `;
    $$('[data-close-modal]', content).forEach(btn => btn.addEventListener('click', closeModals));
    openModal($('[data-ticket-modal]'));
  }

  function setupTicketsPage() {
    if (!$('#ticketsTableBody')) return;
    ['ticketSearch', 'statusFilter', 'priorityFilter', 'categoryFilter'].forEach(id => {
      const element = $('#' + id);
      if (element) element.addEventListener('input', renderTicketsTable);
    });
    document.addEventListener('click', event => {
      const button = event.target.closest('[data-view-ticket]');
      if (button) showTicketDetails(button.dataset.viewTicket);
    });
    const form = $('#newTicketForm');
    if (form) {
      populateNewTicketForm();
      form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const nextNumber = Math.max(...tickets.map(t => Number(t.code.replace(/\D/g, ''))), 1043) + 1;
        const ticket = {
          code: `#HC-${nextNumber}`,
          title: formData.get('title'),
          client: formData.get('client'),
          technician: formData.get('technician'),
          category: formData.get('category'),
          priority: formData.get('priority'),
          status: 'Novo',
          sla: formData.get('priority') === 'Crítica' ? 'Em risco' : 'No prazo',
          opened: new Date().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
          age: 'agora',
          description: formData.get('description') || 'Chamado criado na simulação do HelpCore.'
        };
        tickets.unshift(ticket);
        saveTickets(tickets);
        renderTicketsTable();
        renderDashboard();
        form.reset();
        closeModals();
        showToast(`${ticket.code} criado com sucesso na simulação.`);
      });
    }
    renderTicketsTable();
  }

  function renderKanban() {
    const board = $('#kanbanBoard');
    if (!board) return;
    const columns = ['Novo', 'Em atendimento', 'Aguardando cliente', 'Resolvido'];
    board.innerHTML = columns.map(status => {
      const items = tickets.filter(ticket => ticket.status === status).slice(0, 7);
      return `
        <section class="kanban-column" aria-label="${status}">
          <div class="kanban-column__header"><h3>${status}</h3><span>${items.length}</span></div>
          <div class="kanban-list">
            ${items.map(ticket => `
              <article class="kanban-card">
                <span class="badge ${statusClass(ticket.status)}">${ticket.code}</span>
                <h4>${escapeHTML(ticket.title)}</h4>
                <p>${escapeHTML(ticket.client)}</p>
                <div class="kanban-meta"><span class="badge ${priorityClass(ticket.priority)}">${ticket.priority}</span><span class="badge ${slaClass(ticket.sla)}">${ticket.sla}</span></div>
                <p><strong>${escapeHTML(ticket.technician)}</strong> • ${ticket.age}</p>
                ${ticket.status === 'Resolvido' ? '<button class="btn btn--ghost" type="button" disabled>Concluído</button>' : `<button class="btn btn--primary" type="button" data-advance-ticket="${ticket.code}">Avançar status</button>`}
              </article>
            `).join('') || '<div class="empty-state">Sem chamados nesta etapa.</div>'}
          </div>
        </section>`;
    }).join('');
  }

  function setupKanban() {
    if (!$('#kanbanBoard')) return;
    document.addEventListener('click', event => {
      const button = event.target.closest('[data-advance-ticket]');
      if (!button) return;
      const order = ['Novo', 'Em atendimento', 'Aguardando cliente', 'Resolvido'];
      const ticket = tickets.find(item => item.code === button.dataset.advanceTicket);
      if (!ticket) return;
      const next = order[order.indexOf(ticket.status) + 1];
      if (next) {
        ticket.status = next;
        ticket.sla = next === 'Resolvido' ? 'No prazo' : ticket.sla;
        saveTickets(tickets);
        renderKanban();
        showToast(`${ticket.code} movido para ${next}.`);
      }
    });
    renderKanban();
  }

  function renderClients() {
    const grid = $('#clientsGrid');
    if (!grid) return;
    const search = ($('#clientSearch')?.value || '').toLowerCase().trim();
    const plan = $('#planFilter')?.value || '';
    const filtered = clients.filter(client => (!search || client.name.toLowerCase().includes(search)) && (!plan || client.plan === plan));
    grid.innerHTML = filtered.map(client => `
      <article class="client-card">
        <div class="client-card__top"><h3>${client.name}</h3><span class="badge ${client.contract === 'Ativo' ? 'badge--success' : 'badge--doing'}">${client.contract}</span></div>
        <span class="badge badge--info">${client.plan}</span>
        <div class="client-meta">
          <div><span>Chamados</span><strong>${client.tickets}</strong></div>
          <div><span>Responsável</span><strong>${client.owner}</strong></div>
          <div><span>Último atendimento</span><strong>${client.last}</strong></div>
        </div>
      </article>
    `).join('');
    $('#clientsEmpty').hidden = filtered.length !== 0;
  }

  function setupClients() {
    if (!$('#clientsGrid')) return;
    $('#clientSearch')?.addEventListener('input', renderClients);
    $('#planFilter')?.addEventListener('input', renderClients);
    renderClients();
  }

  function renderTechnicians() {
    const grid = $('#techniciansGrid');
    if (!grid) return;
    const specialty = $('#techSpecialtyFilter')?.value || '';
    const filtered = technicians.filter(tech => !specialty || tech.specialty === specialty);
    grid.innerHTML = filtered.map(tech => `
      <article class="technician-card">
        <div class="technician-card__top"><span class="avatar">${tech.initials}</span><span class="status-dot ${statusDotClass(tech.status)}">${tech.status}</span></div>
        <h3>${tech.name}</h3>
        <p class="muted">${tech.role}</p>
        <span class="badge badge--info">${tech.specialty}</span>
        <div class="technician-meta">
          <div><span>Atribuídos</span><strong>${tech.assigned}</strong></div>
          <div><span>Resolvidos</span><strong>${tech.resolved}</strong></div>
          <div><span>SLA</span><strong>${tech.sla}%</strong></div>
        </div>
      </article>
    `).join('');
    $('#techniciansEmpty').hidden = filtered.length !== 0;
  }

  function setupTechnicians() {
    if (!$('#techniciansGrid')) return;
    $('#techSpecialtyFilter')?.addEventListener('input', renderTechnicians);
    renderTechnicians();
  }

  function renderReports() {
    const monthly = $('#monthlyChart');
    if (monthly) {
      const data = [122, 138, 151, 168, 176, 192, 206, 184, 211, 226, 238, 246];
      const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const max = Math.max(...data);
      monthly.innerHTML = data.map((value, index) => `
        <div class="monthly-bar"><strong>${value}</strong><div class="monthly-bar__fill" style="--height:${(value / max) * 100}%"></div><span>${months[index]}</span></div>
      `).join('');
    }
    const category = $('#categoryChart');
    if (category) {
      const counts = tickets.reduce((acc, ticket) => { acc[ticket.category] = (acc[ticket.category] || 0) + 1; return acc; }, {});
      const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const max = Math.max(...entries.map(entry => entry[1]), 1);
      category.innerHTML = entries.map(([name, value]) => `
        <div class="category-row"><span>${name}</span><div class="category-track"><i style="--width:${(value / max) * 100}%"></i></div><strong>${value}</strong></div>
      `).join('');
    }
    const perf = $('#techPerformanceTable');
    if (perf) {
      perf.innerHTML = technicians.map(tech => `<tr><td><strong>${tech.name}</strong></td><td>${tech.specialty}</td><td>${tech.assigned}</td><td>${tech.resolved}</td><td><span class="badge ${tech.sla >= 94 ? 'badge--success' : tech.sla >= 90 ? 'badge--info' : 'badge--doing'}">${tech.sla}%</span></td></tr>`).join('');
    }
    const ranking = $('#clientRanking');
    if (ranking) {
      ranking.innerHTML = clients.slice().sort((a, b) => b.tickets - a.tickets).slice(0, 6).map((client, index) => `
        <div class="ranking-item"><div><strong>${index + 1}. ${client.name}</strong><small>${client.plan}</small></div><span class="badge badge--info">${client.tickets}</span></div>
      `).join('');
    }
  }

  function setupSettings() {
    const form = $('#settingsForm');
    if (form) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        showToast('Configurações salvas com sucesso na simulação.');
      });
    }
  }

  function init() {
    setupTheme();
    setupNavigation();
    setupBackToTop();
    setupReveal();
    setupModals();
    setupTicketsPage();
    setupKanban();
    setupClients();
    setupTechnicians();
    setupSettings();
    renderDashboard();
    renderReports();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
