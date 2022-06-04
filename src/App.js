import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import Header from './component/header/Header';
import Footer from './component/footer/Footer';

import { BrowserRouter, Route } from 'react-router-dom';

import Routess  from './config/Routes';

function App() {
  return (
    <BrowserRouter>
                    <Header/>
                    <Routess/>
                    <Footer/>
    </BrowserRouter>
  );
}

export default App;
