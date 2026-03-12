const sayangBtn = document.getElementById("sayangBtn");
function createFallingHearts(total = 24) {
  for (let i = 0; i < total; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.innerHTML = "&#10084;";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${16 + Math.random() * 18}px`;
    heart.style.animationDuration = `${2 + Math.random() * 2.5}s`;
    heart.style.animationDelay = `${Math.random() * 0.8}s`;

    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

if (sayangBtn) {
  sayangBtn.addEventListener("click", () => {
    sayangBtn.textContent = "Aku juga sayang kamu";
    createFallingHearts();
  });
}
