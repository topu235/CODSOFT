

// Add a greeting based on time of day
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good Morning!';
    } else if (currentHour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    const greetingElement = document.createElement('p');
    greetingElement.textContent = greeting;
    greetingElement.style.color = '#ffc107';
    header.appendChild(greetingElement);
});