const express = require('express');
const router = express.Router();
const restaurentController = require('./restaurent.controller');
const { validationMiddleware,authMiddleware } = require('./../../middlewares');
const { getRestaurentSchema, postRestaurentSchema } = require('./restaurent.validation');


router.post('/create',authMiddleware(['user']),validationMiddleware(postRestaurentSchema), restaurentController.createRestaurent );
router.get('/getAll',authMiddleware(['user']), validationMiddleware(getRestaurentSchema), restaurentController.getAllRestaurent );
router.patch('/update/:id',authMiddleware(['user']), restaurentController.updateRestaurent);
router.delete('/delete/:id',authMiddleware(['user']), restaurentController.deleteRestaurent);


module.exports = router;
