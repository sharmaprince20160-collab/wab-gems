                                        // Initializ(e AOS

AOS.init({ duration: 800, once: true });
console.log("hello everyone");





// Data Arrays
const murtiData = [
    { eng: "Lord Ganesha", hin: "भगवान गणेश", desc: "Remover of obstacles - Wisdom & Prosperity", img: "https://i.pinimg.com/1200x/b5/a4/7b/b5a47b50b0cfe8422ddde810fe2b3cac.jpg" },
    { eng: "Lord Shiva", hin: "भगवान शिव", desc: "The Destroyer - Meditation & Power", img: "https://i.pinimg.com/1200x/93/b7/66/93b766a2f862cd09c0090b8895e7f006.jpg" },
    { eng: "Goddess Durga", hin: "माँ दुर्गा", desc: "Goddess of Power - Protection & Strength", img: "https://i.pinimg.com/1200x/da/1f/91/da1f917930972c8ac1f30bc60a00ec3a.jpg" },
    { eng: "Lord Krishna", hin: "भगवान कृष्ण", desc: "Divine Love - Wisdom & Joy", img: "https://i.pinimg.com/736x/bb/3c/48/bb3c488125ed69400bcf1eb13c1e5d43.jpg" },
    { eng: "Lord Rama", hin: "भगवान राम", desc: "Maryada Purushottam - Ideal King", img: "https://i.pinimg.com/1200x/f3/9e/17/f39e17ef5e98875d1883fa21e9215f88.jpg" },
    { eng: "Goddess Lakshmi", hin: "माँ लक्ष्मी", desc: "Goddess of Wealth - Prosperity & Fortune", img: "https://i.pinimg.com/1200x/f8/1e/be/f81ebea1aa92a63ead03be94bdd17c6d.jpg" },
    { eng: "Lord Hanuman", hin: "हनुमान जी", desc: "Devotee of Rama - Strength & Devotion", img: "https://i.pinimg.com/736x/36/15/bb/3615bb4807c5e0f0e87ab7a439ed30a6.jpg" },
    { eng: "Goddess Saraswati", hin: "माँ सरस्वती", desc: "Goddess of Knowledge - Arts & Music", img: "https://i.pinimg.com/1200x/42/09/98/420998e4a5c9838b4dcf960997c75eb4.jpg" },
    { eng: "Lord Vishnu", hin: "भगवान विष्णु", desc: "The Preserver - Protection of Universe", img: "https://i.pinimg.com/1200x/ba/4d/23/ba4d23986e47bed68fe5a95ab9d63b69.jpg" },
    { eng: "Lord Kartikeya", hin: "भगवान कार्तिकेय", desc: "God of War - Courage & Victory", img: "https://i.pinimg.com/1200x/e4/78/f6/e478f61cb6dd63977b1509800ef4e188.jpg" },
    { eng: "Goddess Parvati", hin: "माँ पार्वती", desc: "Mother Goddess - Love & Devotion", img: "https://i.pinimg.com/1200x/26/1d/1e/261d1e56fa48d3bcfda938fe4926afc7.jpg" },
    { eng: "Lord Brahma", hin: "भगवान ब्रह्मा", desc: "The Creator - Knowledge & Creation", img: "https://i.pinimg.com/1200x/d4/d4/2f/d4d42fbecc1bb2b3e09e540e9c120f21.jpg" },
    { eng: "Lord Indra", hin: "इंद्र देव", desc: "King of Gods - Rain & Thunder", img: "https://i.pinimg.com/1200x/92/b5/9c/92b59c1f2aaa07d9475338b405ae49de.jpg" },
    { eng: "Goddess Kali", hin: "माँ काली", desc: "Goddess of Time - Destruction of Evil", img: "https://i.pinimg.com/1200x/8b/9c/71/8b9c7110110ea30eed21e2ae96ce03b8.jpg" },
    { eng: "Lord Surya", hin: "सूर्य देव", desc: "Sun God - Health & Vitality", img: "https://i.pinimg.com/1200x/e9/53/1f/e9531f22992c20028bcba191b8cfc401.jpg" },
    { eng: "Lord Chandra", hin: "चंद्र देव", desc: "Moon God - Peace & Calmness", img: "https://i.pinimg.com/736x/1c/a5/da/1ca5da7383bb87a9a40c13fdf3d8943c.jpg" },
    { eng: "Lord Kubera", hin: "कुबेर देव", desc: "God of Wealth - Treasure & Riches", img: "https://i.pinimg.com/1200x/5b/41/c8/5b41c8fd3c515d25a4f4f9423b960237.jpg" },
    { eng: "Goddess Radha", hin: "राधा रानी", desc: "Consort of Krishna - Divine Love", img: "https://i.pinimg.com/736x/c8/9e/82/c89e82f672f27c9e51c038c5e9f93c53.jpg" },
    { eng: "Lord Dattatreya", hin: "दत्तात्रेय", desc: "Trinity Avatar - Guru of Gurus", img: "https://i.pinimg.com/736x/d6/4c/e0/d64ce094191c9c6aa7680f289823ebb8.jpg" },
    { eng: "Lord Ayyappa", hin: "अयप्पा स्वामी", desc: "Protector - Unity & Devotion", img: "https://i.pinimg.com/1200x/06/53/51/0653519e15a0859b36c8cf1e76974803.jpg" }
];

