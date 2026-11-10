// --- POLAROID 3D TILT MOUSE INTERACTION ---
const polaroidWrapper = document.getElementById('polaroid-wrapper');
const polaroidCard = document.getElementById('polaroid-card');

if (polaroidWrapper && polaroidCard) {
    polaroidWrapper.addEventListener('mousemove', (e) => {
        const rect = polaroidWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        polaroidCard.style.transform = `rotate(3.5deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    polaroidWrapper.addEventListener('mouseleave', () => {
        polaroidCard.style.transform = `rotate(3.5deg) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
}

// --- CHARACTER 3D TILT MOUSE INTERACTION ---
const characterWrapper = document.getElementById('character-wrapper');
const characterCard = document.getElementById('character-card');

if (characterWrapper && characterCard) {
    characterWrapper.addEventListener('mousemove', (e) => {
        const rect = characterWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        
        characterCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    characterWrapper.addEventListener('mouseleave', () => {
        characterCard.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    });
}

// --- LIGHT / DARK MODE TOGGLE ---
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('theme-icon-sun');
const moonIcon = document.getElementById('theme-icon-moon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
});

// --- SKILLS FILTER & SEARCH LOGIC ---
function filterSkills(category) {
    document.querySelectorAll('.skill-tab').forEach(btn => {
        btn.classList.remove('pill-active');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('pill-active');
    }

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Live Search Handler
const searchInput = document.getElementById('skill-search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.skill-card');
        
        cards.forEach(card => {
            const name = card.getAttribute('data-name');
            if (name.includes(query)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// --- CONTACT FORM INTERACTIVITY ---
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.reset();
        successMessage.classList.remove('hidden');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });
}