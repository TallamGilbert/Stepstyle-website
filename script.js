  function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function scrollToShop() {
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            event.target.reset();
        }



        // Smooth scroll for navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
                document.getElementById('navLinks').classList.remove('active');
            });
        });

        // ...existing code...

// Newsletter form handling
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! Confirmation sent to ${email}`);
    this.reset();
});

// Back to top button functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Shoe Collections Data
const shoeCollections = {
    men: [
        { name: "Classic Oxford", brand: "Bata Kenya", price: "KSh 6,500", rating: 4.5, reviews: 128, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
        { name: "Leather Loafers", brand: "Clarks", price: "KSh 8,900", rating: 4.7, reviews: 95, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400" },
        { name: "Urban Sneakers", brand: "Nike Kenya", price: "KSh 12,000", rating: 4.8, reviews: 210, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400" },
        { name: "Casual Boots", brand: "Timberland", price: "KSh 15,500", rating: 4.6, reviews: 87, image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400" },
        { name: "Derby Shoes", brand: "Hush Puppies", price: "KSh 7,200", rating: 4.4, reviews: 62, image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=400" },
        { name: "Chukka Boots", brand: "Clarks", price: "KSh 9,800", rating: 4.5, reviews: 54, image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400" },
        { name: "Desert Boots", brand: "Clarks", price: "KSh 10,200", rating: 4.6, reviews: 48, image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400" },
        { name: "Canvas Sneakers", brand: "Converse", price: "KSh 5,800", rating: 4.3, reviews: 145, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" }
    ],
    women: [
        { name: "Elegant Heels", brand: "Steve Madden", price: "KSh 9,500", rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
        { name: "Ankle Boots", brand: "Aldo", price: "KSh 11,200", rating: 4.6, reviews: 98, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400" },
        { name: "Ballet Flats", brand: "Bata Kenya", price: "KSh 4,500", rating: 4.5, reviews: 203, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400" },
        { name: "Platform Sandals", brand: "Zara", price: "KSh 6,800", rating: 4.7, reviews: 124, image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400" },
        { name: "Wedge Heels", brand: "Nine West", price: "KSh 8,300", rating: 4.4, reviews: 89, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
        { name: "Casual Sneakers", brand: "Adidas", price: "KSh 10,500", rating: 4.9, reviews: 187, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400" }
    ],
    kids: [
        { name: "School Shoes", brand: "Bata Kenya", price: "KSh 2,800", rating: 4.6, reviews: 234, image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400" },
        { name: "Light-Up Sneakers", brand: "Skechers", price: "KSh 4,500", rating: 4.8, reviews: 176, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400" },
        { name: "Velcro Trainers", brand: "Nike Kids", price: "KSh 5,200", rating: 4.7, reviews: 142, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400" },
        { name: "Sandals", brand: "Crocs", price: "KSh 2,200", rating: 4.5, reviews: 198, image: "https://images.unsplash.com/photo-1603808033587-5f9463e2d5c4?w=400" },
        { name: "Rain Boots", brand: "Hunter Kids", price: "KSh 3,800", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=400" },
        { name: "Canvas Shoes", brand: "Vans Kids", price: "KSh 3,500", rating: 4.6, reviews: 156, image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400" }
    ],
    sports: [
        { name: "Running Shoes", brand: "Nike Kenya", price: "KSh 14,500", rating: 4.9, reviews: 312, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
        { name: "Basketball Sneakers", brand: "Air Jordan", price: "KSh 18,900", rating: 4.8, reviews: 267, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400" },
        { name: "Training Shoes", brand: "Adidas", price: "KSh 11,200", rating: 4.7, reviews: 189, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400" },
        { name: "Football Boots", brand: "Puma", price: "KSh 13,500", rating: 4.6, reviews: 145, image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=400" },
        { name: "Tennis Shoes", brand: "Asics", price: "KSh 12,800", rating: 4.7, reviews: 124, image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=400" },
        { name: "Hiking Boots", brand: "Merrell", price: "KSh 16,500", rating: 4.8, reviews: 198, image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=400" }
    ],
    casual: [
        { name: "Canvas Slip-Ons", brand: "Vans", price: "KSh 5,500", rating: 4.6, reviews: 178, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" },
        { name: "Comfort Sandals", brand: "Birkenstock", price: "KSh 7,800", rating: 4.7, reviews: 145, image: "https://images.unsplash.com/photo-1603808033587-5f9463e2d5c4?w=400" },
        { name: "Espadrilles", brand: "Toms", price: "KSh 6,200", rating: 4.5, reviews: 92, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400" },
        { name: "Boat Shoes", brand: "Sperry", price: "KSh 8,500", rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400" },
        { name: "Moccasins", brand: "Clarks", price: "KSh 7,000", rating: 4.4, reviews: 87, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
        { name: "Slip-On Sneakers", brand: "Skechers", price: "KSh 5,900", rating: 4.5, reviews: 201, image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400" }
    ],
    formal: [
        { name: "Patent Leather Oxfords", brand: "Clarks", price: "KSh 12,500", rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400" },
        { name: "Brogue Shoes", brand: "Hush Puppies", price: "KSh 10,800", rating: 4.7, reviews: 98, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400" },
        { name: "Derby Dress Shoes", brand: "Bata Kenya", price: "KSh 8,900", rating: 4.6, reviews: 134, image: "https://images.unsplash.com/photo-1641893843833-a006778dc00b?w=400" },
        { name: "Monk Strap Shoes", brand: "Cole Haan", price: "KSh 14,200", rating: 4.9, reviews: 76, image: "https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=400" },
        { name: "Chelsea Boots", brand: "Timberland", price: "KSh 16,500", rating: 4.8, reviews: 112, image: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400" },
        { name: "Loafer Dress Shoes", brand: "Aldo", price: "KSh 9,500", rating: 4.5, reviews: 145, image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400" }
    ]
};

// Modal Functions
function openModal(category) {
    const modal = document.getElementById('shoeModal');
    const modalTitle = document.getElementById('modalTitle');
    const shoesGrid = document.getElementById('shoesGrid');
    
    // Set modal title
    const titles = {
        men: "Men's Collection",
        women: "Women's Collection",
        kids: "Kids Collection",
        sports: "Sports Collection",
        casual: "Casual Collection",
        formal: "Formal Collection"
    };
    modalTitle.textContent = titles[category];
    
    // Clear and populate shoes grid
    shoesGrid.innerHTML = '';
    const shoes = shoeCollections[category];
    
    shoes.forEach(shoe => {
        const shoeCard = `
            <div class="shoe-item">
                <img src="${shoe.image}" alt="${shoe.name}">
                <div class="shoe-details">
                    <h3>${shoe.name}</h3>
                    <p class="shoe-brand">${shoe.brand}</p>
                    <div class="shoe-rating">
                        ${generateStars(shoe.rating)}
                        <span>(${shoe.reviews})</span>
                    </div>
                    <p class="shoe-price">${shoe.price}</p>
                    <button class="btn-add-cart" onclick="addToCart('${shoe.name}', '${shoe.price}')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        shoesGrid.innerHTML += shoeCard;
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('shoeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function addToCart(name, price) {
    cartCount++;
    document.querySelector('.cart-badge').textContent = cartCount;
    alert(`${name} (${price}) added to cart!`);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('shoeModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize cart count
//let cartCount = 0;


// ==================== 1. SHOPPING CART FUNCTIONALITY ====================
let cart = [];
let cartCount = 0;

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function addToCart(name, price, brand, image, size) {
    if (!size) {
        alert('Please select a size first!');
        return;
    }

    const priceNum = parseInt(price.replace(/[^0-9]/g, ''));
    
    // Check if item with same name and size already exists
    const existingItem = cart.find(item => item.name === name && item.size === size);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: priceNum,
            brand: brand,
            image: image,
            size: size,
            quantity: 1
        });
    }
    
    updateCart();
    openCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartBadge = document.querySelector('.cart-badge');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotal.textContent = 'KSh 0';
        cartBadge.textContent = '0';
        return;
    }
    
    let total = 0;
    cartCount = 0;
    
    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price * item.quantity;
        cartCount += item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-brand">${item.brand}</p>
                    <p class="cart-item-size">Size: ${item.size}</p>
                    <p class="cart-item-price">KSh ${item.price.toLocaleString()}</p>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = `KSh ${total.toLocaleString()}`;
    cartBadge.textContent = cartCount;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Checkout functionality coming soon!\n\nTotal: KSh ${total.toLocaleString()}\n\nYou can contact us via WhatsApp to complete your order.`);
}

// Update cart icon click handler
document.querySelector('.cart-icon').addEventListener('click', openCart);


// ==================== 2. TESTIMONIALS SLIDER ====================
let currentTestimonialIndex = 0;

function slideTestimonials(direction) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    testimonials[currentTestimonialIndex].classList.remove('active');
    dots[currentTestimonialIndex].classList.remove('active');
    
    currentTestimonialIndex += direction;
    
    if (currentTestimonialIndex >= testimonials.length) {
        currentTestimonialIndex = 0;
    }
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    }
    
    testimonials[currentTestimonialIndex].classList.add('active');
    dots[currentTestimonialIndex].classList.add('active');
}

function currentTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    testimonials[currentTestimonialIndex].classList.remove('active');
    dots[currentTestimonialIndex].classList.remove('active');
    
    currentTestimonialIndex = index;
    
    testimonials[currentTestimonialIndex].classList.add('active');
    dots[currentTestimonialIndex].classList.add('active');
}

// Auto-slide testimonials every 5 seconds
setInterval(() => {
    slideTestimonials(1);
}, 5000);


// ==================== 3. NEWSLETTER FORM (if you added it) ====================
document.getElementById('newsletterForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    this.reset();
});


// ==================== 4. WHATSAPP INTEGRATION ====================
// The WhatsApp button is already functional via the href link
// You can customize the message by changing the text parameter in the HTML


// ==================== 5. SIZE SELECTION IN MODAL ====================
let selectedSize = null;

// Update the openModal function to include size selection
function openModal(category) {
    const modal = document.getElementById('shoeModal');
    const modalTitle = document.getElementById('modalTitle');
    const shoesGrid = document.getElementById('shoesGrid');
    
    const titles = {
        men: "Men's Collection",
        women: "Women's Collection",
        kids: "Kids Collection",
        sports: "Sports Collection",
        casual: "Casual Collection",
        formal: "Formal Collection"
    };
    modalTitle.textContent = titles[category];
    
    shoesGrid.innerHTML = '';
    const shoes = shoeCollections[category];
    
    shoes.forEach((shoe, index) => {
        const shoeCard = `
            <div class="shoe-item">
                <img src="${shoe.image}" alt="${shoe.name}">
                <div class="shoe-details">
                    <h3>${shoe.name}</h3>
                    <p class="shoe-brand">${shoe.brand}</p>
                    <div class="shoe-rating">
                        ${generateStars(shoe.rating)}
                        <span>(${shoe.reviews})</span>
                    </div>
                    <p class="shoe-price">${shoe.price}</p>
                    
                    <div class="size-selector">
                        <label>Select Size:</label>
                        <div class="sizes" id="sizes-${index}">
                            ${generateSizeButtons(index, category)}
                        </div>
                    </div>
                    
                    <button class="btn-add-cart" onclick="addItemToCart(${index}, '${category}')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
        shoesGrid.innerHTML += shoeCard;
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function generateSizeButtons(shoeIndex, category) {
    // Define available sizes based on category
    let sizes = [];
    
    if (category === 'kids') {
        sizes = ['28', '29', '30', '31', '32', '33', '34', '35'];
    } else if (category === 'men') {
        sizes = ['39', '40', '41', '42', '43', '44', '45', '46'];
    } else if (category === 'women') {
        sizes = ['35', '36', '37', '38', '39', '40', '41', '42'];
    } else {
        sizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44'];
    }
    
    return sizes.map(size => {
        // Randomly mark some sizes as out of stock for demo
        const outOfStock = Math.random() > 0.8;
        const className = outOfStock ? 'size-btn out-of-stock' : 'size-btn';
        const disabled = outOfStock ? 'disabled' : '';
        return `<button class="${className}" 
                        onclick="selectSize(${shoeIndex}, '${size}', this)" 
                        ${disabled}>${size}</button>`;
    }).join('');
}

