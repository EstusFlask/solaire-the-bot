
class ActionsPrivateSingleton {
    
    constructor() {
    
        this.actions = []
    
    }
}

class CommandsPrivateSingleton {
    
    constructor() {
    
        this.commands = []
    
    }
}



export class Singleton {

    static getActionsInstance() {
    
        if (!Singleton.actionsInstance) {
    
            Singleton.actionsInstance = new ActionsPrivateSingleton();
    
        }
    
        return Singleton.actionsInstance;
    
    }

    
    static getCommandsInstance() {
    
        if (!Singleton.commandsInstance) {
    
            Singleton.commandsInstance = new CommandsPrivateSingleton();
    
        }
    
        return Singleton.commandsInstance;
    }
}
