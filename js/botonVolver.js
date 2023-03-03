let btnVolverArriba = document.getElementById('btnVolverArriba');

function volverArriba() {

    let proyectosOffsetTop = document.getElementById("proyectos").offsetTop;


    if (window.scrollY >= proyectosOffsetTop) {

        btnVolverArriba.style.marginRight = 0;
    }
    else if (window.scrollY <= proyectosOffsetTop / 2) {
        btnVolverArriba.style.marginRight = "-60px";
    }

};

window.addEventListener('scroll', volverArriba)