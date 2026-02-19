document.getElementById("contactForm")
.addEventListener("submit", async function(e) {
  e.preventDefault();

  const responseMsg = document.getElementById("responseMsg");
  responseMsg.innerText = "Sending message... ⏳";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (data.success) {
      responseMsg.innerText = "Message sent successfully 🚀";
      document.getElementById("contactForm").reset();
    } else {
      responseMsg.innerText = "Failed to send ❌";
    }
  } catch (error) {
    responseMsg.innerText = "Server error ⚠️";
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
