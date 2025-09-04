// script.js (final optimized version)
document.addEventListener("DOMContentLoaded", () => {
  // elements
  const warningBtn = document.getElementById("warningBtn");
  const warningText = document.getElementById("warningText");
  const readyInput = document.getElementById("readyInput");
  const favQuestion = document.getElementById("favQuestion");
  const yesBtn = document.getElementById("yesBtn");
  const giftSection = document.getElementById("giftSection");
  const giftBox = document.getElementById("giftBox");
  const finalWish = document.getElementById("finalWish");
  const song = document.getElementById("birthdaySong");

  // Verify button create (if not already in HTML)
  let verifyBtn = document.getElementById("verifyBtn");
  if (!verifyBtn) {
    verifyBtn = document.createElement("button");
    verifyBtn.id = "verifyBtn";
    verifyBtn.textContent = "Verify";
    verifyBtn.classList.add("hidden");
    readyInput?.insertAdjacentElement("afterend", verifyBtn);
  }

  // Helper: glow effect
  const flash = (el) => {
    if (!el) return;
    el.style.transition = "box-shadow 0.25s";
    el.style.boxShadow = "0 0 18px rgba(0,255,0,0.8)";
    setTimeout(() => (el.style.boxShadow = ""), 350);
  };

  // Step 1: WarningBtn click
  warningBtn?.addEventListener("click", () => {
    flash(warningBtn);
    warningBtn.classList.add("hidden");
    warningText?.classList.remove("hidden");
    readyInput?.classList.remove("hidden");
    verifyBtn?.classList.remove("hidden");
    readyInput?.focus();
  });

  // Step 2: VerifyBtn click
  verifyBtn?.addEventListener("click", () => {
    const val = readyInput?.value.trim().toLowerCase() || "";
    if (val === "i'm ready" || val === "im ready") {
      warningText?.classList.add("hidden");
      readyInput?.classList.add("hidden");
      verifyBtn?.classList.add("hidden");
      favQuestion?.classList.remove("hidden");
    } else {
      alert("Type exactly: I'm ready");
      readyInput?.focus();
    }
  });

  // Enter key shortcut
  readyInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      verifyBtn?.click();
    }
  });

  // Step 3: YesBtn click
  yesBtn?.addEventListener("click", () => {
    favQuestion?.classList.add("hidden");
    giftSection?.classList.remove("hidden");
  });

  // Step 4: GiftBox click
  giftBox?.addEventListener("click", () => {
    giftBox.classList.add("opened");
    setTimeout(() => {
      giftSection?.classList.add("hidden");
      finalWish?.classList.remove("hidden");

      // play music
      song?.play().catch((err) => console.warn("Audio blocked:", err));

     // Typewriter effect
const msgText = "💖 Happiest Birthday to the most special person of my life 🎂✨. May your life be as beautiful as your smile and as magical as your soul. You deserve all the love, happiness, and success in the world 🌸💫. Thank you for making my world brighter in the beginning and sorry for not being that Arshu whom you want. Well...❤️. Today is all about you—so shine like the star you are ⭐🎉!";
     let msgEl = document.getElementById("personalMsg");
      if (!msgEl) {
        msgEl = document.createElement("p");
        msgEl.id = "personalMsg";
        msgEl.className = "typewriter";
        finalWish.insertBefore(msgEl, finalWish.querySelector(".cyber-text"));
      }
      msgEl.innerText = "";
      let idx = 0;
      const typeChar = () => {
        if (idx < msgText.length) {
          msgEl.innerText += msgText[idx++];
          setTimeout(typeChar, 60);
        } else {
          msgEl.style.borderRight = "none";
        }
      };
      typeChar();

      // Fireworks
      if (typeof startFireworks === "function") {
        startFireworks();
      }
    }, 700);
  });
  
  // Canvas resize (if fireworks used)
  window.addEventListener("resize", () => {
    const canvas = document.getElementById("fireworks");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  });
});
