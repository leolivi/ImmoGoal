
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Map the page names to their corresponding link IDs
    const pageMap = {
        'index.html': 'home',
        'immobilien.html': 'immobilien',
        'dienstleistungen.html': 'dienstleistungen',
        'about.html': 'about',
        'kontakt.html': 'kontakt',
        'datenschutz.html': 'impressum',
        // add other mappings if necessary
    };

    // Get the corresponding link ID for the current page
    const activeLinkId = pageMap[currentPage];

    // Add the 'active' class to the corresponding link
    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add('active');
    }
});

