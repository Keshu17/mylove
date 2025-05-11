// Page Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Switch active page
        document.querySelector('.page.active').classList.remove('active');
        document.getElementById(btn.dataset.page).classList.add('active');
        
        // Update active button
        document.querySelector('.nav-btn.active').classList.remove('active');
        btn.classList.add('active');
        
        // Trigger memory card animations
        if(btn.dataset.page === 'memories') {
            document.querySelectorAll('.memory-card').forEach((card, index) => {
                setTimeout(() => card.classList.add('show'), index * 200);
            });
        }
    });
});

// Unmute and play audio on user click
document.addEventListener('click', () => {
    const video = document.getElementById('myVideo');
    video.muted = false; // Unmute
    video.play(); // Restart with sound (optional)
  });