import { BaseManager } from "./baseManager"
import { FileManager } from "./fileManager"

const fileManager = new FileManager(file: "commands.file")

export class CommandManager {
  actionsQueue = []

  async init() {

    while (1) {

      for (const msg of this.actionsQueue) {

        this.doAction({ action, data })
      }

      await this.__sleep()

    }
  }

  __saveCommand({ command, answer }) {

    this.__log(`Saving command: ${command} with answer: ${answer}`)

    fileManager.__addLineToFile({key: command, text: answer })

  }

  __deleteCommand({ command }) {

    fileManager.__deleteLineFromFile({key: command})

  }

  __doAction({ action, data }) {

    switch (action) {

      case "ADD_COMMAND":

        this.__saveCommand(data.command, data.answer)

        break;

      case "DELETE_COMMAND":

        this.__deleteCommand(data.command)

        break;

      default:
        break;
    }

  }

  __sleep() {

    return new Promise((ok) => setTimeout(ok, 1000))
  }

  __addActionToQueue({ action, data }) {

    this.actionsQueue.push({ action, data })

  }


}
