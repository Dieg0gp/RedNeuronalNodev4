require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moment = require('moment-timezone');
const app = express();

// Conecta a tu base de datos MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000 })
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
    chiste: String,    
    animo: String,
    personalidad: String,
    fecha: { type: Date, default: moment().tz('America/La_Paz').format() },
}, { versionKey: false });
const Usuario = mongoose.model('usuarios', usuarioSchema);

// Configura Body-parser para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para servir el formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Configura Express para servir archivos estáticos desde la carpeta "public"


// Ruta para procesar el formulario y guardar datos en MongoDB Atlas
app.post('/registrar', (req, res) => {    
    const fechaHoraBolivia = moment().utc().tz('America/La_Paz').format('YYYY-MM-DDTHH:mm:ss');
    const nuevoUsuario = new Usuario({
        ip: req.body.ip,
        fondo: req.body.fondo,
        color: req.body.color,
        mascota: req.body.mascota,
        boton: req.body.boton,        
        chiste: req.body.chiste,
        animo: req.body.animo,
        personalidad: req.body.personalidad,
        fecha: fechaHoraBolivia
    });
    nuevoUsuario.save()
        .then((usuarioGuardado) => {
            console.log('Usuario registrado con éxito.');
            console.log(usuarioGuardado)
            res.redirect('/');
        })
    .catch(err => console.error('Error al registrar el usuario: ', err));
});

app.get('/mostrar-datos', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        // Construir la tabla HTML
        let htmlTable = '<table border="1"><tr><th>IP</th><th>Fondo</th><th>Color</th><th>Mascota</th><th>Boton</th><th>Chiste</th><th>Animo</th><th>Personalidad</th><th>Hora</th></tr>';
        usuarios.forEach(usuario => {
            htmlTable += `<tr>
                            <td>${usuario.ip}</td>
                            <td>${usuario.fondo}</td>
                            <td>${usuario.color}</td>
                            <td>${usuario.mascota}</td>
                            <td>${usuario.boton}</td>
                            <td>${usuario.chiste}</td>
                            <td>${usuario.animo}</td>
                            <td>${usuario.personalidad}</td>
                            <td>${moment(usuario.fecha).utc().tz('America/La_Paz').format('YYYY-MM-DD HH:mm:ss')}</td>
                          </tr>`;
        });
        htmlTable += '</table>';
        res.send(htmlTable);
    } catch (error) {
        console.error('Error al obtener datos de MongoDB: ', error);
        res.status(500).send('Error interno del servidor');
    }
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

//mongodb+srv://diegogupa:rRWKGNvUeWeMKJng@cluster0.kjtpgpi.mongodb.net/Prueba1