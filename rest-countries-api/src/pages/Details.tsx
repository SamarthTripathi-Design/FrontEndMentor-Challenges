import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Country } from "../types/country";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./Details.css";

function Details() {
  const { cca3 } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((error) => console.log(error));
  }, [cca3]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="details__container">
      <button
        className="back"
        onClick={() => {
          navigate("/");
        }}
      >
        <IoMdArrowRoundBack className="backicon" />
        <span>Back</span>
      </button>
      <div className="details__info">
        <div className="details__flag">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>
        <div className="details__content">
          <div className="detail__top">
            <h1>{country?.name.common}</h1>
          </div>
          <div className="detail__left">
            <p>
              <span className="country__key">Native Name: </span>
              {Object.values(country.name.nativeName)[0].common}
            </p>
            <p>
              <span className="country__key">Population: </span>
              {country?.population.toLocaleString()}
            </p>
            <p>
              <span className="country__key">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="country__key">Sub Region: </span>
              {country.subregion}
            </p>
            <p>
              <span className="country__key">Capital: </span>
              {country.capital.join(",")}
            </p>
          </div>
          <div className="detail__right">
            <p>
              <span className="country__key">Capital: </span>
              {country.capital.join(",")}
            </p>
            <p>
              <span className="country__key">Currencies: </span>
              {Object.values(country.currencies)[0].name}
            </p>
            <p>
              <span className="country__key">Languages: </span>
              {Object.values(country.languages).join(",")}
            </p>
          </div>
          <div className="detail__bottom">
            <span className="country__key">Border Countries: </span>

            <div className="border_container">
              {country?.borders &&
                country.borders.map((val) => (
                  <button onClick={() => navigate(`/country/${val}`)}>
                    {val}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
