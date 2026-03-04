// emailjs-contact.js
// Handles contact form submission using EmailJS

(function(){
    emailjs.init('R85GNdRck8bfOErDc'); // <-- Replace with your EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact-right form');
    if (!form) return;
    var statusDiv = document.getElementById('contact-form-status');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            statusDiv.textContent = 'Sending...';
            emailjs.sendForm('service_2kcs6io', 'template_p1yk5se', form)
                .then(function() {
                    statusDiv.textContent = 'Message sent successfully!';
                    form.reset();
                    setTimeout(function() { statusDiv.textContent = ''; }, 30000);
                }, function(error) {
                    statusDiv.textContent = 'Failed to send message. Please try again later.';
                    setTimeout(function() { statusDiv.textContent = ''; }, 30000);
                });
        });
});