const rudrakshaData = [
    { eng: "1 Mukhi Rudraksha", hin: "एक मुखी रुद्राक्ष", desc: "Very Rare - Lord Shiva's blessing", price: 8900, img: "1Mukhi Rudraksha.jpg" },
    { eng: "2 Mukhi Rudraksha", hin: "दो मुखी रुद्राक्ष", desc: "Harmony & Relationships", price: 2800, img: "2 Mukhi Rudraksha.jpg" },
    { eng: "3 Mukhi Rudraksha", hin: "तीन मुखी रुद्राक्ष", desc: "Burns past karmas", price: 1900, img: "3 Mukhi Rudraksha.jpg" },
    { eng: "4 Mukhi Rudraksha", hin: "चार मुखी रुद्राक्ष", desc: "Enhances knowledge & creativity", price: 1500, img: "4 Mukhi Rudraksha.jpg" },
    { eng: "5 Mukhi Rudraksha", hin: "पंचमुखी रुद्राक्ष", desc: "Health, peace & prosperity", price: 750, img: "5 Mukhi Rudraksha.jpg" },
    { eng: "6 Mukhi Rudraksha", hin: "छह मुखी रुद्राक्ष", desc: "Boosts willpower & courage", price: 1800, img: "6 Mukhi Rudraksha.jpg" },
    { eng: "7 Mukhi Rudraksha", hin: "सात मुखी रुद्राक्ष", desc: "Attracts wealth & abundance", price: 2500, img: "7 Mukhi Rudraksha.jpg" },
    { eng: "8 Mukhi Rudraksha", hin: "आठ मुखी रुद्राक्ष", desc: "Removes obstacles", price: 3200, img: "8 Mukhi Rudraksha.jpg" },
    { eng: "9 Mukhi Rudraksha", hin: "नौ मुखी रुद्राक्ष", desc: "Protection & fearlessness", price: 4200, img: "9 Mukhi Rudraksha.jpg" },
    { eng: "10 Mukhi Rudraksha", hin: "दस मुखी रुद्राक्ष", desc: "Shields from negative energies", price: 5800, img: "10 Mukhi Rudraksha.jpg" },
    { eng: "Gauri Shankar", hin: "गौरी शंकर", desc: "Marital harmony & love", price: 12500, img: "Gauri Shankar.jpg" },
    { eng: "Ganesh Rudraksha", hin: "गणेश रुद्राक्ष", desc: "Removes hurdles", price: 8500, img: "Ganesh Rudraksha.jpg" }
];

