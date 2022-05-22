import { BaseManager } from "./baseManager"
import { FileManager } from "./fileManager"

const fileManager = new FileManager("commands.file")

export class CommandManager {
  actionsQueue = []

  async init() {

    this.__log("Init command manager")

    while (1) {

      for (const queueElement of this.actionsQueue) {

        let { action, data } = queueElement

        this.__doAction({ action: action, data: data })
      
      }

      await this.__sleep()

    }
  }

  __saveCommand({ command, answer }) {

    this.__log(`Saving command: ${command} with answer: ${answer}`)

    fileManager.__addLineToFile({ key: command, text: answer })

  }

  __deleteCommand({ command }) {

    fileManager.__deleteLineFromFile({ key: command })

  }

  __doAction({ action, data }) {

    switch (action) {

      case "ADD_OR_UPDATE_COMMAND":

        this.__saveCommand(data.command, data.answer)

        break;

      case "DELETE_COMMAND":

        this.__deleteCommand(data.command)

        break;

      default:

        this.__log(`Unknown action: ${action}`)
        
        break;
    }

  }

  __addActionToQueue({ action, data }) {

    this.actionsQueue.push({ action, data })

  }

  __sleep() {

    return new Promise((ok) => setTimeout(ok, 1000))
  }

}
