import { BaseManager } from "./baseManager"
import { TextSanitizer } from "./textSanitizer"

const textSanitizer = new TextSanitizer()

export class FileManager extends BaseManager {
    
    constructor(file){
        this.file = file
    }

    __addLineToFile({key, text}){
        
        const line = this.__buildLine({key, text})

        this.__log(`Line added: ${line}`)
    
    }

    __deleteLineFromFile({key, text}){
        
        

        this.__log(`Line deleted: ${line}`)
    
    }

    __buildLine({key, text}){

        key = textSanitizer.__sanitize(key)

        text = textSanitizer.__sanitize(text)

        return  `${key}|${text}`

    }

  
}
