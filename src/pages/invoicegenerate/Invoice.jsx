import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './inoice.css'
const Invoice = () => {
  return (
    <div className="invoice">
        <div className="container ">
            <div className="wrapper">
                <div className="table">
                    <div className="firstrow">
                        <div className="firstcolumn ">Customer Name</div>
                        <div className="secondcolumn">
                <select className='selectcontainer'>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
                    </div>
                    <div className="secondrow">
                        <div className="srfirstcolumn">
                            <div className="srcolumn1">
                                <span>Date</span>
                            </div>
                            <div className="srcolumn2">
                                <input type="text" />
                            </div>
                        </div>
                        <div className="srsecondcolumn">
                        <div className="srcolumn3">
                            invoice No
                        </div>
                            <div className="srcolumn4">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="thirdrow">

                    </div>
                    <div className="fourthrow">
                        <div className="frfirst"><span>Item</span></div>
                        <div className="frsecond"><span>Thickness</span></div>
                        <div className="frthird"><span>Size</span></div>
                        <div className="frfourth"><span>Quantity</span></div>
                        <div className="frfifth"><span>Area(SqFt)</span></div>
                        <div className="frsixth"><span>Rate</span></div>
                        <div className="frseventh"><span>Amount</span></div>

                    </div>
                </div>
            </div>
 
        </div>
    </div>
  )
}

export default Invoice