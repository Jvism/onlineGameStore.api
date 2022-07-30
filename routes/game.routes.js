import { Router } from 'express'
import { getGames, createGame, updateGame, deleteGame, getGame } from '../controllers/game.controller.js'

const router = Router()

router.get('/games', getGames)
router.post('/games', createGame)
router.put('/games/:id', updateGame)
router.delete('/games/:id', deleteGame)
router.get('/games/:id', getGame)

export default router
