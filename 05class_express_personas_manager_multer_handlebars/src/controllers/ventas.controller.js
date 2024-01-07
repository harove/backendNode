
const ventas = []
export function postController(req, res) {
    console.log('agregar persona')
    const venta = req.body
    console.log(venta)
    ventas.push(venta)
    res.json(venta)
}
export function getController(req, res) {
    console.log('buscar ventas')
    res.json(ventas)
}
