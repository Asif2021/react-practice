import './App.css';
import store from './Redux/Store'
import {Provider} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Routs from './Components/Routs'


function App() {
  return (  
    <div className="App"> 
    <BrowserRouter>
    <Provider store = {store}>
    <div className='mt-5'>
    <Navbar/>
    <Routs/>
      
    </div>
    </Provider>
    </BrowserRouter>
     </div>
      );
}

export default App;
