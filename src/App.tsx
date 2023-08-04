import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import WeatherPage from './pages/weatherPage/WeatherPage';
import WeatherCityPage from './pages/weatherCityPage/WeatherCityPage';
import NotFound from './pages/notFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<WeatherPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/weather/:city' element={<WeatherCityPage />} />
        <Route path='*' element={<NotFound />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
