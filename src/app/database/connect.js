const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect("mongodb+srv://adm:HYbB8kDXssOysoUv@cursonode.k8fbpcf.mongodb.net/?retryWrites=true&w=majority&appName=cursonode")
    .then(console.log("Conexão efetuada com sucesso!"))
    .catch(error => {
        console.log('Ocorreu um erro ao realizar a conexão! Erro: ', error)
    });

    return console.log("Conexão ao banco de dados realizada com sucesso");
}

module.exports = connectToDatabase;