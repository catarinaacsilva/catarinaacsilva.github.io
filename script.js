document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// --- Lógica do Visualizador de PDFs ---

function openViewer(title, url) {
    const viewerSection = document.getElementById('document-viewer');
    const viewerTitle = document.getElementById('viewer-title');
    const viewerDownload = document.getElementById('viewer-download');
    const viewerFrame = document.getElementById('viewer-frame');

    // Atualiza os textos e os links
    viewerTitle.textContent = title;
    viewerDownload.href = url;
    viewerDownload.download = decodeURIComponent(url.split('/').pop());
    
    // Suporte tanto para <iframe> como para <object>
    if (viewerFrame.tagName.toLowerCase() === 'iframe') {
        viewerFrame.src = url;
    } else {
        viewerFrame.data = url;
    }
    
    // Mostra o visualizador
    viewerSection.style.display = 'block';
    
    // Faz um scroll suave até ao visualizador
    setTimeout(() => {
        viewerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
}

// Exportar PDF: o atributo download sozinho falha em alguns browsers (abre o PDF
// em vez de o guardar), por isso o ficheiro é obtido como blob e guardado.
document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('viewer-download');
    if (!link) return;
    link.addEventListener('click', async (e) => {
        const url = link.getAttribute('href');
        if (!url || url === '#') { e.preventDefault(); return; }
        try {
            e.preventDefault();
            const res = await fetch(url);
            if (!res.ok) throw new Error(res.status);
            const blobUrl = URL.createObjectURL(await res.blob());
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = link.download;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
        } catch (err) {
            window.open(url, '_blank');   // alternativa: abre o PDF num novo separador
        }
    });
});

function closeViewer() {
    const viewerSection = document.getElementById('document-viewer');
    const viewerFrame = document.getElementById('viewer-frame');
    
    // Esconde o visualizador
    viewerSection.style.display = 'none';
    
    // Limpa a memória do browser
    if (viewerFrame.tagName.toLowerCase() === 'iframe') {
        viewerFrame.src = '';
    } else {
        viewerFrame.data = '';
    }
}
// --- Índice interativo: salta para o cartão da aula e realça-o ---

function goToLecture(n) {
    const card = document.getElementById('lecture-' + n);
    if (!card) return;

    card.scrollIntoView({ behavior: 'smooth', block: 'center' });

    card.classList.remove('is-target');
    void card.offsetWidth;          // reinicia a animação se já estava aplicada
    card.classList.add('is-target');
    setTimeout(() => card.classList.remove('is-target'), 1800);
}

// --- Barra lateral das UCs (estilo wiki): todas as UCs, com as aulas em submenus ---

