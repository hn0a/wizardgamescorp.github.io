// Script pour la page d'accueil

var images = [
    './img/vallee_des_anciens_1.png',
    './img/vallee_des_anciens_2.png',
    './img/vallee_des_anciens_3.png',
    './img/vallee_des_anciens_4.png',
    './img/vallee_des_anciens_5.png'
];

var currentIndex = 0;

var imgElement = document.querySelector('.image-accueil');
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

imgElement.src = images[currentIndex];

prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
});