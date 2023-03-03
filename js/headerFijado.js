
let fixedHeader = document.getElementById("fixedHeader")


function fijarHeader() {

    let proyectosOffsetTop = document.getElementById("proyectos").offsetTop;


    if (window.scrollY >= proyectosOffsetTop) {

        fixedHeader.style.marginTop = 0;
    }
    else if (window.scrollY <= proyectosOffsetTop/2) {
        fixedHeader.style.marginTop = "-68px";
    }
    
};


window.addEventListener('scroll', fijarHeader)