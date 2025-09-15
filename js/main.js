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
document.body.classList.add('on-section-home');

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
        
        // Header background logic
        if (destination.index > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // FIX: Add a class to the body to control background shapes with CSS
        document.body.className = `on-section-${destination.anchor}`;
    },
});
