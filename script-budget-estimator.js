document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#applicationType").addEventListener("change", showQuestions);
});

function showQuestions() {
    const applicationType = document.querySelector("#applicationType").value;
    document.querySelectorAll('.step').forEach(step => step.style.display = 'none');
    document.querySelector("#step1").style.display = 'block';
    document.querySelector("#selectedApplicationType").innerText = `Selected Application Type: ${applicationType}`;
    document.querySelector("#selectedApplicationType").style.display = 'block';

    if (applicationType === "web") {
        document.querySelector("#componentSelection").style.display = 'block';
    } else if (applicationType === "mobile") {
        document.querySelector("#mobileQuestions").style.display = 'block';
    }
}

function showComponentQuestions() {
    document.querySelector("#componentQuestions").style.display = 'block';
    document.querySelectorAll('.component-question').forEach(question => question.style.display = 'none');

    if (document.querySelector("#componentEC2").checked) {
        document.querySelector("#ec2Questions").style.display = 'block';
    }
    if (document.querySelector("#componentS3").checked) {
        document.querySelector("#s3Questions").style.display = 'block';
    }
    // Add more conditions for other components
}

function calculateEstimate() {
    const applicationType = document.querySelector("#applicationType").value;
    let estimate = 0;
    let summaryText = `Application Type: ${applicationType}\n`;

    if (applicationType === "web") {
        if (document.querySelector("#componentEC2").checked) {
            const ec2InstanceType = document.querySelector("#ec2InstanceType").value;
            const ec2InstanceCount = parseInt(document.querySelector("#ec2InstanceCount").value);
            estimate += ec2InstanceCount * 50; // Example calculation
            summaryText += `EC2 Instance Type: ${ec2InstanceType}, Count: ${ec2InstanceCount}\n`;
        }
        if (document.querySelector("#componentS3").checked) {
            const s3StorageAmount = parseInt(document.querySelector("#s3StorageAmount").value);
            const s3AccessFrequency = document.querySelector("#s3AccessFrequency").value;
            estimate += s3StorageAmount * (s3AccessFrequency === "frequent" ? 0.023 : 0.0125); // Example calculation
            summaryText += `S3 Storage: ${s3StorageAmount} GB, Access Frequency: ${s3AccessFrequency}\n`;
        }
        // Add more calculations for other components
    } else if (applicationType === "mobile") {
        const numberOfUsers = parseInt(document.querySelector("#numberOfUsers").value);
        const monthlyDataTransfer = parseInt(document.querySelector("#monthlyDataTransfer").value);
        const pushNotifications = document.querySelector("#pushNotifications").value;
        const platform = document.querySelector("#platform").value;

        estimate += numberOfUsers * 0.01 + monthlyDataTransfer * 0.02; // Example calculation
        if (pushNotifications === "yes") {
            estimate += numberOfUsers * 0.005; // Example calculation
        }
        summaryText += `Number of Users: ${numberOfUsers}, Monthly Data Transfer: ${monthlyDataTransfer} GB, Push Notifications: ${pushNotifications}, Platform: ${platform}\n`;
    }

    document.querySelector("#budgetSummary").style.display = 'block';
    document.querySelector("#summaryText").innerText = `${summaryText}Estimated Monthly Cost: $${estimate.toFixed(2)}`;
}
