//Delaring variables and constants
let isRock = false;
let isPaper = false;
let isScissor = false;
const userChoose = document.getElementById('userChoose');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const userChooseBox = document.getElementById('userChooseBox');
const declare = document.getElementById('declare');
const computerChoose = document.getElementById('computerChoose');
const computerChooseBox = document.getElementById('computerChooseBox');
const resultBox = document.getElementById('resultBox');
let userChoosed = 0;
let tieText = 'It was a tie<button class="button"><a href="/index.html" id="replay">Replay</a></button>';
let winText = 'Hurray! You win<button class="button"><a href="/index.html" id="replay">Replay</a></button>';
let looseText = 'Oops! You lose<button class="button"><a href="/index.html" id="replay">Replay</a></button>';

// defining what will happen when user clicks on rock button
rock.addEventListener('click', function () {
    // checking of any other button is clicked other than rock
    if (isPaper) {
        paper.classList.remove("greybg");
    }
    if (isScissor) {
        scissor.classList.remove("greybg");
    }
    rock.classList.add("greybg");
    isRock = true; //declaring that rock is clicked
    userChoose.innerText = "Rock";
    userChooseBox.innerHTML = '<img src="static/rock.png" alt="">';
    userChoosed = 1; // declaring what user has choosen
})

// defining what will happen when user clicks on paper button
paper.addEventListener('click', function () {
    // checking of any other button is clicked other than paper
    if (isRock) {
        rock.classList.remove("greybg");
    }
    if (isScissor) {
        scissor.classList.remove("greybg");
    }
    isPaper = true;// declaring that paper is clicked
    paper.classList.add("greybg");
    userChoose.innerText = "Paper";
    userChooseBox.innerHTML = '<img src="static/paper.png" alt="">';
    userChoosed = 2;//declaring what user has choosen
})

// defining what will happen when user clicks on scissor button
scissor.addEventListener('click', function () {
    // checking of any other button is clicked other than scissor
    if (isRock) {
        rock.classList.remove("greybg");
    }
    if (isPaper) {
        paper.classList.remove("greybg");
    }
    isScissor = true;//declaring that scissoris clicked
    scissor.classList.add("greybg");
    userChoose.innerText = "Scissor";
    userChooseBox.innerHTML = '<img src="static/scissor.png" alt="">';
    userChoosed = 3;//declaring what user has choosen
})

declare.addEventListener('click', function () {
    let computerChoosed = Math.floor(Math.random()*3)+1;
    // cheaking different conditions
    //user = Rock and computer = rock
    if(userChoosed == 1 && computerChoosed == 1) {
        computerChoose.innerText = "Rock";
        computerChoose.classList.add("visible");
        computerChooseBox.innerHTML = '<img src="static/rock.png" alt="">';
        resultBox.innerHTML = tieText;
        resultBox.classList.remove("resultBox");
    }
    //user = Paper and computer = rock
    if (userChoosed == 2 && computerChoosed == 1) {
        computerChoose.innerText = "Rock";
        computerChoose.classList.add("visible");
        computerChooseBox.innerHTML = '<img src="static/rock.png" alt="">';
        resultBox.innerHTML = winText;
        resultBox.classList.remove("resultBox");
    }
    //user = Scissor and computer = rock
    if (userChoosed == 3 && computerChoosed == 1) {
        computerChoose.innerText = "Rock";
        computerChooseBox.innerHTML = '<img src="static/rock.png" alt="">';
        resultBox.innerHTML = looseText;
        computerChoose.classList.add("visible");
        resultBox.classList.remove("resultBox");
    }
    //user = Rock and computer = paper
    if (userChoosed == 1 && computerChoosed == 2) {
        computerChoose.innerText = "Paper";
        computerChooseBox.innerHTML = '<img src="static/paper.png" alt="">';
        resultBox.innerHTML = looseText;
        computerChoose.classList.add("visible");
        resultBox.classList.remove("resultBox");
    }
    //user = Rack and computer = scissor
    if (userChoosed == 1 && computerChoosed == 3) {
        computerChoose.innerText = "Scissor";
        computerChooseBox.innerHTML = '<img src="static/scissor.png" alt="">';
        resultBox.innerHTML = winText;
        computerChoose.classList.add("visible");
        resultBox.classList.remove("resultBox");
    }
    //user = paper and computer = paper
    if (userChoosed == 2 && computerChoosed == 2) {
        computerChoose.innerText = "paper";
        computerChooseBox.innerHTML = '<img src="static/paper.png" alt="">';
        resultBox.innerHTML = tieText;
        computerChoose.classList.add("visible");
        resultBox.classList.remove("resultBox");
    }
    //user = Paper and computer = scissor
    if (userChoosed == 2 && computerChoosed == 3) {
        computerChoose.innerText = "Scissor";
        computerChooseBox.innerHTML = '<img src="static/scissor.png" alt="">';
        resultBox.innerHTML = looseText;
        computerChoose.classList.add("visible");
        resultBox.classList.remove("resultBox");
    }

    //user = Scissor and computer = scissor
    if (userChoosed == 3 && computerChoosed == 3) {
        computerChoose.innerText = "Scissor";
        computerChooseBox.innerHTML = '<img src="static/scissor.png" alt="">';
        resultBox.innerHTML = tieText;
        computerChoose.classList.add("visible");
        resultBox.classList.remove("resultBox");
    }
    //user = Paper and computer = scissor
    if (userChoosed == 2 && computerChoosed == 3) {
        computerChoose.innerText = "Scissor";
        computerChooseBox.innerHTML = '<img src="static/scissor.png" alt="">';
        resultBox.innerHTML = looseText;
        computerChoose.classList.add("visible");
        resultBox.classList.remove("resultBox");
    }
})