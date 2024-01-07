import { Schema, model } from 'mongoose'
import {randomUUID} from 'node:crypto'

const publicacionSchema = new Schema({
    _id: {type: String, default: randomUUID()},
    contenido: {type: String, required: true},
    fecha: {type: Date, default: () => new Date().toLocaleString()},
}, 
{
    strict: 'throw',
    versionKey: false,
})

export const manager = model('publicaciones', publicacionSchema)


// class Amigo {
//     #id
//     #alias
//     #email
//     #amigos
//     #publicaciones
//     constructor(id = ramdoUUID(), alias, email, amigos = [], publicaciones = [] ){
//         this.id = ramdoUUID()
//         this.id = id
//         this.alias = alias
//         this.email = email
//         this.amigos = amigos
//         this.publicaciones = publicaciones
//     }

//     set alias(valor){
//         if (typeof valor !== 'string'){
//             throw new Error ('El valor de alias debe ser string')
//         }
//         this.alias = valor
//     }

//     get alias(){
//         return this.#alias
//     }
// }