import express from "express";
import mongoose from "mongoose";


const app = express();

// Database connection
const URI = 'mongodb://localhost:27017/parcelKoi';
const databaseOptions = {};
const connectWithDB = async() => {
    try {

        await mongoose.connect(URI, databaseOptions);
        console.log('Database connected');
        
    } catch (error) {
        console.log(`Database connection Error: ${error.message}`);
    }
}

connectWithDB();

app.get('/', (req, res) => {
    res.send('Welcome to Parcel Koi App')
})

const port = 8080;
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});
