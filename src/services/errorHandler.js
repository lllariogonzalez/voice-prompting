function errorHandler (err, req, res, next) {
  console.error(err.status, err.message)
  res.status(500).json({ message: 'Ha ocurrido un error en el servidor' })
}

module.exports = errorHandler