function selectSize(shoeIndex, size, button) {
    // Remove selected class from all size buttons in this shoe's size selector
    const sizeContainer = button.parentElement;
    sizeContainer.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    button.classList.add('selected');
    
    // Store selected size
    button.closest('.shoe-item').setAttribute('data-selected-size', size);
}

function addItemToCart(shoeIndex, category) {
    const shoes = shoeCollections[category];
    const shoe = shoes[shoeIndex];
    
    // Get the selected size
    const shoeItem = document.querySelectorAll('.shoe-item')[shoeIndex];
    const selectedSize = shoeItem.getAttribute('data-selected-size');
    
    if (!selectedSize) {
        alert('Please select a size first!');
        return;
    }
    
    addToCart(shoe.name, shoe.price, shoe.brand, shoe.image, selectedSize);
    
    // Show success message
    showNotification(`${shoe.name} (Size ${selectedSize}) added to cart!`);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 5000;
        animation: slideInRight 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i> ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS (add to style.css)
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;


// ==================== EXISTING FUNCTIONS (Keep your current ones) ====================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

function closeModal() {
    const modal = document.getElementById('shoeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('shoeModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
        closeCart();
    }
});

// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        document.getElementById('navLinks').classList.remove('active');
    });
});

// ==================== BRAND CIRCLE CLICK FUNCTIONALITY ====================

