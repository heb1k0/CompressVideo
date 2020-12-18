import {Router} from 'express'
const router = Router()

import * as HistoriCtrl from '../controllers/histori.controller';

router.get('/', HistoriCtrl.postHistorisbyOwner)


export default router;