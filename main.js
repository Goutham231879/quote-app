// script.js

// Fetch and display a quote
async function getQuote() {
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");

  quoteText.textContent = "Loading...";
  authorText.textContent = "";

  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Failed to fetch quote. Try again.";
    authorText.textContent = "";
  }
}

// Copy the current quote to clipboard
function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;
  const fullQuote = `${quote} ${author}`;

  navigator.clipboard.writeText(fullQuote).then(() => {
    alert("Quote copied to clipboard!");
  }).catch(() => {
    alert("Failed to copy.");
  });
}

// Load initial quote
getQuote();
