// Deklarasi
const img = document.getElementById('img') 
let posx = parseInt(getComputedStyle(img).right, 10);
const tendang = document.getElementById('tendang') 
let audio = new Audio('shtt.mp3')

// Fungsi

function tembak() {
  tendang.style.top = '-550px'
    setTimeout(() => {
      tendang.style.top = '0px' 
      }, 900) 
  
  img.style.top = '-550px'
    setTimeout(() => {
      img.style.top = '0px'
    }, 900)

    audio.play();
}

function loncat() {
    img.style.top = '-250px'
    setTimeout(() => {
        img.style.top = '0px' 
      }, 900) 

      tendang.style.top = '-250px'
    setTimeout(() => {
      tendang.style.top = '0px' 
      }, 900) 
}

function kekanan() {
    img.style.right= (posx - 60) + "px";
    posx = parseInt(getComputedStyle(img).right, 10);

    tendang.style.right= (posx - 1) + "px";
    posx = parseInt(getComputedStyle(tendang).right, 10);
}
function kekiri() {
    tendang.style.right= (posx + 60) + "px";
    posx = parseInt(getComputedStyle(tendang).right, 10);

    img.style.right= (posx + 1) + "px";
    posx = parseInt(getComputedStyle(img).right, 10);
}

// Event
document.addEventListener("keydown", function(event) {
    event.preventDefault();
    const key = event.key; 
    switch (key) { 

      case " ":
        loncat()
      break;
      
      case "ArrowLeft":
      case "a" :
        kekiri()
      break;

      case "ArrowRight":
      case "d" :
        kekanan()
      break;

      case "z":
      case "e" :
        tembak()
        updateScore();
      break;

  }
  });

  //clock
  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  
  //score
  let score = 0;
  function updateScore() {
    score++;
    document.getElementById('score').textContent = `Skor: ${score}`;
  }