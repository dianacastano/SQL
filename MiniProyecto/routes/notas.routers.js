const {Router} = require ("express")
const router = Router();
const notaCtrl = require ("../../controller/notas.controller")

router.get ("/", notaCtrl.getNota);
router.post ("/nota", notaCtrl.postNota);
router.put ("/nota", notaCtrl.putNota);
router.delete ("/nota", notaCtrl.deleteNota);

module.exports = router;