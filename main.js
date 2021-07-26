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
// bot.on('message', (msg) => {
//   console.log(msg.text);
//   const { id } = msg.chat;
//   const text = msg.text.toLowerCase();
//   if(text == 'help') {
//     bot.sendMessage(id, 'i will help you!')
//       .then(() => console.log('sms has been send'))
//       .catch((error) => console.log(error))
//   }
//   else {
//     const html = `
//     <strong>Test title</strong>
//     <pre>${debuger(msg)}</pre>
//     `
//     bot.sendMessage(id, html, {
//       parse_mode: 'HTML'
//     })
//   }
  
// })
// function debuger(obj) {
//   return JSON.stringify(obj, null, 4)
// }
bot.on('message', (msg) => {
  const {id} = msg.chat;
  console.log(msg);
  if(msg.text == 'Закрыть') {
    bot.sendMessage(id, 'close keyboard', {
      reply_markup: {
        remove_keyboard: true
      }
    })
  } else if(msg.text === 'Ответить') {
    bot.sendMessage(id, 'my reply', {
      reply_markup: {
        force_reply: true
      }
    })
  } else {
    bot.sendMessage(id, 'keyboard', {
      reply_markup: {
        keyboard: [
          [{
            text: 'отправить местоположение',
            request_location:true
          }],
          ['Ответить', 'Закрыть'],
          [{
            text: 'Отправить контакт',
            request_contact: true
          }]
        ],
        one_time_keyboard: true
      }
    })
  }


})