const express = require('express');
const router = express.Router();
const ActorController = require('../controllers/actor');
const errorHandlers = require('../../../handlers/errorHandlers');


router.get('/',errorHandlers.catchErrors(ActorController.getActors));
router.get('/:actorID',errorHandlers.catchErrors(ActorController.getActor));
router.post('/',ActorController.addNewActor);
router.patch('/:actorID',ActorController.updateActor);
router.delete('/:actorID',ActorController.deleteActor);

module.exports = {
	router: router,
	base: '/actors'	
};