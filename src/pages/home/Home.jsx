import React from 'react'
import './home.css';


const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <div className="homeContainer">
               <div className="homeItems">
                   <button>Genrate Invoice</button>
                   <button>Stock</button>
                   <button>Customers</button>
                   <button>Reports</button>

               </div>
            </div>
        </div>
    </div>
  )
}

export default Home