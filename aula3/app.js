var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var clients = {}; 

app.get('/', function(req, res){
  res.send('server rodando...');
});

io.on("connection", function (client) {  
    client.on("join", function(name){
    	console.log("Juntou: " + name);
        clients[client.id] = name;
        client.emit("update", "Você se conectou ao servidor.");
        client.broadcast.emit("update", name + " juntou-se ao server.")
    });

    client.on("send", function(msg){
    	console.log("Message: " + msg);
        client.broadcast.emit("chat", clients[client.id], msg);
    });

    client.on("disconnect", function(){
    	console.log("Disconectado");
        io.emit("update", clients[client.id] + " saiu do server.");
        delete clients[client.id];
    });
});


http.listen(3000, function(){
  console.log('escutando na porta 3000');
});