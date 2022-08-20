import { Router } from "express";
import { register, login } from "../controllers/auth.controllers";

const router = Router();

router.get('/login', login);
router.post('/register', register);

export default router;