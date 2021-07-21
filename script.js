let cell = document.getElementsByClassName("cell");
let playingField = document.querySelector("#playingField");
let queue = document.querySelector("#queue");
let startBegin = document.querySelector("#startBegin");
let draw = document.querySelector("#draw");
let winX = document.querySelector("#winX");
let win0 = document.querySelector("#win0");
let paused = false;
let stepCount = 0;
let player = "X";
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function step() {
    if (!cell[i].innerHTML && !paused) {
      cell[i].innerHTML = player;
      playerChange();
      queue.innerHTML = "Ходит: " + player;
      
      
      stepCount++;
      win();
      draw1();
      
    }
  });
}
startBegin.addEventListener("click", restart);

function playerChange() {
  if (player == "X") {
    player = "0";
  } else{
    player = 'X'
  }
}

function draw1() {
    
  if (stepCount == 9 && paused == false) {
    draw.innerHTML = Number(draw.innerHTML) + 1
    paused = true;
    queue.innerHTML = 'Ничья!'
  }
}

function restart() {
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
    stepCount = 0;
    paused = false;
    queue.innerHTML = "Ходит: " + player;
    
  }
}

function win() {
  if (
    cell[0].innerHTML == "X" &&
    cell[1].innerHTML == "X" &&
    cell[2].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
    
    
  }
  if (
    cell[0].innerHTML == "0" &&
    cell[1].innerHTML == "0" &&
    cell[2].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
    
  }
  if (
    cell[3].innerHTML == "X" &&
    cell[4].innerHTML == "X" &&
    cell[5].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
  }
  if (
    cell[3].innerHTML == "0" &&
    cell[4].innerHTML == "0" &&
    cell[5].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
  }
  if (
    cell[6].innerHTML == "X" &&
    cell[7].innerHTML == "X" &&
    cell[8].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
  }
  if (
    cell[6].innerHTML == "0" &&
    cell[7].innerHTML == "0" &&
    cell[8].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
  }
  if (
    cell[0].innerHTML == "X" &&
    cell[3].innerHTML == "X" &&
    cell[6].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
  }
  if (
    cell[0].innerHTML == "0" &&
    cell[3].innerHTML == "0" &&
    cell[6].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
  }
  if (
    cell[1].innerHTML == "X" &&
    cell[4].innerHTML == "X" &&
    cell[7].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
  }
  if (
    cell[1].innerHTML == "0" &&
    cell[4].innerHTML == "0" &&
    cell[7].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
  }
  if (
    cell[2].innerHTML == "X" &&
    cell[5].innerHTML == "X" &&
    cell[8].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
  }
  if (
    cell[2].innerHTML == "0" &&
    cell[5].innerHTML == "0" &&
    cell[8].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
  }
  if (
    cell[0].innerHTML == "X" &&
    cell[4].innerHTML == "X" &&
    cell[8].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
  }
  if (
    cell[0].innerHTML == "0" &&
    cell[4].innerHTML == "0" &&
    cell[8].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
  }
  if (
    cell[2].innerHTML == "X" &&
    cell[4].innerHTML == "X" &&
    cell[6].innerHTML == "X"
  ) {
    winX.innerHTML = Number(winX.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: X'
  }
  if (
    cell[2].innerHTML == "0" &&
    cell[4].innerHTML == "0" &&
    cell[6].innerHTML == "0"
  ) {
    win0.innerHTML = Number(win0.innerHTML) + 1;
    paused = true;
    queue.innerHTML = 'Выиграл: 0'
  }
}
