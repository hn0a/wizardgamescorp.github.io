// Script animation pour les chiffres clés 


window.addEventListener('DOMContentLoaded', (event) => {
    const counterEmployees = document.querySelector('.count-employees');
    const counterSalary = document.querySelector('.count-salary');
    const counterDays = document.querySelector('.count-days');
    const counterSatisfaction = document.querySelector('.count-satisfaction');

    const animateCounter = (counter, duration) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / duration;
        const delay = duration / target;

        const updateCount = () => {
            const count = +counter.innerText;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, delay);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    animateCounter(counterEmployees, 2800); // Compteur des employés
    animateCounter(counterSalary, 625); // Compteur du salaire
    animateCounter(counterDays, 2500); // Compteur des jours
    animateCounter(counterSatisfaction, 3000); // Compteur de la satisfaction
});

document.querySelectorAll('.postuler-bouton').forEach(function(button) {
    button.addEventListener('click', function() {
        this.innerText = "Postulé !";
        this.style.backgroundColor = "#006400";
        this.disabled = true;
        this.style.cursor = "not-allowed";
    });
});

