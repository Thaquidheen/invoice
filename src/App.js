
import './App.css';
import AddItem from './pages/additem/AddItem';
import Customers from './pages/customers/Customers';
import Home from './pages/home/Home';
import Invoice from './pages/invoicegenerate/Invoice';
import Login from './pages/login/Login';
import Report from './pages/report/Report';
import Stock from './pages/stock/Stock';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/additem' element={<AddItem/>}/>
     <Route path='/customers' element={< Customers />}/>
     <Route path='/invoice' element={<Invoice/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/report' element={<Report/>}/>
     <Route path='/stock' element={<Stock/>}/>
    </Routes>
 </BrowserRouter>
  );
}

export default App;
