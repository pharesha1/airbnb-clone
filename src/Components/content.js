import React from "react";
import Card from "./card";
import Data from './data';

const Content = () => {
    const Cards = Data.map(card => 
        <Card
        key = {card.key}
        card = {card}
        />);

    return(
        <div className="content">
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
            <div className="cards" id="container">
                {Cards}
            </div>
        </div>
    );

    function scroll(id1,id2,containerId) {
        const button = document.getElementById(id1);
        button.onclick = function () {
            const container = document.getElementById(containerId);
            sideScroll(container, 'right', 100);
        };

        const back = document.getElementById(id2);
        back.onclick = function () {
            const container = document.getElementById(containerId);
            sideScroll(container, 'left', 100);
        };

        function sideScroll(element, direction, step) {
            if (direction == 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
        }
    }
}

export default Content;