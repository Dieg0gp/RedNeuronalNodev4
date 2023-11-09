const coloresArcoiris = [ 
    "#ff0000", // Rojo
    "#ffa500", // Naranja
    "#ffff00", // Amarillo
    "#008000", // Verde
    "#0000ff", // Azul
    "#4b0082", // Índigo
    "#800080"  // Violeta*/
];
const randomBackgroundColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
document.body.style.backgroundColor = randomBackgroundColor;
const randomContainerColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
container.style.backgroundColor = randomContainerColor; // Cambia el fondo del contenedor
const randomTextColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
document.getElementById("joke").style.color = randomTextColor;