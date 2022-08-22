const mysql = require("mysql2")

// Crear conexión a mysql //
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Darwin_0192",
        database: "bbd_escuela"
    }
)

// Conectar a la base de datos bbd_escuela //

connection.connect((error) => {
    if (!error) {
        console.log("Conectado a la bbd_escuela")
    }else {
        console.log(error)
    }
})

module.exports = connection;