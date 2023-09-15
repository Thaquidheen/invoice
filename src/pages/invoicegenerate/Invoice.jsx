import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './inoice.css'
const Invoice = () => {
  return (
    <div className="invoice">
            <div className="wrapper">
               <table className="table ">
    <thead>
        <tr className="firstrow">
            <th className="firstcolumn">
            <input  type="text" />
            </th>
            <th className="secondcolumn">
                <select className="selectcontainer">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr className="secondrow">
            <td className="srfirstcolumn">
                <div className="srcolumn1">
                  Date
                </div>
                <input type="date" />
            </td>
            <td className="srsecondcolumn">
                <div className="srcolumn3">invoice No</div>
                <input type="text" />
            </td>
        </tr>
        <tr className="thirdrow"></tr>

      <tr className='d-flex'>
                    <th className='helo1'>Item</th>
                    <th className='helo1'>Thickness</th>
                    <th className='helo1'>Size</th>
                </tr>
                <tr className='d-flex'>
                    <td className='helo1'>
                        <select >
                            <option className='helo1' value="item1">Item 1</option>
                            <option className='helo1' value="item2">Item 2</option>
                            <option  className='helo1' value="item3">Item 3</option>
                        </select>
                    </td>
                    <td className='helo1'>
                        <select>
                            <option value="thickness1">Thickness 1</option>
                            <option value="thickness2">Thickness 2</option>
                            <option value="thickness3">Thickness 3</option>
                        </select>
                    </td>
                    <td className='helo1'>
                        <select>
                            <option value="size1">Size 1</option>
                            <option value="size2">Size 2</option>
                            <option value="size3">Size 3</option>
                        </select>
                    </td>
                </tr>
                <tr className='d-flex'>
                    <th className='helo1'>Quantity</th>
                    <th className='helo1'>Area(SqFt)</th>
                </tr>
                <tr className="helo2">
                    <td className='helo1'>
                        <input  type="text" />
                    </td>
                    <td className='helo1'>
                        <input  type="text" />
                    </td>
                </tr>
                <tr className="d-flex">
                    <th className='helo1'>Rate</th>
                    <th className='helo1'>Amount</th>
                </tr>
                <tr className="d-flex">
                    <td className='helo1'>
                        <input type="text" />
                    </td>
                    <td className='helo1'>
                        <input type="text" />
                    </td>
                </tr>
    </tbody>
</table>

<button className=''>Generate Invoice</button>

            </div>
  

    </div>
  )
}

export default Invoice