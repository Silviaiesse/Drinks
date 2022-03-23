import React from 'react';
import SingleDrink from '../components/SingleDrink/SingleDrink';
import { useParams } from "react-router-dom";


function Drink() {

    const params = useParams();

    return (
        <SingleDrink
            idDrink={params.idDrink}
        />
    );
}

export default Drink;