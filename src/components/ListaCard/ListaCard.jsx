import React from 'react'
import { useEffect, useState } from "react";
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import './ListaCard.css';

function ListaCard() {
    //stato per il cambio valore
    const [cocktail, setCocktail] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [errore, setErrore] = useState("");


    useEffect(() => {
        fetchCocktail()
    }, [query]);

    //fetch con API
    const fetchCocktail = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + query)

            .then(risposta => {
                return risposta.json();
            })

            .then(data => {
                setErrore('');
                setCocktail(data.drinks)
            })

            .catch(err => {
                console.errore('ops', err);
                setErrore('Si è verificato un errore: ' + err);
            })

    };

    if (errore.length > 0) {
        return (<h2>{errore}</h2>)
    }

    if (!cocktail) {

        return (<div className="notfound">
            <div>
                <h1>I'm feeling dry</h1>
                <h2>Cocktail not found! Try another one.</h2>
            </div>
            <iframe src="https://embed.lottiefiles.com/animation/62395"></iframe>

        </div>)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <div>
            <Navbar />
            <div className="containerLista">
                <div className="left">
                    <h1>Let's have a great drink!</h1>
                    <form onSubmit={getSearch} className="search-form">
                        <input className="search-bar" type="text" placeholder="Type a name" value={search} onChange={updateSearch} />
                        <button className="search-button" type="submit">Search</button>
                    </form>
                </div>
                <div className="lista">

                    {cocktail.map((item) => (
                        <Card
                            key={item.idDrink}
                            idDrink={item.idDrink}
                            title={item.strDrink}
                            image={item.strDrinkThumb}
                            category={item.strAlcoholic} />

                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaCard;