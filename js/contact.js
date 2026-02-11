document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('form-feedback');
    
    if (!name || !email || !message) {
        feedback.style.display = 'block';
        feedback.style.color = '#ff5555';
        feedback.textContent = 'Please fill in all required fields.';
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        feedback.style.display = 'block';
        feedback.style.color = '#ff5555';
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }
    
    // Simulate successful sending
    feedback.style.display = 'block';
    feedback.style.color = '#00ff88';
    feedback.textContent = 'Message sent! (Demo)';
    this.reset();
});