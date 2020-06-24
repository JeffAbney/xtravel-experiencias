import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { useHistory } from "react-router-dom";
import texts from '../constants/texts';
import UpsellCard from './UpsellCard';

export default function UpsellWindow(props) {
  const { reservationData, setReservationData, vehicle, price, setPrice, setUpsell, experience } = props;
  const history = useHistory();
  const { language, setLanguage } = useContext(LanguageContext);
  const [addedItems, setAddedItems] = useState({});
  const [newCharge, setNewCharge] = useState(0);

  function getUpsellCharge() {
    let tempCharge = 0;
    Object.values(addedItems).forEach((product) => {
      console.log('upsell window - product', product)
      tempCharge += parseInt(product.price * product.quantity);
    })
    console.log(`tempCharge = ${tempCharge}. new total is ${price + tempCharge}`);
    return tempCharge;
  }

  function handleChangeItem(item) {
    const productName = item.product
    setAddedItems((items) => ({ ...items, [productName]: { quantity: item.quantity, price: item.price } }));
  }

  function handleUpsell() {
    setPrice((oldPrice) => oldPrice += getUpsellCharge());
    setReservationData((data) => ({ ...data, upSells: addedItems }))
    setUpsell(false);
    history.push('/infoDeReserva');
  }

  return (
    <div className="upsell-box" >
      <div className="upsell-text-container">
        <p>{experience.upSellText}</p>
      </div>
      <div className="upsell-cards-container">
        {experience.upSells.map((upsell) => <UpsellCard key={upsell.title} upsell={upsell} language={language} handleChangeItem={handleChangeItem} />)}
        <button className="detail-submit" style={{ marginBottom: 20, marginTop: 20 }} onClick={handleUpsell}>{texts[language]['upsell-0a']}</button>
      </div>

    </ div>
  )
}
