import React, { useState } from "react";
import './App.css';
import Search from "./components/Search";
import BabyNamesData from "./data/BabyNamesData.json";
import Favourites from "./components/Favourites";
import NamePicker from "./components/NamePicker";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [favouriteNames, setFavouriteNames] = useState([]);

  // const moveFromFavourite = (event) => {
  //   let clickedFavouriteName = favouriteNames.filter ((babyName) => babyName.name === event.target.value)
  //   clickedFavouriteName = [...filteredBabyNames, ]
  // }

  return (
    <div>
      <div className="name-container">
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <Favourites
          names={BabyNamesData}
          favouriteNames={favouriteNames}
          setFavouriteNames={setFavouriteNames}
        />
        <NamePicker
          names={BabyNamesData}
          searchValue={searchValue}
          favouriteNames={favouriteNames}
          setFavouriteNames={setFavouriteNames}
        />
      </div>
    </div>
  );
}

export default App;
