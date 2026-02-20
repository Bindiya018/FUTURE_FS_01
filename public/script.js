document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  try {
    const response = await fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.text();  // IMPORTANT

    if (response.ok) {
      alert("Message sent successfully ✅");
    } else {
      alert("Failed to send ❌");
    }

  } catch (error) {
    console.error(error);
    alert("Error sending message ❌");
  }
});
const textArray = ["Full Stack Developer", "Frontend Enthusiast", "Problem Solver"];
let typingIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  currentText = textArray[typingIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
