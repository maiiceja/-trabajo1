function muestra_oculta(id) {
        let div = document.getElementById(id);
    if (div.style.display == "none"){ 
      div.style.display = "block";
    } 
    else {
      div.style.display = "none";
    }
}
// --- MOSTRAR / OCULTAR (tu función corregida) ---
function muestra_oculta(id) {
  let div = document.getElementById(id);

  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}


// --- FORMULARIO DE CONTACTO CON EMAILJS ---
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    // Envía el correo
    emailjs.sendForm(
      "service_we7ar55",      // tu Service ID
      "template_2uq57bp",     // tu Template ID
      "#contact-form"         // el formulario
    )
    .then(() => {
      alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
      form.reset(); // Limpiar formulario
    })
    .catch((error) => {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el mensaje. Intenta más tarde.");
    });
  });
});
