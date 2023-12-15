import Express from 'express'

const router = new Express.Router()

router.get("/", (request, response)=>{ response.json("Bienvenido a la API para la tarea integraadora")})

export default router