//var geraNum = require("./random");
//module.exports.gerar = function(){
  //return Math.floor(Math.random() * max);
//}
/*console.log(geraNum.gerar());
console.log(geraNum.max);*/

//------------- importa o modulo cliente
var clientes = require("./cliente");


// exieb a mensagem por x segundos
//console.log('\033c'); // limpa a tela do console
console.log("Loading...");
setTimeout(function(){ 
    //console.log('\033c'); // limpa a tela do console
    //console.log("----------------------------");
    // exibe os clientes cadastrados
    var a = new clientes();
    console.log(a.listaClientes()[0].email);  
    //console.log("----------------------------");
}, 3000);
