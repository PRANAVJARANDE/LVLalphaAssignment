import {Router} from 'express'
import {upload} from '../middlewares/multer.middleware.js'
import { adduser } from '../controllers/adduser.controllers.js';

const router= Router();

router.route("/submitApplication").post(upload.single("resume"), adduser);  

export default router;