document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.rating span');
    const ratingValue = document.getElementById('ratingValue');
    let selectedValue = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });

        star.addEventListener('click', () => {
            selectedValue = star.getAttribute('data-value');
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= selectedValue) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
            ratingValue.textContent = `Valoración: ${selectedValue}`;
        });
    });
});
