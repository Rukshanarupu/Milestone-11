const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.emaoomz.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("chocolateDB");
    const chocolateCollection = database.collection("chocolate");

    // create a document to insert
    app.get('/chocolate', async (req, res) => {
      const cursor = chocolateCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })
    // create a document to find
    app.post('/chocolate', async (req, res) => {
      const newChocolate=req.body
      console.log(newChocolate)
      const result = await chocolateCollection.insertOne(newChocolate);
      res.send(result)
    })
    // create a document to delete
    app.delete('/chocolate/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId (id) }
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) =>{
    res.send('Simple Chocolate is running')
})

app.listen(port, () =>{
    console.log(`Simple Chocolate is running on port, ${port}`)
})

