import sequelize from '../database/index.js'
import Game from './game.model.js'
import Category from './category.model.js'

const gameCategory = sequelize.define('game_category', {})

Game.belongsToMany(Category, { through: gameCategory })
Category.belongsToMany(Game, { through: gameCategory })

export default gameCategory
