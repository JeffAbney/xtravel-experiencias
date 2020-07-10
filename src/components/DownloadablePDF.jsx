import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import texts from '../constants/texts'


export default function DownloadablePDF({ item, text }) {
  const { title, iconTitle, description, file } = item;

  function downloadPDF(pdf) {
    console.log('you clicked download');
  }

  return (
    <div className="trip-grid">
      <div><FontAwesomeIcon className="details-icon column1" icon={faShuttleVan} /></div>
      <h2 className="column2">{title}</h2>
      <h3 className="column1">{iconTitle}</h3>
      <p className="column2"><strong>{description}</strong></p>
      <div />
      <a className="column2" style={{ textDecoration: 'none', margin: 0, padding: 0 }} target="_blank" href={file}><button className="light-button">{text.download}</button></a>
    </div>
  )
}