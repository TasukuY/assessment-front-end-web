
let recommendBtn = document.getElementById('recommend');
let yabusoba = document.getElementById('yabusoba');
const restarurants = [
    'yabusoba', 'kamiya-bar', 'imahan', 'daikokuya', 'katsukichi'
]


function recommendRestaurant(){

    let randomNum = Math.floor(Math.random() * restarurants.length);

    for(let i = 0; i < restarurants.length; i++){
        let restaurant = document.getElementById(restarurants[i]);
        restaurant.className = 'hide';
    }
    
    let randomRestaurant = document.getElementById(restarurants[randomNum]);
    randomRestaurant.className = 'show';
}

recommendBtn.addEventListener('click', recommendRestaurant);