import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const ThankYou = (props) => {
  const history = useHistory();
  const [here, setHere] = useState('');

  useEffect(function scrollToThankYou() {
    const thankYou = document.getElementById("thank-you-img");
    if (thankYou) {
      document.getElementById("thank-you-img").scrollIntoView({ behavior: "smooth", block: "center" });
    }
  })

  function handleClick() {
    history.push('/');
  }

  return (
    <div id="thank-you" style={{ width: '100vw', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }} id="thank-you-img">
        <button className="dark-button" style={{ marginBottom: 60 }} onClick={handleClick}>¡OK!</button>
      </div>
    </div>
  );
}

export default ThankYou;
