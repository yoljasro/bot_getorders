const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")

const token = '7048481841:AAFmZrARmPn7yb80Y-rd-hUAkBEjT7R5sFk';
const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/submit', (req, res) => {
    const { name, number, companyname } = req.body;

    // Bu joyda Telegram botga ma'lumotlarni yuborish kodlari bo'lishi kerak
    const message = `New client:
    Name: ${name}
    Number: ${number}
    CompanyName: ${companyname}`;

    bot.sendMessage('1847596793', message)
        .then(() => {
            res.status(200).send('Succesfully sended information');
        })
        .catch((err) => {
            console.error('Server error:', err);
            res.status(500).send('Server error. Please reply.');
        });     
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log("Server is running on port 4000");
});
