import sequelize from './database/index.js'
import app from './app.js'
// import './models/index.model.js'

const PORT = 3000

//  Funcion de conexion a la base de datos y el servidor
async function main () {
  try {
    await sequelize.authenticate()
    console.log('La conexion con la base de datos se ha establecido correctamente')
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el Puerto ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

// se ejecuta la funcion y se da inicio a la api
main()
