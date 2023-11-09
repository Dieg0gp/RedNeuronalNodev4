//ip
let ip = "";
fetch("https://api.ipify.org?format=json")
.then(response => response.json())
.then(data => {
  const ipAddress = data.ip;
  ip = ipAddress;
})
.catch(error => console.error(error));
//obtener datos
let animalSeleccionado = "";

document.getElementById("perro").addEventListener("click", function () {
  animalSeleccionado = "perro";
});

document.getElementById("gato").addEventListener("click", function () {
  animalSeleccionado = "gato";
});

document.getElementById("like").addEventListener("click", function () {
  const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
  const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);
  const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color");
  const jokeTextColorHex = rgbToHex(jokeTextColor);
  const jokeText = document.getElementById("joke").textContent;  
  const datosUsuario = obtenerDatosUsuario();
  const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
  const personalidad = obtenerHipotesis(animalSeleccionado);
  const fechaHora = new Date();  
  const horaActual = fechaHora.getHours() + ":" + fechaHora.getMinutes() + ":" + fechaHora.getSeconds();
  const respuestaBoton = "le gusta";
  /*alert("Tu ip es: " + ip + "\nEl color de fondo del body es " + bodyBackgroundColorHex 
        + "\nEl color de texto del chiste es " + jokeTextColorHex + "\nHiciste clic en el " 
        + animalSeleccionado + " y te gusta" + "\nLa hora y Fecha: " + horaActual + "\n Chiste: " + jokeText
        + "\nEstado de Animo:" + estadoAnimo + "\nHipotesis: " + personalidad);*/
  // Obtener referencias a los campos de entrada del formulario
  const ipInput = document.getElementById("ip");
  const fondoInput = document.getElementById("fondo");
  const colorInput = document.getElementById("color");
  const mascotaInput = document.getElementById("mascota");
  const botonInput = document.getElementById("boton");
  const horaInput = document.getElementById("hora");
  const chisteInput = document.getElementById("chiste");
  const animoInput = document.getElementById("animo");
  const personalidadInput = document.getElementById("personalidad");
  // Construir el contenido que se mostrará en el div
  ipInput.value = ip;
  fondoInput.value = bodyBackgroundColorHex;
  colorInput.value = jokeTextColorHex;
  mascotaInput.value = animalSeleccionado;
  botonInput.value = respuestaBoton; 
  horaInput.value = horaActual;
  chisteInput.value = jokeText;
  animoInput.value = estadoAnimo;
  personalidadInput.value = personalidad;
  // Llamar a la función para guardar los datos en la base de dato
        //guardarDatos(ip, bodyBackgroundColorHex, jokeTextColorHex, animalSeleccionado, horaActual, respuestaBoton, jokeText, estadoAnimo);
});

document.getElementById("dislike").addEventListener("click", function () {
  const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
  const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);
  const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color");
  const jokeTextColorHex = rgbToHex(jokeTextColor);
  const jokeText = document.getElementById("joke").textContent;    
  const datosUsuario = obtenerDatosUsuario();
  const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
  const personalidad = obtenerHipotesis(animalSeleccionado);
  const fechaHora = new Date();
  const horaActual = fechaHora.getHours() + ":" + fechaHora.getMinutes() + ":" + fechaHora.getSeconds();
  const respuestaBoton = "no le gusta";
  /*alert("Tu ip es: " + ip + "\nEl color de fondo del body es " + bodyBackgroundColorHex 
        + "\nEl color de texto del chiste es " + jokeTextColorHex + "\nHiciste clic en el " 
        + animalSeleccionado + " y no te gusta"+ "\nLa hora y Fecha: " + horaActual + "\n Chiste: " + jokeText
        + "\n Estado de Animo: " + estadoAnimo + "\nHipotesis: " + personalidad);*/
  // Obtener referencias a los campos de entrada del formulario
  const ipInput = document.getElementById("ip");
  const fondoInput = document.getElementById("fondo");
  const colorInput = document.getElementById("color");
  const mascotaInput = document.getElementById("mascota");
  const botonInput = document.getElementById("boton");
  const horaInput = document.getElementById("hora");
  const chisteInput = document.getElementById("chiste");
  const animoInput = document.getElementById("animo");
  const personalidadInput = document.getElementById("personalidad");
  // Construir el contenido que se mostrará en el div
  ipInput.value = ip;
  fondoInput.value = bodyBackgroundColorHex;
  colorInput.value = jokeTextColorHex;
  mascotaInput.value = animalSeleccionado;
  botonInput.value = respuestaBoton; 
  horaInput.value = horaActual;
  chisteInput.value = jokeText;
  animoInput.value = estadoAnimo;
  personalidadInput.value = personalidad;
        //
        //guardarDatos(ip, bodyBackgroundColorHex, jokeTextColorHex, animalSeleccionado, horaActual, respuestaBoton, jokeText, estadoAnimo);
});

