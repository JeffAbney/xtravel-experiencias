import conektaHelper from './conektaHelper';
import sendTokenToBack from './sendTokenToBack';


async function makePurchase(data, cb) {
  const { cardNumber, cardName, expirationMonth, expirationYear, CVC, paymentMethod } = data;
  function successCallback(res) {
    console.log('Succsfully tokenized card! ', res);
    sendTokenToBack({ res, data }, cb);
  };
  function errorCallback(res) {
    console.log('error -', res);
    alert("Hubo un problema procesando tu tarjeta. Por favor intenta de nuevo. / There was a problem processing your card. Please try again.");
    window.location.href = "/";
  }
  conektaHelper.initConekta();
  if (paymentMethod === 'card') {
    const token = conektaHelper.tokenize(cardNumber, cardName, expirationMonth, expirationYear, CVC, successCallback, errorCallback);
  } else {
    console.log('we have oxxo payment')
    sendTokenToBack({ res: {}, data }, cb);
  }

  console.log('data', data);
}
export default makePurchase;