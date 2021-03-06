import {Router} from 'express'
const router = Router()
const path = require('path');

const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname+'/../../public/files'))
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname);
    }
  })
   
  var upload = multer({ storage: storage })


import * as VideoCtrl from '../controllers/video.controller';

router.get('/',VideoCtrl.TransformVideo)
router.post('/create', VideoCtrl.transformPost);


export default router;