function rgbToHex(rgb) {
  const values = rgb.match(/\d+/g);
  const hexValues = values.map(value => {
    const hexValue = Number(value).toString(16);
    return hexValue.length === 1 ? "0" + hexValue : hexValue;
  });
  return "#" + hexValues.join("");
}
//Obtener datos
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
//
/*
    Reglas del estado de animo
*/
//
  
  function obtenerEstadoAnimo(datosUsuario) {
    const rojo = "Atentos"; //Atentos
    const azul = "Calmados";
    const verde = "Ansioso";
    const amarillo = "Creativos";
    const naranja = "Concentrados";
    const violeta = "Relajados";
    const indigo = "Introspectivo";
    //combinacionesDeColores
    // Rojo +
    const ROJO_AZUL = "Contraste entre emoción y serenidad";
    const ROJO_NARANJA = "Energía apasionada";
    const ROJO_AMARILLO = "Calidez y felicidad";
    const ROJO_VERDE = "Contraste entre energía y calma";
    const ROJO_INDIGO = "Pasión profunda y misterio";
    const ROJO_VIOLETA = "Creatividad intensa y sofisticación"
    // Naranja
    const NARANJA_AMARILLO = "Alegría y vitalidad";
    const NARANJA_VERDE = "Energía refrescante y creatividad";
    const NARANJA_AZUL = "Contraste audaz entre vitalidad y serenidad";
    const NARANJA_INDIGO = "Energía espiritual y creatividad profunda";
    const NARANJA_VIOLETA = "Creatividad vibrante y toque misterioso";
    //Amarillo +
    const AMARILLO_VERDE = "Claridad mental, optimismo y serenidad";
    const AMARILLO_AZUL = "Espiritualidad natural y equilibrio";
    const AMARILLO_INDIGO = "Conexión espiritual y optimismo profundo";
    const AMARILLO_VIOLETA = "Creatividad elevada y optimismo profundo";
    // Verde +
    const VERDE_AZUL = "Calma, equilibrio y naturaleza";
    const VERDE_INDIGO = "Espiritualidad natural y equilibrio";
    const VERDE_VIOLETA = "Creatividad elevada y optimismo profundo";
    // Azul +
    const AZUL_INDIGO = "Profundidad emocional y serenidad";
    const AZUL_VIOLETA = "Inspiración y creatividad tranquila";
    // Indigo +
    const INDIGO_VIOLETA = "Misterio espiritual y introspección";
    // Tomar cosas
    colorBody = datosUsuario.colorFondo; //color fondo
    colorTexto = datosUsuario.colorTexto; //color texto
    if (colorBody == "#ff0000" && colorTexto == "#ff0000") { // Rojo + Rojo
      return rojo;
    } else if (colorBody == "#0000ff" && colorTexto == "#0000ff") { // azul + azul
      return azul;
    } else if (colorBody == "#0000ff" && colorTexto == "#008000"){ // verde + verde
      return verde; 
    } else if (colorBody == "#0000ff" && colorTexto == "#ffff00"){ // amarillo + amarillo
      return amarillo;
    } else if (colorBody == "#0000ff" && colorTexto == "#ffa500"){ // naranja + naranja
      return naranja;
    } else if (colorBody == "#0000ff" && colorTexto == "#800080"){ // violeta + violeta
      return violeta;
    } else if (colorBody == "#0000ff" && colorTexto == "#4b0082"){ // indigo + indigo
      return indigo;
    } else if (colorBody == "#ff0000" && colorTexto == "#0000ff" || colorTexto == "#ff0000" && colorBody == "#0000ff"){ // Rojo + Azul o Azul + Rojo
      return ROJO_AZUL;
    } else if (colorBody == "#ff0000" && colorTexto == "#ffa500" || colorTexto == "#ff0000" && colorBody == "#ffa500"){ // Rojo + Naranja
      return ROJO_NARANJA;
    } else if (colorBody == "#ff0000" && colorTexto == "#ffff00" || colorTexto == "#ff0000" && colorBody == "#ffff00"){ // Rojo + Amarillo
      return ROJO_AMARILLO;
    } else if (colorBody == "#ff0000" && colorTexto == "#008000" || colorTexto == "#ff0000" && colorBody == "#008000"){ // Rojo + Verde
      return ROJO_VERDE;
    } else if (colorBody == "#ff0000" && colorTexto == "#4b0082" || colorTexto == "#ff0000" && colorBody == "#4b0082"){ // Rojo + Verde
      return ROJO_INDIGO;
    } else if (colorBody == "#ff0000" && colorTexto == "#800080" || colorTexto == "#ff0000" && colorBody == "#800080"){ // Rojo + Verde
      return ROJO_VIOLETA;
    } else if (colorBody == "#ffa500" && colorTexto == "#ffff00" || colorTexto == "#ffa500" && colorBody == "#ffff00"){ // Naranja + Amarillo
      return NARANJA_AMARILLO;
    } else if (colorBody == "#ffa500" && colorTexto == "#008000" || colorTexto == "#ffa500" && colorBody == "#008000"){ // Naranja + Verde
      return NARANJA_VERDE;
    } else if (colorBody == "#ffa500" && colorTexto == "#0000ff" || colorTexto == "#ffa500" && colorBody == "#0000ff"){ // Naranja + Azul
      return NARANJA_AZUL;
    } else if (colorBody == "#ffa500" && colorTexto == "#4b0082" || colorTexto == "#ffa500" && colorBody == "#4b0082"){ // Naranja + Indigo
      return NARANJA_INDIGO;
    } else if (colorBody == "#ffa500" && colorTexto == "#800080" || colorTexto == "#ffa500" && colorBody == "#800080"){ // Naranja + Violeta
      return NARANJA_VIOLETA;
    } else if (colorBody == "#ffff00" && colorTexto == "#008000" || colorTexto == "#ffff00" && colorBody == "#008000"){ // Amarillo + Verde
      return AMARILLO_VERDE;
    } else if (colorBody == "#ffff00" && colorTexto == "#0000ff" || colorTexto == "#ffff00" && colorBody == "#0000ff"){ // Amarillo + Azul
      return AMARILLO_AZUL;
    } else if (colorBody == "#ffff00" && colorTexto == "#4b0082" || colorTexto == "#ffff00" && colorBody == "#4b0082"){ // Amarillo + Indigo
      return AMARILLO_INDIGO;
    } else if (colorBody == "#ffff00" && colorTexto == "#800080" || colorTexto == "#ffff00" && colorBody == "#800080"){ // Amarillo + Violeta
      return AMARILLO_VIOLETA;
    } else if (colorBody == "#008000" && colorTexto == "#0000ff" || colorTexto == "#008000" && colorBody == "#0000ff"){ // Verde + Azul
      return VERDE_AZUL;
    } else if (colorBody == "#008000" && colorTexto == "#4b0082" || colorTexto == "#008000" && colorBody == "#4b0082"){ // Verde + Indigo
      return VERDE_INDIGO;
    } else if (colorBody == "#008000" && colorTexto == "#800080" || colorTexto == "#008000" && colorBody == "#800080"){ // Verde + Violeta
      return VERDE_VIOLETA;
    } else if (colorBody == "#0000ff" && colorTexto == "#4b0082" || colorTexto == "#0000ff" && colorBody == "#4b0082"){ // Azul + Indigo
      return AZUL_INDIGO;
    } else if (colorBody == "#0000ff" && colorTexto == "#800080" || colorTexto == "#0000ff" && colorBody == "#800080"){ // Azul + Violeta
      return AZUL_VIOLETA;
    } else if (colorBody == "#4b0082" && colorTexto == "#800080" || colorTexto == "#4b0082" && colorBody == "#800080"){ // Indigo + Violeta
      return INDIGO_VIOLETA;
    } else {
      return "neutro";
    }
  }

  function obtenerHipotesis(animalSeleccionado){
    const hipotesis1 = "Sociables, Abiertos";
    const hipotesis2 = "Introvertidos"; 
    const hipotesis3 = "Neutro"   
    if(animalSeleccionado == "perro"){
      return hipotesis1;
    } else if(animalSeleccionado == "gato"){
      return hipotesis2;
    } else if(animalSeleccionado == ""){
      return hipotesis3
    }
  }

/* base de datos */
async function guardarDatos(ip, bodyBackgroundColorHex, jokeTextColorHex, animalSeleccionado, horaActual, respuestaBoton, jokeText, estadoAnimo) {
  alert("Los datos a guardar son:" + "\n" +
  `IP: ${ip}\n` +
  `Fondo: ${bodyBackgroundColorHex}\n` +
  `Color: ${jokeTextColorHex}\n` +
  `Mascota: ${animalSeleccionado}\n` +
  `Botón: ${respuestaBoton}\n` +
  `Hora: ${horaActual}\n` +
  `Chiste: ${jokeText}\n` +
  `Ánimo: ${estadoAnimo}`);
}