// WhatsApp integration
function chatOnWhatsApp(product, price) {
  const phone = '971558132128'; // WhatsApp business number
  let message = `Hi, I'm interested in your product: ${product}`;
  
  if(price > 0) {
    message += ` for Rs. ${price}`;
  }
  
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Add event listeners to WhatsApp buttons
document.querySelectorAll('.whatsapp-btn').forEach(button => {
  button.addEventListener('click', function() {
    const product = this.dataset.product;
    const price = this.dataset.price;
    chatOnWhatsApp(product, price);
  });
});

// Hero WhatsApp button
document.getElementById('hero-whatsapp').addEventListener('click', function() {
  chatOnWhatsApp('UjalaDeals Products', 0);
});

// Bundle WhatsApp button
document.getElementById('bundle-whatsapp').addEventListener('click', function() {
  chatOnWhatsApp('All-in-One Bundle', 1299);
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Account and Cart functionality
document.getElementById('account-btn').addEventListener('click', function() {
  alert('We are going to add this feature very soon. Currently, this feature is not available.');
});

document.querySelector('.cart-icon').addEventListener('click', function() {
  alert('We are going to add this feature very soon. Currently, this feature is not available.');
});

// Add button animations for interactivity
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });
  
  button.addEventListener('mouseup', () => {
    button.style.transform = '';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});