const COURSES = [
    { file: 'uc-web.html', name: 'Introdução às Linguagens e Tecnologias Web', lectures: [
        'Evolução das Tecnologias Web', 'HTML Semântico e Formulários', 'Fundamentos de CSS',
        'CSS Avançado e Layouts', 'Fundamentos de JavaScript', 'Manipulação do DOM e Eventos',
        'JavaScript Assíncrono e APIs'],
      slides: [1, 3, 4, 5, 6, 7], lab: [1, 2, 3, 4, 5, 6, 7],
      code: { 2: '../materiais/UC-WEB/Aula2/formulario_auditoria.html' } },
    { file: 'uc-tciot.html', name: 'Tecnologias de Comunicação para a Internet das Coisas', lectures: [
        'Introdução à IoT, Arquitetura de Referência e Tecnologias Sem Fios',
        'Tecnologias de Comunicação Sem Fios para IoT', 'Redes de Longo Alcance e Baixo Consumo (LPWAN)',
        'Bluetooth e Bluetooth Low Energy', 'Bluetooth Low Energy: Programação',
        'Gateways BLE e Notificações Assíncronas', 'Zigbee',
        'Redes IP para IoT: IPv4, NAT, IPv6 e Neighbor Discovery', '6LoWPAN',
        '6TiSCH e Encaminhamento em Redes de Baixo Consumo',
        'Protocolos da Camada de Sessão: HTTP, CoAP e XMPP', 'Middleware Orientado a Mensagens: MQTT e AMQP',
        'Integração Prática: Zigbee2MQTT', 'Revisão e Entrega do Mini-Projeto'],
      slides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], lab: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      code: { 2: '../materiais/UC-TCIOT/Aula02/PT/codigo.zip', 4: '../materiais/UC-TCIOT/Aula04/PT/codigo.zip',
              5: '../materiais/UC-TCIOT/Aula05/PT/codigo.zip', 6: '../materiais/UC-TCIOT/Aula06/PT/codigo.zip',
              9: '../materiais/UC-TCIOT/Aula09/PT/codigo.zip', 10: '../materiais/UC-TCIOT/Aula10/PT/codigo.zip',
              11: '../materiais/UC-TCIOT/Aula11/PT/codigo.zip', 12: '../materiais/UC-TCIOT/Aula12/PT/codigo.zip',
              13: '../materiais/UC-TCIOT/Aula13/PT/firmware.zip' } },
    { file: 'uc-icn.html', name: 'Infraestruturas de Computação na Nuvem', lectures: [
        'Introdução e Contexto de Datacenters', 'Arquitetura de Datacenters e Modelos de Operação',
        'Virtualização de Sistemas', 'Contentores e Isolamento de Processos',
        'Orquestração de Contentores com Kubernetes', 'Gestão de Rede Centralizada e SDN',
        'Automatização de Configurações: Infraestrutura como Código (IaC)',
        'Disponibilidade e Escalabilidade de Serviços', 'Redundância e Desacoplamento de Serviços',
        'Armazenamento de Dados: Arquiteturas e Sistemas Locais', 'Armazenamento Remoto e Distribuído',
        'Tecnologias de Administração de Sistemas: SNMP', 'WBEM, WS-Management e Revisão Geral'],
      slides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], lab: [3, 4, 5, 9, 10, 11, 12, 13] },
];

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('body.course-page main');
    if (!main) return;
    const current = location.pathname.split('/').pop();

    const nav = document.createElement('nav');
    nav.className = 'course-sidebar';
    nav.setAttribute('aria-label', 'Unidades curriculares');
    nav.innerHTML = '<p class="sidebar-title">Unidades curriculares</p>' + COURSES.map(c => {
        const open = c.file === current;
        const items = c.lectures.map((t, i) => {
            const n = i + 1;
            const code = c.code && c.code[n];
            // Três posições fixas antes do título: slides, laboratório, código-fonte
            const icons = `<span class="sidebar-icons">
                <i class="fas fa-desktop${c.slides.includes(n) ? '' : ' is-empty'}" title="Slides"></i>
                <i class="fas fa-laptop-code${c.lab.includes(n) ? '' : ' is-empty'}" title="Laboratório / guião"></i>
                ${code ? `<a class="sidebar-code" href="${code}" title="Código-fonte" aria-label="Código-fonte da aula ${n}"><i class="fab fa-github"></i></a>` : '<i class="fab fa-github is-empty"></i>'}
            </span>`;
            return `<li>${icons}<a href="${c.file}#lecture-${n}" data-lecture="${n}"><span>${n}</span>${t}</a></li>`;
        }).join('');
        return `<div class="sidebar-course${open ? ' is-open' : ''}">
            <button type="button" class="sidebar-course-btn" aria-expanded="${open}">
                <span>${c.name}</span><i class="fas fa-chevron-down"></i>
            </button>
            <ul class="sidebar-lectures">${items}</ul>
            <a class="sidebar-open" href="${c.file}">Abrir página da UC</a>
        </div>`;
    }).join('');

    // Barra à esquerda, conteúdo existente à direita
    const container = main.querySelector('.container');
    const layout = document.createElement('div');
    layout.className = 'course-layout';
    main.insertBefore(layout, container);
    layout.append(nav, container);

    nav.querySelectorAll('.sidebar-course-btn').forEach(btn => btn.addEventListener('click', () => {
        const box = btn.parentElement;
        const open = box.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open);
    }));

    // Aulas da UC aberta: salto suave na própria página
    const here = nav.querySelector('.sidebar-course.is-open');
    if (here) here.querySelectorAll('a[data-lecture]').forEach(a => a.addEventListener('click', e => {
        e.preventDefault();
        history.replaceState(null, '', '#lecture-' + a.dataset.lecture);
        goToLecture(a.dataset.lecture);
    }));

    const m = location.hash.match(/^#lecture-(\d+)$/);
    if (m) setTimeout(() => goToLecture(m[1]), 300);
});
