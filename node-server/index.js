const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express()

const port = process.env.PORT || 5000

// apply middleware
app.use(express.json());
require('dotenv').config()
app.use(morgan('tiny'))
// Enable All CORS Requests
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kdlsc.mongodb.net/?retryWrites=true&w=majority`;

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
        // Connect the client to the server
        client.connect();

        const categoryCollection = client.db('toy-marketplace').collection('category');
        const toyCollection = client.db('toy-marketplace').collection('toy');

        app.get("/api/category", async (req, res) => {
            try {
                const categories = await categoryCollection.find()
                const result = await categories.toArray()
                res.status(200).json(result)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.get("/api/category/:id", async (req, res) => {
            try {
                const id = req.params.id
                const category = await categoryCollection.findOne({ _id: new ObjectId(id) })
                res.status(200).json(category)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.post("/api/category", async (req, res) => {
            try {
                const data = req.body;
                const result = await categoryCollection.insertOne(data)
                res.status(201).json(result)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.get("/api/toy", async (req, res) => {
            try {
                const toys = await toyCollection.find({}).sort({ price: 1 }).limit(20)
                const result = await toys.toArray()
                res.status(200).json(result)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.get("/api/toy/:id", async (req, res) => {
            try {
                const id = req.params.id
                const toy = await toyCollection.findOne({ _id: new ObjectId(id) })
                res.status(200).json(toy)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.get("/api/toy/email/:email", async (req, res) => {
            try {
                const toys = await toyCollection.find({}).sort({ price: 1 }).toArray()
                const toysByEmail = toys.filter(t => t.seller_email === req.params.email)
                res.status(200).json(toysByEmail)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.post("/api/toy", async (req, res) => {
            try {
                const data = req.body;
                const result = await toyCollection.insertOne(data)
                res.status(201).json(result)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.patch("/api/toy/:id", async (req, res) => {
            try {
                const id = req.params.id
                const data = req.body;
                const result = await toyCollection.updateOne({ _id: new ObjectId(id) }, {
                    $set: data
                })
                res.status(204).json(result)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        app.delete("/api/toy/:id", async (req, res) => {
            try {
                const id = req.params.id
                const result = await toyCollection.deleteOne({ _id: new ObjectId(id) })
                res.status(200).json(result)
            } catch (error) {
                res.status(500).json({
                    error: {
                        message: error.message ? error.message : "Server side error"
                    }
                })
            }
        })

        console.log("You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})