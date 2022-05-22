

import { CommandManager } from './utils/commandManager.js';

const commandManager = new CommandManager()




(async () => {

    await commandManager.init()

})();





//INIT BOT
//var enabled = true;
//if (process.env.BOT_ENABLED || false) {
//
//    bot.on('*', (event) => {
//
//        if (event.text == "duerme solaire")
//            enabled = false
//
//        if (event.text == "despierta solaire")
//            enabled = true
//
//        if (enabled) {
//            console.log(`Received event: ${JSON.stringify(event)}`)
//
//            const message = processMessage(event.text)
//
//            return bot.sendMessage(event.chat.id, message);
//        }
//    });
//
//    bot.start();
//
//}
