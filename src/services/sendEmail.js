import nodemailer from 'nodemailer'
export async function sendEmail(dest, subject, message , attachments=[]) {
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.nodeMailerEmail, // generated ethereal user
            pass: process.env.nodeMailerPassword, // generated ethereal password
        },
    });
    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Space" < ${process.env.nodeMailerEmail}>`, // sender address
        to: dest, // list of receivers
        subject, // Subject line
        html: message, // html body
        attachments
    });

   
    return info
}
