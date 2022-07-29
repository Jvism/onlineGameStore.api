import { DataTypes } from 'sequelize'
import sequelize from '../database/index.js'
import Purchase from './purchase.model.js'

const Userapp = sequelize.define('userapp', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
})

Userapp.hasMany(Purchase, {
  foreignKey: 'userappId',
  sourceKey: 'username'
})

Purchase.belongsTo(Userapp)

export default Userapp
