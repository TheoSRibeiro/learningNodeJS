//para instalar o framework express, digite o comando no terminal: npm install express --save
const express = require("express") //constante para evitar mudancas indesejaveis
const app = express();
//BODY PARSER -- RECEBER DADOS DE QUALQUER FORMULARIO DENTRO DO EXPRESS > npm install --save body-parser
const bodyparser = require('body-parser')
//RECEBER O MODEL POST para manipular diretamente dele 
const Post = require('./models/Post')

/*
//criar as rotas da aplicacao
app.get("/", function(req, res){ //req - requisicao e o res - resposta ao cliente
    //res.send("Seja bem vindo ao meu app!")
    res.sendFile(__dirname+"/html/index.html") // retorna o diretorio padrao (raiz) da aplicacao
})

app.get("/sobre", function(req, res){
    //res.send("Minha pagina sobre!")
    res.sendFile(__dirname+"/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

//criando parametros para as rotas
app.get('/ola/:nome/:cargo/:cor', function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + 
            "<h2>Seu cargo eh: " + req.params.cargo + "</h2>" + 
            "<h3>Sua cor favorita eh: " + req.params.cor + "</h3>") //so pode enviar o send uma unica vez na rota
})
*/
//instalar nodemon, no terminal seguir o comando: npm install nodemon -g

//HANDLEBARS
//instalar o handlebars: npm install --save express-handlebars
const handlebars = require('express-handlebars')
const Handlebars = require('handlebars') //tive que usar para nao ter erro de acesso ao BD
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access') //houve erro, assim, da permissoes para acessar o bd

//BODY PARSER
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

//Config
    //Template Engine 
    //Deve-se usar o HandleBars como template ENGINE
app.engine('handlebars', handlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars) ////tive que usar para nao ter erro de acesso ao BD
}), handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')



//Rotas
app.get('/',function(req,res){
    Post.findAll({order: [['id','DESC']]}).then(function(posts){  //{} - abre um objeto
        //console.log(posts)
        res.render('home',{posts: posts})
    }) //then para receber os posts
    
})

app.get('/cad', function(req,res){
    res.render('formulario')
})

app.post('/cadastro',function(req,res){ //USA POST SE A REQUISICAO FOR UM METODO POST
    Post.create({ //funcao que vai criar o POST do MODEL para inserir o titulo e conteudo no BD
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){ //tratamento para saber se o Post foi criado com sucesso!
        //res.send("Post criado com sucesso!")
        res.redirect('/') //redirecionar para o home
    }).catch(function(erro){
        res.send("Houve um erro: "+erro)
    })
})

app.get('/deletar/:id',function(req,res){ //recebe um parametro id
    Post.destroy({ where: { 'id': req.params.id } }).then(function () { // vai destruir somente o registro no bd com o id que passei na url
        res.send("Postagem deletada com sucesso!")
    }).catch(function(erro){
        res.send("Esta postagem não existe!")
    }) 
})


//abrir servidor e deixar rodando
app.listen(8081, function(){

    console.log("Servidor rodando na url: http://localhost:8081")
}) //porta 8081- localhost