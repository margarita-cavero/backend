import { Router } from "express";
import { contact } from "../controllers/contact.controllers";

const router = Router();

router.post('/', contact);

export default router;