document.getElementById('probleme').addEventListener('change', function() {
    const ouSelect = document.getElementById('ou');
    ouSelect.innerHTML = ''; // Efface les options existantes

    if (this.value === 'bug') {
        // Ajoute des options spécifiques aux bugs de jeu
        const jeux = ['-- Choississez votre jeu --','Vallée dans Anciens', 'Urban Skylines', 'City Master', 'Plantation Paradise', 'Kingdom Adventure', 'Battlefront Fury'];
        jeux.forEach(jeu => {
            const option = document.createElement('option');
            option.value = jeu;
            option.text = jeu;
            ouSelect.add(option);
        });
    } else if (this.value === 'livraison') {
        // Ajoute des options spécifiques à la livraison de merch
        const merchOptions = ['-- Choississez votre problème --','Le produit ne m\'a pas été livré', 'Le produit reçu est endommagé', 'Le produit reçu ne correspond pas à ma commande', 'Je ne suis pas satisfait du produit', 'Autre'];
        merchOptions.forEach(merchOption => {
            const option = document.createElement('option');
            option.value = merchOption;
            option.text = merchOption;
            ouSelect.add(option);
        });
    } else {
        // Ajoute une option pour 'Autre'
        const option = document.createElement('option');
        option.value = 'autre';
        option.text = 'Autre';
        ouSelect.add(option);
    }
});


document.getElementById('description').addEventListener('mousedown', function(event) {
    event.preventDefault();
});