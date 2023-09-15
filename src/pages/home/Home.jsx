import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
       <h1 className='heading'>Compnay Name</h1>
        <div className="container">
         
            <div className="homeContainer">
               <div className="homeItems mt-5">
                <Link to='/invoice' > <button>Genrate Invoice</button></Link>
                  
                 <Link to='/stock' ><button>Stock</button></Link>  
                <Link to='/customers' > <button>Customers</button></Link>  
               <Link to='/report' ><button>Reports</button></Link>    

               </div>
            </div>
        </div>
    </div>
  )
}

export default Home