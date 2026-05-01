const nodemailer = require("nodemailer");

// 1. Use a more robust transport config
const transporter = nodemailer.createTransport({
    service: "gmail", // Simplifies config for Gmail
    auth: {
        // Best practice: Use process.env.EMAIL_USER and process.env.EMAIL_PASS
        user: "dixitp1311@gmail.com",
        pass: "vgeg zyxy snfo vlxk" 
    }
});

// 2. Define mail options
const mailOptions = {
    from: `"Dixit P." <dixitp1311@gmail.com>`, // Professional sender format
    to: [
        "learn7238@gmail.com",
        "rathodmr326@gmail.com",
        "parth106971@gmail.com",
        "kushsevak10@gmail.com"
    ].join(", "), // Arrays are easier to manage than long strings
    subject: "🚀 Node Mailer Enhanced Test",
    text: "This is a fallback plain text message.",
    html: `
        <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
            <h1 style="color: #4A90E2;">Thank you for sending!</h1>
            <p>This email was sent via an <b>enhanced</b> Node.js script.</p>
        </div>
    `,
    attachments: [
        {
            filename: "verification_image.png",
            path: "../Chapter6/myimages/test-1777262232556.jpg",
            cid: 'unique@nodemailer.com' // Allows you to embed image in HTML
        }
    ]
};

// 3. Use a more descriptive callback or Async/Await
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.error("❌ Error occurred:", error.message);
    }
    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
});
