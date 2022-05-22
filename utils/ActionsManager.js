import { BaseManager } from "./BaseManager.js"
import { FileManager } from "./FileManager.js"

const fileManager = new FileManager("commands.file")

export class ActionsManager extends BaseManager {
  __actionsQueue = []

  async init() {

    this.__log("Init command manager")

    while (true) {

      for (const queueElement of this.__actionsQueue) {

        let { action, data } = queueElement

        this.__doAction({ action: action, data: data })

      }

      await this.__sleep()

    }
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

    this.__actionsQueue.push({ action, data })

  }


  //ACTIONS - Should be in a separated module?

  __saveCommand({ command, answer }) {

    this.__log(`Saving command: ${command} with answer: ${answer}`)

    fileManager.__addLineToFile({ key: command, text: answer })

  }

  __deleteCommand({ command }) {

    fileManager.__deleteLineFromFile({ key: command })

  }

}
