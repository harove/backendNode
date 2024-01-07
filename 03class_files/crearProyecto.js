import fs from 'fs/promises'

function guionar(string){
    return string.split(' ').join('-')
}

function crearPackageJson(nombreProy){
  
    const pojo = {
        type: 'module',
        name: nombreProy,
        version: '1.0.0',
        description: "",
        main: 'src/main.js',
        scripts: {},
        author:'' ,
        license: 'ISC',
      }

      const json = JSON.stringify(pojo)
      fs.writeFile(`${nombreProy}/package.json`,json)

}
async function crearLibJs(root){
    const contenido = '//aca van mis funciones'
    await fs.writeFile(`${root}/src/lib.js`,contenido)
}
async function crearMainJs(root){
    const contenido = `import lib from './lib.js'`
    await fs.writeFile(`${root}/src/main.js`,contenido)
}


async function crearProyecto(nombre){
    const nombreConGuiones = guionar(nombre)
    console.log(nombreConGuiones)
    await fs.mkdir(nombreConGuiones)
    await fs.mkdir(`${nombreConGuiones}/src`)
    crearPackageJson(nombreConGuiones)
    crearLibJs(nombreConGuiones)
    crearMainJs(nombreConGuiones)
}

crearProyecto('probando')