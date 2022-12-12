import './App.css';
import Formulario from './components/Formulario';
import NavBar from './components/NavBar';
import TablaConceptos from './components/TablaConceptos';
import TablaResumen from './components/TablaResumen';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/context';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <header className="App-header">
            <Formulario />
            <NavBar />
          </header>
          <main>
            <table className="tabla-container">
              <Routes>
                <Route path='/' element={ <TablaResumen />}/>
                <Route path='/tablaConceptos/:tipoConcepto' element={ <TablaConceptos />}/>       
              </Routes>
            </table>
          </main>
        </div>
      </CartProvider>
      <footer>
        <p className='footer-text'>Created by Chiky ©</p>
      </footer>    
    </BrowserRouter>
  );
}

export default App;