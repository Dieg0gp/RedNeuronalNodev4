const coloresArcoiris = [ 
    "#FF0000", // Rojo
    "#FFA500", // Naranja
    "#FFFF00", // Amarillo
    "#008000", // Verde
    "#0000FF", // Azul
    "#4B0082", // Índigo
    "#800080"  // Violeta
];
const randomBackgroundColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
document.body.style.backgroundColor = randomBackgroundColor;
const randomContainerColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
container.style.backgroundColor = randomContainerColor; // Cambia el fondo del contenedor
const randomTextColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
document.getElementById("joke").style.color = randomTextColor;