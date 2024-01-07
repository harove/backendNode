import { Schema, model } from 'mongoose'
import {randomUUID} from 'node:crypto'

const usuariosSchema = new Schema({
    _id: {type: String, default: randomUUID()},
    alias: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    amigos: {type: [String], default: []},
    publicaciones: {type: [String], default: []},
    fotoUrl: {type: String, default: '/static/images/default.jpeg'},
}, 
{
    strict: 'throw',
    versionKey: false,
    methods: {
        agregaraAmigo: function(idAmigo){
            if(!this.amigos.includes(idAmigo)){
                this.amigos.push(idAmigo)
            }
        }
    }
})

export const manager = model('usuarios', usuariosSchema)


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