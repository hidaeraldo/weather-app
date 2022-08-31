import React, { useCallback, useEffect, useState } from 'react'
import { getAllCountriesList } from '../actions/countriesListActions';
import { CountriesData } from '../types/types';
import Select from 'react-select';

interface SearchProps {
    handleSelectCountry: (country: CountriesData) => void
}
const Search = ({ handleSelectCountry }: SearchProps) => {
    const [countriesList, setCountriesList] = useState<CountriesData[] | null>(null)
    const [isLoadingCountries, setIsLoadingCountries] = useState(false)

    const handleFetchCountries = () => {
        setIsLoadingCountries(true)
        getAllCountriesList().then(({ data }) => {
            setCountriesList(data.map(({
                name,
                latlng,
                capital,
            }: any) => ({
                name,
                latlng,
                capital,
            })))
            setIsLoadingCountries(false)

        })
    }
    useEffect(() => {
        if (!countriesList && !isLoadingCountries) {
            handleFetchCountries()
        }
    }, [countriesList, isLoadingCountries])

    const mapOptions = (rawOptions: CountriesData[]) => {
        return rawOptions?.map((option) => {
            return ({
                value: option?.name?.common,
                label: option?.name?.common,
                country: option
            })
        });
    };

    return (
        <div>
            <Select
                className={``}
                classNamePrefix='react-select'
                isClearable
                isSearchable
                options={mapOptions(countriesList || [])}
                defaultValue={null}
                onChange={(value: any) => {
                    return handleSelectCountry(value?.country || null);
                }}
                isLoading={isLoadingCountries}
                isDisabled={!countriesList}
                placeholder='Type Country Name...'
            />

        </div>
    )
}
export default Search