import { BaseManager } from "./BaseManager.js"
import { CommandsStateManager } from "./CommandsStateManager.js"

const commandsStateManager = new CommandsStateManager()

export class MessageManager extends BaseManager {

    __processMessage(msg){
        
        try {
            const answer = commandsStateManager.__findAnswerByCommand(msg)
        
            this.__executeSpecialMessage(msg)
            
            if (answer)    
                return answer

        } catch(e) {

            console.error( `Error: ${e}`)
            
        }


    }

    __executeSpecialMessage(msg)
    {
        if (msg.toLowerCase().includes("addcmd")){

            let splitted = msg.split("/")
       
            commandsStateManager.__addCommandToState({command: splitted[1], answer: splitted[2]})
            
            this.__log(`Command has been added: ${JSON.stringify(splitted)}`)
            
            return true
        }
        
        this.__log(`This message has not been processed`)

        return false
        
    }

}

