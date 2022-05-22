import { BaseManager } from "./BaseManager.js"
import { ActionsManager } from "./ActionsManager.js"
import { Singleton } from "../state/Singleton.js"
const actionsManager = new ActionsManager()

export class CommandsStateManager extends BaseManager {

    constructor(){
        
        super()

        this.commandsSingleton = Singleton.getCommandsInstance()

    }
    
    __findAnswerByCommand(command){

        let foundCommand = this.commandsSingleton.commands.find(c => command.includes(c.command))

        if(foundCommand)
            return foundCommand.answer
        
        return false
    }

    __addCommandToState({command, answer}){

        this.commandsSingleton.commands.push({command: command, answer: answer})
        
        actionsManager.__addActionToQueue({action: "ADD_OR_UPDATE_COMMAND", data: {command, answer}})
        
        this.__log(`Command ${command} with answer ${answer} has been added.`)
    }

}
