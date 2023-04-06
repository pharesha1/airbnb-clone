import React from "react";
import Card from "./card";
import Data from './data';

const Content = () => {
    const Cards = Data.map(card => 
        <Card
        key = {card.id}
        card = {card}
        />);
        
    window.onload = function(){
        scroll();
    };
    return(
        <div className="content">
            <div className="cards" id="container">
                {Cards}
            </div>
            <div className="left-slide-div">
                    <button id="slideBack" className="slide-button">
                        {'<'}
                    </button>
                </div>

                <div className="right-slide-div">
                    <button id="slide" className="slide-button">
                        {'>'}
                    </button>
                </div>
        </div>
    );
}

function scroll(){
    const button = document.getElementById("slide");
        button.onclick = function () {
            const container = document.getElementById("container");
            sideScroll(container, 'right', 150);
        };

        const back = document.getElementById("slideBack");
        back.onclick = function () {
            const container = document.getElementById("container");
            sideScroll(container, 'left', 150);
        };

        function sideScroll(element, direction, step) {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
        }
}

export default Content;