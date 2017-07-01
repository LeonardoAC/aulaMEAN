/*
Cria um módulo com os atributos do cliente
*/
var Clientes = function(){
    var cli = [
        { 
            nome : 'Joao',
            email : 'email@sasdasd.com',
            telefone : '1133330000'
        },
        { 
            nome : 'Mané',
            email : 'email2@sasdasd.com',
            telefone : '1133330001'
            
        }
    ];
    this.listaClientes = function(){
        return cli;
    }
}


module.exports = Clientes;