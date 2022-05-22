import { BaseManager } from "./BaseManager.js"
import { TextSanitizer } from "./TextSanitizer.js"
import { createRequire } from "module"
import { TextManager } from "./TextManager.js"
const require = createRequire(import.meta.url)
const fs = require('fs');
const textManager = new TextManager()

export class FileManager extends BaseManager {
    
    constructor(file){
        super()

        this.file = file
   
    }

    __addLineToFile({key, text}){
        
        const line = textManager.__buildTextLine({key, text})

        fs.appendFile(this.file, line, err => {

            if (err) {
            
                this.__log(err)
            
            } else {

                this.__log(`Line added: ${line}`)

            }

        })

    }

    __loadFile({path}){

        fs.readFile(path, {encoding:"utf-8"} ,(err,data) =>{
            
            if (err) throw err

            return data

        })

    }

    __deleteLineFromFile({key, text}){
        
        fs.readFile(this.file, {encoding:"utf-8"} ,(err,data) =>{
            
            if (err) throw err

            this.__log(data)

        })

        this.__log(`Line deleted: ${line}`)
    
    }
  
}
