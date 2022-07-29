import Game from '../models/game.model.js'
import { Op } from 'sequelize'

// Buscar todos los juegos
export const getGames = async (req, res) => {
  try {
    const platform = req.query.platform
    const category = req.query.category

    const games = await Game.findAll({
      where: {
        platform: {
          [Op.eq]: platform
        }
      }
    })
    res.status(200).json(games)
  } catch (error) {
    console.log(error)
  }
}

// Crear un nuevo juego
export const createGame = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    console.log(error)
  }
}

// Actualizar un juego
export const updateGame = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    console.log(error)
  }
}

// Eliminar un juego
export const deleteGame = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    console.log(error)
  }
}

// Buscar un juego
export const getGame = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    console.log(error)
  }
}

// Filtrar juegos
export const getFilterGames = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    console.log(error)
  }
}
