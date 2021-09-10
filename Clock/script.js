const hourHand = document.querySelector('.hand.hour');
const minHand = document.querySelector('.hand.minute');
const secHand = document.querySelector('.hand.secode');



const interval = setInterval(() => {
    const date = new Date();
    let secRatio = date.getSeconds() / 60;
    let minuteRatio = (secRatio + date.getMinutes()) / 60;
    let hourRatio = (minuteRatio + date.getHours()) / 12;
    setRotation(hourHand, hourRatio);
    setRotation(minHand, minuteRatio);
    setRotation(secHand, secRatio);
}, 1000);

function setRotation(element, rotationRatio) {
    element.style.setProperty('--angle', `${ rotationRatio*360 }deg`);
}