/*==================================================
        A SPECIAL DELIVERY
        Script Part 1
==================================================*/

/* =====================
   ELEMENTS
===================== */

const scenes = document.querySelectorAll(".scene");

const loading = document.getElementById("loading");

const beginBtn = document.getElementById("begin");

const postman = document.getElementById("postman");

const acceptFlowers = document.getElementById("acceptFlowers");

const envelope = document.getElementById("envelope");

const continueBtn = document.getElementById("continue");

const finalBtn = document.getElementById("finalMessage");

const timer = document.getElementById("timer");

const petalsContainer = document.getElementById("petals");

const music = document.getElementById("music");

const typewriter = document.getElementById("typewriter");

/* =====================
   LETTER
===================== */

const letter = `

Dear You,

This is where your love letter will appear.

We'll replace this later with your actual letter.

Everything will be typed beautifully,
one letter at a time.

🤍

`;

/* =====================
   LOADING
===================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

loading.style.opacity="0";

loading.style.pointerEvents="none";

setTimeout(()=>{

loading.style.display="none";

},1000);

},2200);

});

/* =====================
   SCENE SWITCH
===================== */

function showScene(scene){

scenes.forEach(item=>{

item.classList.remove("active");

});

document
.getElementById(scene)
.classList.add("active");

}

/* =====================
   STORY
===================== */

beginBtn.addEventListener("click",()=>{

showScene("scene2");

});

postman.addEventListener("click",()=>{

showScene("scene3");

});

acceptFlowers.addEventListener("click",()=>{

showScene("scene4");

});

envelope.addEventListener("click",()=>{

envelope.style.transform="scale(1.1)";

setTimeout(()=>{

showScene("scene5");

music.play();

typeWriter();

},900);

});

/* =====================
   TYPEWRITER
===================== */

let index=0;

function typeWriter(){

if(index<letter.length){

typewriter.innerHTML+=letter.charAt(index);

index++;

setTimeout(typeWriter,38);

}

else{

continueBtn.style.display="block";

}

}

/* =====================
   CONTINUE
===================== */

continueBtn.addEventListener("click",()=>{

showScene("scene6");

});

/* =====================
   FINAL BUTTON
===================== */

finalBtn.addEventListener("click",()=>{

showScene("scene7");

});
/*==================================================
        SCRIPT PART 2
        TIMER + PETALS + SPARKLES
==================================================*/

/* =====================
   LIVE TIMER
===================== */

const meetDate = new Date("2023-04-19T00:00:00");

function updateTimer(){

    const now = new Date();

    let difference = now - meetDate;

    const seconds = Math.floor(difference / 1000) % 60;

    const minutes = Math.floor(difference / 60000) % 60;

    const hours = Math.floor(difference / 3600000) % 24;

    const totalDays = Math.floor(difference / 86400000);

    const years = Math.floor(totalDays / 365);

    const months = Math.floor((totalDays % 365) / 30);

    const days = Math.floor((totalDays % 365) % 30);

    timer.innerHTML = `

❤️ ${years} Years<br>

🌸 ${months} Months<br>

☀️ ${days} Days<br>

🕒 ${hours} Hours<br>

⏱️ ${minutes} Minutes<br>

✨ ${seconds} Seconds

`;

}

updateTimer();

setInterval(updateTimer,1000);

/* =====================
   FALLING PETALS
===================== */

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
    (8 + Math.random()*5)+"s";

    petal.style.fontSize =
    (16 + Math.random()*18)+"px";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,700);

/* =====================
   SPARKLES
===================== */

function sparkle(){

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=
    (10+Math.random()*12)+"px";

    star.style.pointerEvents="none";

    star.style.opacity=".8";

    document.body.appendChild(star);

    star.animate([

        {

            opacity:0,

            transform:"scale(.3)"

        },

        {

            opacity:1,

            transform:"scale(1.3)"

        },

        {

            opacity:0,

            transform:"scale(.3)"

        }

    ],{

        duration:2200

    });

    setTimeout(()=>{

        star.remove();

    },2200);

}

setInterval(sparkle,1500);

/* =====================
   SHOOTING STARS
===================== */

function shootingStar(){

    const star=document.createElement("div");

    star.style.position="fixed";

    star.style.width="3px";

    star.style.height="3px";

    star.style.background="white";

    star.style.borderRadius="50%";

    star.style.boxShadow="0 0 18px white";

    star.style.left=
    Math.random()*window.innerWidth+"px";

    star.style.top="-20px";

    document.body.appendChild(star);

    let x=parseFloat(star.style.left);

    let y=-20;

    const animation=setInterval(()=>{

        x+=8;

        y+=8;

        star.style.left=x+"px";

        star.style.top=y+"px";

        if(y>window.innerHeight){

            clearInterval(animation);

            star.remove();

        }

    },16);

}

setInterval(shootingStar,9000);
/*==================================================
        SCRIPT PART 3
    ENVELOPE + MUSIC + EFFECTS
==================================================*/

/* =====================
   ENVELOPE ANIMATION
===================== */

envelope.addEventListener("mouseenter",()=>{

    envelope.style.transform="scale(1.05) rotate(-3deg)";

});

envelope.addEventListener("mouseleave",()=>{

    envelope.style.transform="scale(1)";

});

