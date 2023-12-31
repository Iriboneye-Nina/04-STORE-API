require('dotenv').confing()

const connectDB = require('./db/connect');
const product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

    } catch (error) {
        console.log(error)
    }

}

start()