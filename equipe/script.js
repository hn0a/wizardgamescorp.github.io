/* Script pour animer les membres de l'équipe */

window.addEventListener('DOMContentLoaded', (event) => {
    const teamMembers = document.querySelectorAll('.team-member');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    teamMembers.forEach((member, index) => {
        member.style.setProperty('--i', index);
        observer.observe(member);
    });
});