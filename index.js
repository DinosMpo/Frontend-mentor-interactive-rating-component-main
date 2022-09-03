"use strict";
let ratings = document.getElementsByClassName("rate");

for(let i=0; i<ratings.length; i++) {
	ratings[i].addEventListener('click', () => {
		if(document.querySelector('.active') == null) {
    		ratings[i].className += " active";
		}else{
			document.querySelector('.active').classList.remove('active')
	    	ratings[i].className += " active";
		}
    	console.log(ratings[i].className);

	});
}