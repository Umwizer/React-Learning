
import './App.css';
import Navbar from './Navbar';
import Home from './Home'
function App(){
  const title = 'Welcome to New Blog';
  const likes = 50;
  const linm ="http://www.google.com";
  return(
    <div className="App">
      <Navbar/>
      <div class="content"> 
       <Home/>
      </div>
    </div>
  );
}
export default App;