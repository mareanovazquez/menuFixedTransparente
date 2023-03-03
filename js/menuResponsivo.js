let numero = 1;

let btnMenu = document.getElementById("btnMenu");

let menuMobile = document.getElementById("menu-mobile");

let menuMobilePrincipal = document.getElementById("menu-mobile-principal");



btnMenu.addEventListener('click', function (e) {
    e.preventDefault();

    if (numero == 1) {
        menuMobilePrincipal.style.left = 0;
        numero = 0;
    }

    else {
        menuMobilePrincipal.style.left = '-1000px';
        numero = 1;

    }
});

let opcionesMenuMovil = document.getElementsByClassName("opciones-menu-movil");

function cerrarMenuMovil() {
    menuMobilePrincipal.style.left = '-1000px';
    numero = 1;
}

for (let i = 0; i < opcionesMenuMovil.length; i++) {
    opcionesMenuMovil[i].addEventListener('click', cerrarMenuMovil);
}

