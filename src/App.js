import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Components/Counter'
import Calculator from './Components/Calculator';
import ColorPicker from './Components/ColorPicker';
import AgeCalculator from './Components/AgeCalculator';
import Display from './Components/Display';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/task1' element={<Counter/>}/>
        <Route path='/task2' element={<Calculator/>}/>
        <Route path='/task3' element={<ColorPicker/>}/>
        <Route path='/task4' element={<AgeCalculator/>}/>
        <Route path='/task5' element={<Display/>}/>
      </Routes>
      </div>
  );
}

export default App;
