import express from 'express';
import countryController from '../controllers/country.controller';
const router = express.Router();

router.get('/country/:countryName', countryController.getCountry);

export = router;