import { DataTypes } from 'sequelize'
import sequelize from '../database/index.js'

const Purchase = sequelize.define('purchase', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

export default Purchase
