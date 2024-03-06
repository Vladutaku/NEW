document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll('article');

    articles.forEach((article) => {
        const divs = article.querySelectorAll('div');
        const prevButtons = article.querySelectorAll('.prev-button');
        const nextButtons = article.querySelectorAll('.next-button');

        let currentIndex = 0;

        function showNextDiv() {
            divs[currentIndex].style.display = 'none';

            currentIndex = (currentIndex + 1) % divs.length;

            divs[currentIndex].style.display = 'block';
        }

        function showPreviousDiv() {
            divs[currentIndex].style.display = 'none';

            currentIndex = (currentIndex - 1 + divs.length) % divs.length;

            divs[currentIndex].style.display = 'block';
        }

        divs.forEach((div, index) => {
            if (index !== 0) {
                div.style.display = 'none';
            }
        });

        nextButtons.forEach((button) => {
            button.addEventListener('click', showNextDiv);
        });

        prevButtons.forEach((button) => {
            button.addEventListener('click', showPreviousDiv);
        });
    });
});

