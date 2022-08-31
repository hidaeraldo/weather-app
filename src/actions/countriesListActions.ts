import { CountriesURL } from "../api/API";
import axios from "axios";

export const getAllCountriesList = () => axios.get(CountriesURL);
