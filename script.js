document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a.page-transition');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('href');

            document.body.classList.add('page-transition-fade');

            setTimeout(() => {
                window.location.href = url;
            }, 500); // Match this duration to the CSS transition time
        });
    });
});
