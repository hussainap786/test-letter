const envelope = document.getElementById("envelope");
const typewriter = document.getElementById("typewriter");
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

const message = `Hey,

I don't know if you expected this,
but I wanted to remind you that
you are someone truly special.

Every smile, every conversation,
and every little moment with you
means more than you know.

Thank you for being you.

❤️`;

let i = 0;

envelope.addEventListener("click", () => {

    if (!envelope.classList.contains("open")) {

        envelope.classList.add("open");

        typeWriter();

    }

});

function typeWriter() {

    if (i < message.length) {

        typewriter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 45);

    } else {

        surpriseBtn.style.display = "block";

    }

}

musicBtn.addEventListener("click", () => {

    if (song.paused) {

        song.play();

        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        song.pause();

        musicBtn.innerHTML = "🎵 Play Music";

    }

});

surpriseBtn.addEventListener("click", () => {

    surprise.classList.add("show");

    createConfetti();

});

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = 5 + Math.random() * 5 + "s";

    heart.style.fontSize = 15 + Math.random() * 25 + "px";

    document.querySelector(".background-hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 400);

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

let confetti = [];

function createConfetti() {

    confetti = [];

    for (let i = 0; i < 250; i++) {

        confetti.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            r: Math.random() * 6 + 2,

            d: Math.random() * 250,

            color: `hsl(${Math.random() * 360},100%,70%)`,

            tilt: Math.random() * 10

        });

    }

    animateConfetti();

}

function animateConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {

        ctx.beginPath();

        ctx.fillStyle = c.color;

        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);

        ctx.fill();

        c.y += 3;
        c.x += Math.sin(c.d);

        if (c.y > canvas.height) {

            c.y = -10;

        }

    });

    requestAnimationFrame(animateConfetti);

}
