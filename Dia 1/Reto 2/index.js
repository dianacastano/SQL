const mysql = require("mysql2")

// Crear conexión a mysql
let connection  = mysql.createConnection(
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

// let sql="INSERT INTO bbd_escuela.subject (tittle) VALUES (\"Maquetación\"),(\"Fundamentos\"),(\"NodeJS\"),(\"SQL\"),(\"Angular\"),(\"React\"),(\"Ionic\"),(\"Git\"),(\"javascript\"),(\"Typescript\")";
//     connection.query(sql, (err,result) =>{
//         if(err)
//             console.log(err);
//         else{
//             console.log("INSERT correcto");
//             console.log(result);
//     }
// });

// let sql1 = "INSERT INTO bbd_escuela.students (first_name, last_name, group_id) VALUES (\"Teo\",\"Quijano\",1),(\"Lady\",\"Solarte\",3),(\"Manuela\",\"Mariscotti\",5),(\"Joseph\",\"Fors\",7),(\"Natalia\",\"Ihnatava\",9),(\"Vitalaty\",\"Mykola\",10),(\"Joe\",\"Arroyo\",2),(\"Deisy\",\"Murillos\",4),(\"Antonio\",\"Diaz\",6),(\"Fran\",\"Longoria\",8)";
//     connection.query(sql1, (err,result)=>{
//         if(err)
//             console.log(err);
//         else{
//             console.log("Alumnos Registrados");
//             console.log(result);
//     }
// });

// let sql2="INSERT INTO bbd_escuela.subject_teacher (subjects_id, teachers_id, group_id) VALUES (1,3,1),(2,1,4),(3,10,5),(4,7,8),(5,2,9),(6,8,2),(7,4,7),(8,5,3),(9,6,6),(10,9,10)" 

//     connection.query(sql2, (err,result)=>{
//         if(err)
//             console.log(err);
//         else{
//             console.log("Asignatura-profesores cargados");
//             console.log(result);
//     }
// });


let marks = [
    { students_id: '1', subjects_id: '5', date: '2022-01-18', mark: '6' },
    { students_id: '3', subjects_id: '1', date: '2021-11-23', mark: '7' },
    { students_id: '7', subjects_id: '5', date: '2010-02-12', mark: '8' },
    { students_id: '5', subjects_id: '3', date: '2017-05-01', mark: '5' },
    { students_id: '8', subjects_id: '7', date: '2009-09-25', mark: '4' },
    { students_id: '10', subjects_id: '2', date: '2013-10-09', mark: '9' },
    { students_id: '2', subjects_id: '9', date: '2015-04-25', mark: '6' },
    { students_id: '1', subjects_id: '8', date: '2018-03-30', mark: '7' },
    { students_id: '3', subjects_id: '5', date: '2020-06-27', mark: '8' },
    { students_id: '9', subjects_id: '1', date: '2005-11-30', mark: '3' },
]

marks.forEach((mark) => {
    let sql3 = "INSERT INTO bbd_escuela.mark (students_id, subjects_id, date, mark) VALUES ('" + mark.students_id + "', '" + mark.subjects_id + "', '" + mark.date + "', '" + mark.mark + "');";
    connection.query(sql3, (error, result) => {
        if (!error) {
            console.log('INSERT correcto');
            console.log(result);
        }else (
            console.log(error)
        )
    })    
}) 



// // Setear todas las notas de los estudiantes a 0

// let sql4 = "UPDATE mark SET mark = 0";
// connection.query(sql4, (error, result) => {
//     if (!error) {
//         console.log("UPDATE correcto");
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })    

// // Obtener nombre y apellido de todos los estudiantes
// let sql5 = "SELECT first_name, last_name FROM bbd_escuela.students;";
// connection.query(sql5, (error, result) => {
//     if (!error) {
//         console.log('SELECT correcto');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })    

// // Obtener todos los datos de los profesores
// let sql6 = "SELECT * FROM bbd_escuela.teachers";
// connection.query(sql6, (error, result) => {
//     if (!error) {
//         console.log('SELECT correcto');
//         console.log(result);
//     }else (
//         console.log(error)
//     )
// })    



