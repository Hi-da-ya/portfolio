import nodemailer from 'nodemailer';

async function emailHandler(req, res) {

    // Make sure the API endpoint only allows POST requests
    if ( req.method !== 'POST'){
        return res.status(405).json({message: "Method not allowed"})
    };

    // get data from frontend form
    const {name, email, subject, message} = req.body;

    // Create a transporter that acts as our courier - it's what connects to our email service
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try{
        // send email to self
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Portfolio: ${subject}`,
            html: `
            <h3>New Message from Portfolio Website</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            `,
        });

        // Auto-reply to sender
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your Message Has Been Received!",
            text: `Hi ${name},\n\nThank you for reaching out. Your message regarding "${subject}" has been received and I will get back to you shortly.\n\nWarm regards,\nHidaya Vanessa`,
        });
        return res.status(200).json({success: true});
    } catch (error){
        console.error(error);
        return res.status(500).json({message: 'Error sending email', error: error.message});
    };
       
};

export default emailHandler;