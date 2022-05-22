const {processMessage} = require('./utils/messageProcessor.js')

const TeleBot = require('telebot');
const {  Learning } = require('./utils/learning.js');

const learning = new Learning()

const bot = new TeleBot("5281229315:AAHFGYpxymJ8zFF2eulr9I8S-QlywVX-tfo")

var enabled = true;

bot.on('*', (event) => {

    if(event.text == "duerme solaire")
     enabled = false

    if(event.text == "despierta solaire")
     enabled = true

    if(enabled){
        console.log(`Received event: ${JSON.stringify(event)}`)
    
        const message = processMessage(event.text)
    
        return bot.sendMessage(event.chat.id, message);
    }
});

await learning.init()

bot.start();
