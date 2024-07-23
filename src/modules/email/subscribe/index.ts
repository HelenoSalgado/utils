import { email } from "src/config";
import { SendEmail } from "../tdo/SendEmail-tdo";
const nodemailer = require('nodemailer');

export class Subscribe{

    async sendEmail(contact: SendEmail){

        const options = {
            service: "hotmail",
            secureConnection: email.secure,
            auth: {
                user: email.auth.user,
                pass: email.auth.pass
            }
        }

        const envelope = {
            from: `"Heleno Salgado" < ${email.auth.user} >`,
            to: `"${contact.name}" < ${contact.email} >`,
            subject: "Contato - Portfólio",
            html: `<body>
                    <h3>Por <em>${contact.name}</em></h3>
                    <p>${contact.text}</p>
                    <hr>
                    <em>Cópia gerada automáticamente.</em>
                    <br>
                    <p><a href="https://heleno.dev">heleno.dev<a/></p>
                   </body>`,
        };

        const transporter = nodemailer.createTransport(options);
        
        // transporter.verify((error:any, success:any) => {
        //     if (error) console.error;
        //     console.log(success);
        // });
  
        return await transporter.sendMail(envelope, (err: any, info: any) => {

            if(err) return err.message;
        
            return {
                id: info.messageId,
                message: "Email enviado com sucesso."
            }

        });
 
    }

}