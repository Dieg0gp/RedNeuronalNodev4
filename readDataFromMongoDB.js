const { MongoClient } = require('mongodb');
const pandasjs = require('pandas-js');
const pd = pandasjs.default;
const { DataFrame } = pd;

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db();
    return { client, db };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Fetch data from MongoDB
async function fetchDataFromMongoDB() {
  const { client, db } = await connectToMongoDB();

  try {
    const collection = db.collection('usuarios'); // Replace 'usuarios' with your actual collection name
    const data = await collection.find().toArray();

    // Convert MongoDB data to a Pandas DataFrame
    const dataframe = new DataFrame(data);

    // Display the DataFrame
    console.log(dataframe.toString());

    return data;
  } finally {
    client.close();
  }
}

// Run the fetch data function
fetchDataFromMongoDB();
