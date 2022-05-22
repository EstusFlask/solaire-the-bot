import { BaseManager } from "./baseManager"
import { TextSanitizer } from "./textSanitizer"
const fs = require('fs');
const textSanitizer = new TextSanitizer()

export class FileManager extends BaseManager {
    
    constructor(file){
        this.file = file
    }

    __addLineToFile({key, text}){
        
        const line = this.__buildLine({key, text})

        fs.appendFile(this.file, line, err => {

            if (err) {
            
                this.__log(err)
            
            } else {

                this.__log(`Line added: ${line}`)

            }

        })

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
