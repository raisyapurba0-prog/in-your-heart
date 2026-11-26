document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.getElementById("stars");
    const closingCard = document.querySelector(".closing-card");
    const gameRecapEl = document.getElementById("gameRecap");

    if (starsContainer) {
        const jumlahBintang = 28;
        const simbolBintang = ["✦", "✧", "⋆", "·"];

        for (let i = 0; i < jumlahBintang; i++) {
            const star = document.createElement("span");
            star.className = "star";
            star.textContent = simbolBintang[i % simbolBintang.length];

            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            const ukuran = (Math.random() * 9 + 8).toFixed(1);
            star.style.fontSize = `${ukuran}px`;
            star.style.animationDelay = `${(Math.random() * 3).toFixed(2)}s`;
            star.style.animationDuration = `${(Math.random() * 2 + 2.4).toFixed(2)}s`;

            starsContainer.appendChild(star);
        }
    }

    if (closingCard && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        closingCard.style.animation = "none";
                        void closingCard.offsetWidth;
                        closingCard.style.animation = "cardAppear 1.2s ease both";
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        observer.observe(closingCard);
    }

    const params = new URLSearchParams(window.location.search);
    const skor = params.get("skor");

    if (gameRecapEl && skor !== null && skor.trim() !== "") {
        gameRecapEl.textContent = `Skor mini game Bubub: ${skor} poin ♡`;
        gameRecapEl.classList.remove("hidden");
    }
});