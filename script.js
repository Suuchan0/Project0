function checkAnswer(num) {
  const resultDiv = document.getElementById('result');
  const winImg = document.getElementById('win-img');
  const confetti = document.getElementById('confetti-canvas');
  const audio = document.getElementById('yeay-audio');
  if (num === 3) {
    resultDiv.textContent = "Benar! Selamat kamu menemukan keluarga si penguin!";
    winImg.classList.remove('hidden');
    confetti.classList.remove('hidden');
    launchConfetti();
    audio.currentTime = 0;
    audio.play();
    // Disable buttons
    document.querySelectorAll('.choices button').forEach(btn => btn.disabled = true);
  } else {
    resultDiv.textContent = "Coba lagi ya!";
    winImg.classList.add('hidden');
    confetti.classList.add('hidden');
  }
}

// Confetti effect
function launchConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 }
    });
  }
}
