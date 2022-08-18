const mysql = require("mysql2")

// Crear conexión a mysql
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Darwin_0192",
        database: "bbd_escuela"
    }
)

// Conectar a la base de datos bbd_escuela
connection.connect((error) => {
    if (!error) {
        console.log('Conectado a la bbdd bbd_escuela')
    }else {
        console.log(error)
    }
})

// Borrrar notas de más de 10 años
let sql1 = "DELETE FROM bbd_escuela.mark WHERE `date` < '2012-02-28';";
connection.query(sql1, (error, result) => {
    if (!error) {
        console.log('DELETE correcto');
        console.log(result);
    }else (
        console.log(error)
    )
})    

// Poner un 5 a los alumnos con nota menor que 5
let sql = "UPDATE bbd_escuela.mark SET mark = '5' WHERE mark < '5'";
connection.query(sql, (error, result) => {
    if (!error) {
        console.log('UPDATE correcto');
        console.log(result);
    }else (
        console.log(error)
    )
})    



