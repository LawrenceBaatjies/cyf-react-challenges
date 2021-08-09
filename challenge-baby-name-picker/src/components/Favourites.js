import React from 'react';
import BabyNamesList from "./BabyNamesList"

const Favourites = ({ names, favouriteNames, setFavouriteNames }) => {
    const favouriteNamesList = names.filter(babyName => favouriteNames.includes(babyName.id))

    const removeFromFavourites = (id) => {
        setFavouriteNames(favouriteNames.filter((item) => item !== id))
    }

    const hasName = favouriteNames.length > 0;

    return (
        <>
            <div className="favourites-container">
                <h3>{hasName ? "Your ShortList" : "Click on a name to shortlist it"}</h3>
                {hasName && (
                    <BabyNamesList
                        nameList={favouriteNamesList}
                        onItemClick={removeFromFavourites}
                    />
                )}
            </div>
        </>
    )
}

export default Favourites;