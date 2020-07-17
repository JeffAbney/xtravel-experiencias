import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUsers, faCommentDots, faPlusCircle, faMinusCircle, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { CarouselProvider, Slider, Slide, Image, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import texts from '../constants/texts'
import { LanguageContext } from '../components/LanguageContext';
import getAllExperiences from '../utils/getAllExperiences';
import UpsellWindow from '../components/UpsellWindow';
import DownloadablePDF from '../components/DownloadablePDF';

export default function ExperiencePage(props) {
  const { reservationData, setReservationData, setPrice, experience } = props;
  const history = useHistory();
  const { language } = useContext(LanguageContext);
  const [upsell, setUpsell] = useState(false);
  const text = texts[language].experiences;
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [priceTotal, setPriceTotal] = useState((parseInt(experience.price) * numberOfPeople));

  useEffect(function scrollToTop() {
    const top = document.getElementById("top");
    if (top) {
      top.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  },[])

  function addPerson() {
    setNumberOfPeople(num => num + 1);
    setPriceTotal((prevPrice) => prevPrice + (parseInt(experience.price)));
  }

  function removePerson() {
    if (numberOfPeople > 1) {
      setNumberOfPeople(num => num - 1);
      setPriceTotal((prevPrice) => prevPrice - (parseInt(experience.price)));
    } else {
      return null;
    }
  }

  function addChild(oldNumberOfChildren) {
    setNumberOfChildren(num => num + 1);
    setPriceTotal((prevPrice) => prevPrice + (parseInt(experience.priceChild)));
  }

  function removeChild(oldNumberOfChildren) {
    if (numberOfChildren > 0) {
      setNumberOfChildren(num => num - 1);
      setPriceTotal((prevPrice) => prevPrice - (parseInt(experience.priceChild)));
    } else {
      return null
    }
  }

  function handleSubmit() {
    setPrice(priceTotal);
    setReservationData((data) => ({ ...data, experience, numberOfPeople: numberOfPeople, numberOfChildren: numberOfChildren }));
    console.log('go to upsell priceTotal:', priceTotal);
    if (experience.upSells && experience.upSells.length > 0) {
      setUpsell(true);
    } else {
      history.push('/infoDeReserva');
    }
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
    <div className="experience-page" >
      <div className="experience-image-header" id="top">
        <CarouselProvider
          naturalSlideWidth={320}
          naturalSlideHeight={320}
          totalSlides={experience.headerImages.length}
          visibleSlides={3.2}
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
            <h2>{experience.city}</h2>
          </div>
          <div className="text-description">
            <p>{experience.longDescription}</p>
          </div>
          {experience.suggestions && experience.suggestions.length > 0
            ? (
              <section className="text-suggestions">
                <h3>{text.suggestions}</h3>
                <ul>
                  {experience.suggestions.map((suggestion, i) => <li key={i}>{suggestion}</li>)}
                </ul>
              </section>
            )
            : null
          }
          {experience.restrictions && experience.restrictions.length > 0
            ? (
              <section className="text-restrictions">
                <h3>{text.restrictions}</h3>
                <ul>
                  {experience.restrictions.map((restriction, i) => <li key={i}>{restriction}</li>)}
                </ul>
              </section>
            )
            : null
          }
          {
            experience.downloadables && experience.downloadables.length > 0
              ? (
                <section className="downloadables-container">
                  {experience.downloadables.map((item, i) => <DownloadablePDF item={item} text={text} key={`${item.title}-${i}`} />)}
                </section>
              )
              : null
          }
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
            <div className="details-icon-column">
              <div className="details-icon-container">
                <FontAwesomeIcon className="details-icon" icon={faCalendar} />
              </div>
              <h2>{text.availability}</h2>
              <p>{experience.availableDays}</p>
            </div>
          </div>
          {experience.aditionalInfo ? <h3>{experience.aditionalInfo}</h3> : null}
          {experience.includes && experience.includes.length > 0
            ? (
              <section className="details-includes">
                <h3 style={{ width: '100%' }}>{text.includes}:</h3>
                {experience.includes.map((item, i) => (
                  <div key={i} className="details-icon-column">
                    <div className="details-icon-container">
                      {typeof item.icon === 'string' ? <span class={item.icon}></span> : <FontAwesomeIcon className="details-icon" icon={item.icon} />}
                    </div>
                    <h2>{item.text}</h2>
                  </div>
                )
                )}
                {experience.additionalList && experience.additionalList.data && experience.additionalList.data.length > 0
                  ? <h3 style={{ width: '100%' }}>{experience.additionalList.title}</h3>
                  : null
                }
                {experience.additionalList && experience.additionalList.data && experience.additionalList.data.length > 0
                  ? (
                    experience.additionalList.data.map((item, i) => (
                      <div key={i} className="details-icon-column">
                        <div className="details-icon-container">
                          {typeof item.icon === 'string' ? <span class={item.icon}></span> : <FontAwesomeIcon className="details-icon" icon={item.icon} />}
                        </div>
                        <h2>{item.text}</h2>
                      </div>
                    )
                    )
                  )
                  : null
                }
              </section>
            )
            : null
          }
          <div className="details-price-box">
            <div className="row price-box-row">
              <p>{text.price}: ${experience.price.toLocaleString('en-US')} {experience.priceChild ? text.perAdult : text.perPerson}</p>
            </div>
            <div className="row price-box-row">
              <p>{experience.priceChild ? text.numberOfAdults : text.numberOfPeople}: </p>
              <div className="row people-counter">
                <FontAwesomeIcon onClick={() => removePerson(numberOfPeople)} className="details-icon" icon={faMinusCircle} />
                <p>{numberOfPeople}</p>
                <FontAwesomeIcon onClick={() => addPerson(numberOfPeople)} className="details-icon" icon={faPlusCircle} />
              </div>
            </div>
            {experience.priceChild
              ? (
                <div>
                  <div className="row price-box-row">
                    <p>{text.price}: ${experience.priceChild.toLocaleString('en-US')} {text.perChild}</p>
                  </div>
                  <div className="row price-box-row">
                    <p>{text.numberOfChildren}: </p>
                    <div className="row people-counter">
                      <FontAwesomeIcon onClick={() => removeChild(numberOfChildren)} className="details-icon" icon={faMinusCircle} />
                      <p>{numberOfChildren}</p>
                      <FontAwesomeIcon onClick={() => addChild(numberOfChildren)} className="details-icon" icon={faPlusCircle} />
                    </div>
                  </div>
                </div>
              )
              : null
            }
            <div className="row price-box-row">
              <h2>Total: ${priceTotal.toLocaleString('en-US')}</h2>
              <button className="pay-submit mobile-submit" type="submit" onClick={handleSubmit}>{text.pay}</button>
            </div>
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