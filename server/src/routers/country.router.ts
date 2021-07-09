import express from 'express';

import countryController from '../controllers/country.controller';

const router = express.Router();

router.get('/country/:countryName', countryController.getCountry);
router.get('/countries/:countryName', countryController.getCountries);
router.get('/countries', countryController.getAllCountries);

export = router;
