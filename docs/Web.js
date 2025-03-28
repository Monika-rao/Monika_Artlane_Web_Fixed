// Toggle Sections
function showSection(section) {
    document.querySelector('.main').style.display = section === 'home' ? 'flex' : 'none';
    document.querySelector('.trend').style.display = section === 'shop' ? 'block' : 'none';
    document.querySelector('.about').style.display = section === 'about' ? 'block' : 'none';
    document.querySelector('.contact').style.display = section === 'contact' ? 'block' : 'none';
    document.querySelector('.cart').style.display = 'none';

    // Highlight active menu
    document.querySelectorAll('nav a').forEach(a => a.style.color = '#dad6dc');
    if (section !== 'home') document.getElementById(section).style.color = 'rgb(2, 173, 173)';
}

// Cart Functions
function showCart(imgElement) {
    document.getElementById('newImg').src = imgElement.src;
    document.querySelector('.cart').style.display = 'flex';
    document.querySelector('.main').style.display = 'none';
}

//via whatsapp
function openWhatsApp() {
    const phoneNumber = "916265094035"; // With country code
    const message = "Hi! I'm interested in your artwork.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
}

function openInstagramDM() {
    const instagramUsername = "monika_artlane"; // Replace with your IG username
    const message = "Hi! I'm interested in your artwork. Can we discuss pricing and availability?";
    
    // Instagram DM deep link (works on mobile)
    const mobileUrl = `instagram://direct?username=${instagramUsername}&text=${encodeURIComponent(message)}`;
    
    // Web fallback URL
    const webUrl = `https://www.instagram.com/${instagramUsername}/`;
    
    // Try mobile first, fallback to web
    window.location.href = mobileUrl;
    setTimeout(() => {
        if (document.hidden) {
            window.location.href = webUrl;
        }
    }, 500);
}

function adjustViewport() {
    document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }
  window.addEventListener('resize', adjustViewport);
  adjustViewport();
  

// Initialize
showSection('home');