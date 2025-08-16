function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Opens a prompt to choose CV language (Spanish default, English optional)
function chooseCVDownload() {
    // Paths (adjust names if you change files)
    const esCV = './assets/Jhon-Castillo-CV.pdf';
    const enCV = './assets/Jhon-Castillo-CV-EN.pdf';

    // Quick confirm UX: OK = Español (default), Cancel = elegir Inglés
    const goSpanish = confirm('¿Descargar CV en Español?\nAceptar: Español (por defecto)\nCancelar: Inglés');
    const target = goSpanish ? esCV : enCV;

    // In local file:// context window.open puede ser bloqueado; usamos location
    // Si estás sirviendo por HTTP, opcionalmente prueba existencia del archivo EN
    if (!goSpanish && location.protocol.startsWith('http')) {
        fetch(enCV, { method: 'HEAD' }).then((res) => {
            if (res.ok) {
                window.open(enCV, '_blank');
            } else {
                alert('Aún no hay versión en inglés. Descargando CV en Español.');
                window.open(esCV, '_blank');
            }
        }).catch(() => {
            alert('Aún no hay versión en inglés. Descargando CV en Español.');
            window.open(esCV, '_blank');
        });
        return;
    }

    // Fallback directo
    window.open(target, '_blank');
}

