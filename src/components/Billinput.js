
import React from 'react';

const Billinput = (
  {bill,onSetBill}
) => {
  
  return (
    <div>
      <label>How much was the bill</label>
      <input type="text"
      placeholder="Billvalue"
      value={bill}
      onChange={(e)=> onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

export default Billinput;
