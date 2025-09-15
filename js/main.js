// ================================================================= //
//                      MOBILE NAVIGATION SCRIPT                     //
// ================================================================= //
const mobileNavToggle = document.querySelector('.mobile-nav-toggle'); 
const mainNav = document.querySelector('.main-nav');

mobileNavToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
    const isNavOpen = mainNav.classList.contains('is-open');
    mobileNavToggle.setAttribute('aria-expanded', isNavOpen);
});

// ================================================================= //
//                INITIALIZE FULLPAGE.JS SCROLLING                   //
// ================================================================= //
new fullpage('#fullpage-wrapper', {
    licenseKey: 'OPEN_SOURCE_GPLV3_LICENSE',
    navigation: true,
    navigationPosition: 'right',
    anchors: ['home', 'teaser', 'about', 'productions'], 
    scrollingSpeed: 1000,
    scrollOverflow: true,
    recordHistory: true,
    navigationTooltips: ['Home', 'Teaser', 'About', 'Productions'],
    showActiveTooltip: true,
    
    // This callback fires right as the scroll transition begins
    onLeave: function(origin, destination, direction) {
        const header = document.querySelector('.main-header');
        const morphingBall = document.querySelector('.morphing-ball');
        const body = document.body;

        // Header background logic
        if (destination.index > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // FIX: Moved morphing ball logic to onLeave for simultaneous animation
        switch (destination.anchor) {
            case 'home':
                morphingBall.style.width = '150px';
                morphingBall.style.height = '150px';
                morphingBall.style.backgroundColor = 'var(--accent-primary)';
                morphingBall.style.top = '80%';
                morphingBall.style.left = '10%';
                morphingBall.style.borderRadius = '50%';
                break;
            case 'teaser':
                morphingBall.style.width = '250px';
                morphingBall.style.height = '250px';
                morphingBall.style.backgroundColor = 'var(--accent-secondary)';
                morphingBall.style.top = '15%';
                morphingBall.style.left = '80%';
                morphingBall.style.borderRadius = '40% 60% 70% 30% / 40% 50% 60% 50%'; // Organic shape
                break;
            case 'about':
                morphingBall.style.width = '80px';
                morphingBall.style.height = '80px';
                morphingBall.style.backgroundColor = 'var(--accent-new-red)';
                morphingBall.style.top = '25%';
                morphingBall.style.left = '15%';
                morphingBall.style.borderRadius = '10px';
                break;
            case 'productions':
                morphingBall.style.width = '120px';
                morphingBall.style.height = '120px';
                morphingBall.style.backgroundColor = 'var(--accent-secondary)';
                morphingBall.style.top = '75%';
                morphingBall.style.left = '90%';
                morphingBall.style.borderRadius = '50%';
                break;
        }

        // FIX: Add a class to the body to control background shapes with CSS
        body.className = `on-section-${destination.anchor}`;
    },
});