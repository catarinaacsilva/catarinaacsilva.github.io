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