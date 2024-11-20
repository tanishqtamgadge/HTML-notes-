// DOM Elements
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

// Add animation to search input
searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0px 4px 15px rgba(255, 77, 77, 0.8)';
    searchInput.style.transition = 'box-shadow 0.3s ease';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = 'none';
});

// Simulate search functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: "${query}"`);
    } else {
        alert('Please enter a search term!');
    }
});
