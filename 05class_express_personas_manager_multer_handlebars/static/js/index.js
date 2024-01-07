const inputNombre = document.querySelector('#inputNombre')
const inputEdad = document.querySelector('#inputEdad')

document.querySelector('form')?.addEventListener('submit', e=>{
    e.preventDefault()
    fetch('/api/personas', {
        method: 'POST',
        headers: { 'Content-Type':'Application/json' },
        body: JSON.stringify({
            nombre: inputNombre?.value,
            edad: inputEdad?.value,
        })
    })
    // fetch('/imagenes', {
    //     method: 'POST',
    //     headers: { 'Content-Type':'Application/json' },
    //     body: JSON.stringify({
    //         name: document.querySelector('input').value
    //     })
    // })
})