import * as React from 'react';
import './Card.css'
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, category, idDrink }) => {

    const navigazione = useNavigate();

    return (

        <div sx={{ minWidth: 275 }}
        >
            <div className="containerCard" onClick={function () {
                navigazione("/drinks/" + idDrink);
            }}>
                <h4 className="Alcohol">{category}</h4>
                <h2 className="title-hover">{title} &#8611;</h2>
                <div className="imgDrink">
                    <h2 className="title">{title}</h2>
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    );
}

export default Card;