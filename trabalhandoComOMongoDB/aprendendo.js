//usar umca constante para utilizar o mongoose
const mongoose = require("mongoose")

//Configuranco o Mongoose 
//() => {} aerofunction, substitui a funcao no then e catch
mongoose.Promise = global.Promise // Evitar erros na aplicação
//se conectar ao BD usando o mongoose
mongoose.connect("mongodb://localhost/aprendendomongobd", { //abrir um objeto javascript
    useMongoClient: true //configuracao adicional para evitar erros
}).then(() => {
    console.log("MongoDB conectado!")
}).catch((erro) => {
    console.log("Houve um erro ao se conectar ao MongoDB: "+erro)
})
