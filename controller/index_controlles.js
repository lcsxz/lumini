const EnviaEmail = require('../util/envia-email')

class IndexController {
    /*
    Método index() da classe IndexController
    Verifica se o usuário já está logado if(req.session.nome). Se verdadeiro, redireciona o usuário automaticamente para a página /home.
    Senão, redireciona ele para a tela de login. Passamos para a tela de login o parâmetro "titulo" com valor "Agenda de tarefas". Esse parâmetro será exibido na página "index.ejs", que está na pasta "views"
    */
    index() {
        return function(req, res) {
            res.render('index');

        }
    }
    enviaEmail() {
        return function(req, res) {
            let nome = req.body.nome;
            let email = req.body.email;
            let telefone = req.body.telefone;
            let obs = req.body.observacao;
            let data = new Date();
            let mes = data.getMonth() + 1;
            let ano = data.getFullYear();
            let atualhora = data.getHours() - 1;
            let day = 'Data: ' + data.getDate() + '/' + mes + '/' + ano;
            let hora = atualhora + ':' + data.getMinutes();

            EnviaEmail.enviar(nome, email, telefone, obs, day, hora);
            res.redirect('/')
        }
    }
}

module.exports = IndexController;