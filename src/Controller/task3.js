const fs = require('fs');

// Function to count the number of words in a string
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}

// Read the "data.txt" file
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Count the words in the data
    const wordCount = countWords(data);

    // Print the total word count to the console
    console.log('Total word count:', wordCount);
});
