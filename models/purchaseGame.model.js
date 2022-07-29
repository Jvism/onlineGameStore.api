import { DataTypes } from 'sequelize'
import sequelize from '../database/index.js'
import Game from './game.model.js'
import Purchase from './purchase.model.js'

const purchaseGame = sequelize.define('purchase_game', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

Game.belongsToMany(Purchase, { through: purchaseGame })
Purchase.belongsToMany(Game, { through: purchaseGame })

export default purchaseGame
