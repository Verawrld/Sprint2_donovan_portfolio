function toggleMenu() {
  const menu = document.querySelector(".menulinks");
  const icon = document.querySelector(".hamburgericon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const quotes = [
  "The best way to predict the future is to invent it. - Alan Kay",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
];

function shuffleQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").innerText = quotes[randomIndex];
}

// Display a random quote on page load
document.addEventListener("DOMContentLoaded", shuffleQuote);

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!",
];

function shuffleJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke-text").innerText = jokes[randomIndex];
}

// Display a random joke on page load
document.addEventListener("DOMContentLoaded", shuffleJoke);
