
document.addEventListener('DOMContentLoaded', function() {
    // Listen for messages from background.js
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "update_popup") {
            document.getElementById('result').textContent = message.data || "No data found";
        }
    });
});
