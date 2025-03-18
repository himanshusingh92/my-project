
 // Toggle mobile menu
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 
 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     hamburger.classList.toggle('active');
 });
 
 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 70,
                 behavior: 'smooth'
             });
             
             // Close mobile menu if open
             if (navLinks.classList.contains('active')) {
                 navLinks.classList.remove('active');
                 hamburger.classList.remove('active');
             }
         }
     });
 });
 
 // Form submission
 const contactForm = document.getElementById('contactForm');
 
 contactForm.addEventListener('submit', function(e) {
     e.preventDefault();
     
     // Get form values
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const subject = document.getElementById('subject').value;
     const message = document.getElementById('message').value;
     
     // Here you would typically send the form data to a server
     // For this example, we'll just show an alert
     alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
     
     // Reset form
     contactForm.reset();
 });
 
 // Scroll reveal animation
 window.addEventListener('scroll', revealOnScroll);
 
 function revealOnScroll() {
     const sections = document.querySelectorAll('section');
     
     sections.forEach(section => {
         const sectionTop = section.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;
         
         if (sectionTop < windowHeight - 100) {
             section.classList.add('revealed');
         }
     });
 }
 
 // Call once on page load
 revealOnScroll();
