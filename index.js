

const express = require('express')
const app = express()
const port = 3001

/** BASE DE DATOS **/
const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log('Base De Datos Online!');
  })
  .catch(err => {
    console.error('Problemas Al Conectar Base De Datos:', err);
  });
/** FIN BASE DE DATOS **/

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Rutas Principales
const routes = require("./routes/main.route");
// Se asignan rutas
app.use("/api/v1", routes);

// Se inicia servidors
app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`)
})


