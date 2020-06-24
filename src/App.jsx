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
import ExperiencePage from './pages/ExperiencePage';

export default function App() {
  const [language, setLanguage] = useState('es'); //set language for build here
  const [reservationData, setReservationData] = useState({});
  const [vehicle, setVehicle] = useState(null);
  const [price, setPrice] = useState(null);
  const [payment_Method, setPayment_Method] = useState('card');
  const [experience, setExperience] = useState(null)


  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <Switch>
          {/* path for ES app   experiencias || path for EN app   experiences */}
          <Route path="/experiencias" exact render={(props) => <Home {...props} reservationData={reservationData} setReservationData={setReservationData} price={price} setPrice={setPrice} setExperience={setExperience} />} />
          <Route path="/experiencia" exact render={(props) => <ExperiencePage {...props} reservationData={reservationData} setReservationData={setReservationData} price={price} setPrice={setPrice} experience={experience} />} />
          <Route path="/infoDeReserva" exact component={(props) => <PaymentScreen {...props} key={window.location.pathname} reservationData={reservationData} setReservationData={setReservationData} vehicle={vehicle} price={price} setPayment_Method={setPayment_Method} />} />
          <Route path="/thankYou" exact component={(props) => <ThankYou {...props} payment_Method={payment_Method} language={language} />} />
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
}
