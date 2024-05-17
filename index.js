const express= require('express');
const dotEnv= require('dotenv');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const movieRoutes= require("./routes/movieRoutes");

const app = express();

const PORT= process.env.PORT || 3000

dotEnv.config()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL).then(
  ()=> console.log("MongoBD Connected...")
).catch(err => console.log(err))

app.use('/movies', movieRoutes)

app.listen(PORT, ()=>console.log('Server running..'))




/*mongodb connect
//const {MongoClient} = require('mongodb);
MongoClient.connect(process.env.MONGO_URL).then(
  ()=>{
    console.log('mongodb connected...')
  }).catch(err => console.log(err))

  */