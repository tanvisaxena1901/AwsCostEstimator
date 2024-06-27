function showQuestions() {
    const applicationType = document.getElementById('applicationType').value;
    const applicationTypeName = document.getElementById('applicationType').options[document.getElementById('applicationType').selectedIndex].text;

    // Show selected application type to user
    const selectedApplicationType = document.getElementById('selectedApplicationType');
    selectedApplicationType.textContent = `Selected Application Type: ${applicationTypeName}`;

    // Hide all question sections initially
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });

    // Show the relevant questions based on applicationType
    if (applicationType === 'web') {
        document.getElementById('selectedApplicationType').style.display = 'block';
        document.getElementById('computeQuestions').style.display = 'block';
        document.getElementById('storageQuestions').style.display = 'block';
    } else if (applicationType === 'mobile') {
    document.getElementById('selectedApplicationType').style.display = 'block';
        document.getElementById('mobileQuestions').style.display = 'block';
    } else if (applicationType === 'backend') {
        // Implement questions for Backend Services if needed
        document.getElementById('selectedApplicationType').style.display = 'block';
    }
}

function calculateEstimate() {
    // Implement your budget estimation logic here
    // This function should calculate estimated costs based on user inputs
    // Replace with your actual calculation logic based on AWS pricing or estimates
    let estimate = 0;

    const applicationType = document.getElementById('applicationType').value;

    if (applicationType === 'web') {
        const numInstances = parseInt(document.getElementById('numInstances').value, 10);
        const instanceType = document.getElementById('instanceType').value;
        const storage = parseInt(document.getElementById('storage').value, 10);

        // Example cost calculations for web application
        // Replace with actual cost estimation logic
        const instanceCostPerHour = 1.5; // Example cost in USD
        const storageCostPerGB = 0.1; // Example cost in USD per GB per month

        // Calculate total instance cost for 1 month (720 hours)
        const instanceCostPerMonth = numInstances * instanceCostPerHour * 720;

        // Calculate total storage cost
        const storageCost = storage * storageCostPerGB;

        // Sum up costs for estimation
        estimate = instanceCostPerMonth + storageCost;

    } else if (applicationType === 'mobile') {
        const numberOfUsers = parseInt(document.getElementById('numberOfUsers').value);
        const monthlyDataTransfer = parseInt(document.getElementById('monthlyDataTransfer').value);
        const pushNotifications = document.getElementById('pushNotifications').value;
        const platform = document.getElementById('platform').value;

        // Perform calculations based on inputs
            let costEstimate = 0;

            // Example calculation based on user inputs
            // Adjust these calculations based on your specific cost estimation logic
            costEstimate += numberOfUsers * 10; // Example cost per user
            costEstimate += monthlyDataTransfer * 0.1; // Example cost per GB data transfer

            // Adjust costs based on platform-specific considerations
            switch (platform) {
                case 'iOS':
                    costEstimate += 50; // Example additional cost for iOS platform
                    break;
                case 'Android':
                    costEstimate += 40; // Example additional cost for Android platform
                    break;
                case 'React Native':
                    costEstimate += 30; // Example additional cost for React Native platform
                    break;
                case 'Flutter':
                    costEstimate += 35; // Example additional cost for Flutter platform
                    break;
                // Add more cases as needed for other platforms
                default:
                    break;
            }

            // Example adjustment based on push notifications usage
            if (pushNotifications === 'yes') {
                costEstimate += 20; // Example additional cost for push notifications
            }
        estimate = costEstimate;
    }

    // Display or use the estimate value as needed
    const summaryText = document.getElementById('summaryText');
    summaryText.textContent = `Estimated monthly cost: $${estimate.toFixed(2)}`;

    // Show the budget summary section
    const budgetSummary = document.getElementById('budgetSummary');
    budgetSummary.style.display = 'block';
}
