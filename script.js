// === Skills Toggle Functionality ===
function toggleSkill(id, event) {
    event.stopPropagation();
    
    const detail = document.getElementById(id);
    const allDetails = document.querySelectorAll('.detail');
    const allCells = document.querySelectorAll('.skills td');
    
    // Close other details
    allDetails.forEach(d => {
        if (d !== detail) d.classList.remove('active');
    });
    
    // Remove active from other cells
    allCells.forEach(c => {
        if (!c.hasAttribute('colspan')) {
            c.classList.remove('active');
        }
    });
    
    // Toggle current
    if (detail) {
        detail.classList.toggle('active');
        event.target.classList.toggle('active');
    }
}

// === Global Click Handler ===
document.addEventListener('click', function(event) {
    if (!event.target.closest('.skills')) {
        closeAllSkills();
    }
});

// === Helper Functions ===
function closeAllSkills() {
    document.querySelectorAll('.detail').forEach(d => {
        d.classList.remove('active');
    });
    document.querySelectorAll('.skills td').forEach(c => {
        if (!c.hasAttribute('colspan')) {
            c.classList.remove('active');
        }
    });
}

// === Keyboard Navigation (Optional Enhancement) ===
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllSkills();
    }
});

// === Contact Obfuscation ===
function deobfuscateContacts() {
    // Email: alborz.sabet@gmail.com (encoded as reversed base64-like string)
    const emailData = 'bW9jLmxpYW1nQHRlYmFzLnpyb2JsYQ=='; // reversed email in base64
    const email = atob(emailData).split('').reverse().join('');
    
    // Phone: +45 28961139 (simple character shift)
    const phoneData = '+67*4:;8335;';
    const phone = phoneData.split('').map(c => {
        if (c >= '0' && c <= '9') return String.fromCharCode(c.charCodeAt(0) - 2);
        if (c === '*') return ' ';
        if (c === ':') return '8';
        if (c === ';') return '9';
        return c;
    }).join('');
    
    // Set the links
    const emailLink = document.getElementById('email-link');
    const phoneLink = document.getElementById('phone-link');
    
    if (emailLink) {
        emailLink.href = `mailto:${email}`;
    }
    
    if (phoneLink) {
        phoneLink.href = `tel:${phone}`;
    }
}

// Deobfuscate when page loads
document.addEventListener('DOMContentLoaded', deobfuscateContacts);