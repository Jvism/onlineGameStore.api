import { DataTypes } from 'sequelize'
import sequelize from '../database/index.js'

const Category = sequelize.define('category', {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  }
})

export default Category
