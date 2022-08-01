# onlineGameStore.api

Esta guia te permitira ejecutar el API.

Se utilizaron las siguientes tecnologias:

* NodeJS
* Express
* Sequelize
* PostgreSQL
* cors



Antes que todo, es importante ejecutar poseer postgreSQL para el enlace de la base de datos [PostgreSQL](https://www.postgresql.org/)

## Project Setup

Se debe configurar la base de datos con el nombre `onlineGameStore.appi`, usario `postgre`, contraseña `admin`

dado que la conexion con la base de datos se hara mediante el siguiente codigo:

```sh
const sequelize = new Sequelize('onlineGameStore.api', 'postgres', 'admin', { host: 'localhost', dialect: 'postgres' })
```

### Instalamos dependencias

```sh
npm install
```

### Iniciamos la aplicacion en modo desarrollo

```sh
npm run dev
```

Nos indicara el puerto en el que se ha ejecutado `PORT = 3000`
