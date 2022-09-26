const { Router } = require('express');
const gameController = require('../controller/game');
const clientController = require('../controller/client');
const favoriteController = require('../controller/favorites');

const router = Router();

router.get('/', favoriteController.hello);

router.get('/games', gameController.getList);

router.post('/client/save', clientController.save);

router.post('/client/delete', clientController.deleteById);

router.get('/client/:id', clientController.getById);

router.post('/favorite/save', favoriteController.save);

router.post('/favorite/delete', favoriteController.deleteGame);

module.exports = router;