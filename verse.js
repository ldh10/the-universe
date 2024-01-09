document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch quotes from a .txt file
    async function fetchQuotes() {
        const response = await fetch('quotes.txt');
        const text = await response.text();
        return text.split('\n').filter(line => line.trim() !== ''); // Split lines and remove empty lines
    }

    // Function to get a random quote
    async function getRandomQuote() {
        const quotes = await fetchQuotes();
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    // Display a random quote
    // Display a random quote with dynamic font size
    async function displayRandomQuote() {
        const quoteContainer = document.getElementById('quote');
        const rawQuote = await getRandomQuote();

        // Replace '\n' with '<br>' for line breaks
        const formattedQuote = rawQuote.replace(/\n/g, '<br>');

        quoteContainer.innerHTML = formattedQuote;

        // Adjust font size based on the length of the quote
        const fontSize = calculateFontSize(rawQuote.length);
        quoteContainer.style.fontSize = fontSize + 'px';
    }

    // Function to calculate font size based on quote length
    function calculateFontSize(quoteLength) {
        // You can set your own logic for font size adjustment based on the quote length
        // This is just an example, you may need to adjust these values
        const baseFontSize = 40;
        const fontSizeDecrement = 0.01;

        // Calculate the adjusted font size
        const adjustedFontSize = baseFontSize - fontSizeDecrement * quoteLength;

        // Ensure the font size doesn't go below a minimum value
        const minFontSize = 20;
        return Math.max(adjustedFontSize, minFontSize);
    }
    // Load a random quote on page load
    displayRandomQuote();
});
