const connection = require ("../database")

// GET //

const getApuntadas = (req, res) => {
    console.log(req.query.id)
    let sql;
    if (req.query.id != "")
    sql = "SELECT student_id, subject_id FROM mark WHERE student_id=" + req.query.id
    else 
    {
        sql =  `SELECT first_name1, last_name1, tittle FROM student JOIN
        grupo ON (student.group_id = grupo.group_id) JOIN
        subject_teacher ON (grupo.group_id = subject_teacher.group_id) JOIN
        subject ON (subject_teacher.subject_id = subject.subject_id)`
    }
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else { 
            res.send(result);
        }
    })
}

module.exports = {getApuntadas}