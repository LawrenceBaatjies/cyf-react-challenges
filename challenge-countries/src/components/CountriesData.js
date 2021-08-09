import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountriesData = ({ country }) => {
  const [countryList, setCountryList] = useState([]);
  
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
      });
  }, []);

  const removeCountry = (numericCode) => {
    const newCountry = countryList.filter((country) => {
      return country.numericCode !== numericCode;
    });
    setCountryList(newCountry);
  };


  return (
    <div className="card-container d-flex flex-wrap flex-row justify-content-center">
      {country.map((country) => {
        const { name, flag, population, region, capital, numericCode } =
          country;
        return (
          <div className="card border-0" key={name}>
            <img className="card-img-top" src={flag} alt="Country Flag" />
            <div className="card-body" key={numericCode}>
              <h5 className="card-title">{name}</h5>
              <p>
                <strong>Population: </strong>
                <span>{population}</span>
              </p>
              <p>
                <strong>Region: </strong>
                <span>{region}</span>
              </p>
              <p>
                <strong>Capital: </strong>
                <span>{capital}</span>
              </p>
              <div className="buttons">
                <Link to={`/countries/${name}`} className="btns">
                  Learn More
                </Link>
                <button
                  className="btns"
                  onClick={() => removeCountry(numericCode)}
                >
                  Remove Country
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesData;
