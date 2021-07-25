const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '1926993187:AAHlWMMBfl7gfE_1GBQzgvUn7RfU2id4sjU';

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})
bot.on('message', (msg) => {
  console.log(msg.text);
  const { id } = msg.chat;
  const text = msg.text.toLowerCase();
  if(text == 'help') {
    bot.sendMessage(id, 'i will help you!')
      .then(() => console.log('sms has been send'))
      .catch((error) => console.log(error))
  }
  else {
    const html = `
    <strong>Test title</strong>
    <pre>${debuger(msg)}</pre>
    `
    bot.sendMessage(id, html, {
      parse_mode: 'HTML'
    })
  }
  
})
function debuger(obj) {
  return JSON.stringify(obj, null, 4)
}