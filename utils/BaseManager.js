export class BaseManager {

    __log(msg) {

        console.log(msg)
    }

    __sleep(time = 3000) {

        this.__log("SLEEP!")

        return new Promise((ok) => setTimeout(ok, time))

    }
}
