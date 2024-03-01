import Home from './pages/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
