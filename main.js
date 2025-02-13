document.addEventListener("DOMContentLoaded", function () {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart-rain");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = 3 + Math.random() * 2 + "s"; // Random fall speed
        heart.style.fontSize = Math.random() * 20 + 15 + "px"; // Random sizes
        heart.style.opacity = Math.random() * 0.7 + 0.3; // Random opacity
        document.querySelector(".card").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});


next = () =>{
  window.location.href = 'next.html'
}
