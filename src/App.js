import React from "react"
import CardPreview from "./components/CardPreview";
import CardDetails from "./components/CardDetails";
import CopyRights from "./components/CopyRights";
import Complete from "./components/Complete";

function App() {
  const [num, setNum] = React.useState("0000 0000 0000 0000");
  const [name, setName] = React.useState("Jane Appleseed")
  const [month, setMonth] = React.useState("00")
  const [year, setYear] = React.useState("00")
  const [cvc, setCVC] = React.useState("000")
  const [isRegistered, setIsRegistered] = React.useState(false)
  const [valid, setValid] = React.useState({
    name: null,
    num: null,
    month: null,
    year: null,
    cvc: null
  })
  return (
    <div>
      <div className="main">
        <CardPreview  
        num={num}
        name={name}
        month={month}
        year={year}
        cvc={cvc}
        />
        {isRegistered ? 
        <Complete 
        isRegistered={isRegistered}
        setIsRegistered={setIsRegistered}
        valid={valid}
        setValid={setValid}
        setNum={setNum} 
        setName={setName}
        setMonth={setMonth}
        setYear={setYear}
        setCVC={setCVC}
        /> :
        <CardDetails 
        setNum={setNum} 
        setName={setName}
        setMonth={setMonth}
        setYear={setYear}
        setCVC={setCVC}
        setIsRegistered={setIsRegistered}
        setValid={setValid}
        num={num}
        name={name}
        cvc={cvc}
        isRegistered={isRegistered}
        valid={valid}
        />
        }
      </div>
      <CopyRights />
    </div>
  );
}

export default App;
