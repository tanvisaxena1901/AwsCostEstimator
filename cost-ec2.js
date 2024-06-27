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
// cost-ec2.js
// cost-ec2.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any required functionality after the DOM is fully loaded
});

function calculateEC2Cost() {
    // Get input values
    var instanceType = document.getElementById('instanceType').value;
    var region = document.getElementById('region').value;
    var usageHours = document.getElementById('usageHours').value;

    // Initialize cost variables
    var costPerHour = 0;
    var totalCost = 0;

    // Determine cost per hour based on instance type and region
    var pricing = {
        "us-east-1": {
            "t2.micro": 0.0116,
            "t2.small": 0.023,
            "m5.large": 0.096
        },
        "us-west-1": {
            "t2.micro": 0.013,
            "t2.small": 0.026,
            "m5.large": 0.108
        },
        "eu-west-1": {
            "t2.micro": 0.012,
            "t2.small": 0.024,
            "m5.large": 0.1
        }
    };

    if (pricing[region] && pricing[region][instanceType]) {
        costPerHour = pricing[region][instanceType];
    } else {
        alert("Pricing information for the selected instance type and region is not available.");
        return;
    }

    // Calculate total cost
    totalCost = costPerHour * usageHours;

    // Display the result
    var resultElement = document.getElementById('costResult');
    resultElement.innerHTML = `<p>Estimated EC2 Cost: $${totalCost.toFixed(2)}</p>`;
}

