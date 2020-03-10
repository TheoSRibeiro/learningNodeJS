const db = require('./db')

//DEFINIR UM NOVO MODEL CHAMADO POST
const Post = db.sequelize.define('postagens',{
    titulo: { //campo titulo que sera inserido na tabela
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true}) //sincronizar com o bd - uma unica vez, apos isso, comentar

//Acessar o model post atraves de outros arquivos:
module.exports = Post