import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import "./Home.css";
import type { Country, FilterState } from "../types/country";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [countryDetails, setCountryDetails] = useState<Country[]>([]);
  const [filteredDetails, setfilteredDetails] = useState<FilterState>({
    search: "",
    filter: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async (): Promise<void> => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,region,population,borders,languages,subregion,cca3",
      );
      const Details = await response.json();
      setCountryDetails(Details);
    };
    fetchDetails();
  }, []);

  const handleFilter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    setfilteredDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const filteredCountryDetails = useMemo(() => {
    return countryDetails.filter(
      (country) =>
        country.name.common
          .toLocaleLowerCase()
          .includes(filteredDetails.search.toLocaleLowerCase()) &&
        (filteredDetails.filter === "" ||
          country.region.toLocaleLowerCase() ===
            filteredDetails.filter.toLocaleLowerCase()),
    );
  }, [filteredDetails, countryDetails]);

  return (
    <div className="home__container">
      <div className="home__inputs">
        <div className="input__container">
          <FiSearch className="searchicon" />
          <input
            type="text"
            className="searchinput"
            spellCheck={false}
            name="search"
            placeholder="Search for a country .."
            autoComplete="off"
            onChange={handleFilter}
          />
        </div>
        <div className="dropdown__container">
          <select className="filter" name="filter" onChange={handleFilter}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <FaChevronDown className="dropdownicon" />
        </div>
      </div>
      <div className="countries__grid">
        {filteredCountryDetails.map((country, index) => (
          <div
            key={index}
            className="country__card"
            onClick={() => {
              navigate(`/country/${country.cca3}`);
            }}
          >
            <div className="country__flag">
              <img src={country.flags.svg} alt={country.name.common} />
            </div>
            <div className="country__details">
              <h2 className="country__name">{country.name.common}</h2>
              <p>
                <span className="country__key">Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="country__key">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="country__key">Capital: </span>
                {country.capital[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
