import Game from '../models/game.model.js'
import Category from '../models/category.model.js'
import gameCategory from '../models/gameCategory.model.js'
// import { Op } from 'sequelize'

// Buscar todos los juegos
export const getGames = async (req, res) => {
  try {
    // Consultamos que exista filtros
    const Platforms = req.query.platform
    const Categories = req.query.category

    let games = await Game.findAll({ include: Category })

    // Filtramos que sea de la plataforma pedida
    if (Platforms) {
      games = games.filter((game) => typeof Platforms === 'string' ? game.dataValues.platform === Platforms : Platforms.includes(game.dataValues.platform))
    }

    // Filtramos que contenga la categoria pedida
    if (Categories) {
      games = games.filter((game) => {
        const categoriesOfGame = game.dataValues.categories.map((category) => category.name)

        if (typeof Categories === 'string') {
          console.log(categoriesOfGame.includes(Categories))
          return categoriesOfGame.includes(Categories)
        } else {
          categoriesOfGame.forEach((category) => {
            if (Categories.includes(category)) {
              return true
            }
          })

          return false
        }
      })
    }

    res.status(200).json(games)
    // fin del try
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

// Crear un nuevo juego
export const createGame = async (req, res) => {
  try {
    // Recuperamos datos del body
    const { name, description, platform, price, quantity, discount, urlImage, categories } = req.body

    // Creamos el Juego
    const [newGame, created] = await Game.findOrCreate({ where: { name, platform } })

    // Si ya existe un juego con el mismo nombre y plataforma no lo crea
    if (created) {
      newGame.description = description
      newGame.price = price
      newGame.quantity = quantity
      newGame.discount = discount
      newGame.url_image = urlImage
      await newGame.save()

      // Creamos la asociacion con las categorias del nuevo juego
      categories.forEach(async (category) => {
        const categoryExist = await Category.findByPk(category)

        if (categoryExist) {
          const newGameId = newGame.id
          await gameCategory.create({ gameId: newGameId, categoryName: category })
        }
      })

      res.status(204).send()
    } else {
      res.status(304).send()
    }

    // Fin del try
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error })
  }
}

// Actualizar un juego
export const updateGame = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

// Eliminar un juego
export const deleteGame = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

// Buscar un juego
export const getGame = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

// Filtrar juegos
export const getFilterGames = async (req, res) => {
  try {
    res.sen('ok')
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
