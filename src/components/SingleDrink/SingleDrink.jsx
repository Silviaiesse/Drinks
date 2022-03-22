import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from "react";
import './SingleDrink.css';

function SingleDrink({ idDrink }) {

    const [drink, setDrink] = useState([]);
    const [errore, setErrore] = useState("");

    useEffect(() => {
        fetchDrink()
    }, [idDrink]);

    const fetchDrink = function () {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink)

            .then(risposta => {
                return risposta.json();
            })

            //prelievo dei dati
            .then(dati => {
                setErrore('');
                setDrink(dati.drinks[0]);
            })

            //gestione errori
            .catch(err => {
                console.errore('ops', err);
                setErrore('Si è verificato un errore: ' + err);
            })
    };

    if (errore.length > 0) {
        return (<h2>{errore}</h2>)
    }

    if (!drink) {

        return (<div className="notfound">
            <div>
                <h1>I'm feeling dry</h1>
                <h2>Cocktail not found! Try another one.</h2>
            </div>
            <iframe src="https://embed.lottiefiles.com/animation/62395"></iframe>

        </div>)
    }

    //array per gestione degli ingredienti
    const ingredients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <div>
            <Navbar />
            <div className="container-general">
                <div className="container-left">
                    <h1 className="nomeSingolo">{drink.strDrink}</h1>
                    <h3 className="categoriaSingolo">{drink.strCategory}</h3>
                </div>
                <div className="container-right">
                    <img className="imgSingolo" src={drink.strDrinkThumb} />

                </div>
            </div>

        </div>
    );
}

export default SingleDrink;