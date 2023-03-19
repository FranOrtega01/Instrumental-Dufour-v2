import nodemailer from 'nodemailer'
import { Router } from "express";
import dotenv from 'dotenv';
dotenv.config();

const router = Router()


const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth:{
        user: process.env.APP_USER,
        pass: process.env.APP_PASSWORD
    }
})

router.post('/', async (req, res) => {
    try {
        const result = await transport.sendMail({
            from: req.body.email,
            to: process.env.APP_EMAIL,
            subject: req.body.subject,
            html: `
                <div> 
        
        <h1 style="color:#00266e;font-size:40px,font-family:'Raph Lanok Future',sans-serif;">Instrumental Dufour</h1>
                    <p><b>Nombre:</b> ${req.body.fullname}</p>
                    <p><b>Email:</b>${req.body.email}</p>
                    <p><b>Telefono</b>: ${req.body.number}</p>
                    <p><b>Empresa</b>: ${req.body.enterprise}</p>
                    <p><b>Mensaje</b>: ${req.body.message}</p>
                </div>
            `,
            attachments: []
        })
        
        return res.send('success')

    } catch (error) {
        return console.log(error);
    }
})

export default router