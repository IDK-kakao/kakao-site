//---------------------------------
// Что ты хотел здесь увидеть лол?)
//---------------------------------
// Preload all elements
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loading-screen').style.visibility = 'hidden';
            document.body.classList.add('loaded');
        }, 500);
    }, 1500);
});

function setRandomDelay(element) {
    const delay = Math.random() * 2;
    element.style.animationDelay = delay + 's';
}

function initializeElements() {
    document.querySelectorAll('.shape').forEach(el => {
        setRandomDelay(el);
    });

    document.querySelectorAll('.animated-text').forEach(el => {
        animateText(el);
    });
}

function animateText(element) {
    const text = element.innerText;
    element.innerText = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.innerText = text[i];
        span.style.animationDelay = (i * 0.05) + 's';
        span.classList.add('char-animation');
        element.appendChild(span);
    }
}
