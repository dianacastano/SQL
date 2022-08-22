const {Router} = require ("express")
const router = Router();
const mediaCtrl = require ("../controller/media.controller")

router.get ("/media", mediaCtrl.getMedia);

module.exports = router;