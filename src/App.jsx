import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { LanguageContext } from './components/LanguageContext';

import Home from './pages/Home';
import './App.css';
import PaymentScreen from './pages/PaymentScreen';
import ThankYou from './pages/ThankYou';

export default function App() {
  const [reservationData, setReservationData] = useState({});
  const [vehicle, setVehicle] = useState(null);
  const [price, setPrice] = useState(null);
  const [language, setLanguage] = useState('es'); //set language for build here

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} setReservationData={setReservationData} setVehicle={setVehicle} setPrice={setPrice} />} />
            <Route path="/infoDeReserva" exact component={(props) => <PaymentScreen {...props} key={window.location.pathname} reservationData={reservationData} setReservationData={setReservationData} vehicle={vehicle} price={price} />} />
            <Route path="/thankYou" exact component={(props) => <ThankYou {...props} />} />
          </Switch>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}
