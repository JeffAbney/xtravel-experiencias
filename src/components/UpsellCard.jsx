import React from 'react';
import texts from '../constants/texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function UpsellCard(props) {
  const { upsell, language, handleChangeItem } = props;
  const { title, price, image, } = upsell
  const text = texts[language].experiences;
  const [productQuantity, setProductQuantity] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0)

  function addPerson(oldProductQuantity) {
    setProductQuantity(num => num + 1);
    setPriceTotal((parseInt(price) * (oldProductQuantity + 1)).toLocaleString('en-US'));
    handleChangeItem({ product: title, quantity: oldProductQuantity + 1, price: price });
  }

  function removePerson(oldProductQuantity) {
    if (productQuantity > 0) {
      setProductQuantity(num => num - 1);
      setPriceTotal((parseInt(price) * (oldProductQuantity - 1)).toLocaleString('en-US'));
      handleChangeItem({ product: title, quantity: oldProductQuantity - 1, price: price });
    } else {
      return null
    }
  }

  return (
    <div className="upsell-card">
      <div className="upsell-image-container">
        <img src={image} className="image-full upsell-image" />
      </div>
      <div style={{ paddingLeft: 10, paddingRight: 10, width: '100%' }}>
        <h1>{title}</h1>
        <p>${price.toLocaleString('en-US')} {text.perPerson}</p>
        <p>{text.numberOfPeople}: </p>
        <div className="row people-counter" style={{ marginBottom: 5, width: '100%' }}>
          <FontAwesomeIcon onClick={() => removePerson(productQuantity)} className="details-icon" icon={faMinusCircle} />
          <p style={{ padding: 10 }}>{productQuantity}</p>
          <FontAwesomeIcon onClick={() => addPerson(productQuantity)} className="details-icon" icon={faPlusCircle} />
        </div>
      </div>
    </div >
  )
}