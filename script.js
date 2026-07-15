/* ==========================================
   ELEMENTS
========================================== */

const loading = document.getElementById("loading-screen");

const scenes = document.querySelectorAll(".scene");

const startBtn = document.getElementById("startBtn");

const postman = document.getElementById("postman");

const nextGift = document.getElementById("nextGift");

const envelope = document.getElementById("envelope");

const typewriter = document.getElementById("typewriter");

const continueBtn = document.getElementById("continueBtn");

const finalBtn = document.getElementById("finalBtn");

const music = document.getElementById("music");

const petals = document.querySelector(".petals");

const timer = document.getElementById("timer");

/* ==========================================
   LINKS (Replace Later)
========================================== */

document.getElementById("spotifyBtn").href="#";

document.getElementById("tiktokBtn").href="#";

/* ==========================================
   LOADING SCREEN
========================================== */

window.onload=()=>{

setTimeout(()=>{

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},1000);

},2500);

}

/* ==========================================
   SCENE SWITCHER
========================================== */

function showScene(number){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

document.getElementById("scene"+number)

.classList.add("active");

}

/* ==========================================
   START
========================================== */

startBtn.onclick=()=>{

showScene(2);

}

/* ==========================================
   POSTMAN
========================================== */

postman.onclick=()=>{

showScene(3);

}

/* ==========================================
   LILIES
========================================== */

nextGift.onclick=()=>{

showScene(4);

}

/* ==========================================
   ENVELOPE
========================================== */

envelope.onclick=()=>{

envelope.classList.add("open");

setTimeout(()=>{

showScene(5);

music.play();

typeLetter();

},1200);

}

/* ==========================================
   LETTER
========================================== */

const letter=`

Hi,

(Your letter will go here.)

Every word you want
will appear beautifully
using the typewriter effect.

🤍

`;

let index=0;

function typeLetter(){

if(index<letter.length){

typewriter.innerHTML+=letter.charAt(index);

index++;

setTimeout(typeLetter,40);

}

else{

continueBtn.style.display="block";

}

}

/* ==========================================
   CONTINUE
========================================== */

continueBtn.onclick=()=>{

showScene(6);

}

/* ==========================================
   LIVE TIMER
========================================== */

const startDate=new Date(

"2023-04-19T00:00:00"

);

function updateTimer(){

const now=new Date();

let diff=now-startDate;

const seconds=Math.floor(diff/1000)%60;

const minutes=Math.floor(diff/60000)%60;

const hours=Math.floor(diff/3600000)%24;

const days=Math.floor(diff/86400000);

timer.innerHTML=`

❤️ ${days} Days

🕒 ${hours} Hours

⏱ ${minutes} Minutes

✨ ${seconds} Seconds

`;

}

setInterval(updateTimer,1000);

updateTimer();
/* ==========================================
   LILY PETALS
========================================== */

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🤍";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=(8+Math.random()*5)+"s";

    petal.style.fontSize=(16+Math.random()*16)+"px";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,700);

/* ==========================================
   SHOOTING STAR
========================================== */

function shootingStar(){

    const star=document.createElement("div");

    star.style.position="fixed";

    star.style.width="3px";

    star.style.height="3px";

    star.style.borderRadius="50%";

    star.style.background="white";

    star.style.boxShadow="0 0 20px white";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top="-20px";

    star.style.zIndex="3";

    document.body.appendChild(star);

    let x=parseFloat(star.style.left);

    let y=-20;

    const move=setInterval(()=>{

        x+=7;

        y+=7;

        star.style.left=x+"px";

        star.style.top=y+"px";

        if(y>window.innerHeight){

            clearInterval(move);

            star.remove();

        }

    },16);

}

setInterval(shootingStar,8000);

/* ==========================================
   BUTTON LINKS
========================================== */

/* Replace these later */

document.getElementById("spotifyBtn").onclick=()=>{

window.open(

"https://spotify.com",

"_blank"

);

}

document.getElementById("tiktokBtn").onclick=()=>{

window.open(

"https://tiktok.com",

"_blank"

);

}

/* ==========================================
   FINAL NOTE
========================================== */

finalBtn.onclick=()=>{

showScene(7);

}

/* ==========================================
   PAGE TITLE ANIMATION
========================================== */

const titles=[

"A Special Delivery 🤍",

"You've Got Mail 💌",

"Open Me 🌸",

"Someone's Thinking Of You 🤍"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex];

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},2500);

/* ==========================================
   FADE MUSIC AT END
========================================== */

function fadeMusic(){

let volume=1;

const fade=setInterval(()=>{

if(volume<=0){

music.pause();

clearInterval(fade);

}

else{

volume-=0.02;

music.volume=volume;

}

},120);

}

finalBtn.addEventListener("click",fadeMusic);

/* ==========================================
   LITTLE SPARKLES
========================================== */

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(12+Math.random()*10)+"px";

s.style.pointerEvents="none";

s.style.opacity=".9";

document.body.appendChild(s);

s.animate([

{

opacity:0,

transform:"scale(.5)"

},

{

opacity:1,

transform:"scale(1.2)"

},

{

opacity:0,

transform:"scale(.5)"

}

],{

duration:2200

});

setTimeout(()=>{

s.remove();

},2200);

}

setInterval(sparkle,1200);

/* ==========================================
   MOBILE VIBRATION
========================================== */

function vibrate(){

if(navigator.vibrate){

navigator.vibrate(40);

}

}

startBtn.addEventListener("click",vibrate);

postman.addEventListener("click",vibrate);

nextGift.addEventListener("click",vibrate);

envelope.addEventListener("click",vibrate);

/* ==========================================
   END
========================================== */