const gemsData = [
    { eng: "Ruby", hin: "माणिक्य", desc: "Deep red - King of gemstones, 3.5 ct", price: 21000, img: "Ruby.jpg" },
    { eng: "Emerald", hin: "पन्ना", desc: "Vivid green - Colombian quality", price: 18500, img: "Emerald.jpg" },
    { eng: "Blue Sapphire", hin: "नीलम", desc: "Royal blue - Kashmir quality", price: 85000, img: "Sapphire.jpg" },
    { eng: "Diamond", hin: "हीरा", desc: "D Flawless - GIA Certified", price: 450000, img: "Diamond.jpg" },
    { eng: "Amethyst", hin: "जामुनी", desc: "Deep violet - Premium quality", price: 3500, img: "Amethyst.jpg" },
    { eng: "Yellow Sapphire", hin: "पुखराज", desc: "Imperial Topaz - Sri Lankan", price: 7500, img: "Topaz.jpg" },
    { eng: "Aquamarine", hin: "एक्वामरीन", desc: "Sky blue - Santa Maria quality", price: 12000, img: "Aquamarine.jpg" },
    { eng: "Garnet", hin: "गोमेद", desc: "Demantoid Garnet - Russian origin", price: 9500, img: "Garnet.jpg" },
    { eng: "Tourmaline", hin: "तूरमालिन", desc: "Paraiba Tourmaline - Neon blue", price: 55000, img: "Tourmaline.jpg" },
            { eng: "Opal", hin: "दूधिया पत्थर", desc: "Black Opal - Australian origin", price: 18000, img: "Opal.jpg" },
            { eng: "Tanzanite", hin: "तंज़ानाइट", desc: "AAA quality - Blue violet", price: 22000, img: "Tanzanite.jpg" },
            { eng: "Spinel", hin: "स्पिनल", desc: "Red Spinel - Myanmar origin", price: 14000, img: "Spinel.jpg" },
            { eng: "Alexandrite", hin: "एलेक्ज़ेंड्राइट", desc: "Color-change - Russian quality", price: 95000, img: "Alexandrite.jpg" },
            { eng: "Citrine", hin: "सिट्रीन", desc: "Madeira Citrine - Deep amber", price: 4000, img: "Citrine.jpg" },
            { eng: "Peridot", hin: "पेरिडॉट", desc: "Pakistani quality - Lime green", price: 5500, img: "Peridot.jpg" },
            { eng: "Moonstone", hin: "चंद्रकांत", desc: "Rainbow Moonstone - Sri Lanka", price: 6500, img: "Moonstone.jpg" },
            { eng: "Zircon", hin: "ज़िरकोन", desc: "Blue Zircon - Cambodian origin", price: 8000, img: "Zircon.jpg" },
            { eng: "Kunzite", hin: "कुन्जाइट", desc: "Pink Kunzite - Afghanistan", price: 9500, img: "Kunzite.jpg" },
            { eng: "Tsavorite", hin: "सावराइट", desc: "Tsavorite Garnet - Kenyan origin", price: 25000, img: "Tsavorite.jpg" },
            { eng: "Iolite", hin: "आयोलाइट", desc: "Blue Iolite - Indian origin", price: 6000, img: "Iolite.jpg" },
            { eng: "Rhodolite", hin: "रोडोलाइट", desc: "Pink Rhodolite - Tanzanian", price: 8500, img: "Rhodolite.jpg" },
            { eng: "Chrysoberyl", hin: "क्राइसोबेरिल", desc: "Cat's Eye - Sri Lanka", price: 18000, img: "Chrysoberyl.jpg" },
            { eng: "Morganite", hin: "मॉर्गनाइट", desc: "Pink Morganite - Brazilian", price: 12000, img: "Morganite.jpg" },
            { eng: "Indicolite", hin: "इंडिकोलाइट", desc: "Blue Tourmaline - Afghan", price: 20000, img: "Indicolite.jpg" },
            { eng: "Heliodor", hin: "हेलियोडोर", desc: "Golden Heliodor - Ukraine", price: 7000, img: "Heliodor.jpg" },
            { eng: "Andalusite", hin: "एंडालुसाइट", desc: "Brazilian Andalusite - Pleochroic", price: 8000, img: "Andalusite.jpg" },
            { eng: "Fire Opal", hin: "अग्नि ओपल", desc: "Mexican Fire Opal - Fiery orange", price: 14000, img: "Fire Opal.jpg" },
            { eng: "Benitoite", hin: "बेनिटोइट", desc: "Benitoite - California blue", price: 45000, img: "Benitoite.jpg" },
            { eng: "Sunstone", hin: "सूर्यकांत", desc: "Oregon Sunstone - Schiller effect", price: 9000, img: "Sunstone.jpg" },
            { eng: "Jade", hin: "जेड", desc: "Imperial Jadeite - Emerald green", price: 65000, img: "Jade.jpg" }

];

