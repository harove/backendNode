import { UserManager } from "./UserManager.js"

const um = new UserManager('./db/usuarios.json')

const usuario = await um.agregar({
    nombre: 'nombre',
    apellido: 'apellido',
    username: 'username',
    password: 'password',
})

console.log(usuario)


const buscado = await um.buscarPorUserName('username')
console.log({buscado})