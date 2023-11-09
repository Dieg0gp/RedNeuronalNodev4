function obtenerDatosUsuario() {
    const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
    const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);
    const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color");
    const jokeTextColorHex = rgbToHex(jokeTextColor);
    const animalPreferido = document.getElementById("perro").classList.contains("seleccionado") ? "perro" : "gato";
    const eleccionDelUsuario = document.getElementById("tuElemento").classList.contains("like") ? "like" : "dislike";

    if (eleccionDelUsuario === "like") {
      // El usuario eligió "like"
      const like = "gutar"
    } else {
      // El usuario eligió "dislike"
      const dislike = "no gutar"
    }
    return {
      colorFondo: bodyBackgroundColorHex,
      colorTexto: jokeTextColorHex,
      animalPreferido: animalPreferido
    };
  }
  
  function obtenerEstadoAnimo(datosUsuario) {
    const coloresAlegres = ["red", "orange", "yellow"];
    const coloresTristes = ["blue", "indigo", "violet"];
    const esAlegre = datosUsuario.animalPreferido === "perro" && like;
    const esTriste = datosUsuario.animalPreferido === "gato" && dislike;
    if (esAlegre) {
      return "alegre";
    } else if (esTriste) {
      return "triste";
    } else {
      return "neutral";
    }
  }
  
  document.getElementById("like").addEventListener("click", function () {
    document.getElementById("perro").classList.add("seleccionado");
    const datosUsuario = obtenerDatosUsuario();
    const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
    alert("Tu estado de ánimo es " + estadoAnimo);
  });
  
  document.getElementById("dislike").addEventListener("click", function () {
    document.getElementById("gato").classList.add("seleccionado");
    const datosUsuario = obtenerDatosUsuario();
    const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
    alert("Tu estado de ánimo es " + estadoAnimo);
  });

  const nuevosDatos = obtenerEstadoAnimo(datosUsuario);

// Iterar sobre las celdas y asignar los nuevos datos
celdasCambiar.forEach((celda, indice) => {
  celda.textContent = nuevosDatos[indice];
});