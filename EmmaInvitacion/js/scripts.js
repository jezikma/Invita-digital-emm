/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.getElementById("submitButton").addEventListener("click", function() {
    // Abre la URL en una nueva ventana o pestaña
    window.open("https://maps.app.goo.gl/c8oaVQaWCPFMCrZj7", "_blank");
});

document.getElementById("submitButton2").addEventListener("click", function() {
    // Abre la URL en una nueva ventana o pestaña
    window.open("https://wa.link/0ud3kf", "_blank");
});

var audio = document.getElementById("musica");

        // Establecemos el volumen deseado (por ejemplo, 0.5 para la mitad del volumen)
        var volumenDeseado = 0.2;

        // Establecemos el volumen del audio
        audio.volume = volumenDeseado;