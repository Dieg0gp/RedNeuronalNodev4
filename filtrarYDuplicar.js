const { MongoClient } = require('mongodb');

// Cadena de conexión de MongoDB Atlas
const uri = 'mongodb+srv://diegogupa:rRWKGNvUeWeMKJng@cluster0.kjtpgpi.mongodb.net/';

async function filtrarYDuplicar() {
  const cliente = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await cliente.connect();

    const baseDatos = cliente.db('Prueba1');
    const coleccion = baseDatos.collection('usuarios');

    // Realizar el filtrado de datos
    const datosFiltrados = await coleccion.find({mascota: 'gato'}).toArray();

    // Insertar datos duplicados
    await coleccion.insertMany(datosFiltrados);

    console.log('Datos filtrados duplicados correctamente.');
  } finally {
    await cliente.close();
  }
}

// Ejecutar la función
filtrarYDuplicar();
