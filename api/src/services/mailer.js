const nodemailer = require('nodemailer');
// Instanciando variavéis do envio de email

//Configurações de database
require('dotenv').config();

class Mailer {
    async sender(emails, body, title){
        const send = await nodemailer.createTransport({

            host: process.env.HOST,
            service: process.env.SECURE,
            port: process.env.PORTA,
            secure: true,
            auth:{
                user: process.env.USERMAIL,
                pass: process.env.PASSWORDMAILER
            }
        });
        
        //Passando as opções do email, como destinatário e o remetente.
        const mailOptions = {
            from: userMail,
            to: emails,
            subject: title,
            text: body
        }

        //enviando email fazendo uma pequena verificação se foi enviado ou não exibindo o erro do envio
        send.sendMail(mailOptions, function(err, info){
            if(err){
                console.log(err);
            }else{
                console.log('Mensagem enviada', info);
            }
        });

    }

    
}

module.exports = new Mailer();

