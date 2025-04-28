
// background.js - Handles API calls to BAXUS
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "fetch_baxus") {
        fetch(`https://services.baxus.co/api/search/listings?from=0&size=20&listed=true&q=${encodeURIComponent(message.query)}`)
            .then(res => res.json())
            .then(data => sendResponse({ data }))
            .catch(err => sendResponse({ error: err }));
        
        return true; // Keep the message channel open for async response
    }
});
