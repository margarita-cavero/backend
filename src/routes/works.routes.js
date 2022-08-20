import { Router } from "express";
import { workPost, worksGet } from "../controllers/works.controllers";

import { validateToken } from "../middlewares/validateJWT";

const router = Router();

router.get('/', worksGet);
router.post('/', validateToken, workPost);

export default router;