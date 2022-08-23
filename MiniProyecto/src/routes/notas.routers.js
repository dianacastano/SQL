const {Router} = require ("express")
const router = Router();
const notaCtrl = require ("../controller/notas.controller")

router.get ("/mark", notaCtrl.getNota);
router.post ("/mark", notaCtrl.postNota);
router.put ("/mark", notaCtrl.putNota);
router.delete ("/mark", notaCtrl.deleteNota);

module.exports = router;