// Brand name mapping
const brandMapping = {
    'nike': 'Nike',
    'adidas': 'Adidas',
    'P': 'Puma',
    'RB': 'Reebok',
    'BT': 'Bata Kenya',
    'C': 'Converse',
    'CL': 'Clarks',
    'V': 'Vans',
    'SK': 'Skechers',
    'TB': 'Timberland',
    'NB': 'New Balance',
    'AS': 'Asics'
};

// Add click event to brand circles
document.querySelectorAll('.brand-circle').forEach((circle, index) => {
    circle.addEventListener('click', function() {
        // Get brand icon or text
        const icon = this.querySelector('i');
        const text = this.querySelector('text');
        
        let brandName = '';
        
        if (icon) {
            const classes = icon.className;
            if (classes.includes('nike')) brandName = 'Nike';
            else if (classes.includes('adidas')) brandName = 'Adidas';
        } else if (text) {
            const brandCode = text.textContent.trim();
            brandName = brandMapping[brandCode] || brandCode;
        }
        
        if (brandName) {
            // Show notification
            showBrandNotification(brandName);
            
            // Optional: Filter products by brand
            // filterProductsByBrand(brandName);
            
            // Optional: Scroll to products section
            // document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // Add tooltip on hover
    circle.setAttribute('title', getBrandName(circle));
});

function getBrandName(circle) {
    const icon = circle.querySelector('i');
    const text = circle.querySelector('text');
    
    if (icon) {
        const classes = icon.className;
        if (classes.includes('nike')) return 'Nike';
        if (classes.includes('adidas')) return 'Adidas';
    } else if (text) {
        const brandCode = text.textContent.trim();
        return brandMapping[brandCode] || brandCode;
    }
    return 'Brand';
}

function showBrandNotification(brandName) {
    // Create notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--dark-bg);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 5000;
        animation: slideDown 0.3s ease;
        border: 2px solid var(--accent-yellow);
    `;
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="color: var(--accent-yellow);"></i>
        Viewing ${brandName} Collection
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Optional: Speed control based on scroll position
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const brandsTrack = document.querySelector('.brands-track');
    if (!brandsTrack) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Speed up when scrolling down, slow down when scrolling up
    if (scrollTop > lastScrollTop) {
        brandsTrack.style.animationDuration = '20s';
    } else {
        brandsTrack.style.animationDuration = '30s';
    }
    
    lastScrollTop = scrollTop;
}, false);