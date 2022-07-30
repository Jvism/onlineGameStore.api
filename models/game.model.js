import { DataTypes } from 'sequelize'
import sequelize from '../database/index.js'

const Game = sequelize.define('game', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  platform: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  discount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  url_image: {
    type: DataTypes.STRING,
    defaultValue: 'https://programacion.net/files/article/20161110041116_image-not-found.png'
  }
})

export default Game
