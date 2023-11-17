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
//Caso like entra por esta parte
document.getElementById("like").addEventListener("click", function () {
  const datosUsuario = obtenerDatosUsuario();
  const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
  const personalidad = obtenerHipotesis(animalSeleccionado);
  const algoritmo = tercerColor(datosUsuario);
  const fechaHora = new Date();  
  const horaActual = fechaHora.getHours() + ":" + fechaHora.getMinutes() + ":" + fechaHora.getSeconds();
  const respuestaBoton = "le gusta";
  /*alert("Tu ip es: " + ip + "\nColor de Fondo:" + datosUsuario.colorFondo 
  + "\nColor de Texto:" + datosUsuario.colorTexto + "\nAnimal: " 
  + animalSeleccionado + "\nBoton: " + respuestaBoton + "\nHora: " + horaActual + "\nChiste: " + datosUsuario.chiste
  + "\nEstado de Animo:" + estadoAnimo + "\nHipotesis: " + personalidad + "\nColor Contenedor:" + datosUsuario.colorContenedor
  + "\nComplemento: " + algoritmo);*/
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
  fondoInput.value = datosUsuario.colorFondo;
  colorInput.value = datosUsuario.colorTexto;
  mascotaInput.value = animalSeleccionado;
  botonInput.value = respuestaBoton; 
  horaInput.value = horaActual;
  chisteInput.value = datosUsuario.chiste;
  animoInput.value = estadoAnimo;
  personalidadInput.value = personalidad;
  // Llamar a la función para guardar los datos en la base de dato
        //guardarDatos(ip, bodyBackgroundColorHex, jokeTextColorHex, animalSeleccionado, horaActual, respuestaBoton, jokeText, estadoAnimo);
});

