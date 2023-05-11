const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// rupupharm
// password = rupu1234

const uri = "mongodb+srv://rupupharm:rupu1234@cluster0.emaoomz.mongodb.net/?retryWrites=true&w=majority";

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

    const database = client.db("usersDB");
    const usersCollection = database.collection("users");

    // USERS page system
    app.get("/users", async (req, res)=>{
      const data=await usersCollection.find()
      const result=await data.toArray()
      res.send(result)
    })

    app.post('/users', async(req, res) => {
      const user = req.body;
      console.log('new user', user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.delete('/users/:id', async(req, res) =>{
      const id = req.params.id;
      console.log('please delete from database', id);
      const query = { _id: new ObjectId(id)}
      
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    })

    // update page details
    app.get('/users/:id', async(req, res) =>{
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}      
      const result = await usersCollection.findOne(query);
      res.send(result);
    })

    app.put('/users/:id', async(req, res) =>{
      const id = req.params.id;
      const user = req.body;
      console.log(id, user)

      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email
        }
      }

      const result = await usersCollection.updateOne(filter, updatedUser, options );
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
    res.send('SIMPLE CRUD IS RUNNING')
})

app.listen(port, () =>{
    console.log(`SIMPLE CRUD is running on port, ${port}`)
})




// try{

// }
// catch{

// }
// finally{
    
// }