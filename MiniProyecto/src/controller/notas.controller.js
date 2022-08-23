const connection = require ("../database")

// GET //

const getNota = (req, res) => {
    console.log(req.query.id)
    let sql;
    if (req.query.id == null)
    sql = "SELECT * FROM mark";
    else
    sql = "SELECT student_id, subject_id, mark from mark WHERE student_id=" + req.query.id;
    connection.query(sql, (err, result) =>
    {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
}

// POST //

const postNota = (req, res) => {
    console.log(req.body);
    let sql = "INSERT INTO mark (student_id, subject_id, date, mark) " +
    "VALUES ('" + req.body.student_id + "', '" + req.body.subject_id + "', '" +
    req.body.date + "', '" + req.body.mark + "')"
    console.log(sql);                      
    connection.query(sql, (err, result) => {
        if (err) 
        console.log(err);
        else {
            console.log(result);
            if (result.insertId)
            res.send(String(result.insertId));
            else
            res.send("-1");
        }
    })
}

// PUT //

const putNota = (req, res) => {
    console.log(req.body);

    let sql = `UPDATE mark SET student_id = ${req.body.student_id}, 
            subject_id = ${req.body.subject_id}, 
            date = "${req.body.date}", 
            mark = ${req.body.mark} 
            WHERE mark_id = ${req.body.mark_id}`

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

const deleteNota = (req, res) => {
    console.log(req.body);
    let sql =  `DELETE FROM mark WHERE mark_id= ${req.body.mark_id}`
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



module.exports = { getNota, postNota, putNota, deleteNota }