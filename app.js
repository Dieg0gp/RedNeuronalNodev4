require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Conecta a tu base de datos MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB Atlas exitosa'))
    .catch(err => console.error('Error de conexión a MongoDB Atlas: ', err));


// Define un modelo de datos con Mongoose
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    ip: String,
    fondo: String,
    color: String,
    mascota: String,
    boton: String,
    hora: String,
    chiste: String,    
    animo: String,
    personalidad: String
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Configura Body-parser para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para servir el formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Configura Express para servir archivos estáticos desde la carpeta "public"

// Ruta para procesar el formulario y guardar datos en MongoDB Atlas
app.post('/registrar', (req, res) => {
    const nuevoUsuario = new Usuario({
        ip: req.body.ip,
        fondo: req.body.fondo,
        color: req.body.color,
        mascota: req.body.mascota,
        boton: req.body.boton,
        hora: req.body.hora,
        chiste: req.body.chiste,
        animo: req.body.animo,
        personalidad: req.body.personalidad
    });
    nuevoUsuario.save()
        .then(() => {
            console.log('Usuario registrado con éxito.');
            res.redirect('/');
        })
    .catch(err => console.error('Error al registrar el usuario: ', err));
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

//mongodb+srv://diegogupa:rRWKGNvUeWeMKJng@cluster0.kjtpgpi.mongodb.net/Prueba1