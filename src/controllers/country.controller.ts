import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';

import { Country } from "../models/country.model"

const getCountry = async (req: Request, res: Response) => {
    try {
        let countryName = req.params.countryName;
        let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
        let country: Country = result.data[0];
        return res.status(200).json(country);
    } catch (err) {
        return res.status(500).json(
            (err?.response?.status === 404) ?
                {
                    message: "Could not find this country"
                } : {
                    message: "Unexpected error",
                    stack: err,
                }
        );
    }
}

export default { getCountry };