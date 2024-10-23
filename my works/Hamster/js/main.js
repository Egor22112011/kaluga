console.log("hghth")
let score = 0;

const hamster = document.getElementById('hamster');

const scoreDisplay =document.getElementById('score');

hamster.addEventListener('click', () => {
    score++;

    scoreDisplay.textContent = `Счет: ${score}`;

});


