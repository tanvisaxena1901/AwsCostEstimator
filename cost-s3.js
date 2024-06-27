// Function to toggle submenu visibility
function toggleSubmenu(submenuId) {
    var submenu = document.getElementById(submenuId);
    if (submenu) {
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    } else {
        console.error(`Submenu with id '${submenuId}' not found.`);
    }
}
function calculateS3Cost() {
    // Get input values
    var storageAmount = document.getElementById('storageAmount').value;
    var accessFrequency = document.getElementById('accessFrequency').value;

    // Initialize cost variables
    var costPerGB = 0;
    var storageCost = 0;

    // Determine cost per GB based on access frequency
    switch(accessFrequency) {
        case 'frequent':
            costPerGB = 0.023; // Example cost per GB for frequent access
            break;
        case 'infrequent':
            costPerGB = 0.0125; // Example cost per GB for infrequent access
            break;
        case 'archive':
            costPerGB = 0.004; // Example cost per GB for archive access
            break;
        default:
            costPerGB = 0;
    }

    // Calculate total storage cost
    storageCost = storageAmount * costPerGB;

    // Display the result
    var resultElement = document.getElementById('costResult');
    resultElement.innerHTML = `<p>Estimated S3 Storage Cost: $${storageCost.toFixed(2)}</p>`;
}
