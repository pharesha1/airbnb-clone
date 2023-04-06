import React from "react";
import star from "../Images/star.png";

export default function card({card}){
    
    let badgeText;

    if(card.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(card.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={card.image} className="card-photo" alt="card"/>
                <div className="mini-icons">
                    <img src={star} className="star" alt="star"/>
                    <span className="rating">{card.review}/5.0</span>
                    <span className="views">({card.views}) {card.location}</span>
                </div>
            <p>{card.title}</p>
            <p><span className="bold">From {card.price}$</span>/person</p>
        </div>
    );
}