function processMessage(message){

    if(message.includes("bot"))
     return "¿Por qué habláis de mí?"

    if(message.includes("elden ring"))
     return "Elden Ring, el mejor juego de la historia jamás creado."
    
    if(message.includes("hola"))
     return "Hola amiccos"
    
     if(message.includes("xD"))
     return "te parece gracioso?"
}

module.exports = { processMessage }
