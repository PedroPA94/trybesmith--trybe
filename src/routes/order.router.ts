import express from 'express';
import OrderController from '../controllers/order.controller';
import auth from '../middlewares/auth';

const router = express.Router();
const orderController = new OrderController();

router.get('/', orderController.findAll);

router.use(auth);
router.post('/', orderController.create);

export default router;