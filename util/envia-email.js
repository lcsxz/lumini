const nodemailer = require('nodemailer');
//https://nodemailer.com/about/
class EnviaEmail {
    static enviar(nome, email, telefone, obs, day, hora) {

        var transporte = nodemailer.createTransport({
            service: `gmail`,
            /*
              https://myaccount.google.com/lesssecureapps?pli=1
            */
            auth: {
                user: 'noreply.lumini@gmail.com',
                pass: 'lumini2611'
            }

        });

        var email = {
            from: 'noreply.lumini@gmail.com', // Quem enviou este e-mail
            to: 'raphaeleite.2002@gmail.com', // Quem receberá
            subject: 'Pedido de Orçamento - Cliente: ' + nome, // Um assunto bacana :-) 
            html: '<h3>Olá, o cliente ' + nome + ' entrou em contanto e pediu um orçamento!!! </h3><br><p>Email:</p><strong>' + email + '</strong><p>Telefone:</p><strong>' + telefone + '</strong><p>Observação:</p><strong>' + obs + '</strong><p>O Pedido de orçamento foi feito na data: </p><strong>' + day + '</strong><p>às  <strong>' + hora + '</strong></p>' // O conteúdo do e-mail
        };

        transporte.sendMail(email, function(err, info) {
            if (err) {
                console.log(err);

            } else {
                console.log('Email enviado! Leia as informações adicionais: ', info);


            }

        });
        return true;
    }
}

module.exports = EnviaEmail;