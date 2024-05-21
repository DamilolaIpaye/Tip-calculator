import './App.css';
import './index.css';
import React, { useState } from 'react';
import Billinput from './components/Billinput';
import Selectpercentage from './components/Selectpercentage';
import Output from './components/Output';
import Reset from './components/Reset';

// function Tipcalculator() {
//   const[bill, setBill]= useState("");
//   const[percentage1, Setpercentage1]= useState(0);
//   const[percentage2, Setpercentage2]= useState(0);  
//   const tip = bill  *((percentage1 + percentage2) /2/2)}
// function handleReset() {
//   setBill ("");
//   Setpercentage1(0);
//   Setpercentage2(0);
// }
 
function App() {
    const [bill, setBill]= useState("");
  const [percentage1, setPercentage1]= useState(0);
  const [percentage2, setPercentage2]= useState(0); 

  const tip = (bill  *(percentage1 + percentage2)) /100;

  function handleReset() {
      setBill ("");
      setPercentage1(0);
      setPercentage2(0);
    }
     
  return (

    <>
      <Billinput 
      bill={bill} onSetBill={setBill}
      />

      <Selectpercentage 
      percentage={percentage1} onSelect={setPercentage1}
      >How did you like the service?</Selectpercentage>

      <Selectpercentage 
      percentage={percentage2} onSelect={setPercentage2}
      >How did your friend like the service</Selectpercentage>

      {
        bill > 0 && <><Output 
        bill={bill} tip={tip}
        />
        <Reset 
        onReset={handleReset}
        />
        </>
      }
    </>
  );
}

export default App;