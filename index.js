

import { ActionsManager } from './utils/CommandManager.js';
import { processMessage } from './utils/MessageProcessor.js';

const commandManager = new ActionsManager()

//INIT BOT
var enabled = true;

if (process.env.BOT_ENABLED || false) {

    bot.on('*', (event) => {

        if (event.text == "duerme solaire")
            enabled = false

        if (event.text == "despierta solaire")
            enabled = true

        if (enabled) {
            console.log(`Received event: ${JSON.stringify(event)}`)

            const message = processMessage(event.text)

            return bot.sendMessage(event.chat.id, message);
        }
    });

    bot.start();

}

await commandManager.init()







