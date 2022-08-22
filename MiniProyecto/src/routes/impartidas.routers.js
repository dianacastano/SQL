const {Router} = require ("express")
const router = Router();
const impartidasCtrl = require ("../controller/impartidas.contoller")

router.get ("/impartidas", impartidasCtrl.getImpartidas);

module.exports = router;