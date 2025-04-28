
// content.js - Sample logic to scrape bottle information
console.log("BAXUS Comparer activated!");

// Example scrape (you would need to fine-tune for each website):
let bottleName = document.querySelector('h1.product-title')?.textContent || "Not Found";
let price = document.querySelector('.product-price')?.textContent || "Not Found";
let vintage = document.querySelector('.vintage')?.textContent || "Not Found";

// Send message to background.js to perform the API search
chrome.runtime.sendMessage({
    type: "fetch_baxus",
    query: `${bottleName} ${vintage}`
}, response => {
    console.log('BAXUS Response:', response.data);
});
