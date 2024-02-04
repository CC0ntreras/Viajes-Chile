// Smooth Scrolling al clickear elementos de Navbar
$(document).ready(function () {
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1500, function () {
                    window.location.hash = hash;
                });
            }

// Mensaje de alerta al clikear "enviar"
        $("#submit").click(function (e) {
            e.preventDefault();
            alert("¡Envio Satisfactorio del correo!");
            });
        });
        
// Script para tooltips       
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
            new bootstrap.Tooltip(tooltip);
          });
    });
