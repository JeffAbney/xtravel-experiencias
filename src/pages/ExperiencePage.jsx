import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUsers, faCommentDots, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { CarouselProvider, Slider, Slide, Image, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import texts from '../constants/texts'
import { LanguageContext } from '../components/LanguageContext';
import getAllExperiences from '../utils/getAllExperiences';
import UpsellWindow from '../components/UpsellWindow';

export default function ExperiencePage(props) {
  const { reservationData, setReservationData, setPrice, experience } = props;
  const history = useHistory();
  const { language } = useContext(LanguageContext);
  const [upsell, setUpsell] = useState(false);
  const text = texts[language].experiences;
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [priceTotal, setPriceTotal] = useState((parseInt(experience.price) * numberOfPeople));

  function addPerson(oldNumberOfPeople) {
    setNumberOfPeople(num => num + 1);
    setPriceTotal((parseInt(experience.price) * (oldNumberOfPeople + 1)))
  }

  function removePerson(oldNumberOfPeople) {
    if (numberOfPeople > 1) {
      setNumberOfPeople(num => num - 1);
      setPriceTotal((parseInt(experience.price) * (oldNumberOfPeople - 1)))

    } else {
      return null
    }
  }

  function handleSubmit() {
    setPrice(priceTotal);
    setReservationData((data) => ({ ...data, experience, numberOfPeople: numberOfPeople }));
    console.log('go to upsell priceTotal:', priceTotal);
    setUpsell(true);
  }

  function HeaderImage(image, i) {
    return (
      <Slide key={i} index={i}>
        <div className="header-image-container">
          <Image src={image} className="image-full" />
        </div>
      </Slide>
    )
  }

  return (
    <div className="experience-page">
      <div className="experience-image-header">
        <CarouselProvider
          naturalSlideWidth={240}
          naturalSlideHeight={320}
          totalSlides={5}
          visibleSlides={5}
        >
          <Slider>
            {experience.headerImages.map((image, i) => HeaderImage(image, i))}
          </Slider>
        </CarouselProvider>
      </div>
      <div className="experience-details">
        <div className="experience-details-text">
          <div className="text-header">
            <h1>{experience.title}</h1>
            <h2>{experience.city}, {experience.state}</h2>
          </div>
          <div className="text-description">
            <p>{experience.longDescription}</p>
          </div>
        </div>

        <div className="experience-details-graphics">
          <div className="details-icon-row">
            <div className="details-icon-column">
              <div className="details-icon-container">
                <FontAwesomeIcon className="details-icon" icon={faClock} />
              </div>
              <h2>{text.time}</h2>
              <p>{experience.timeLength}</p>
            </div>
            <div className="details-icon-column">
              <div className="details-icon-container">
                <FontAwesomeIcon className="details-icon" icon={faUsers} />
              </div>
              <h2>{text.people}</h2>
              <p>{experience.numberOfPeople}</p>
            </div>
            <div className="details-icon-column">
              <div className="details-icon-container">
                <FontAwesomeIcon className="details-icon" icon={faCommentDots} />
              </div>
              <h2>{text.languages}</h2>
              <p>{experience.languages}</p>
            </div>
          </div>
          <div className="details-price-box">
            <div className="row price-box-row">
              <p>{text.price}: ${experience.price.toLocaleString('en-US')} {text.perPerson}</p>
            </div>
            <div className="row price-box-row">
              <p>{text.numberOfPeople}: </p>
              <div className="row people-counter">
                <FontAwesomeIcon onClick={() => removePerson(numberOfPeople)} className="details-icon" icon={faMinusCircle} />
                <p>{numberOfPeople}</p>
                <FontAwesomeIcon onClick={() => addPerson(numberOfPeople)} className="details-icon" icon={faPlusCircle} />
              </div>
            </div>
            <div className="row price-box-row">
              <h2>Total: ${priceTotal.toLocaleString('en-US')}</h2>
              <button className="pay-submit mobile-submit" type="submit" onClick={handleSubmit}>{text.pay}</button>
            </div>
          </div>
          <div className="details-price-calculator">

          </div>
        </div>
      </div>
      {
        upsell
          ? (
            <div className="upsell-window">
              <UpsellWindow reservationData={reservationData} setReservationData={setReservationData} price={priceTotal} setPrice={setPrice} setUpsell={setUpsell} experience={experience} />
            </div>
          )
          : null
      }
    </div >
  )
}