/* =====================
   OPEN ENVELOPE
===================== */

function openEnvelope(){

    envelope.style.transition="1s";

    envelope.style.transform="scale(1.15) rotate(5deg)";

    createSparkleBurst();

    setTimeout(()=>{

        showScene("scene5");

        startMusic();

        typeWriter();

    },1200);

}

/* =====================
   MUSIC
===================== */

function startMusic(){

    music.volume=0;

    music.play();

    let volume=0;

    const fade=setInterval(()=>{

        volume+=0.05;

        music.volume=volume;

        if(volume>=1){

            clearInterval(fade);

        }

    },150);

}

/* =====================
   MUSIC FADE OUT
===================== */

function stopMusic(){

    let volume=music.volume;

    const fade=setInterval(()=>{

        volume-=0.03;

        music.volume=volume;

        if(volume<=0){

            music.pause();

            clearInterval(fade);

        }

    },120);

}

/* =====================
   SPARKLE BURST
===================== */

function createSparkleBurst(){

    for(let i=0;i<25;i++){

        const sparkle=document.createElement("div");

        sparkle.innerHTML="✨";

        sparkle.style.position="fixed";

        sparkle.style.left="50%";

        sparkle.style.top="50%";

        sparkle.style.fontSize=(18+Math.random()*10)+"px";

        sparkle.style.pointerEvents="none";

        document.body.appendChild(sparkle);

        const x=(Math.random()-0.5)*500;

        const y=(Math.random()-0.5)*500;

        sparkle.animate([

            {

                transform:"translate(0,0) scale(.3)",

                opacity:1

            },

            {

                transform:`translate(${x}px,${y}px) scale(1.3)`,

                opacity:0

            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        setTimeout(()=>{

            sparkle.remove();

        },1800);

    }

}

/* =====================
   BUTTON HOVER SOUND
===================== */

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/* =====================
   MOBILE VIBRATION
===================== */

function vibrate(){

    if(navigator.vibrate){

        navigator.vibrate(40);

    }

}

beginBtn.addEventListener("click",vibrate);

postman.addEventListener("click",vibrate);

acceptFlowers.addEventListener("click",vibrate);

envelope.addEventListener("click",vibrate);

/* =====================
   FINAL BUTTON
===================== */

finalBtn.addEventListener("click",()=>{

    stopMusic();

});

/* =====================
   TAB TITLE
===================== */

const titles=[

"A Special Delivery 🤍",

"You've Got Mail 💌",

"Someone Is Thinking Of You 🌸",

"Open Me 🤍"

];

let currentTitle=0;

setInterval(()=>{

    document.title=titles[currentTitle];

    currentTitle++;

    if(currentTitle>=titles.length){

        currentTitle=0;

    }

},3000);

/* =====================
   END PART 3
===================== */
/*==================================================
        SCRIPT PART 4
        FINAL POLISH
==================================================*/

/* =====================
   ENVELOPE CLICK
===================== */

envelope.onclick = () => {

    openEnvelope();

};

/* =====================
   FINAL MESSAGE
===================== */

const finalMessage = `

Thank you for reading my heart.

I hope this little surprise
made you smile.

🤍

No matter how much time passes...

You'll always be someone
very special to me.

🌸

`;

/* =====================
   FINAL NOTE POPUP
===================== */

finalBtn.addEventListener("click", () => {

    const box = document.createElement("div");

    box.className = "popup";

    box.innerHTML = `

        <div class="popupCard">

            <h2>🤍</h2>

            <p>${finalMessage.replace(/\n/g,"<br>")}</p>

            <button id="closePopup">

                Close

            </button>

        </div>

    `;

    document.body.appendChild(box);

    document
    .getElementById("closePopup")
    .onclick = () => {

        box.remove();

        showScene("scene7");

    };

});

/* =====================
   FADE IN SCENES
===================== */

function fadeScene(sceneID){

    scenes.forEach(scene=>{

        scene.style.opacity="0";

        scene.classList.remove("active");

    });

    setTimeout(()=>{

        document
        .getElementById(sceneID)
        .classList.add("active");

        document
        .getElementById(sceneID)
        .style.opacity="1";

    },400);

}

/* =====================
   EXTRA PETALS
===================== */

setInterval(()=>{

    if(document.getElementById("scene5").classList.contains("active")){

        createPetal();

    }

},500);

/* =====================
   GLOWING MOON
===================== */

const moon = document.getElementById("moon");

let glow = 0;

setInterval(()=>{

    glow++;

    moon.style.boxShadow =

    `0 0 ${35+Math.sin(glow/8)*12}px #fff9d8,
     0 0 ${90+Math.sin(glow/8)*20}px rgba(255,255,220,.4)`;

},120);

/* =====================
   TYPEWRITER CURSOR
===================== */

setInterval(()=>{

    if(typewriter.innerHTML.endsWith("|")){

        typewriter.innerHTML=
        typewriter.innerHTML.slice(0,-1);

    }

    else{

        typewriter.innerHTML+="|";

    }

},550);

/* =====================
   CONSOLE MESSAGE
===================== */

console.log(

"%c🤍 A Special Delivery",

"font-size:22px;color:pink;font-weight:bold;"

);

console.log(

"%cMade with love by Rocky.",

"font-size:14px;color:white;"

);

/* =====================
   END
===================== */
