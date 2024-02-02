//Cambia de color del navbar al bajar al fondo de la página//
window.onscroll = function (e) {  
    var element = document.getElementById("menu");
    if(scrollY >= 400){
        element.classList.remove("bg-transparent");
        element.classList.add("bg-dark");
    } else {
        element.classList.remove("bg-dark");
        element.classList.add("bg-transparent");
    }
    } 