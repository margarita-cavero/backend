import { Router } from "express";
import { workPost, worksGet } from "../controllers/works.controllers";

const router = Router();

router.get('/', worksGet);
router.post('/', workPost);

export default router;