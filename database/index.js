import Sequelize from 'sequelize'

const sequelize = new Sequelize('onlineGameStore.api', 'postgres', 'admin', { host: 'localhost', dialect: 'postgres' })

export default sequelize
