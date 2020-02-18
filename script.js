const left = document.getElementById("left");
const right = document.getElementById("right");
const picture = document.getElementById("picture");
const name = document.getElementById("name");
const stars = document.getElementById("stars");
const review = document.getElementById("review");
let currentReview = 0;

const testimonials = [
	{
		name: 'Julia',
		picture: 'url("img/woman1.jpg")',
		stars: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>',
		review: "These cupcakes are just the best of the best you can get. I want to come here every day and indulge on all the sweetness. It's so amazing!"},
	{
		name: 'Mick',
		picture: 'url("img/man1.jpg")',
		stars: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"><i class="far fa-star"></i>',
		review: "It's so sweet, it's definitely ruining all those hours of hard training that I did, but the great service makes me want to run an extra lap with pleasure the next day."},
	{
		name: 'Laura',
		picture: 'url("img/woman2.jpg")',
		stars: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"><i class="fas fa-star"></i>',
		review: "I can't believe I didn't find this bakery years ago. I come here now to stock up for all my parties. You wouldn't believe it, every day is a party. They need to stock up on glittery sprinkles and it'll be 6 stars!"},
	{
		name: 'Jake',
		picture: 'url("img/man2.jpg")',
		stars: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"><i class="far fa-star"></i></i>',
		review: "Nothing else to say than: 'It's perfect!"},
]

function setReview(currentReview) {
	picture.style.backgroundImage = testimonials[currentReview].picture;
	name.innerHTML = testimonials[currentReview].name;
	stars.innerHTML = testimonials[currentReview].stars;
	review.innerHTML = testimonials[currentReview].review;
}

function clickLeft() {
	currentReview = currentReview - 1;
	if (currentReview < 0) {
		currentReview = testimonials.length - 1;
	}
	setReview(currentReview);
}

function clickRight() {
	currentReview = currentReview + 1;
	if (currentReview > testimonials.length - 1) {
		currentReview = 0;
	}
	setReview(currentReview);
}

left.addEventListener("click", clickLeft);
right.addEventListener("click", clickRight);
setReview(currentReview);