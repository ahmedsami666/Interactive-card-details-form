import React from "react";

const Complete = (props) => {
    const handleClick = () => {
        /**
         * return valid object to initial state
         */
        props.setValid(() => {
            return (
                {
                    name: null,
                    num: null,
                    month: null,
                    year: null,
                    cvc: null
                }
            )
        })
        /*
        * return each input to its initial state
        */
        props.setNum(() => {
            return "0000 0000 0000 0000"
        })
        props.setName(() => {
            return "Jane Appleseed"
        })
        props.setMonth(() => {
            return "00"
        })
        props.setYear(() => {
            return "00"
        })
        props.setCVC(() => {
            return "000"
        })
        /**
         * return register value to false to render register page
         */
        props.setIsRegistered(() => {
            return ! props.isRegistered
        })

    }
    return (
        <div className="complete">
            <img src="./images/icon-complete.svg" alt="complete"/>
            <h1>
                THANK YOU!
            </h1>
            <p>
                We've added your card details
            </p>
            <button onClick={handleClick}>Continue</button>
        </div>
    )
}

export default Complete