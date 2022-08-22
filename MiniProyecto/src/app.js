const express = require("express")
const cors = require ("cors")
const alumnoRouters = require ("./routes/alumno.routers")
const apuntadasRouters = require ("./routes/apuntadas.routers")
const impartidasRouters = require ("./routes/impartidas.routers")
const mediaRouters = require ("./routes/media.routers")
const notasRouters = require ("./routes/notas.routers")

const errorHandlingh = require ("./error/errorHandling")

const app = express();

app.set ("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(alumnoRouters);
app.use(apuntadasRouters);
app.use(impartidasRouters);
app.use(mediaRouters);
app.use(notasRouters);
app.use(function (request, response, next)
{
    response.status(404).json({error: true,
                                codigo: 404,
                                message: "Endpoint doesnt found"})
});


app.use(errorHandlingh);

module.exports = app;