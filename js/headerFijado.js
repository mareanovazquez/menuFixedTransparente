let fixedHeader = document.getElementById("fixedHeader");
let proyectosSection = document.getElementById("proyectos");

function fijarHeader() {
    // Verificar que los elementos existan
    if (!fixedHeader || !proyectosSection) {
        console.warn('Elementos del header fijo no encontrados');
        return;
    }
    
    let proyectosOffsetTop = proyectosSection.offsetTop;
    let scrollY = window.scrollY;
    
    if (scrollY >= proyectosOffsetTop) {
        fixedHeader.style.marginTop = "0";
    }
    else if (scrollY <= proyectosOffsetTop / 2) {
        fixedHeader.style.marginTop = "-68px";
    }
}

// Throttle para mejorar performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Aplicar throttle al evento scroll
window.addEventListener('scroll', throttle(fijarHeader, 16)); // ~60fps

// Ejecutar una vez al cargar para establecer estado inicial
document.addEventListener('DOMContentLoaded', fijarHeader);