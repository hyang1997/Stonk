document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const content = document.getElementById('content');

    function loadContent(target) {
        fetch(`${target}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                content.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = '<p>Failed to load content.</p>';
            });
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = link.getAttribute('data-target');
            loadContent(target);
        });
    });

    // Load the home section by default
    loadContent('home');
});
