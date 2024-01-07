import multer from 'multer'


export function mid1(req, res, next) {
    console.log('pase por el ' + 1)
    req.nombre = 'pepito'
    next()
}
export function mid2(req, res, next) {
    console.log('pase por el ' + 2)
    req.edad = 20
    next()
}
export function midOpc(req, res, next) {
    console.log('pase por el optional ')
    req.saludar = () => { console.log(`hola soy ${req.nombre} y tengo ${req.edad}`) }
    next()
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

export const upload = multer({ storage: storage })