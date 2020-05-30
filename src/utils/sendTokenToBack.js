const sendTokenToBack = (data, cb) => {
  fetch('http://xtravel-backend.herokuapp.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log('got response from hero -', response);
      if (response.ok) {
        console.log('response.ok -', response.ok);
        return response.json();
      } else {
        alert("No se pudo realizar el pago en este momento. Por favor intenta de nuevo luego. / Your payment could not be processed. Please try again later.");
        window.location.href = "/";
        throw new Error(response.statusText);
      }
    })
    .then((responseJson) => {
      cb();
      console.log('sendToBack response', responseJson);
    })
    .catch((error) => {
      alert("No se pudo realizar el pago en este momento. Por favor intenta de nuevo luego. / Your payment could not be processed. Please try again later.");
      window.location.href = "/";
      console.log(error)
    });
}

export default sendTokenToBack;