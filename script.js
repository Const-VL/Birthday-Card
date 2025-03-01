const texts = [
    "Selamat datang di undangan spesial ini!",
    "Kamu diundang ke acara yang sangat istimewa",
    "Afifa Sukma akan merayakan ulang tahunnya yang ke-17!"
];
let index = 0;

function showNextText() {
    if (index < texts.length) {
        const textElement = document.createElement("div");
        textElement.classList.add("intro-text");
        textElement.textContent = texts[index];
        document.getElementById("intro-container").innerHTML = "";
        document.getElementById("intro-container").appendChild(textElement);
        index++;
        setTimeout(showNextText, 4000);
    } else {
        document.getElementById('intro-container').style.display = 'none';
        document.getElementById("card-container").style.display = "block";
    }
}
showNextText();

function openCard() {
    document.getElementById("card").classList.add("open");
    document.querySelector('.card-cover').classList.add('close')

    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        document.body.appendChild(balloon);

        balloon.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDuration = `${Math.random() * 3 + 3}s`;
    }
}

function closeCard() {
    document.getElementById("card-container").classList.remove("open");
}

// Hitung Mundur
function startCountdown() {
    const targetDate = new Date("2025-03-05T00:00:00"); // Target date: 5 March 2025
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            countdownElement.textContent = "Acara dimulai sekarang!";
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
        }
    }

    setInterval(updateCountdown, 1000); // Update every second
}

startCountdown();

// Navbar section toggle
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 

        
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });

        // Menampilkan section yang terkait dengan link yang diklik
        const targetId = item.getAttribute('href').substring(1); // Mengambil ID dari href (misalnya "detail-acara")
        const targetSection = document.getElementById(targetId);
        targetSection.style.display = 'block';
    });
});
