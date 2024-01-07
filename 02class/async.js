function randInt(max){
    return Math.random() * max
}

function tareaQueNoSeCuantoTarda(tarea){
    return new Promise((resolve,reject)=>{
        console.log('me voy a preparar para ejecutarme')
        setTimeout(() => {
            console.log(`me ejecute ${tarea}`)
            resolve(true)
        }, randInt(3)*1000);
    })
}


async function vivir(){
    await tareaQueNoSeCuantoTarda('poner musica')
    await tareaQueNoSeCuantoTarda('trabajar')
}

async function arrancarElDia(nombre){
       const resolve1 = await tareaQueNoSeCuantoTarda(nombre + ' 1 despertarme')
       console.log(resolve1)
       await tareaQueNoSeCuantoTarda(nombre + ' 2 salir de la cama')
       await tareaQueNoSeCuantoTarda(nombre + ' 3 vestirme')

       await Promise.all([
        tareaQueNoSeCuantoTarda(nombre + ' mandar mail de confirmacion'),
        tareaQueNoSeCuantoTarda(nombre + ' logear en un archivo')
       ])

       await tareaQueNoSeCuantoTarda(nombre + ' termine')

}


// vivir()


arrancarElDia('mariam')