import { Router } from "express";
import { test, startRecording, addData, stopRecording } from "../controllers/video_controller.js";
const router = Router();


router.get('/', test)
router.post('/start', startRecording)
router.post('/add/:id', addData)
router.post('/save/:id', stopRecording)

export default router;