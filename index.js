"use strict";
let ratings = document.getElementsByClassName("rate");
let selectedRate;

for(let i=0; i<ratings.length; i++) {
	ratings[i].addEventListener('click', () => {
		if(document.querySelector('.active') == null) {
    		ratings[i].className += " active";
		}else{
			document.querySelector('.active').classList.remove('active')
	    	ratings[i].className += " active";
		}
    	console.log(ratings[i].className);
    	selectedRate = ratings[i].innerHTML;
    	console.log(selectedRate);
	});
}

let ratingState = document.getElementById("container-rating-state");
let thankYouState = document.getElementById("container-thank-you-state");
let submit = document.getElementById("submit-rating");
let submitedRating = document.getElementById("submited-rating");

submit.addEventListener("click", () => {
	if(selectedRate) {
		submitedRating.innerHTML = "You selected " + selectedRate + " out of 5";		
		ratingState.style.display = "none";
		thankYouState.style.display = "block";
	}
});