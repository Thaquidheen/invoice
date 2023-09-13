import React from 'react'
import './stock.css';
const Stock = () => {
  return (
    <div className="stock">
        <div className="container">
            <div className="">
                <div className="stockItems">
                    <h1 className='text-center headingstock shadow'>Add Item</h1>
                    <div className="addItems">
                    <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Thickness</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Damage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td >
                      <input type="text" name="item" placeholder="Item" />
                    </td>
                    <td >
                      <input type="text" name="thickness" placeholder="Thickness" />
                    </td>
                    <td >
                      <input type="text" name="size" placeholder="Size" />
                    </td>
                    <td>
                      <input type="text" name="quantity" placeholder="Quantity" />
                    </td>
                    <td>
                      <input type="text" name="damage" placeholder="Damage" />
                    </td>
                  </tr>
          
                </tbody>
              </table>
              <button >Add Item</button>
                    </div>
                  
                    <div className="addtoStock">
                    <h1 className='text-center mt-5 headingstock shadow'>Add To Stock</h1>
                    <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Thickness</th>
                    <th>Size</th>
              
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td >
                      <input type="text" name="item" placeholder="Item" />
                    </td>
                    <td >
                      <input type="text" name="thickness" placeholder="Thickness" />
                    </td>
                    <td >
                      <input type="text" name="size" placeholder="Size" />
                    </td>
                  </tr>
          
                </tbody>
              </table>
              <button>Add to stock</button>
                    </div>
              
                  <div className="showavailablestock">
                  <h1 className='text-center mt-5 headingstock shadow'>Show Available Stock</h1>
                  <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Thickness</th>
                    <th>Size</th>
                    <th>Available Qty</th>
                    <th>Damage if any</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td >
                      <input type="text" name="item" placeholder="Item" />
                    </td>
                    <td >
                      <input type="text" name="thickness" placeholder="Thickness" />
                    </td>
                    <td >
                      <input type="text" name="size" placeholder="Size" />
                    </td>
                    <td>
                    <select name="quantity" >
                          <option value="">Select Quantity</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        
                        </select>
                    </td>
                    <td>
                      <input type="text" name="damage" placeholder="Damage" />
                    </td>
                  </tr>
          
                </tbody>
              </table>
              <button >Show Available Stock</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stock