import React, { useState } from 'react'
import './report.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Report = () => {
  const [isDateRangeVisible, setDateRangeVisible] = useState(false);
  const handleDateRangeToggle = () => {
    setDateRangeVisible(!isDateRangeVisible);
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className="reportcontainer">
       <h1 className='heading shadow'>Reports</h1>
     <div className="reportContainer">
     
     <button onClick={handleDateRangeToggle}>Select Date</button>
        
        {isDateRangeVisible && (
          <div className="borders">
            <DateRange
              className='datesize'
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
 </div>
 )}
   
   <div class="dropdown">
  <button class="dropbtn">Select Item</button>
  <div class="dropdown-content">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
  </div>
</div>

   
<div class="dropdown">
  <button class="dropbtn">Select Customer</button>
  <div class="dropdown-content">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
  </div>
</div>

     </div>
  </div>

  )
}

export default Report