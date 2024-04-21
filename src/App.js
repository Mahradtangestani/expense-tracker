import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
          <Balance/>
      </div>
    </div>
  );
}

export default App;
