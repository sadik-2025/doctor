document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation on scroll
    const scrollReveal = () => {
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    // Initial call to reveal elements on load
    scrollReveal();

    // Booking Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    const formSuccess = document.getElementById('formSuccess');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(appointmentForm);
            const data = Object.fromEntries(formData.entries());

            console.log('Appointment Request Received:', data);

            // Simulate API call
            const submitBtn = appointmentForm.querySelector('button');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';

            setTimeout(() => {
                appointmentForm.classList.add('hidden');
                formSuccess.classList.remove('hidden');

                // Reset form (optional)
                appointmentForm.reset();
            }, 1500);
        });
    }

    // Floor List Interactivity
    const floorItems = document.querySelectorAll('.floor-item');
    floorItems.forEach(item => {
        item.addEventListener('click', () => {
            floorItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Navbar transparency on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.7)';
        }
    });

    // Mobile Menu Toggle (Simplified)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // In a real production app, we'd add a mobile menu overlay
            // For this demo, we'll just alert or toggle a class if needed
            alert('Mobile menu functionality would be expanded here.');
        });
    }
});
