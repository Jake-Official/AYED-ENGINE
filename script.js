document.addEventListener('DOMContentLoaded', function() {
    console.log('AYED ENGINE Website loaded successfully! 🎵');    
    initializeWebsite();
});

function initializeWebsite() {
    initializeBackgroundMusic();    
    addSmoothScrolling();    
    addLoadingAnimations();    
    initializeInteractiveElements();
    initializeDraggablePlayer();
}

function initializeBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const volumeSlider = document.getElementById('volumeSlider');
    
    if (audio) {
        audio.volume = 0.3;
        
        playPauseBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.log('Audio play failed:', error);
                });
                playPauseIcon.classList.replace('fa-play', 'fa-pause');
            } else {
                audio.pause();
                playPauseIcon.classList.replace('fa-pause', 'fa-play');
            }
        });

        volumeSlider.addEventListener('input', function() {
            audio.volume = this.value / 100;
        });

        audio.addEventListener('play', function() {
            playPauseIcon.classList.replace('fa-play', 'fa-pause');
        });

        audio.addEventListener('pause', function() {
            playPauseIcon.classList.replace('fa-pause', 'fa-play');
        });
    }
}

function addSmoothScrolling() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

function addLoadingAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(container);
    });
}

function initializeInteractiveElements() {
    const interactiveElements = document.querySelectorAll('.nav-button, .logo-link, .github-preview');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    const clickableElements = document.querySelectorAll('.nav-button, .logo-link');
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function showAlert(message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        backdrop-filter: blur(5px);
    `;
    
    const alertBox = document.createElement('div');
    alertBox.style.cssText = `
        background: linear-gradient(135deg, #1d68ff, #4502ff);
        color: white;
        padding: 30px;
        border-radius: 20px;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        animation: alertSlideIn 0.3s ease;
    `;
    
    alertBox.innerHTML = `
        <h3 style="margin-bottom: 20px; font-size: 1.5rem;">AYED ENGINE</h3>
        <p style="margin-bottom: 25px; line-height: 1.6;">${message}</p>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: rgba(255, 255, 255, 0.2); 
                       color: white; 
                       border: 2px solid white; 
                       padding: 10px 25px; 
                       border-radius: 25px; 
                       cursor: pointer; 
                       font-weight: bold;
                       transition: all 0.3s ease;">
            Got it!
        </button>
    `;
    
    alertOverlay.appendChild(alertBox);
    document.body.appendChild(alertOverlay);
    
    const slideInStyle = document.createElement('style');
    slideInStyle.textContent = `
        @keyframes alertSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(slideInStyle);
}

function animateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = '50%';
        }, 1000);
    }
}

window.addEventListener('load', function() {
    animateProgressBar();
});

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        const audio = document.getElementById('backgroundMusic');
        const playPauseIcon = document.getElementById('playPauseIcon');
        if (audio) {
            if (audio.paused) {
                audio.play();
                playPauseIcon.classList.replace('fa-play', 'fa-pause');
            } else {
                audio.pause();
                playPauseIcon.classList.replace('fa-pause', 'fa-play');
            }
        }
    }
});

document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.log('Image failed to load:', e.target.src);
    }
}, true);

function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

function startCountdown() {
    const timerDiv = document.querySelector('.countdown-timer');
    if (!timerDiv) return;
    
    function updateCountdown() {
        const now = new Date();
        const year = now.getFullYear();
        const target = new Date(year, 6, 18, 0, 0, 0);
        
        const diff = target - now;
        
        if (diff <= 0) {
            timerDiv.innerHTML = '<span>DOWNLOAD AND STREAM NOW!</span>';
            const platformIcons = document.querySelector('.platform-icons');
            if (platformIcons) {
                platformIcons.classList.add('show');
            }
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        timerDiv.innerHTML = `
            <span>${String(days).padStart(2, '0')}</span> days :
            <span>${String(hours).padStart(2, '0')}</span> hours :
            <span>${String(minutes).padStart(2, '0')}</span> minutes :
            <span>${String(seconds).padStart(2, '0')}</span> seconds
        `;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);

function initializeDraggablePlayer() {
    const miniPlayer = document.querySelector('.mini-player');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    function savePosition() {
        localStorage.setItem('miniPlayerPosition', JSON.stringify({
            x: xOffset,
            y: yOffset
        }));
    }

    function loadPosition() {
        const savedPosition = localStorage.getItem('miniPlayerPosition');
        if (savedPosition) {
            const pos = JSON.parse(savedPosition);
            xOffset = pos.x;
            yOffset = pos.y;
            setTranslate(xOffset, yOffset, miniPlayer);
        }
    }

    function dragStart(e) {
        if (e.target.closest('.mini-player-controls') || e.target.closest('.mini-player-button')) {
            return;
        }

        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        isDragging = true;
        miniPlayer.classList.add('dragging');
    }

    function dragEnd(e) {
        if (!isDragging) return;
        
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        miniPlayer.classList.remove('dragging');
        savePosition();
    }

    function drag(e) {
        if (!isDragging) return;

        e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(xOffset, yOffset, miniPlayer);
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    miniPlayer.addEventListener('mousedown', dragStart);
    window.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', dragEnd);

    miniPlayer.addEventListener('touchstart', dragStart);
    window.addEventListener('touchmove', drag);
    window.addEventListener('touchend', dragEnd);

    loadPosition();

    window.addEventListener('resize', () => {
        setTranslate(xOffset, yOffset, miniPlayer);
        savePosition();
    });
}