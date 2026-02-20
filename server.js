const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Message",
      text: `Name: ${name}
Email: ${email}
Message: ${message}`,
    });

    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending message");
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});