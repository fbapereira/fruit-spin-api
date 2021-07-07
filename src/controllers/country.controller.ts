import axios, { AxiosResponse, AxiosError } from 'axios';
import { Request, Response } from 'express';

import { appConfig } from '../configs/app.config';
import { Country } from "../models/country.model";

const getCountry = async ({ params: { countryName } }: Request, res: Response) => {
    try {
        const result: AxiosResponse = await axios.get(`${ appConfig.url }/name/${countryName}?fullText=true`);
        const country: Country = result.data[0];
        res.status(200).json(country);
    } catch (err) {
        handleError(err, res);
    }
}

const getCountries = async ({ params: { countryName } }: Request, res: Response) => {
    try {
        const result: AxiosResponse = await axios.get(`${ appConfig.url }/name/${countryName}`);
        const country: Country[] = result.data;
        res.status(200).json(country);
    } catch (err) {
        handleError(err, res);
    }
}

const getAllCountries = async (req: Request, res: Response) => {
    try {
        const result: AxiosResponse = await axios.get(`${ appConfig.url }/all`);
        const country: Country[] = result.data;
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