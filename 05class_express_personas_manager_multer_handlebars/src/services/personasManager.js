import fs from 'fs/promises'

export class PersonasManager{
    #route
    constructor(route){
        this.#route = route
    }

    async getPersonas(){
        const pojos = JSON.parse(await fs.readFile(this.#route,'utf-8'))
        return pojos
    }
}


export const pm = new PersonasManager('./db/personas.json')