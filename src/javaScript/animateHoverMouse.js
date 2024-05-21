// script.js
// document.querySelectorAll('.trigger-element').forEach(element => {
//     element.addEventListener('mouseover', function(e) {
//       createStarExplosion(e.clientX, e.clientY, element);
//     });
// });

document.querySelectorAll('.trigger-element').forEach(element => {
    element.addEventListener('click', function(e) {
      createStarExplosion(e.clientX, e.clientY, element);
    });
});

function createStarExplosion(x, y, container) {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.classList.add('shape-1');
        star.classList.add('shape-2');
        star.classList.add('shape-3');
        star.classList.add('shape-4');
        
        // Random direction and distance for the explosion
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100;
        const xOffset = Math.cos(angle) * distance + 'px';
        const yOffset = Math.sin(angle) * distance + 'px';

        // Set CSS variables for animation
        star.style.setProperty('--x', xOffset);
        star.style.setProperty('--y', yOffset);

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        
        container.appendChild(star);

        // Remove the star after animation completes
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
}

document.addEventListener('mousemove', function (e) {
    createSmoke(e.pageX, e.pageY);
});

function createSmoke(x, y) {
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.left = `${x}px`;
    smoke.style.top = `${y}px`;
    smoke.style.setProperty('--randomX', `${Math.random() * 200 - 100}px`);
    smoke.style.setProperty('--randomY', `${Math.random() * 200 - 100}px`);
    document.body.appendChild(smoke);
    setTimeout(() => {
        smoke.remove();
    }, 2000);
}