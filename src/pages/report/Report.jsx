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


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, for example, by sending data to a server or performing some other action.
    console.log('Form data submitted:', formData);
  };


  const [selectedDate, setSelectedDate] = useState(null);


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
  
<div className='mt-5'>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Date</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label htmlFor="email">Item</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />
         <label htmlFor="email">Customer</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />


        

        <button type="submit">Show Summary</button>
      </form>
    </div>



     </div>
     
  </div>

  )
}

export default Report