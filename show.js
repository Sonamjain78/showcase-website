// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Add smooth scrolling to anchor links
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  });

  // Interactive demo button event listener
  const demoButtons = document.querySelectorAll('.customize-btn');

  demoButtons.forEach(button => {
      button.addEventListener('click', function () {
          const demoTitle = this.parentElement.querySelector('h4').innerText;
          alert(`You clicked on ${demoTitle}! Customize your experience!`);
      });
  });

  // Form validation and submission
  const contactForm = document.querySelector('.contact-section form');

  contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      const name = this.querySelector('input[name="name"]').value;
      const email = this.querySelector('input[name="email"]').value;
      const message = this.querySelector('textarea[name="details"]').value;

      if (name && email && message) {
          alert(`Thank you, ${name}! Your message has been received.`);
          this.reset(); // Clear the form after submission
      } else {
          alert('Please fill out all fields before submitting.');
      }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item h3');

  faqItems.forEach(item => {
      item.addEventListener('click', () => {
          const answer = item.nextElementSibling;
          answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
  });
});
