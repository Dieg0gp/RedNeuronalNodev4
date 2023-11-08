const coloresArcoiris = [ 
    "red", 
    "orange", 
    "yellow", 
    "green", 
    "blue", 
    "indigo", 
    "violet"];
const randomBackgroundColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
document.body.style.backgroundColor = randomBackgroundColor;
const randomContainerColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
container.style.backgroundColor = randomContainerColor; // Cambia el fondo del contenedor
const randomTextColor = coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
document.getElementById("joke").style.color = randomTextColor;