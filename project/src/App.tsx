import {Routes, Route} from 'react-router-dom'
import { AboutUsPage, HomePage, ServicesPage } from './App/pages';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
