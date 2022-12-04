import './App.css';
import Header from './components/Header'
import Tabs from './components/Tabs'
import Cards from './components/Cards'
import userData from './data/userData';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs />
      <Cards userData={userData} />
    </div>
  );
}

export default App;
