import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { useHistory } from "react-router-dom";
import texts from '../constants/texts';

export default function UpsellWindow(props) {
  const { reservationData, setReservationData, vehicle, price, setPrice, setUpsell } = props;
  const history = useHistory();
  const { language, setLanguage } = useContext(LanguageContext);
  const [addedItems, setAddedItems] = useState([]);
  const [newCharge, setNewCharge] = useState(0);
  const [newReservationData, setNewReservationData] = useState({});

  function handleAddItem(item) {
    setAddedItems((items) => [...addedItems, item]);
  }

  function handleRemoveItem(item) {
    const index = addedItems.indexOf(item);
    const newAddedItems = [...addedItems];
    newAddedItems.splice(index, 1);
    setAddedItems(newAddedItems);
  }

  function handleUpsell() {
    setPrice((price) => price + newCharge);
    setUpsell(false);
    // set new reservation data;
    history.push('/infoDeReserva');

  }

  return (
    <div>
      <p>This is the pop-up up-sell window!</p>
      <button className="upsell-submit" onClick={handleUpsell}>{texts[language]['upsell-0a']}</button>
    </div>
  )
}
