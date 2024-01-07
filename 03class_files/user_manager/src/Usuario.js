export class Usuario {
    constructor({id, nombre, rol}) {
        this.id = id;
        this.nombre = nombre;
        this.rol = rol;
    }

    toPojo(){
        return {
            id: this.id,
            nombre: this.nombre,
            rol: this.rol
        }
    }

}
