const {Router} = require ("express")
const router = Router();
const alumnoCtrl = require ("../controller/alumno.controller")

router.get ("/", alumnoCtrl.getAlumno);
router.post ("/alumno", alumnoCtrl.postAlumno);
router.put ("/alumno", alumnoCtrl.putAlumno);
router.delete ("/alumno", alumnoCtrl.deleteAlumno);

module.exports = router;