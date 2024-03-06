document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll('article');

    // Loop through each article
    articles.forEach((article) => {
        // Get divs and buttons within the current article
        const divs = article.querySelectorAll('div');
        const prevButtons = article.querySelectorAll('.prev-button');
        const nextButtons = article.querySelectorAll('.next-button');

        // Index to keep track of the currently displayed div
        let currentIndex = 0;

        // Function to show the next div
        function showNextDiv() {
            // Hide the current div
            divs[currentIndex].style.display = 'none';

            // Calculate the index of the next div to display
            currentIndex = (currentIndex + 1) % divs.length;

            // Display the next div
            divs[currentIndex].style.display = 'block';
        }

        // Function to show the previous div
        function showPreviousDiv() {
            // Hide the current div
            divs[currentIndex].style.display = 'none';

            // Calculate the index of the previous div to display
            currentIndex = (currentIndex - 1 + divs.length) % divs.length;

            // Display the previous div
            divs[currentIndex].style.display = 'block';
        }

        // Hide all divs except the first one
        divs.forEach((div, index) => {
            if (index !== 0) {
                div.style.display = 'none';
            }
        });

        // Add event listener to each "next" button within the article
        nextButtons.forEach((button) => {
            button.addEventListener('click', showNextDiv);
        });

        // Add event listener to each "previous" button within the article
        prevButtons.forEach((button) => {
            button.addEventListener('click', showPreviousDiv);
        });
    });
});

