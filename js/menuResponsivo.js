let isMenuOpen = false;
let btnMenu = document.getElementById("btnMenu");
let menuMobile = document.getElementById("menu-mobile");
let menuMobilePrincipal = document.getElementById("menu-mobile-principal");

btnMenu.addEventListener('click', function (e) {
    e.preventDefault();
    
    if (!isMenuOpen) {
        menuMobilePrincipal.style.left = 0;
        isMenuOpen = true;
    }
    else {
        cerrarMenuMovil();
    }
});

let opcionesMenuMovil = document.getElementsByClassName("opciones-menu-movil");

function cerrarMenuMovil() {
    menuMobilePrincipal.style.left = '-1000px';
    isMenuOpen = false;
}

// Cerrar menú al hacer clic en las opciones (ya estaba funcionando)
for (let i = 0; i < opcionesMenuMovil.length; i++) {
    opcionesMenuMovil[i].addEventListener('click', cerrarMenuMovil);
}

// NUEVO: Cerrar menú con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (isMenuOpen) {
        if (e.key === 'Escape') {

            cerrarMenuMovil();
        }
    }
});

// NUEVO: Cerrar menú al hacer clic fuera de él
document.addEventListener('click', function(e) {
    // Solo procesar si el menú está abierto
    if (isMenuOpen) {
        // Verificar si el clic fue fuera del menú móvil
        if (!menuMobile.contains(e.target)) {
            cerrarMenuMovil();
        }
    }
});