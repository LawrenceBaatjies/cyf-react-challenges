import { useState } from "react";
import "./styleSheets/App.css";
import "./styleSheets/country.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountriesData from "./data/countriesAll.json";

//Components
import Header from "./components/Header";
import FilterInputs from "./components/FilterInputs";
import CountryPage from "./components/CountryPage";
import HomePage from "./components/HomePage";


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("All");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Router>
        <Header />
        <Route exact path="/">
          <FilterInputs
            data={CountriesData}
            searchValue={searchValue}
            handleSearch={handleSearch}
            handleFilter={handleFilter}
          />
          <HomePage
            searchValue={searchValue}
            filter={filter}
          />
       </Route>
       <Route path="/countries/:name" children={<CountryPage />}></Route>
    </Router>
  );
}

export default App;
