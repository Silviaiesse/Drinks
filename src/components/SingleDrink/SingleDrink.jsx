import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar';
import './SingleDrink.css';

function SingleDrink({ idDrink }) {

    const [drink, setDrink] = useState([]);
    const [errore, setErrore] = useState("");

    useEffect(() => {
        fetchDrink()
    }, [idDrink]); 

    const fetchDrink = function () {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink)

            .then(response => {
                return response.json();
            })

            //prelievo dei dati
            .then(dati => {
                console.log(dati);
                setErrore('');
                setDrink(dati.drinks[0]);
            })

            //gestione errori
            .catch(err => {
                console.error('ops', err);
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

                    <div className="top">
                        <h1 className="singleTitle">{drink.strDrink}</h1>
                        <h3 className="singleCategory">{drink.strCategory}</h3>
                    </div>
                    <div className="bottom">
                        <ul className="ingrList">
                            {
                                //map degli ingredienti da visualizzare con immagini relative e misure (se non ci sono inserisce "-")
                                ingredients.map(function (indice) {
                                    if (drink['strIngredient' + indice]) {
                                        return (
                                            <div key={indice} >
                                                <li className="ingrediente">

                                                    <div className="overlay">

                                                        <img
                                                            className="imgIngr"
                                                            src={"https://www.thecocktaildb.com/images/ingredients/" + (drink['strIngredient' + indice]) + "-medium.png"}
                                                            alt="ingrediente"
                                                        />
                                                        <h4 className="titoloIngr">{(drink['strIngredient' + indice])}</h4>
                                                        <span className="misure">
                                                            {(drink['strMeasure' + indice]) || '-'}
                                                        </span>

                                                        <div className="aggiungi">
                                                            <div className="imgAggiungi"></div>
                                                        </div>
                                                    </div>

                                                </li>
                                            </div>
                                        )
                                    } else return null;
                                })
                            }
                        </ul>
                        <p className="preparazione">{drink.strInstructionsIT}</p>
                    </div>
                </div>
                <div className="container-right">
                    <img className="imgSingolo" src={drink.strDrinkThumb} />

                </div>
            </div>

        </div>
    );
}

export default SingleDrink;