const express = require ("express");
const app = express();
const cors = require ('cors')

app.use(express.json())
app.use(cors())

const mongoose = require('mongoose');
main().catch(e=> console.log(e.message));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dashboard');
  console.log('connected to db');
}

const eventRoutes = require ("./routes/eventsRoutes")

app.use("/events", eventRoutes)



app.listen(3000, () =>{
    console.log("server is running on server 3000");
})