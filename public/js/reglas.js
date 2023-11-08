function obtenerDatosUsuario() {
    const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
    const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);
    const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color");
    const jokeTextColorHex = rgbToHex(jokeTextColor);
    const animalPreferido = document.getElementById("perro").classList.contains("seleccionado") ? "perro" : "gato";
    return {
      colorFondo: bodyBackgroundColorHex,
      colorTexto: jokeTextColorHex,
      animalPreferido: animalPreferido
    };
  }
  
  function obtenerEstadoAnimo(datosUsuario) {
    const coloresAlegres = ["red", "orange", "yellow"];
    const coloresTristes = ["blue", "indigo", "violet"];
    const esAlegre = coloresAlegres.includes(datosUsuario.colorFondo) && datosUsuario.colorTexto === "#008000" && datosUsuario.animalPreferido === "perro";
    const esTriste = coloresTristes.includes(datosUsuario.colorFondo) && datosUsuario.colorTexto === "#FFFFFF" && datosUsuario.animalPreferido === "gato";
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