import { ActionsManager } from './classes/ActionsManager.js'
import { MessageManager } from './classes/MessageManager.js'
import { TextSanitizer } from './classes/TextSanitizer.js'
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const TeleBot = require('telebot');
const bot = new TeleBot("TOKEN")

const textSanitizer = new TextSanitizer()
const actionsManager = new ActionsManager()
const messageManager = new MessageManager()


var enabled = true;

bot.on('*', (event) => {

    event.text = event.text.toLowerCase()

    if (event.text == "sleep solaire")
        enabled = false

    if (event.text == "wake up solaire")
        enabled = true

    if (enabled) {

        console.log(`Received event: ${JSON.stringify(event)}`)

        const message = messageManager.__processMessage(event.text)

        if (message)
            return bot.sendMessage(event.chat.id, message);

    }
})

bot.start();

await actionsManager.init()







