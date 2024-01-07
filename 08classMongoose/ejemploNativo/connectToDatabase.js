
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://harove:224251Itau@cluster0.56slkyh.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function connectToDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("PersonasDb").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db('PersonasDb')
    const dbPersonas = db.collection('Personas')
    const personas = await dbPersonas.find().toArray()
    console.log(personas)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

