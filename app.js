// DEBUG VERSION - Temporary file to find the issue
console.log("App.js is loading...");

// First, let's make sure the modal is hidden
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    
    // Force hide the modal
    const modal = document.getElementById('modal');
    if (modal) {
        console.log("Modal found, hiding it...");
        modal.style.display = 'none';
        modal.classList.add('hidden');
    } else {
        console.log("Modal not found!");
    }
    
    // Check all elements
    console.log("Checking for elements:");
    console.log("- gunasthan-list:", document.getElementById('gunasthan-list'));
    console.log("- matrix-table:", document.getElementById('matrix-table'));
    console.log("- Overview tab:", document.getElementById('overview-content'));
    
    // Try to load basic content
    try {
        const list = document.getElementById('gunasthan-list');
        if (list) {
            list.innerHTML = '<div style="padding: 20px;">If you can see this text, JavaScript is working!</div>';
        }
    } catch (error) {
        console.error("Error loading content:", error);
    }
});

// Add error handler
window.addEventListener('error', function(e) {
    console.error("JavaScript Error:", e.message, e.filename, e.lineno);
});

// Simple close modal function
window.closeModal = function() {
    console.log("closeModal called");
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.add('hidden');
    }
}

// Override showTab for testing
window.showTab = function(tabName) {
    console.log("showTab called with:", tabName);
    alert("Tab clicked: " + tabName);
}

console.log("App.js loaded completely");
