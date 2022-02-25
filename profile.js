
const colorBtn = document.getElementById('color');
const placeBtn = document.getElementById('place');
const ritualBtn = document.getElementById('ritual');

const alertMyFaveColor = ()  => {
    alert('My Favorite Color is Orange!');
}

function alertFavePlace(){
    alert('My Favorite Place is Asakusa, Tokyo!');
}

const alertMyFaveRitual = ()  => {
    alert("My Favorite Ritual is 'Hatsumoude', that is a tradition in Japan to visit a temple on a new years day.");
}

colorBtn.addEventListener('click', alertMyFaveColor);
placeBtn.addEventListener('click', alertFavePlace);
ritualBtn.addEventListener('click', alertMyFaveRitual);