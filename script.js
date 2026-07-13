/* ==========================================
   ELEMENTS
========================================== */

const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

const surprise = document.getElementById("surprise");
const gallery = document.getElementById("gallery");

const galleryBtn = document.getElementById("galleryBtn");
const closeGallery = document.getElementById("closeGallery");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

/* ==========================================
   LETTER MESSAGE
========================================== */

const text = `Hey,

I wasn't sure how to say all of this,
so I decided to make something instead.

Every conversation with you,
every smile,
every little memory...

means more to me than you know.

Thank you for being part of my life.

❤️`;

let index = 0;

/* ==========================================
   OPEN ENVELOPE
========================================== */

envelope.addEventListener("click",()=>{

    if(envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    typeWriter();

});

/* ==========================================
   TYPEWRITER
========================================== */

function typeWriter(){

    if(index < text.length){

        message.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,35);

    }

    else{

        nextBtn.style.display="block";

    }

}

/* ==========================================
   MUSIC
========================================== */

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

    }

});

/* ==========================================
   NEXT BUTTON
========================================== */

nextBtn.addEventListener("click",()=>{

    surprise.classList.add("show");

});

/* ==========================================
   OPEN GALLERY
========================================== */

galleryBtn.addEventListener("click",()=>{

    gallery.classList.add("show");

});

/* ==========================================
   CLOSE GALLERY
========================================== */

closeGallery.addEventListener("click",()=>{

    gallery.classList.remove("show");

});

/* ==========================================
   FLOATING HEARTS
========================================== */

const hearts=document.querySelector(".hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,450);
/* ==========================================
   CONFETTI
========================================== */

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let confetti = [];

function createConfetti() {

    confetti = [];

    for (let i = 0; i < 220; i++) {

        confetti.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,

            r: Math.random() * 6 + 2,

            color: `hsl(${Math.random()*360},100%,65%)`,

            speed: Math.random()*3+2,

            drift: Math.random()*2-1

        });

    }

    animateConfetti();

}

function animateConfetti(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    confetti.forEach(c=>{

        ctx.beginPath();

        ctx.fillStyle=c.color;

        ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

        ctx.fill();

        c.y+=c.speed;

        c.x+=c.drift;

        if(c.y>canvas.height){

            c.y=-20;

        }

    });

    requestAnimationFrame(animateConfetti);

}

/* ==========================================
   SHOW CONFETTI
========================================== */

galleryBtn.addEventListener("click",()=>{

    createConfetti();

});

/* ==========================================
   TWINKLING STARS
========================================== */

const stars=document.querySelector(".stars");

function sparkle(){

    stars.animate([

        {opacity:.25},

        {opacity:.5},

        {opacity:.25}

    ],{

        duration:2500,

        iterations:1

    });

}

setInterval(sparkle,2500);

/* ==========================================
   CURSOR GLOW
========================================== */

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="25px";
glow.style.height="25px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="rgba(255,120,170,.35)";
glow.style.filter="blur(12px)";
glow.style.zIndex="9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX-12+"px";
    glow.style.top=e.clientY-12+"px";

});

/* ==========================================
   FALLING ROSES
========================================== */

function rose(){

    const r=document.createElement("div");

    r.innerHTML="🌹";

    r.style.position="fixed";

    r.style.left=Math.random()*100+"vw";

    r.style.top="-50px";

    r.style.fontSize=(20+Math.random()*18)+"px";

    r.style.pointerEvents="none";

    r.style.zIndex="2";

    document.body.appendChild(r);

    let y=-50;

    const fall=setInterval(()=>{

        y+=2;

        r.style.top=y+"px";

        r.style.transform=`rotate(${y}deg)`;

        if(y>window.innerHeight){

            clearInterval(fall);

            r.remove();

        }

    },16);

}

setInterval(rose,1800);

/* ==========================================
   ENVELOPE GLOW
========================================== */

setInterval(()=>{

    envelope.animate([

        {

            boxShadow:"0 0 10px rgba(255,80,120,.2)"

        },

        {

            boxShadow:"0 0 45px rgba(255,80,120,.8)"

        },

        {

            boxShadow:"0 0 10px rgba(255,80,120,.2)"

        }

    ],{

        duration:1800

    });

},2000);

/* ==========================================
   END
========================================== */
