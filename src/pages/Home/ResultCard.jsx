import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes, {
  number,
  shape,
  string,
} from 'prop-types';
import texts from '../../constants/texts'

require('dotenv').config();

const ResultCard = (props) => {
  const { id, experience, setPrice, setUpsell, language } = props;
  const { title, city, state, description, image, price } = experience;
  const text = texts[language].experiences;
  const history = useHistory();

  function selectExperience() {
    setUpsell(true);
    setPrice(price);
  }

  return (
    <div className="result-card" onClick={() => selectExperience()} id={id}>
      <div className="result-image-container">
        <img className="result-image" src={image} />
      </div>
      <div className="result-details">
        <h2>{title}</h2>
        <h3>{city}, {state}</h3>
        <p>{description}</p>
        <h3>{text.from} ${price.toLocaleString('en-US')}</h3>
        <p style={{ marginTop: 0 }}>{text.perPerson}</p>
      </div>
    </div >
  );
};

ResultCard.propTypes = {
  pasajeros: number.isRequired,
  reservation: shape({
    origen: string.isRequired,
    destino: string.isRequired,
    numeroPasajeros: string.isRequired,
    fechaIda: PropTypes.instanceOf(Date).isRequired,
    fechaVuelta: PropTypes.instanceOf(Date),
  }).isRequired,
};

export default ResultCard;
