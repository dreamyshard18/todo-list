import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Task from './components/Task';
import About from './components/About';
import Navbar from './components/Navbar';
  

const App=()=>{
return(
 <BrowserRouter>
 
  <div className="App">
    <Navbar />
    
     <h1 className='todo'>✨My To-Do List in a new branch💫</h1>
    <main>
      <Routes>
        <Route className="home" path="/" element={<Task />} />
        <Route className="about" path="/About" element={<About />} />
      </Routes>
    </main>
  </div>
  </BrowserRouter>

)
}

export default App;