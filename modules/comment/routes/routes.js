const express = require('express');
const router = express.Router();
const ActorController = require('../controllers/actor');
const errorHandlers = require('../../../handlers/errorHandlers');


router.get('/',errorHandlers.catchErrors(ActorController.getActors));
router.get('/:actorID',errorHandlers.catchErrors(ActorController.getActor));
router.post('/',errorHandlers.catchErrors(ActorController.updateActor));
router.patch('/:actorID',errorHandlers.catchErrors(ActorController.updateActor));
router.delete('/:actorID',errorHandlers.catchErrors(ActorController.deleteActor));

module.exports = {
	router: router,
	base: '/api/user'	
};