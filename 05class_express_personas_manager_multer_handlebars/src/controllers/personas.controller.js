import { pm } from "../services/personasManager.js"

export async function postController(req, res) {
    const personas = await pm.getPersonas()
    const persona = req.body
    personas.push(persona)
    res.json(persona)
}

export async function getController(req, res) {
    const personas = await pm.getPersonas()
    res.json(personas)
}
