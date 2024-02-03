import React from "react";

const CardPreview = (props) => {
    return (
        <div className="card-preview">

            <div className="card-front">
                <img src="./images/card-logo.svg" alt="card-logo" className="card-logo"/>
                <div className="card-info">
                    <span className="previewNum">{props.num}</span>
                    <div>
                        <span className="previewName">{props.name}</span>
                        <span className="previewDate">{props.month}/{props.year}</span>
                    </div> 
                </div>
            </div>

            <div className="card-back">
                <span>{props.cvc}</span>
            </div>
        </div>
    )
}
export default CardPreview