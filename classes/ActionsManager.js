import { BaseManager } from "./BaseManager.js"
import { FileManager } from "./FileManager.js"
import { Singleton } from "../state/Singleton.js"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const readline = require('readline');
const fs = require('fs');

const fileManager = new FileManager("./state/commands.file")

export class ActionsManager extends BaseManager {

  constructor() {

    super()

    this.__actionsQueueSingleton = Singleton.getActionsInstance()

  }

  async init() {

    this.__log("Init command manager")

    await this.__loadCommandsFromFileAsync({path:"./state/commands.file"})

    while (true) {

      for (const queueElement of this.__actionsQueueSingleton.actions) {

        let { action, data } = queueElement

        if (!data.done)
          this.__doAction({ action: action, data: data })

        data.done = true;

      }

      await this.__sleep()

    }
  }

  __doAction({ action, data }) {

    switch (action) {

      case "ADD_OR_UPDATE_COMMAND":

        this.__saveCommand({ command: data['command'], answer: data['answer'] })

        break;

      case "DELETE_COMMAND":

        this.__deleteCommand(data['command'])

        break;

      default:

        this.__log(`Unknown action: ${action}`)

        break;
    }

  }

  __addActionToQueue({ action, data }) {

    this.__actionsQueueSingleton.actions.push({ action, data })

  }

  async __loadCommandsFromFileAsync({path}) {

    const fileStream = fs.createReadStream(path)

    const lines = readline.createInterface({input: fileStream, crlfDelay: Infinity})

    for await (const line of lines) {

      let splitted = line.split("|")
    
      Singleton.getCommandsInstance().commands.push({command: splitted[0], answer: splitted[1]})

      this.__log(`Charged command: ${line}`)

    }

  }

  // ACTIONS - Should be in a separated modules. With validations.

  __saveCommand({ command, answer }) {

    this.__log(`Saving command: ${command} with answer: ${answer}`)

    fileManager.__addLineToFile({ key: command, text: answer })

  }


  __deleteCommand({ command }) {

    throw Error("Not implemented")

  }

}
