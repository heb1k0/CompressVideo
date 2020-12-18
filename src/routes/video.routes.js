import {Router} from 'express'
const router = Router()

const multer = require('multer')({
    dest: 'public/files'
})

import * as VideoCtrl from '../controllers/video.controller';

router.get('/', [multer.single('video')], VideoCtrl.TransformVideo)
router.post('/create',VideoCtrl.transformPost);


export default router;