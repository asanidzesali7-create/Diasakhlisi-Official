/* script.js for Diasakhlisi
   Handles dynamic profile display, profile detailed view, and basic search filtering.
*/

// --- 1. CONFIGURATION DATA ---

// This data is taken directly from your reference project (Georgian Profiles)
const profilesData = [
    {
        name: "Mariam Asanidze",
        id: "profile-mariam",
        location: "Tbilisi",
        avatar: "https://via.placeholder.com/60/856852/F2EDD5?text=MA",
        keywords: "ხილი, bread, baking, home, knitted, scarf, party, catering",
        ideas: [
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Bread', label: 'Home-baked bread' },
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Scarf', label: 'Knitted scarves' },
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Meal+Sets', label: 'Party meal sets' }
        ],
        servicesHTML: `
            <ul>
                <li>🥐 Home-baked bread for events</li>
                <li>🧣 Knitted scarves made to order</li>
                <li>🎁 Party meal sets (10–20 guests)</li>
            </ul>
        `
    },
    {
        name: "Sali Asanidze",
        id: "profile-sali",
        location: "Rustavi",
        avatar: "https://via.placeholder.com/60/856852/F2EDD5?text=SA",
        keywords: "cookies, sweets, baby blankets, wrapping, service",
        ideas: [
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Cookies', label: 'Homemade cookies' },
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Blankets', label: 'Customized blankets' },
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Wrappings', label: 'Gift wrapping' }
        ],
        servicesHTML: `
            <ul>
                <li>🍪 Homemade cookies & sweets</li>
                <li>🪡 Customized baby blankets</li>
                <li>🎁 Gift wrapping service</li>
            </ul>
        `
    },
    {
        name: "Tea Kotua",
        id: "profile-tea",
        location: "Batumi",
        avatar: "https://via.placeholder.com/60/856852/F2EDD5?text=TK",
        keywords: "georgian, catering, traditional, repair, sewing, organizer, closet, pantry",
        ideas: [
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Catering', label: 'Georgian Catering' },
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Sewing', label: 'Sewing Service' },
            { icon: 'https://via.placeholder.com/80/F2EDD5/856852?text=Organizing', label: 'Home Organizing' }
        ],
        servicesHTML: `
            <ul>
                <li>🥘 Traditional Georgian catering</li>
                <li>🔨 Repair & sewing service</li>
                <li>🧺 Closet and pantry organizing</li>
            </ul>
        `
    }
];

// --- 2. MAIN APP STATE ---
const App = {
    // Keep track of which detailed profile is open (or null if the feed is visible)
    openProfileDetail: null
};

// --- 3. UI RENDERING FUNCTIONS ---

// Function to generate the HTML for a small, clickable profile card
function generateProfileCardHTML(profile) {
    return `
        <div class="profile-card" id="${profile.id}" data-id="${profile.id}">
            <img src="${profile.avatar}" alt="${profile.name}" class="mini-avatar">
            <div class="profile-card-content">
                <h3>${profile.name}</h3>
                <p class="location">${profile.location}</p>
                ${profile.servicesHTML}
            </div>
        </div>
    `;
}

// Function to render the filtered list of profiles into the discover container
function renderProfileList(profilesToRender) {
    const container = document.querySelector('.profile-cards-container');
    
    if (profilesToRender.length === 0) {
        container.innerHTML = `<p style="padding: 15px; opacity: 0.7;">შედეგი არ მოიძებნა...</p>`;
        return;
    }
    
    const profilesHTML = profilesToRender.map(generateProfileCardHTML).join('');
    container.innerHTML = profilesHTML;
    
    // After rendering new elements, we must re-attach event listeners for clicks
    attachCardListeners();
}

// Function to generate the HTML for a single "Your Ideas" thumbnail 
function generateIdeaThumbnailHTML(idea) {
    return `
        <div class="thumb-item">
            <img src="${idea.icon}" alt="${idea.label}">
            ${idea.label}
        </div>
    `;
}

// Function to populate the Detailed Profile slide-in panel with a specific profile's data
function updateDetailProfileView(profileId) {
    const profile = profilesData.find(p => p.id === profileId);
    if (!profile) return;
    
    const detailPanel = document.querySelector('.detail-profile-card');
    
    // Update main avatar and bio
    detailPanel.querySelector('.detail-content img.main-avatar').src = profile.avatar;
    detailPanel.querySelector('.main-details h3').textContent = profile.name;
    detailPanel.querySelector('.main-details .bio').textContent = `Services from ${profile.location}`;
    
    // Clear and rebuild the Ideas thumbnails
    const ideasContainer = detailPanel.querySelector('.idea-thumbnails');
    ideasContainer.innerHTML = ''; // Clear old thumbs
    const ideasHTML = profile.ideas.map(generateIdeaThumbnailHTML).join('');
    ideasContainer.innerHTML = ideasHTML;
    
    // Update the button and close the previous panel
    App.openProfileDetail = profileId;
    detailPanel.classList.add('active'); // Slide panel in
}

// --- 4. NAVIGATION & EVENT HANDLERS ---

function closeDetailedProfileView() {
    const detailPanel = document.querySelector('.detail-profile-card');
    detailPanel.classList.remove('active'); // Slide panel out
    App.openProfileDetail = null;
}

// Attaches event listeners to all profile cards in the main discover list
function attachCardListeners() {
    const cards = document.querySelectorAll('.profile-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const profileId = card.dataset.id;
            updateDetailProfileView(profileId);
        });
    });
}

// Handles searching/filtering the profile data
function handleSearch() {
    const searchInput = document.getElementById('skills-search');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // If empty, reset to the full list
    if (searchTerm === "") {
        renderProfileList(profilesData);
        return;
    }
    
    // Perform a very basic keyword filter
    const filteredProfiles = profilesData.filter(profile => {
        // Search in Name, Location, and Keywords string
        const contentToSearch = `${profile.name} ${profile.location} ${profile.keywords}`.toLowerCase();
        return contentToSearch.includes(searchTerm);
    });
    
    // Close the detail view if searching
    if (App.openProfileDetail) {
        closeDetailedProfileView();
    }
    
    renderProfileList(filteredProfiles);
}

// --- 5. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Render all initial profiles (based on your project reference)
    renderProfileList(profilesData);
    
    // 2. Set up search input handling (using debounce to avoid search on every keyup)
    const searchInput = document.getElementById('skills-search');
    let searchDebounceTimer;
    searchInput.addEventListener('keyup', () => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(handleSearch, 300); // 300ms delay after typing stops
    });
    
    // 3. Set up listeners for detail view closure (back arrows)
    const closeDetailButtons = document.querySelectorAll('.detail-header .icon-btn');
    closeDetailButtons.forEach(btn => {
        btn.addEventListener('click', closeDetailedProfileView);
    });
    
    // 4. (Optional) Mobile Nav Interaction. When clicking an anchor link,
    // if a detail profile is open, close it.
    const bottomNavLinks = document.querySelectorAll('.bottom-nav a');
    bottomNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (App.openProfileDetail) {
                closeDetailedProfileView();
            }
        });
    });

});
