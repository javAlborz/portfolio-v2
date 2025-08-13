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