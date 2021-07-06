import axios, { AxiosResponse, AxiosError } from 'axios';
import { Request, Response } from 'express';

import { Country } from "../models/country.model"

const getCountry = async (req: Request, res: Response) => {
    try {
        let countryName = req.params.countryName;
        let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`);
        let country: Country = result.data[0];
        res.status(200).json(country);
    } catch (err) {
        handleError(err, res);
    }
}

const getCountries = async (req: Request, res: Response) => {
    try {
        let countryName = req.params.countryName;
        let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
        let country: Country[] = result.data;
        res.status(200).json(country);
    } catch (err) {
        handleError(err, res);
    }
}

const getAllCountries = async (req: Request, res: Response) => {
    try {
        let result: AxiosResponse = await axios.get(`https://restcountries.eu/rest/v2/all`);
        let country: Country[] = result.data;
        res.status(200).json(country);
    } catch (err) {
        handleError(err, res);
    }
}

const handleError =  (error: AxiosError, res: Response) => {
    res.status(500).json(
        (error?.response?.status === 404) ?
            {
                message: "Could not find this country"
            } : {
                message: "Unexpected error",
                stack: error,
            }
    );
}
export default { getCountry, getCountries, getAllCountries };