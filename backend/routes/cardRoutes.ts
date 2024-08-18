import { Router } from 'express';
import { getAllCards, getCard, createCard } from '../controllers/cardControllers';

const router = Router();

router.get('/cards', getAllCards);
router.get('/cards/:title', getCard);
router.post('/cards', createCard);

export default router;