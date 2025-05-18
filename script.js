function showLove() {
    const messages = [
      "Aku cinta kamu lebih dari apapun! ❤️",
      "Kamu itu spesial banget buat aku 😘",
      "Hari-hariku jadi indah karena kamu 🌸",
      "Jangan pernah lupa kalau aku sayang banget sama kamu 💕",
      "Selamanya kamu dan aku 💍"
    ];
  
    const loveDiv = document.getElementById('love-message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    loveDiv.textContent = randomMessage;
  }
  