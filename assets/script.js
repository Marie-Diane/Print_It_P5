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

const imgSlide = document.getElementById("img-slide");
const textSlide = document.getElementById("text-slide");
let indexSlide = 0;

// Fonction pour modifier le slide au clic des flèches
function eventArrowBanner (direction) {
	bulletPoints.childNodes[indexSlide].classList.remove("dot_selected");
	if(direction === "right"){
		indexSlide += 1;
		if(indexSlide > slides.length - 1){
			indexSlide = 0;
		}
	} else{
		indexSlide -= 1;
		if(indexSlide < 0){
			indexSlide = slides.length - 1;
		}
	}
	imgSlide.setAttribute("src", "./assets/images/slideshow/" + slides[indexSlide].image)
	textSlide.innerHTML = slides[indexSlide].tagLine;
	bulletPoints.childNodes[indexSlide].classList.add("dot_selected");
}