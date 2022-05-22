import { BaseManager } from "./baseManager"

export class FileManager extends BaseManager {
    
    __addLineToFile({key, text}){
        
        const line = `${key}|${text}`.trim()

        this.__log(`Line added: ${line}`)
    
    }
}
