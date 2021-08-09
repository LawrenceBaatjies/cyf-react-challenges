import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styleSheets/country.css";

const CountryPage = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      });
  }, [country, name]);

  return (
    <>
      <section className="country">
        <Link to="/" className="btns btns-light">
          <i className="fas fa-arrow-left"></i>{" "}Back Home
        </Link>
        {country.map((item) => {
          const {
            name,
            flag,
            nativeName,
            population,
            region,
            subregion,
            numericCode,
            capital,
            currencies,
            languages,
            topLevelDomain,
            borders,
          } = item;

          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>

              <div className="country-details-main">
                <div className="country-details">
                <div className="details1">
                  <h2>{name}</h2>
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                </div>

                <div className="details2">
                  <h5>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h5>
                  <h5>
                    Currencies: <span>{currencies[0].name}</span>
                  </h5>
                  <h5>
                    Languages: <span>{languages[0].name}</span>
                  </h5>
                </div>
                </div>

                <div>
                  <h3>Border Countries: </h3>
                  <div className="borders">
                    {borders.map((border) => (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default CountryPage;
