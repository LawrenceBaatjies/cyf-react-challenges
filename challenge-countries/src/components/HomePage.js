import React, { useState, useEffect } from "react";
import CountriesData from "./CountriesData";

const HomePage = ({ searchValue, filter }) => {
  const [country, setCountry] = useState([]);
  

    useEffect(() => {
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data);
        });
    }, []);
  
  
  let filteredCountries = country.filter((item) => {
    if (filter === "All") {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.capital.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (item.region === filter) {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.capital.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  });

  return <CountriesData country={filteredCountries} />;
};

export default HomePage;