//Caso No me gusta
document.getElementById("dislike").addEventListener("click", function () {   
  const datosUsuario = obtenerDatosUsuario();
  const estadoAnimo = obtenerEstadoAnimo(datosUsuario);
  const personalidad = obtenerHipotesis(animalSeleccionado);
  const algoritmo = tercerColor(datosUsuario);
  const fechaHora = new Date();  
  const horaActual = fechaHora.getHours() + ":" + fechaHora.getMinutes() + ":" + fechaHora.getSeconds();
  const respuestaBoton = "no le gusta";
  /*alert("Tu ip es: " + ip + "\nColor de Fondo:" + datosUsuario.colorFondo 
  + "\nColor de Texto:" + datosUsuario.colorTexto + "\nAnimal: " 
  + animalSeleccionado + "\nBoton: " + respuestaBoton + "\nHora: " + horaActual + "\nChiste: " + datosUsuario.chiste
  + "\nEstado de Animo:" + estadoAnimo + "\nHipotesis: " + personalidad + "\nColor Contenedor:" + datosUsuario.colorContenedor
  + "\nComplemento: " + algoritmo);*/
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
  fondoInput.value = datosUsuario.colorFondo;
  colorInput.value = datosUsuario.colorTexto;
  mascotaInput.value = animalSeleccionado;
  botonInput.value = respuestaBoton; 
  horaInput.value = horaActual;
  chisteInput.value = datosUsuario.chiste;
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
//Obtener datos del index.html
function obtenerDatosUsuario() {
  const bodyBackgroundColor = window.getComputedStyle(document.body).getPropertyValue("background-color");  //Body Rgb
  const bodyBackgroundColorHex = rgbToHex(bodyBackgroundColor);                                             //Hexa
  const jokeTextColor = window.getComputedStyle(document.getElementById("joke")).getPropertyValue("color"); //Texto Rgb
  const jokeTextColorHex = rgbToHex(jokeTextColor);                                                         //Hex
  const jokeText = document.getElementById("joke").textContent;                                             // chiste que se ve
  const animalPreferido = document.getElementById("perro").classList.contains("seleccionado") ? "perro" : "gato"; //click del animal
  const container = document.getElementById("container");                                                   // Id del contenedor
  const colorContenedor = getComputedStyle(container).backgroundColor;                                      //Contenedor Rgb
  const colorContenedorHex = rgbToHex(colorContenedor);                                                     //Hex
  return {
    colorFondo: bodyBackgroundColorHex,
    colorTexto: jokeTextColorHex,
    animalPreferido: animalPreferido,
    colorContenedor: colorContenedorHex,
    chiste: jokeText,
    //coloresrgb
    colorFondoRgb: bodyBackgroundColor,
    colorTextoRgb: jokeTextColor,
    colorContenedorRgb: colorContenedor 
  };
}

/*
    Reglas del estado de animo
*/
// Reglas Color del Body y Color del Texto = Animo
// En caso que sea iguales los dos = uno de los de abajo
// En 
  function obtenerEstadoAnimo(datosUsuario) {
    const rojo = "Amor";
    const azul = "Confianza";
    const verde = "Esperanza";
    const amarillo = "Envidia";
    const naranja = "Alegria";
    const violeta = "Relajados";
    const indigo = "Frialdad";
    //combinacionesDeColores
    //combinacionesDeColores
    // Rojo +
    const ROJO_ROJO = "Persona Apasionada y Enérgica";  //Persona con emociones fuertes y una intensidad perceptible en su forma de expresarse
    const ROJO_AZUL = "Persona Cálida y Afable"; //persona que establece conexiones emocionales significativas con los demás
    const ROJO_VERDE = "Persona Optimista y Llena de Esperanza"; //Persona optimista y llena de esperanza, ve lo positivo de una situacion y motiva a otros.
    const ROJO_AMARILLO = "Persona Apasionada y Envidiosa"; //Persona apasionada en sus relaciones y actividades, pero envidia lo que otros tienen.
    const ROJO_NARANJA = "Persona Apasionada y Alegre"; //Persona con energía contagiosa y que encuentra alegría en sus interacciones.
    const ROJO_VIOLETA = "Persona Apasionada y Relajada"; //Puede ser capaz de equilibrar la intensidad emocional con una actitud relajada y tranquila.
    const ROJO_INDIGO = "Persona Apasionada con Toque de Frialdad"; //Puede ser alguien que muestre intensidad emocional en ciertos aspectos de su vida, pero también puede tener momentos de reservación o distancia emocional
    // Azul +
    const AZUL_AZUL = "Persona Confiable, Tranquila y Reflexiva"; // Persona que es conocida por su calma interna y su capacidad para contemplar profundamente las situaciones antes de actuar.
    const AZUL_VERDE = "Persona Confiable, Optimista y con Esperanza"; // Persona optimista en sus perspectivas de la vida y que tiene la capacidad de adaptarse positivamente a los desafíos.
    const AZUL_AMARILLO = "Persona Confiable y Energica"; // Persona que irradiaentusiasmo y optimismo, mostrando una actitud vibrante hacia la vida.
    const AZUL_NARANJA = "Persona Confiable, Alegre y Candido"; // Persona que encuentra alegría en las experiencias diarias y que aporta calidez y positividad a su entorno.
    const AZUL_VIOLETA = "Persona Creativa y Reflexiva"; //Persona que combin la capacidad de pensar de manera lógica con una mente creativa y artística.
    const AZUL_INDIGO = "Persona Reflexiva y Fria"; // Persona que tiende a pensar cuidadosamente antes de actuar y que muestra una cierta distancia emocional en ciertas situaciones.
    // Verde +
    const VERDE_VERDE = " Persona Optimista y Pacífica"; // Persona que es conocida por mantener una actitud positiva y encontrar serenidad en medio de las circunstancias.
    const VERDE_AMARILLO = "Persona Optimista y Abierta a Nuevas Experiencias"; // Persona que tieneuna mentalidad positiva y estar dispuesta a explorar y aprender de cada oportunidad.
    const VERDE_NARANJA = "Persona Alegre y Esperanzada"; // Persona que llevaconsigo una alegría contagiosa y mantener una perspectiva optimista hacia el futuro.
    const VERDE_VIOLETA = "Persona Equilibrada y Creativa"; // Puede ser alguien que combine la estabilidad emocional con una mente creativa y abierta a nuevas ideas.
    const VERDE_INDIGO = "Persona Reflexiva y Tranquila"; // Puede ser alguien que tiende a pensar profundamente y que mantiene una calma interna en diversas situaciones.
    //Amarillo +
    const AMARILLO_AMARILLO = "Persona Envidiosa con Intensa Energía"; // Persona conocida por su actitud optimista y entusiasta, irradiando energía positiva a su alrededor.
    const AMARILLO_NARANJA = "Persona Envidiosa y Alegre con Toque de Optimismo"; // Puede ser alguien que encuentra alegría en las experiencias diarias y que mantiene una perspectiva positiva hacia la vida.
    const AMARILLO_VIOLETA = "Persona Creativa con Toque de Envidia"; // Puede ser alguien que combina la energía creativa con una actitud optimista hacia las situaciones y desafíos.
    const AMARILLO_INDIGO = "Persona Positiva y Reflexiva con Toque de Frialdad"; // Puede ser alguien que mantiene una actitud optimista pero que también aborda las situaciones con pensamiento lógico y análisis reflexivo.
    // Naranja
    const NARANJA_NARANJA = "Persona Alegre y Optimista con Toque de Calma"; // Puede ser alguien que irradie positividad y alegría, con un toque adicional de calma y tranquilidad.
    const NARANJA_VIOLETA = "Persona Alegre y Relajada con Toque de Creatividad"; // Puede ser alguien que encuentre alegría en las experiencias diarias, manteniendo al mismo tiempo una actitud tranquila y creativa.
    const NARANJA_INDIGO = "Persona Alegre y Reflexiva con Toque de Frialdad"; // Puede ser alguien que combine la alegría y la positividad con una mente reflexiva y analítica, aunque con cierta distancia emocional.
    //Violeta
    // Indigo +
    const INDIGO_VIOLETA = "Persona Reflexiva y Relajada con Toque de Creatividad"; //Puede ser alguien que tiende a pensar cuidadosamente antes de actuar, manteniendo al mismo tiempo una actitud tranquila y mostrando creatividad en sus enfoques y pensamientos.
    // Tomar cosas
    colorBody = datosUsuario.colorFondo; //color fondo
    colorTexto = datosUsuario.colorTexto; //color tex
    if (colorBody == "#ff0000" && colorTexto == "#ff0000") { // Rojo + Rojo
      return ROJO_ROJO;
    } else if (colorBody == "#0000ff" && colorTexto == "#0000ff") { // azul + azul
      return AZUL_AZUL;
    } else if (colorBody == "#008000" && colorTexto == "#008000"){ // verde + verde
      return VERDE_VERDE; 
    } else if (colorBody == "#ffff00" && colorTexto == "#ffff00"){ // amarillo + amarillo
      return AMARILLO_AMARILLO;
    } else if (colorBody == "#ffa500" && colorTexto == "#ffa500"){ // naranja + naranja
      return NARANJA_NARANJA;
    } else if (colorBody == "#800080" && colorTexto == "#800080"){ // violeta + violeta
      return violeta;
    } else if (colorBody == "#4b0082" && colorTexto == "#4b0082"){ // indigo + indigo
      return indigo;
    } else if (colorBody == "#ff0000" && colorTexto == "#0000ff" || colorTexto == "#ff0000" && colorBody == "#0000ff") { // Rojo + Azul o Azul + Rojo
      return ROJO_AZUL;
    } else if (colorBody == "#ff0000" && colorTexto == "#ffa500" || colorTexto == "#ff0000" && colorBody == "#ffa500") { // Rojo + Naranja
        return ROJO_NARANJA;
    } else if (colorBody == "#ff0000" && colorTexto == "#ffff00" || colorTexto == "#ff0000" && colorBody == "#ffff00") { // Rojo + Amarillo
        return ROJO_AMARILLO;
    } else if (colorBody == "#ff0000" && colorTexto == "#008000" || colorTexto == "#ff0000" && colorBody == "#008000") { // Rojo + Verde
        return ROJO_VERDE;
    } else if (colorBody == "#ff0000" && colorTexto == "#4b0082" || colorTexto == "#ff0000" && colorBody == "#4b0082") { // Rojo + Verde
        return ROJO_INDIGO;
    } else if (colorBody == "#ff0000" && colorTexto == "#800080" || colorTexto == "#ff0000" && colorBody == "#800080") { // Rojo + Verde
        return ROJO_VIOLETA;
    } else if (colorBody == "#ffa500" && colorTexto == "#4b0082" || colorTexto == "#ffa500" && colorBody == "#4b0082") { // Naranja + Indigo
        return NARANJA_INDIGO;
    } else if (colorBody == "#ffa500" && colorTexto == "#800080" || colorTexto == "#ffa500" && colorBody == "#800080") { // Naranja + Violeta
        return NARANJA_VIOLETA;
    } else if (colorBody == "#ffff00" && colorTexto == "#008000" || colorTexto == "#ffff00" && colorBody == "#008000") { // Amarillo + Verde
        return AMARILLO_VERDE;
    } else if (colorBody == "#ffff00" && colorTexto == "#0000ff" || colorTexto == "#ffff00" && colorBody == "#0000ff") { // Amarillo + Azul
        return AMARILLO_AZUL;
    } else if (colorBody == "#ffff00" && colorTexto == "#4b0082" || colorTexto == "#ffff00" && colorBody == "#4b0082") { // Amarillo + Indigo
        return AMARILLO_INDIGO;
    } else if (colorBody == "#ffff00" && colorTexto == "#800080" || colorTexto == "#ffff00" && colorBody == "#800080") { // Amarillo + Violeta
        return AMARILLO_VIOLETA;
    } else if (colorBody == "#008000" && colorTexto == "#0000ff" || colorTexto == "#008000" && colorBody == "#0000ff") { // Verde + Azul`
        return AZUL_VERDE;
    } else if (colorBody == "#008000" && colorTexto == "#4b0082" || colorTexto == "#008000" && colorBody == "#4b0082") { // Verde + Indigo
        return VERDE_INDIGO;
    } else if (colorBody == "#008000" && colorTexto == "#800080" || colorTexto == "#008000" && colorBody == "#800080") { // Verde + Violeta
        return VERDE_VIOLETA;
    } else if (colorBody == "#0000ff" && colorTexto == "#4b0082" || colorTexto == "#0000ff" && colorBody == "#4b0082") { // Azul + Indigo
        return AZUL_INDIGO;
    } else if (colorBody == "#0000ff" && colorTexto == "#800080" || colorTexto == "#0000ff" && colorBody == "#800080") { // Azul + Violeta
        return AZUL_VIOLETA;
    } else if (colorBody == "#4b0082" && colorTexto == "#800080" || colorTexto == "#4b0082" && colorBody == "#800080") { // Indigo + Violeta
        return INDIGO_VIOLETA;
    } else if(colorBody = "#0000ff" && colorTexto == "#ffff00"){ //azul + Amarillo
      return AZUL_AMARILLO;
    } else if(colorBody = "#0000ff" && colorTexto == "#ffa500"){ //azul + Naranja
      return AZUL_NARANJA;
    } else if(colorBody = "#008000" && colorTexto == "#ffff00"){ //Verde + Amarillo
      return VERDE_AMARILLO;
    } else if(colorBody = "#008000" && colorTexto == "#ffa500"){ //Verde + Naranja
      return VERDE_NARANJA;
    } else {
        return "neutro";
    }
  }

  // Hipotesis Planteadas.
  function obtenerHipotesis(animalSeleccionado){
    const hipotesis1 = "Sociables, Abiertos"; //Caso que las personas les gusta los perros
    const hipotesis2 = "Introvertidos"; //Caso que las personas les gustan los gatos     
    if(animalSeleccionado == "perro"){
      return hipotesis1;
    } else if(animalSeleccionado == "gato"){
      return hipotesis2;
    } 
  }

  /*
  Ecuacion Cuantica
  */ //1ro Convertir los colores del body y del texto en un rango de 0 a 255.  
  function sacarRgb(color){
    const rgbArray = color.match(/\d+/g);
    // Asignar los componentes a variables separadas
    const red = parseInt(rgbArray[0]);
    const green = parseInt(rgbArray[1]);
    const blue = parseInt(rgbArray[2]);
    const sumaRgb = red + green + blue;
    const total = sumaRgb / 3;
    return total;
  }
  // Empieza ecuacion.
  function tercerColor(datosUsuario){
    // obtener Datos
    const colorBody = sacarRgb(datosUsuario.colorFondoRgb);
    const colorTexto = sacarRgb(datosUsuario.colorTextoRgb);
    const colorContenedor = sacarRgb(datosUsuario.colorContenedorRgb);
    //`alert("Vi: " + colorBody + "\nVf: " + colorTexto + "\nVc" + colorContenedor);  
    // variables formula Cuzzi
    var resultado = "";
    var Vi = 0; // Valor Inicial
    var Vf = 0; // Valor FInal
    var Vc = colorContenedor; // Valor Complemento
    if(colorBody > colorTexto){ //If para   identificar cual va ser el Vf y Vi
      Vf = colorBody; //Vf
      Vi = colorTexto; //Vi
    } else{
      Vf = colorTexto;
      Vi = colorBody;
    } 
    var Vm = (Vf + Vi) / 2; //Valor del medio
    var vm = 128;
    //alert("Vi: " + Vi + "\nVf: " + Vf + "\nVc" + Vc + "\nVm: " + Vm);  
    if(Vc > vm && Vc > Vf){ //Valor Contenedor > Valor del Medio (entre Valor Inicial y Final)
      resultado = "Apoya al Valor FInal";
    } else if(Vc > vm && Vc < Vf){
      resultado = "Apoya al Valor FInal";
    } else if(Vc < vm && Vc < Vi){
      resultado = "Apoya al Valor Incial";
    } else if(Vc < vm && Vc > Vi){
      resultado = "Apoya al Valor Incial";
    }
    // Extraer los componentes RGB
    return "\nVi ocupa el: " + Vi+" %" + "\nVf ocupa el: " + Vf+" %" + "\nVc ocupa el: " + colorContenedor+" %" + "\nResultado: " + resultado;
  }
  //
