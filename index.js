
const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose')
const host = '0.0.0.0';
const port = process.env.PORT || 3010;
const dotenv = require('dotenv')

dotenv.config({ path: './config/.config.env' })


module.exports = {
    mongodb_url: process.env.MONGO_URI,
    jwt_key: process.env.JWT_KEY,
    user: process.env.GMAIL_USERNAME,
    password: process.env.GMAIL_PASSWORD
  }

    
  mongoose.Promise = global.Promise;
  mongoose.connect(mongodb_url=process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB')
}).catch(error => {
    const msg =`Erro ao conectar ao MongoDB, ${error}`
    console.log(msg)
})

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({"message": "OLÁ"})
});

  
require('./app/routes/routes')(app);
app.listen(port, host, () => {
    console.log("Rodando na porta", port)
    

});