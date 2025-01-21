const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
const message = document.querySelector('.message');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    message.style.display = 'block';
});
