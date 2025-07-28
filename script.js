function calculateAge() {
    const birthDateInput = document.getElementById('birthDate');
    const birthDate = new Date(birthDateInput.value);

    if (isNaN(birthDate) || birthDate > new Date()) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
    } else {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const hasBirthdayPassed = 
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
        if (!hasBirthdayPassed) {
            age--;

    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
        
}