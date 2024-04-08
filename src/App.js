
import './App.css';
import Data from './components/Data';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <SideBar />
        <Data />
      </div>
    </>
  );
}

export default App;
