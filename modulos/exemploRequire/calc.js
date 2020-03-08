//require carrega os modulos que estao na pasta do projeto
var somaFunc = require("./soma") // ./ pq ta no mesmo diretorio 
var subFunc = require("./sub")
var multi = require("./multi")
var div = require("./div")


console.log("A soma: "+somaFunc(1,2) + 
            "\nA subtracao: "+subFunc(1,2)+
            "\nA multiplicacao: "+multi(1,2)+
            "\nA divisao: "+div(1,2))