const sliderData = [
    { eng: "1 Mukhi Rudraksha", hin: "एक मुखी रुद्राक्ष", desc: "Very Rare", price: 8900, img: "1Mukhi Rudraksha.jpg" },
    { eng: "5 Mukhi Rudraksha", hin: "पंचमुखी रुद्राक्ष", desc: "Health & prosperity", price: 750, img: "5 Mukhi Rudraksha.jpg" },
    { eng: "Gauri Shankar", hin: "गौरी शंकर", desc: "Marital harmony", price: 12500, img: "Gauri Shankar.jpg" },
    { eng: "Ruby", hin: "माणिक्य", desc: "King of gemstones", price: 21000, img: "Ruby.jpg" }
];

const gemGuideData = [
    { eng: "Ruby", hin: "माणिक्य", benefits: "Confidence & leadership, Career growth, Fame & recognition" },
    { eng: "Emerald", hin: "पन्ना", benefits: "Memory & communication, Business success, Reduces stress" },
    { eng: "Blue Sapphire", hin: "नीलम", benefits: "Sudden wealth, Removes obstacles, Protection" }
];

// Helper Functions
function formatINR(price) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}
console.log

// Render Functions
function createMurtiSection() {
    const container = document.getElementById('murtiContainer');
    if (!container) return;
    container.innerHTML = '';
    murtiData.forEach(m => {
        const card = document.createElement('div');
        card.className = 'murti-card';
        card.innerHTML = `
            <img src="${m.img}" class="murti-img" alt="${m.eng}" onerror="this.src='https://placehold.co/400x300/2a235a/white?text=${m.eng}'">
            <div class="murti-info"><h3>${m.eng}</h3><div class="murti-hindi">${m.hin}</div><div class="murti-desc">${m.desc}</div></div>
        `;
        card.onclick = () => alert(`🕉️ ${m.eng} (${m.hin}) 🕉️\n\n${m.desc}\n\nFor pricing & availability, please contact us.`);
        container.appendChild(card);
    });
}

