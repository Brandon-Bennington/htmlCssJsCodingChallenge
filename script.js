let count = 0;
const countElement = document.getElementById('count');
const starsElement = document.getElementById('stars');

document.getElementById('add').addEventListener('click', function() {
    count++;
    updateDisplay();
});

document.getElementById('remove').addEventListener('click', function() {
    if (count > 0) {
        count--;
    }
    updateDisplay();
});

function updateDisplay() {
    countElement.textContent = count;
    let stars = '';
    for (let i = 0; i < count; i++) {
        stars += '<div class="star"></div>';
    }
    starsElement.innerHTML = stars;
}
