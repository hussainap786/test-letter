/* ==========================
   PREMIUM EFFECTS
========================== */

const body = document.body;

/* Cursor Glow */

const glow = document.createElement("div");
glow.className = "cursor-glow";
body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* Sparkles */

function createSparkle(){

    const s = document.createElement("div");

    s.className = "sparkle";

    s.innerHTML = "✨";

    s.style.left = Math.random()*100 + "vw";

    s.style.top = Math.random()*100 + "vh";

    s.style.fontSize = (12+Math.random()*20)+"px";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },3000);

}

setInterval(createSparkle,700);


/* Falling Roses */

function createRose(){

    const r=document.createElement("div");

    r.className="rose";

    r.innerHTML="🌹";

    r.style.left=Math.random()*100+"vw";

    r.style.fontSize=(18+Math.random()*18)+"px";

    r.style.animationDuration=(5+Math.random()*6)+"s";

    document.body.appendChild(r);

    setTimeout(()=>{

        r.remove();

    },12000);

}

setInterval(createRose,900);


/* Envelope Glow */

const envelope=document.getElementById("envelope");

setInterval(()=>{

    envelope.animate([

        {boxShadow:"0 0 10px #ff4d6d"},

        {boxShadow:"0 0 35px #ff8fab"},

        {boxShadow:"0 0 10px #ff4d6d"}

    ],{

        duration:1800

    });

},2000);



/* Typing Sound */

const audio=new Audio("typing.mp3");

const oldType=typeWriter;

typeWriter=function(){

    if(i<message.length){

        audio.currentTime=0;

        audio.play();

    }

    oldType();

}



/* Surprise Ending */

surpriseBtn.addEventListener("click",()=>{

    document.body.style.background=

    "linear-gradient(135deg,#2b1055,#7597de)";

});
