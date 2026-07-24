document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({
behavior:'smooth'
});

});

});

window.addEventListener('scroll', () => {

const cards = document.querySelectorAll('.card');

cards.forEach(card => {

const position = card.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

card.style.opacity = "1";
card.style.transform = "translateY(0px)";

}

});

});