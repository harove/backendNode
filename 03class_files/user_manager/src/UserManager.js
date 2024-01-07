import fs from 'fs/promises'
import { Usuario } from './Usuario.js'
import { randomUUID } from 'node:crypto'

export class UserManager {
    #ruta
    constructor(ruta) {
        this.#ruta = ruta
    }

    async agregar({ nombre, rol }) {
        const pojos = JSON.parse(await fs.readFile(this.#ruta, 'utf-8'))
        const usuario = new Usuario({ id: randomUUID(), nombre, rol })
        pojos.push(usuario.toPojo())
        await fs.writeFile(this.#ruta, JSON.stringify(pojos, null, 2))
        return usuario
    }

    async buscarPorId(id) {
        const pojos = JSON.parse(await fs.readFile(this.#ruta, 'utf-8'))
        const pojo = pojos.find(u => u.id === id)
        if (!pojo) {
            throw new Error(`no encontrado el usuario con el id ${id}`)
        }
        return pojo
    }

    async buscarTodas() {
        const pojos = JSON.parse(await fs.readFile(this.#ruta, 'utf-8'))
        return pojos
    }

    async buscarPorUserName(username) {
        const usuarios = JSON.parse(await fs.readFile(this.#ruta, 'utf-8'))
        const usuario = usuarios.find(usuario => usuario.username === username)
        return usuario
    }
}