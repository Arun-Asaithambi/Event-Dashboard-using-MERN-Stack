const express = require ("express");
const app = express();
const mongoose = require('mongoose');
const eventRoutes = require ("./routes/eventsRoutes")
const cors = require ('cors')

app.use(express.json())
app.use(cors())

app.use("/events", eventRoutes)


main().catch(e=> console.log(e.message));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dashboard');
  console.log('connected to db');
}

app.listen(3000, () =>{
    console.log("server is running on server 3000");
})