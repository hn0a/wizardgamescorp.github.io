// Script pour l'affichage dynamique des actualités

window.addEventListener('scroll', function() {
    var newsItems = document.querySelectorAll('.news-item');
    var windowHeight = window.innerHeight;

    newsItems.forEach(function(newsItem) {
        var newsItemTop = newsItem.getBoundingClientRect().top;

        if (newsItemTop - windowHeight <= 0) {
            newsItem.classList.add('visible');
        }
    });
});

function checkVisibility() {
    var newsItems = document.querySelectorAll('.news-item, .news-item-vertical');
    var windowHeight = window.innerHeight;

    newsItems.forEach(function(newsItem) {
        var newsItemTop = newsItem.getBoundingClientRect().top;

        if (newsItemTop - windowHeight <= 0) {
            newsItem.classList.add('visible');
        }
    });
}

// Appeler la fonction une fois au chargement de la page
checkVisibility();

// Puis l'appeler à chaque défilement
window.addEventListener('scroll', checkVisibility);