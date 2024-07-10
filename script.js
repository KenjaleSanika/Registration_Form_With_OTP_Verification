emailjs.init("74W1UtTamQzqGpsc9");  // Replace with your EmailJs user ID

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOTP() {
    const email = document.getElementById("email").value;
    const otp = generateOTP();
    
    localStorage.setItem('generatedOTP', otp);  // Store OTP locally for verification
    
    const templateParams = {
        to_email: email,
        otp: otp
    };

    emailjs.send('service_w1pgd0k', 'template_5uei8zg', templateParams)
        .then((response) => {
            alert('OTP sent successfully!');
        }, (error) => {
            alert('Failed to send OTP. Please try again.');
            console.log('FAILED...', error);
        });
}

function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;
    const generatedOTP = localStorage.getItem('generatedOTP');
    
    if (enteredOTP === generatedOTP) {
        alert('OTP verified successfully!');
        document.querySelector('form button[type="submit"]').disabled = false;
    } else {
        alert('Invalid OTP. Please try again.');
    }
}



