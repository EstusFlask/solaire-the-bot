import { BaseManager } from "./BaseManager.js"
import { TextSanitizer } from "./TextSanitizer.js"
const textSanitizer = new TextSanitizer()

export class TextManager extends BaseManager {

    __buildTextLine({key, text}){

        key = textSanitizer.__sanitize({text: key})

        text = textSanitizer.__sanitize({text: text})

        return  `${key}|${text}\n`

    }

}
