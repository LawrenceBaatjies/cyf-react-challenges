import React from 'react';
import BabyNamesList from "./BabyNamesList";

const NamePicker = ({ names, searchValue, favouriteNames, setFavouriteNames }) => {

  const filteredBabyNames = names
    .sort((previousName, currentName) => previousName.name.localeCompare(currentName.name))
    .filter(baby => baby.name.toUpperCase().includes(searchValue.toUpperCase()))
    .filter((baby) => !favouriteNames.includes(baby.id));

  const moveToFavourite = (id) => {
    setFavouriteNames([...favouriteNames, id])
    console.log("clicked", id)
  }

  return (
    <BabyNamesList
      nameList={filteredBabyNames}
      onItemClick={moveToFavourite}
    />
  )
}

export default NamePicker
