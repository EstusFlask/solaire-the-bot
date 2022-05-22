export class TextSanitizer {

    __sanitize({text}) {
        
        try {
            return text.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').trim()
            
        } catch(e) {

           console.error(e)
           
        }


    }

}
