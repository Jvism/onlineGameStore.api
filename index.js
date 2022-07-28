import app from './app'

const PORT = process.env.PORT || 3000

//  Conexion a base de datos

//  Creacion servidor

app.listen(PORT, () => {
  console.log(`Server listen on PORT ${PORT}`)
}).catch(err => console.log(err))
