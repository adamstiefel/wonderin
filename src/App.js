import './App.css';
import { Component1Collection, NavBar,  } from './ui-components';

function App() {
  return (
      <div className='App'>
      <NavBar width={"100vw"}/>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
     }}>
        <Component1Collection />   
      </div>
      </div>
      
      
    
  );
}

export default App;
