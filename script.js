// Smooth scroll reveal animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Add subtle parallax effect on mouse move
    const container = document.querySelector('.container');
    const logo = document.getElementById('logo');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Subtle parallax movement
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        
        logo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    // Optional: Add typing effect to tagline
    const tagline = document.getElementById('tagline');
    const originalText = tagline.textContent;
    
    // Uncomment below if you want typing effect
    /*
    tagline.textContent = '';
    let charIndex = 0;
    
    setTimeout(() => {
        const typingInterval = setInterval(() => {
            if (charIndex < originalText.length) {
                tagline.textContent += originalText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30);
    }, 1000);
    */
    
    // Easter egg: Click logo 5 times for surprise (Tesla red)
    let clickCount = 0;
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            logo.style.color = '#e82127';
            setTimeout(() => {
                logo.style.color = '#ffffff';
                clickCount = 0;
            }, 2000);
        }
    });
    
    // Prevent text selection for cleaner look
    logo.style.userSelect = 'none';
    
    // Add smooth fade in on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Optional: Add cursor trail effect (uncomment if desired)
/*
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});
*/