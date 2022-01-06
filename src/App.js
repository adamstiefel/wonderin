import './App.css';
import { Component1Collection, NavBar, CategoryCollection } from './ui-components';

function App() {
    
  return (
      <div className='App'>
      <NavBar width={"100vw"}/>

      <div className='Categories'>
        <Component1Collection />   
      </div>
      </div>
      
      
    
  );
  }


export default App;
