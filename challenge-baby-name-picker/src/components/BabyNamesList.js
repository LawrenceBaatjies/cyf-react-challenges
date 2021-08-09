import React from 'react';

const BabyNamesList = ({ nameList, onItemClick }) => {
    return (
        <ul>
            {nameList.map((babyName) => (
                <li
                    className={babyName.sex}
                    key={babyName.id}>
                    <button
                        onClick={() => onItemClick(babyName.id)}
                    >
                        {babyName.name}
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default BabyNamesList;
