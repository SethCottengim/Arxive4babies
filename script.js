// Sample TV show data
const shows = [
    {
        title: "Stranger Things",
        image: "https://via.placeholder.com/200x300",
        category: "Trending Now"
    },
    {
        title: "The Crown",
        image: "https://via.placeholder.com/200x300",
        category: "Trending Now"
    },
    {
        title: "Breaking Bad",
        image: "https://via.placeholder.com/200x300",
        category: "Popular on Netflix"
    },
    {
        title: "The Witcher",
        image: "https://via.placeholder.com/200x300",
        category: "Popular on Netflix"
    },
    {
        title: "Squid Game",
        image: "https://via.placeholder.com/200x300",
        category: "New Releases"
    },
    {
        title: "Wednesday",
        image: "https://via.placeholder.com/200x300",
        category: "New Releases"
    }
];

// Function to create a show card
function createShowCard(show) {
    const card = document.createElement('div');
    card.className = 'show-card';
    card.innerHTML = `
        <img src="${show.image}" alt="${show.title}" style="width: 100%; height: 100%; object-fit: cover;">
    `;
    return card;
}

// Function to populate rows with show cards
function populateRows() {
    const rows = document.querySelectorAll('.row');
    
    rows.forEach(row => {
        const rowTitle = row.querySelector('h2').textContent;
        const rowContent = row.querySelector('.row-content');
        
        // Filter shows for this category
        const categoryShows = shows.filter(show => {
            if (rowTitle === "Trending Now") return show.category === "Trending Now";
            if (rowTitle === "Popular on Netflix") return show.category === "Popular on Netflix";
            if (rowTitle === "New Releases") return show.category === "New Releases";
            return false;
        });
        
        // Add show cards to the row
        categoryShows.forEach(show => {
            const card = createShowCard(show);
            rowContent.appendChild(card);
        });
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#141414';
    } else {
        navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateRows();
}); 