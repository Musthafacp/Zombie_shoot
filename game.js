// Iteration 1: Declare variables required for this game

const body = document.getElementById("game-body")

// Iteration 1.2: Add shotgun sound

let shotgun_sound = new Audio("assets/shotgun.wav")

body.onclick = () =>{
    shotgun_sound.pause();
    shotgun_sound.currentTime = 0;
    shotgun_sound.play();
}

// Iteration 1.3: Add background sound

const bgm = new Audio("assets/bgm.mp3")
bgm.play();
bgm.loop = true;

// Iteration 1.4: Add lives

let lives = 4;

let zombie_id = 1;


// Iteration 2: Write a function to make a zombie

function makezomb(){
    body.innerHTML += `<img src= 'assets/zombie-${getrandom(1,6)}.png' class='zombie-image' id='zombie${zombie_id}'/>`;
    let currzomb = document.querySelector(`#zombie${zombie_id}`)
    currzomb.style.transform = `translateX(${getrandom(10,90)}vw)`
    currzomb.onclick = () =>{
        destroy(currzomb);
    }
}
makezomb()   


// Iteration 3: Write a function to check if the player missed a zombie


function check_zombie(zombie) {
    const zombieRect = zombie.getBoundingClientRect();
    console.log(zombieRect)
    if (zombieRect.top <= 0) {
        destroy(zombie);
        lives = lives -1;
        if (lives == 0) {
            location.href = "game-over.html";
        }
    }
}


// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function destroy(zombie){
        zombie.style.display = "none";
        zombie_id += 1;
        makezomb();
    }

// Iteration 5: Creating timer

 var counter = 60;
 setInterval(()=>{
    const timer = document.getElementById("timer")
    counter --;
    timer.innerText = counter
    if(counter == 0){
        window.location.href = "win.html"
    }
    let currzomb = document.querySelector(`#zombie${zombie_id}`)
    check_zombie(currzomb)
},1000)



// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer

function getrandom(min, max){
    return Math.ceil(Math.random()*(max-min) + min);
}