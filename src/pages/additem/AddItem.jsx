import React, { useState } from 'react'
import './additem.css';
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'ItemName', headerName: 'ItemName', width: 130 },
    { field: 'Thickness', headerName: 'Thickness', width: 130  , type: 'number' },
    { field: 'size', headerName: 'Size', width: 130  , type: 'number' },
  ];
  
  const rows = [
    { id: 1, ItemName: 'Porcelain', Thickness: 5, size: 35 },
    { id: 2, ItemName: 'Vitrified', Thickness: 6, size: 42 },
    { id: 3, ItemName: 'Onyx', Thickness: 7, size: 45 },
    { id: 4, ItemName: 'Granite Tile.', Thickness: 8, size: 16 },
    { id: 5, ItemName: 'Targaryen', Thickness:9, size: 8 },
    { id: 6, ItemName: 'Marble Tile.', Thickness: 10, size: 150 },
    { id: 7, ItemName: 'Glass Tile.', Thickness: 11, size: 44 },
  ];

const AddItem = () => {

    const [itemData, setItemData] = useState({
        item_name: '',
        item_thickness: '',
        item_size: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemData({
          ...itemData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send the data to your API or perform any other actions.
        console.log(itemData);
      };
  return (

      <div className="addItems2">
      <div className="container">
        <div className="itemContainer1">
        <div className="addItems">
          <h1>Add Item</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="item_name">Item Name:</label>
            <input
              type="text"
              id="item_name"
              name="item_name"
              value={itemData.item_name}
              onChange={handleInputChange}
              required
            /><br /><br />

            <label htmlFor="item_thickness">Item Thickness (in cm):</label>
            <input
              type="number"
              id="item_thickness"
              name="item_thickness"
              step="0.01"
              value={itemData.item_thickness}
              onChange={handleInputChange}
              required
            /><br /><br />

            <label htmlFor="item_size">Item Size (in inches):</label>
            <input
              type="number"
              id="item_size"
              name="item_size"
              step="0.01"
              value={itemData.item_size}
              onChange={handleInputChange}
              required
            /><br /><br />

            <input type="submit" value="Add Item" />
          </form>
        </div>
        <h1 className='mt-5 headingstock'>All Items</h1>
        <div className="itemtable">
             <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
          </div>

        </div>
    
       
       
        
      </div>
    </div>
 
  )
}

export default AddItem