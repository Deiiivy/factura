const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'facturas'
})

connection.connect((e) => {
  if (e) {
    console.error('Error aal conectar a la base de datos',e)
    return
  }
  return 'Conexión exitosa!'
})

connection.end()