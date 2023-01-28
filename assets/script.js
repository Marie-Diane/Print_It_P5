const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ajout des bullet points
const bulletPoints = document.getElementById("slider-dots");
for(let i = 0; i < slides.length; i++){
	const point = document.createElement("div");
	if (i===0) {
		point.className = "dot dot_selected";
	} else {
		point.className= "dot";
	}
	bulletPoints.appendChild(point);
}

// Ajout des Event Listeners sur les flèches
function eventArrowBanner (direction) {
	console.log(direction);
}