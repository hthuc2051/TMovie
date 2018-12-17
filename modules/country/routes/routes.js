const express = require('express');
const router = express.Router();
const CountryController = require('../controllers/country');
const errorHandlers = require('../../../handlers/errorHandlers');


router.get('/',CountryController.getCountries);
router.get('/:countryID',CountryController.getCountry);
router.post('/',CountryController.addNewCountry);
router.patch('/:countryID',CountryController.updateCountry);
router.delete('/:countryID',CountryController.deleteCountry);

module.exports = {
	router: router,
	base: '/countries'	
};