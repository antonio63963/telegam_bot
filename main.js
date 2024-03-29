const TelegramBot = require('node-telegram-bot-api');
const debug = require('./debug');
const TOKEN = '1926993187:AAHlWMMBfl7gfE_1GBQzgvUn7RfU2id4sjU';

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});

const inline_keyboard = [
  [
    {
      text: 'Forward',
      callback_data: 'forward'
    },
    {
      text: 'Reply',
      callback_data: 'reply'
    }
  ],
  [
    {
      text: 'Edit',
      callback_data: 'edit'
    }
  ],
  [
    {
      text: 'Delete',
      callback_data: 'delete'
    }
  ]
];

bot.onText(/\/start/, msg => {
  const { id } = msg.chat;
  bot.sendMessage(id, 'select', {
    reply_markup: {
      inline_keyboard
    }
  })
});

bot.on('callback_query', query => {
  const {chat, message_id, text} = query.message;
console.log(query.message);
  switch(query.data) {
    case 'forward':
    bot.forwardMessage(chat.id, chat.id, message_id)  
    break;

    case 'reply': 
    bot.sendMessage(chat.id, 'my reply', {
      reply_to_message_id: message_id
    });
      break;

    case 'edit': 
      bot.editMessageText('another text))', {
        chat_id: chat.id,
        message_id,
        reply_markup: { inline_keyboard }
      })
      break;
    case 'delete':
      bot.deleteMessage(chat.id, message_id);
      break;
  }
});

bot.onText(/\/pic/, msg => {
  bot.sendPhoto(msg.chat.id, './pics/happyCat.jpg', { 
    caption: 'mr. cat'
  })
})
