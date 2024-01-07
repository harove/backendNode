
class Evento {
    #capacidad 
    #participantes
    constructor({id, nombre, lugar, precio, capacidad = 50, fecha = new Date() }){
        this.id = notNull(id)
        this.nombre = notNull(nombre)
        this.lugar = notNull(lugar)
        this.precio = notNull(precio)
        this.#capacidad = capacidad
        this.fecha = notNull(fecha)
        this.#participantes
        // return this
    }


    agregarParticipante(idUsuario){
        if (this.#participantes.includes(idUsuario)) throw new Error('El participante ya existe')
        this.#participantes.push(idUsuario)
    }

    // getCapacidad(){
    //     return this.#capacidad
    // }

    get capacidad(){
        return this.#capacidad
    }

    get participantes(){
        return [...this.#participantes]
    }
    
    // set capacidad(nuevaCapacidad){
    //     if (nuevaCapacidad <=0) throw new Error('La capacidad debe ser mayor a cero')
    //     this.#capacidad = nuevaCapacidad
    // }



    // get participantes(){
    //     return [...this.#participantes]
    // }

    asPOJO(){
        return {
            id:this.id,
            nombre:this.nombre,
            capacidad:this.capacidad
        }
    }

}


let id = 1
function generarId(){
    return id++
}

class ManagerEventos{
    #eventos
    constructor(){
        this.#eventos = []
    }

    agregarEvento(datosEvento){
        datosEvento.id = generarId()
        const evento = new Evento(datosEvento)
        this.#eventos.push(evento)
        return evento
    }

    ponerEventoEnGira({idEvento,nuevaLocalidad,nuevaFecha}){
        const eventoOriginal = this.#eventos.find(e => e.id === idEvento)
        const nuevoEvento = new Evento({
            ...eventoOriginal.asPOJO(),
            id: generarId(),
            lugar: nuevaLocalidad,
            fecha:nuevaFecha
        })
        this.#eventos.push(nuevoEvento)
        return(nuevoEvento)
    }

    agregarUsuario({idEvento,idUsuario}){
        const evento = this.#eventos.find(e=>e.id === idEvento)
        if (!evento) throw new Error(`El evento con id ${idEvento} no existe`)
        evento.agregarParticipante(idUsuario)
    }

    get eventos(){
        return this.#eventos
    }
}

function notNull(valor){
    if ( valor === null || valor === undefined )
        throw new Error('null value')
    return  valor 
}


const datosEvento = {
    id:1,
    nombre: 'mi cumple',
    lugar: 'mi casa',
    precio: 50000,
    capacidad: 10,
    fecha: new Date().toLocaleDateString(),
    participantes:[]
}



const evento = new Evento(datosEvento)

console.log({evento: evento})
evento.lugar = 'caracas'
console.log({evento: evento})
console.log({capacidad: evento.capacidad})
evento.capacidad = 20
console.log({capacidad: evento.capacidad})
console.log({evento})
evento.planeta = 'Tierra'


// const datosEvento2 = {
//     nombre: 'mi cumple',
//     lugar: 'mi casa',
//     precio: 50000,
// }

// const datosEvento3 = {
//     nombre: 'mi cumple2',
//     lugar: 'mi casa2',
//     precio: 50000,
// }
// const em = new ManagerEventos()


// em.agregarEvento(datosEvento2)
// em.agregarEvento(datosEvento3)

// console.log(em.eventos)

// console.log(em.eventos)

// em.agregarUsuario({idEvento:1, idUsuario:123})
// console.log(em.eventos)


// em.ponerEventoEnGira({idEvento:1, nuevaLocalidad: 'una plaza', nuevaFecha: new Date('2023/12/24')})