function createSlider() {
    const wrapper = document.getElementById('sliderWrapper');
    if (!wrapper) return;
    wrapper.innerHTML = '';
    sliderData.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <img src="${item.img}" class="slide-image" onerror="this.src='https://placehold.co/300x300/2a235a/white?text=${item.eng.charAt(0)}'">
            <div class="slide-title">${item.eng}</div>
            <div class="slide-hindi">${item.hin}</div>
            <div class="slide-price">${formatINR(item.price)}</div>
            <button class="add-to-cart-btn mt-2" onclick="event.stopPropagation(); addToCart('${item.eng}', ${item.price})">🛒 Add to Cart</button>
        `;
        wrapper.appendChild(slide);
    });
    new Swiper('.mySwiper', { 
        loop: true, 
        autoplay: { delay: 3000 }, 
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, 
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
}

function createFlipCards() {
    const container = document.getElementById('gemsContainer');
    if (!container) return;
    container.innerHTML = '';
    gemsData.forEach(gem => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${gem.img}" class="gem-image" onerror="this.src='https://placehold.co/300x300/2a235a/white?text=${gem.eng}'">
                    <div class="gem-name-eng">${gem.eng}</div>
                    <div class="gem-name-hindi">${gem.hin}</div>
                </div>
                <div class="flip-card-back">
                    <div class="gem-price">${formatINR(gem.price)}</div>
                    <div class="gem-desc">${gem.desc}</div>
                    <button class="add-to-cart-btn" onclick="addToCart('${gem.eng}', ${gem.price})">🛒 Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function createGallery() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    container.innerHTML = '';
    rudrakshaData.forEach(r => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <img src="${r.img}" class="gallery-img" onerror="this.src='https://placehold.co/400x250/2a235a/white?text=Rudraksha'">
            <div class="gallery-info">
                <h3>${r.eng}</h3>
                <div class="hindi-name">${r.hin}</div>
                <div class="gallery-price">${formatINR(r.price)}</div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart('${r.eng}', ${r.price})">🛒 Add to Cart</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function createGemGuide() {
    const container = document.getElementById('gemGuideGrid');
    if (!container) return;
    container.innerHTML = '';
    gemGuideData.forEach(gem => {
        const card = document.createElement('div');
        card.className = 'gem-info-card';
        card.innerHTML = `
            <h3>${gem.eng}</h3>
            <div class="hindi-title">${gem.hin}</div>
            <hr><h4>✨ Benefits:</h4><p>${gem.benefits}</p>
        `;
        container.appendChild(card);
    });
}

// Cart Functions
function updateCartDisplay() {
    document.getElementById('cartCount').innerText = cartItems.length;
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    currentTotal = total;
    document.getElementById('paymentAmount').innerHTML = `₹${total.toLocaleString('en-IN')}`;
    
    const cartListDiv = document.getElementById('cartItemsList');
    if (cartListDiv) {
        if (cartItems.length === 0) {
            cartListDiv.innerHTML = '<p style="text-align:center;">Your cart is empty</p>';
        } else {
            cartListDiv.innerHTML = cartItems.map((item, idx) => 
                `<div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid rgba(251,191,36,0.2);">
                    <span>${item.name}</span>
                    <span>₹${item.price.toLocaleString('en-IN')}</span>
                    <span style="color:#fbbf24; cursor:pointer;" onclick="removeFromCart(${idx})">✖</span>
                </div>`
            ).join('');
        }
    }
}

function addToCart(name, priceINR) {
    cartItems.push({ name: name, price: priceINR });
    updateCartDisplay();
    alert(`✨ ${name} added to cart! ✨`);
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
}

// Payment Functions


// Utility Functions
function sendContactMessage() {
    const name = document.getElementById('contactName')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const msg = document.getElementById('contactMsg')?.value.trim() || '';
    if (!name || !email || !msg) { alert("⚠️ Please fill all fields"); return; }
    alert(`✨ Thank you ${name}! Your message has been sent. ✨`);
}

function openWhatsApp() { window.open('https://wa.me/919876543210', '_blank'); }
function openHaridwarMap() { window.open('https://www.google.com/maps/place/Haridwar', '_blank'); }
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) { counter.innerText = Math.floor(current); setTimeout(updateCounter, 30); }
            else { counter.innerText = target; }
        };
        updateCounter();
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    createSlider();
    createFlipCards();
    createGallery();
    createMurtiSection();
    updateCartDisplay();
    animateCounters();
});

window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Window Click Handlers
window.onclick = function(event) { 
    if (event.target === document.getElementById('gemGuideModal')) closeGemGuide();
    if (event.target === document.getElementById('paymentModal')) closePaymentModal();
    if (event.target === document.getElementById('loginModal')) closeLoginModal();
    if (event.target === document.getElementById('signupModal')) closeSignupModal();
}
// ========== PROFILE JAVASCRIPT ==========

let profileAddresses = JSON.parse(localStorage.getItem('profileAddresses')) || [];

// Open/Close Sidebar
function openProfileSidebar() {
    document.getElementById('profileSidebar').classList.add('open');
    document.getElementById('profileBackdrop').classList.add('show');
    loadProfileData();
    showProfileTab('personal');
}

function closeProfileSidebar() {
    document.getElementById('profileSidebar').classList.remove('open');
    document.getElementById('profileBackdrop').classList.remove('show');
}

// Show Tabs
function showProfileTab(tabName) {
    document.querySelectorAll('.profile-content-section').forEach(el => el.classList.remove('active'));
    document.getElementById(`profile${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Tab`).classList.add('active');
    
    if(tabName === 'address') renderProfileAddresses();
    if(tabName === 'orders') renderProfileOrders();
}

// Load User Data
function loadProfileData() {
    const user = JSON.parse(localStorage.getItem('profileUserInfo'));
    if(user) {
        document.getElementById('profileFullName').value = user.name || '';
        document.getElementById('profileEmail').value = user.email || '';
        document.getElementById('profilePhone').value = user.phone || '';
        document.getElementById('profileDob').value = user.dob || '';
        document.getElementById('profileGender').value = user.gender || 'Male';
        document.getElementById('profileDisplayName').innerText = user.name || 'Guest User';
        document.getElementById('profileDisplayEmail').innerText = user.email || 'Not logged in';
    }
    loadProfileAvatar();
}

// Save Personal Info
function saveProfileInfo(e) {
    e.preventDefault();
    const userInfo = {
        name: document.getElementById('profileFullName').value,
        email: document.getElementById('profileEmail').value,
        phone: document.getElementById('profilePhone').value,
        dob: document.getElementById('profileDob').value,
        gender: document.getElementById('profileGender').value
    };
    localStorage.setItem('profileUserInfo', JSON.stringify(userInfo));
    document.getElementById('profileDisplayName').innerText = userInfo.name || 'Guest User';
    document.getElementById('profileDisplayEmail').innerText = userInfo.email || 'Not logged in';
    alert('✅ Personal information saved successfully!');
}

// Avatar Upload
document.getElementById('profileAvatarInput')?.addEventListener('change', function(e) {
    if(e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(ev) {
            const container = document.getElementById('profileAvatarContainer');
            container.innerHTML = `<img src="${ev.target.result}" style="width:100px;height:100px;border-radius:50%;object-fit:cover;"><div class="edit-avatar-btn" onclick="document.getElementById('profileAvatarInput').click()"><i class="fas fa-camera"></i></div>`;
            localStorage.setItem('profileAvatar', ev.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

function loadProfileAvatar() {
    const saved = localStorage.getItem('profileAvatar');
    if(saved) {
        const container = document.getElementById('profileAvatarContainer');
        container.innerHTML = `<img src="${saved}" style="width:100px;height:100px;border-radius:50%;object-fit:cover;"><div class="edit-avatar-btn" onclick="document.getElementById('profileAvatarInput').click()"><i class="fas fa-camera"></i></div>`;
    }
}

// Change Password
function changeProfilePassword(e) {
    e.preventDefault();
    const newPass = document.getElementById('profileNewPass').value;
    const confirm = document.getElementById('profileConfirmPass').value;
    if(newPass !== confirm) {
        alert('❌ Passwords do not match!');
        return;
    }
    if(newPass.length < 6) {
        alert('❌ Password must be at least 6 characters!');
        return;
    }
    localStorage.setItem('profilePassword', newPass);
    alert('✅ Password changed successfully!');
    document.getElementById('profileCurrentPass').value = '';
    document.getElementById('profileNewPass').value = '';
    document.getElementById('profileConfirmPass').value = '';
}

// Address Functions
function openAddressModal() {
    document.getElementById('profileAddressModal').style.display = 'block';
}

function closeAddressModal() {
    document.getElementById('profileAddressModal').style.display = 'none';
    document.querySelectorAll('#profileAddressModal input').forEach(inp => inp.value = '');
}

function saveProfileAddress() {
    const address = {
        id: Date.now(),
        name: document.getElementById('modalAddrName').value,
        phone: document.getElementById('modalAddrPhone').value,
        line1: document.getElementById('modalAddrLine1').value,
        city: document.getElementById('modalAddrCity').value,
        pincode: document.getElementById('modalAddrPincode').value
    };
    if(address.name && address.line1 && address.city) {
        profileAddresses.push(address);
        localStorage.setItem('profileAddresses', JSON.stringify(profileAddresses));
        renderProfileAddresses();
        closeAddressModal();
    } else {
        alert('⚠️ Please fill required fields!');
    }
}

function renderProfileAddresses() {
    const container = document.getElementById('profileAddressList');
    if(profileAddresses.length === 0) {
        container.innerHTML = '<div class="profile-empty-state"><i class="fas fa-map-marker-alt"></i><p>No addresses saved</p></div>';
        return;
    }
    container.innerHTML = profileAddresses.map(addr => `
        <div class="address-card">
            <strong>${addr.name}</strong>
            <p>${addr.line1}, ${addr.city} - ${addr.pincode}</p>
            <p>📞 ${addr.phone}</p>
            <button class="delete-address-btn" onclick="deleteProfileAddress(${addr.id})">Delete</button>
        </div>
    `).join('');
}

function deleteProfileAddress(id) {
    profileAddresses = profileAddresses.filter(a => a.id !== id);
    localStorage.setItem('profileAddresses', JSON.stringify(profileAddresses));
    renderProfileAddresses();
}

// Orders Functions
function renderProfileOrders() {
    const orders = JSON.parse(localStorage.getItem('profileOrders')) || [];
    const container = document.getElementById('profileOrdersList');
    if(orders.length === 0) {
        container.innerHTML = '<div class="profile-empty-state"><i class="fas fa-box-open"></i><p>No orders yet</p></div>';
        return;
    }
    container.innerHTML = orders.map(order => `
        <div class="order-card">
            <strong>Order #${order.id}</strong>
            <p>📅 Date: ${order.date}</p>
            <p>💰 Total: ₹${order.total}</p>
            <p>📦 Status: ${order.status || 'Delivered'}</p>
        </div>
    `).join('');
}

// Add to Orders (Call this when someone buys)
function addToProfileOrders(productName, amount) {
    let orders = JSON.parse(localStorage.getItem('profileOrders')) || [];
    orders.unshift({
        id: orders.length + 1,
        date: new Date().toLocaleDateString(),
        total: amount,
        product: productName,
        status: 'Confirmed'
    });
    localStorage.setItem('profileOrders', JSON.stringify(orders));
}

// Logout
function profileLogout() {
    if(confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('profileUserInfo');
        localStorage.removeItem('profileAvatar');
        location.reload();
    }
}

// Close modal on outside click
window.onclick = function(event) {
    if(event.target === document.getElementById('profileAddressModal')) {
        closeAddressModal();
    }
}
// Expose Functions to Global Scope
console.log("Exposing functions to global scope for HTML event handlers");
window.sendContactMessage = sendContactMessage;
window.openHaridwarMap = openHaridwarMap;
window.openGemGuide = openGemGuide;
window.closeGemGuide = closeGemGuide;
window.openWhatsApp = openWhatsApp;
window.scrollToTop = scrollToTop;
window.openPaymentModal = openPaymentModal;
window.closePaymentModal = closePaymentModal;
window.processPayment = processPayment;
window.processRazorpayPayment = processRazorpayPayment;
window.processPaytmPayment = processPaytmPayment;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.showSignup = showSignup;
window.showLogin = showLogin;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.closeSignupModal = closeSignupModal;



