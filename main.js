const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '1926993187:AAHlWMMBfl7gfE_1GBQzgvUn7RfU2id4sjU';

const bot = new TelegramBot(TOKEN, {
  polling: true
})
bot.on('message', (msg) => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, 'Hello!' + msg.from.first_name)
})