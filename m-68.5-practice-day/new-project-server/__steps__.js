/**
 * ------------------------------------Server side ---------------------------------------------------
 *  ----------------------------
 * Basic server side Connection
 * -----------------------------
 * https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
 * .env for protection & .gitignore (node_modules, .env) file create
 * install dotenv from https://www.npmjs.com/package/dotenv
 * 
 * -------------------------
 * MOngodb Connection
 * --------------------------
 * 1. create account
 * 2. create an user with password
 * 3. whitelist IP address
 * 4. database > connect > driver > Node > copy full code from 
      https://cloud.mongodb.com/v2/645bc276a6483a066c166ddc#/clusters/connect?clusterId=Cluster0
 * 5. change the password the uri
 * node mongodb crud from https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/

 * ----------------------------
 * 1. CREATE --- POST
 * 2. app.post('/users'/ async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body 
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * -----------------------
 * READ MANY
 * ------------------------
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * 
 * -----------------------------
 * DELETE
 * -----------------------------
 * 1. create app.delete('/users/:id', async(req, res) =>{})
 * 2. specify unique ObjectId to delete the right user
 *      https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/
 * 3. const query = { _id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query); 
 * 
 *  
*/