const { PORT } = require('./src/config/enviromentsConfig')
const app = require('./src/app')

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
