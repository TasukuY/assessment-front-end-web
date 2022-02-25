//console.log("hello world");

const complimentUser = () => {
	alert("You have a great taste!!");
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("Your form has been submitted successfully.");
}

let form = document.querySelector('form#contact');
let img = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', complimentUser);