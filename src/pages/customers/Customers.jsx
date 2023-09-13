import React, { useState } from 'react';
import './customers.css';
const Customers = ({ onAddCustomer }) => {

    const [customerName, setCustomerName] = useState('');
  
    const handleNameChange = (e) => {
      setCustomerName(e.target.value);
    };
  
    const handleAddCustomer = () => {
  
      if (customerName.trim() !== '') {
    
        onAddCustomer(customerName);
    
        setCustomerName('');
      }
    };

  return (
    
    <div className="customers">
      <div className="container">
       <div className="addCustomers">
       <div>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={handleNameChange}
      />
      <button onClick={handleAddCustomer}>Add</button>
    </div>
       </div>
      </div>
    </div>
  );
};

export default Customers;