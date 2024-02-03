import React from "react";

const CardDetails = (props) => {   
    /** 
     * handle change for each input by: 
     * making sure it is not empty 
     * if it have value than set its value as true in "valid object"
     */
    const handleNum = (e) => {
        var inputNum = e.target.value;
        props.setNum(() => {
            if (inputNum.length === 0) {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        num: false
                    }
                })
                return "0000 0000 0000 0000"
            } else {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        num: true
                    }
                })
                return inputNum
            }
        })
    }
    const handleName = (e) => {
        var inputName = e.target.value;
        props.setName(() => {
            if (inputName.length === 0){
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        name: false
                    }
                })
                return "Jane Appleseed"
            } else {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        name: true
                    }
                })
                return inputName
            }
        })
    }
    const handleMonth = (e) => {
        var inputMonth = e.target.value;
        props.setMonth(() => {
            if (inputMonth.length === 0) {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        month: false
                    }
                })
                return "00"
            } else {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        month: true
                    }
                })
                return inputMonth
            }
        })
    }
    const handleYear = (e) => {
        var inputYear = e.target.value;
        props.setYear(() => {
            if (inputYear.length === 0) {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        year: false
                    }
                })
                return "00"
            } else {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        year: true
                    }
                })
                return inputYear
            }
        })
    }
    const handleCVC = (e) => {
        var inputCVC = e.target.value;
        props.setCVC(() => {
            if (inputCVC.length === 0) {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        cvc: false
                    }
                })
                return "000"
            } else {
                props.setValid((oldValue) => {
                    return {
                        ...oldValue,
                        cvc: true
                    }
                })
                return inputCVC
            }
        })
    }

    const handleClick = () => {
        /**define each error massage for each element */
        const nameErrorItem = document.getElementsByClassName("error-name")[0]
        const numErrorItem = document.getElementsByClassName("error-num")[0]
        const monthErrorItem = document.getElementsByClassName("error-month")[0]
        const yearErrorItem = document.getElementsByClassName("error-year")[0]
        const cvcErrorItem = document.getElementsByClassName("error-cvc")[0]  
        /** define border for each elememt */
        const nameBorder = document.getElementsByClassName("name-border")[0]
        const numBorder = document.getElementsByClassName("num-border")[0]
        const monthBorder = document.getElementsByClassName("month-border")[0]
        const yearBorder = document.getElementsByClassName("year-border")[0]
        const cvcBorder = document.getElementsByClassName("cvc-border")[0]

        /**handle empty error */
        if (props.valid.name === true) {
            nameErrorItem.style.display = "none"
            nameBorder.classList.remove("error-border")
        } else {
            nameErrorItem.style.display = "unset"
            nameBorder.classList.add("error-border")
        }
        if (props.valid.num === true) {
            numErrorItem.style.display = "none"
            numBorder.classList.remove("error-border")
        } else {
            numErrorItem.style.display = "unset"
            numBorder.classList.add("error-border")
        }
        if (props.valid.month === true) {
            monthErrorItem.style.display = "none"
            monthBorder.classList.remove("error-border")
        } else {
            monthErrorItem.style.display = "unset"
            monthBorder.classList.add("error-border")
        }
        if (props.valid.year === true) {
            yearErrorItem.style.display = "none"
            yearBorder.classList.remove("error-border")
        } else {
            yearErrorItem.style.display = "unset"
            yearBorder.classList.add("error-border")
        }
        if (props.valid.cvc === true) {
            cvcErrorItem.style.display = "none"
            cvcBorder.classList.remove("error-border")
        } else {
            cvcErrorItem.style.display = "unset"
            cvcBorder.classList.add("error-border")
        }

        /**making sure all data are valid to be submitted */
        if (
            props.valid.name === true &&
            props.valid.num === true &&
            props.valid.month === true &&
            props.valid.year === true &&
            props.valid.cvc === true
            ){
            props.setIsRegistered(() => {
                return ! props.isRegistered
            })
        }
    }
    
    return (
        <div className="card-details">
          <div className="input-data">
            <span className="label">Cardholder Name</span>
            <input type="text" placeholder="e.g. Jane Appleseed" maxLength={16} onChange={handleName} className="name-border"></input>
            <span className="error error-name">Can't be blank</span>
          </div>

          <div className="input-data">
            <span>Card Number</span>
            <input type="text" maxLength={16} placeholder="e.g. 1234 5678 9123 0000" onChange={handleNum} className="num-border"></input>
            <span className="error error-num">Can't be blank</span>
          </div>

          <div className="card-verification">
            <span>Exp. Date (MM/YY)</span>
            <span>CVC</span>
            <div className="date">
                <input type="text" placeholder="MM" maxLength={2} onChange={handleMonth} className="month-border"></input>
                <input type="text" placeholder="YY" maxLength={2} onChange={handleYear} className="year-border"></input>
                <span className="error error-month"> Can't be blank</span>
                <span className="error error-year"> Can't be blank</span>
            </div>
            <div>
                <input type="text" placeholder="e.g. 123" maxLength={3} onChange={handleCVC} className="cvc-border"></input>
                <span className="error error-cvc"> Can't be blank</span>
            </div>
          </div>
          <button onClick={handleClick}>Confirm</button>
        </div>
    )
}
export default CardDetails