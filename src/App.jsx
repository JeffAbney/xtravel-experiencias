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
  const [language, setLanguage] = useState('es'); //set language for build here
  const [reservationData, setReservationData] = useState({});
  const [vehicle, setVehicle] = useState(null);
  const [price, setPrice] = useState(null);
  const [payment_Method, setPayment_Method] = useState('card');


  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div>
          <Switch>
            <Route path="/transporte-para-excursiones" exact render={(props) => <Home {...props} setReservationData={setReservationData} setVehicle={setVehicle} setPrice={setPrice} />} />
            <Route path="/infoDeReserva" exact component={(props) => <PaymentScreen {...props} key={window.location.pathname} reservationData={reservationData} setReservationData={setReservationData} vehicle={vehicle} price={price} setPayment_Method={setPayment_Method} />} />
            <Route path="/thankYou" exact component={(props) => <ThankYou {...props} payment_Method={payment_Method} language={language} />} />
          </Switch>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}
