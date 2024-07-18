document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const content = document.getElementById('content');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
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
                if (target === 'exercises') {
                    initializeExercisePage();
                }
                else if (target === 'start-workout'){
                    initializeWorkoutPage();
                }
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

    function showModal(content) {
        modalBody.innerHTML = content;
        modal.style.display = 'flex';
    }

    function initializeWorkoutPage(){
        const templates = document.querySelectorAll('.template-card');
        console.log(templates)

        templates.forEach(template => {
            template.addEventListener('click', function() {
                fetch(`template-workout.html`)
                    .then(response=>{
                        if (!response.ok){
                            throw new Error('Error loading template')
                        }
                        return response.text();
                    })
                    .then(html=>{
                        showModal(html);
                    })
                
            });
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        

    }
    function initializeExercisePage() {
        const modal = document.getElementById('modal');
        const closeBtn = document.querySelector('.close');
        const exerciseCards = document.querySelectorAll('.exercise-card');
        
        exerciseCards.forEach(card => {
            card.addEventListener('click', function() {
                const exercise = card.getAttribute('data-exercise');
                const exerciseDetails = `<p>Details about ${exercise}</p>`;  // Customize this as needed
                showModal(exerciseDetails);
            });
        });
    

        const newLinks = document.querySelectorAll('.new-link');
        newLinks.forEach(link => {
            link.addEventListener('click', function() {
                const newWorkoutDetails = '<p>Details about New Workout</p>';  // Customize this as needed
                showModal(newWorkoutDetails);
            });
        });
    

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }



    // Load the home section by default
    loadContent('exercises');
});
