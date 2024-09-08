const applicationForm = document.getElementById('applicationForm');
const resultDiv = document.getElementById('result');

applicationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const    emailAddress = document.getElementById('emailAddress').value;   
    const educationalQualification = document.getElementById('educationalQualification').value;
    const yearsOfExperience = parseInt(document.getElementById('yearsOfExperience').value);

    // Validate age
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 21) {
        resultDiv.innerHTML = "You must be at least 21 years old to apply.";
        return;
    }

    // Validate educational qualification
    if (!educationalQualification.toLowerCase().includes("computer science") && !educationalQualification.toLowerCase().includes("related field")) {
        resultDiv.innerHTML = "You must have a bachelor's degree in computer science or a related field.";
        return;
    }

    // Validate years of experience
    if (yearsOfExperience < 2) {
        resultDiv.innerHTML = "You must have at least 2 years of relevant work experience.";
        return;
    }

    // If all validations pass, submit the form
    resultDiv.innerHTML = "Application submitted successfully!";
});