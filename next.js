const paragraphs = [
    { text: "Our love might be very complicated according to both our capabilities and location and distance between us. Regardless, I love you like you’re in front of my eyes.", buttonText: "But what about distance?" },
    { text: "They say what’s apart from eyes is away from the heart, but baby, my heart has never been closer to a person as much.", buttonText: "How do you know that?" },
    { text: "My eyes might not see you every day, and my skin might not feel your touch, but baby, I love you like I’ve felt your touch and tasted your lips, and felt your warmth.", buttonText: "That sounds beautiful..." },
    { text: "Your love warms my heart like a hug in frost cold. My arms long for your embrace, and my lips desire your taste.", buttonText: "What else do you feel?" },
    { text: "Regardless my love, I love you, and I’m waiting for you. I’ll be your supporter, and I’ll do everything I’m capable of to keep us happy.", buttonText: "You’d do that for me?" },
    { text: "I’m sorry about my actions sometimes and I’m sorry about stressing you out sometimes.", buttonText: "Don’t be sorry, love." },
    { text: "I love you with my whole being, you’re my world and my soul’s missing part.", buttonText: "That’s so deep..." },
    { text: "I love you every day like it’s the end of the world, and there is no tomorrow.", buttonText: "I love you too ❤" }
];

let currentIndex = 0;
const messageContainer = document.getElementById("message");

function typeText(text, paragraphElement, index = 0, callback) {
    if (index < text.length) {
        paragraphElement.innerHTML += text[index];
        setTimeout(() => typeText(text, paragraphElement, index + 1, callback), 50);
    } else {
        if (callback) callback(); // Show button after text finishes typing
    }
}

function addNextParagraph() {
    if (currentIndex < paragraphs.length) {
        // Create new paragraph
        const newParagraph = document.createElement("p");
        newParagraph.classList.add("fade-in");
        messageContainer.appendChild(newParagraph);

        // Create button container to center-align
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        messageContainer.appendChild(buttonContainer);

        // Create new button
        const newButton = document.createElement("button");
        newButton.textContent = paragraphs[currentIndex].buttonText;
        newButton.classList.add("next-btn", "hidden"); // Initially hidden
        newButton.disabled = true; // Initially disabled
        buttonContainer.appendChild(newButton);

        // Start typing effect for the new paragraph
        typeText(paragraphs[currentIndex].text, newParagraph, 0, () => {
            newButton.disabled = false; // Enable button after text completes
            newButton.classList.remove("hidden"); // Fade in button
        });

        // Set button click event
        newButton.addEventListener("click", () => {
            newButton.disabled = true; // Disable clicked button
            addNextParagraph(); // Add next paragraph
        });

        currentIndex++;
    }
}

// Initial Load
addNextParagraph();

function createHeartExplosion() {
    for (let i = 0; i < 50; i++) { // Number of hearts
        let heart = document.createElement("div");
        heart.innerHTML = "❤";
        heart.classList.add("heart-explosion");
        document.body.appendChild(heart);

        // Random position & animation
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let scale = Math.random() * 1.5 + 0.5;
        let duration = Math.random() * 1 + 1;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.transform = `scale(${scale})`;
        heart.style.animation = `explode ${duration}s ease-out forwards`;

        // Remove hearts after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}

// Modify button click event for "I love you too"
function addNextParagraph() {
    if (currentIndex < paragraphs.length) {
        const newParagraph = document.createElement("p");
        newParagraph.classList.add("fade-in");
        messageContainer.appendChild(newParagraph);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        messageContainer.appendChild(buttonContainer);

        const newButton = document.createElement("button");
        newButton.textContent = paragraphs[currentIndex].buttonText;
        newButton.classList.add("next-btn", "hidden");
        newButton.disabled = true;
        buttonContainer.appendChild(newButton);

        typeText(paragraphs[currentIndex].text, newParagraph, 0, () => {
            newButton.disabled = false;
            newButton.classList.remove("hidden");
        });

        newButton.addEventListener("click", () => {
            newButton.disabled = true;
            if (newButton.textContent === "I love you too ❤") {
                createHeartExplosion();
            }
            addNextParagraph();
        });

        currentIndex++;
    }
}
