const connection = require ("../database")

// GET //

let getAlumno = (req, res) => {
    { console.log(req.query.id)
        let sql;
        if (req.query.id == null)
            sql = "SELECT * FROM student";
        else
            sql = "SELECT * FROM student WHERE student_id=" + req.query.id;
            console.log(sql)

        connection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        })
    }
    
};

// POST //

const postAlumno = (req, res) => {
    console.log(req.body);

    let sql = "INSERT INTO student (first_name, last_name, group_id, ingreso) " +
    "VALUES ('" + req.body.first_name + "', '" + req.body.last_name + "', '" +
            req.body.group_id + "', '" + req.body.entry_year + "')"
                
    console.log(sql);                      
    connection.query(sql, (err, result) => {
        if (err) 
            console.log(err);
        else 
        {
            console.log(result);
            if (result.insertId)
                res.send(String(result.insertId));
            else
                res.send("-1");
        }
    })
};

// PUT //

const putAlumno = (req, res) => {
    console.log(req.body);

    let sql =  `UPDATE student SET first_name1 = "${req.body.first_name}",
                last_name= "${req.body.last_name}",
                id_group= ${req.body.id_group},
                entry_year= '${req.body.entry_year}'
                WHERE student_id= ${req.body.student_id}`      

    console.log(sql); 
    connection.query(sql, (err, result) => {
        if (err) 
            console.log(err);
        else 
        {
            res.send(result);
        }
    })
}


// DELETE //

const deleteAlumno = (req, res) => {
    console.log(req.body);
    let sql =  `DELETE FROM student WHERE student_id= ${req.body.student_id}`
    console.log(sql); 
    connection.query(sql, (err, result) => {
        if (err) 
        console.log(err);
        else 
        {
            res.send(result);
        }
    })
}


module.exports = { getAlumno, postAlumno, putAlumno,deleteAlumno }