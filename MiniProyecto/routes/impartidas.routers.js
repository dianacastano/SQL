const {Router} = require ("express")
const router = Router();
const impartidasCtrl = require ("../../controller/impartidas.contoller")

router.get ("/", impartidasCtrl.getImpartidas);

module.exports = router;