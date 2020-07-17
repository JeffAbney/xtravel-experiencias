import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes, {
  number,
  shape,
  string,
} from 'prop-types';
import texts from '../constants/texts'

require('dotenv').config();

const ResultCard = (props) => {
  const { id, experience, setExperience, language, reservationData, onPressWithoutOrigin } = props;
  const { title, city, state, description, image, price } = experience;
  const text = texts[language].experiences;
  const history = useHistory();

  function selectExperience() {
    if (!reservationData || Object.keys(reservationData).length === 0) {
      onPressWithoutOrigin({});
    } else {
      setExperience(experience);
      history.push('/experiencia');
    }

  }

  return (
    <div className="result-card" onClick={() => selectExperience()} id={id}>
      <div className="result-image-container" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="result-details">
        <h2>{title}</h2>
        <h3>{city}{state ? `, ${state}` : ''}</h3>
        <p>{description}</p>
        <h3>{text.from} ${price.toLocaleString('en-US')}</h3>
        <p style={{ marginTop: 0 }}>{text.perPerson}</p>
      </div>
    </div >
  );
};

export default ResultCard;
