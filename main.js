
const bubbles = document.getElementById('bubbles');
const bubbleCount = 20;

for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.top = Math.random() * window.innerHeight + 'px';
    bubble.style.width = Math.random() * 50 + 20 + 'px';
    bubble.style.height = bubble.style.width;

    bubbles.appendChild(bubble);
}

window.addEventListener('mousemove', (event) => {
    const bubbles = document.querySelectorAll('.bubble');
    for (const bubble of bubbles) {
        const x = event.clientX - bubble.getBoundingClientRect().left;
        const y = event.clientY - bubble.getBoundingClientRect().top;

        bubble.style.transform = `translate(${x}px, ${y}px)`;
    }
});