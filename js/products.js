// Product Database for Lusso Homes
const products = [
    // Sofas
    {
        id: 1,
        name: "Velvet Charm Modern Sofa",
        category: "sofas",
        price: 78999,
        image: "img/Sofas/Sofas- velvet charm modern sofa - 78999.jpeg",
        description: "Premium button-tufted design with gold accents",
        material: "Premium Velvet, Mahogany Wood",
        dimensions: "230cm x 95cm x 90cm"
    },
    {
        id: 2,
        name: "Minimalist 2-Seater Loveseat",
        category: "sofas",
        price: 64999,
        image: "img/Sofas/Sofas- Oslo Sofa- 64999.jpeg",
        description: "Compact and elegant design for smaller spaces",
        material: "Cotton Blend, Pine Wood",
        dimensions: "150cm x 85cm x 80cm"
    },
    {
        id: 3,
        name: "Modern Orange Two seater Sofa",
        category: "sofas",
        price: 64999,
        image: "img/Sofas/Sofas- Orange Couch - 64999.jpeg",
        description: "Spacious sectional perfect for family gatherings",
        material: "Linen Fabric, Engineered Wood",
        dimensions: "280cm x 180cm x 85cm"
    },
    {
        id: 4,
        name: "Classic Chesterfield Sofa",
        category: "sofas",
        price: 94999,
        image: "img/Sofas/Sofas- Luma Sofa- 69999.jpeg",
        description: "Timeless leather tufted design with button detailing",
        material: "Genuine Leather, Oak Wood",
        dimensions: "210cm x 95cm x 80cm"
    },
    {
        id: 2,
        name: "Valencia Velvet 3-Seater Sofa",
        category: "sofas",
        price: 89999,
        image: "img/Sofas/Sofas- Elliot Sofa- 84999.jpeg",
        description: "Luxurious velvet upholstery with solid wood frame",
        material: "Velvet, Teak Wood",
        dimensions: "220cm x 90cm x 85cm"
    },
    {
        id: 6,
        name: "Contemporary Fabric Sofa",
        category: "sofas",
        price: 74999,
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800",
        description: "Clean lines with comfortable cushioning",
        material: "Textured Fabric, Solid Wood",
        dimensions: "200cm x 88cm x 82cm"
    },
    {
        id: 7,
        name: "Scandinavian Style Sofa",
        category: "sofas",
        price: 94999,
        image: "https://images.unsplash.com/photoss-1551298370-9d3d53740c72?w=800",
        description: "Nordic-inspired design with wooden legs",
        material: "Wool Blend, Beech Wood",
        dimensions: "195cm x 85cm x 78cm"
    },
    {
        id: 8,
        name: "Luxury Italian Leather Sofa",
        category: "sofas",
        price: 179999,
        image: "https://images.unsplash.com/photo-159830ss0042247-d088f8ab3a91?w=800",
        description: "Handcrafted Italian leather with superior comfort",
        material: "Italian Leather, Walnut Wood",
        dimensions: "240cm x 100cm x 88cm"
    },

    // Beds
    {
        id: 9,
        name: "Aurelia Bed - King Size",
        category: "beds",
        price: 129999,
        image: "img/Beds/Beds- Aurelia Bed - 5' x6' - 129999.jpeg",
        description: "Elegant upholstered headboard with storage",
        material: "Fabric Upholstery, Solid Wood",
        dimensions: "King Size (183cm x 203cm)"
    },
    {
        id: 10,
        name: "Modern Canopy Beds",
        category: "beds",
        price: 114999,
        image: "img/Beds/Beds- Canopy Beds - 129999.jpeg",
        description: "Low-profile contemporary design",
        material: "Engineered Wood, Metal",
        dimensions: "Queen Size (152cm x 190cm)"
    },
    {
        id: 11,
        name: "Elegant Wave Design Wooden Bed",
        category: "beds",
        price: 112999 ,
        image: "img/Beds/Beds- Elegant Wave Design Wooden Bed - 112999.jpeg",
        description: "Traditional design with carved details",
        material: "Sheesham Wood",
        dimensions: "King Size (183cm x 203cm)"
    },
    {
        id: 12,
        name: "Luxury Elysian Bed",
        category: "beds",
        price: 111999,
        image: "img/Beds/Beds- Elysian Bed 5' x6' - 111999.jpeg",
        description: "Premium velvet with diamond tufting",
        material: "Velvet, Solid Wood Frame",
        dimensions: "King Size (183cm x 203cm)"
    },
    {
        id: 13,
        name: "Harmony Bed - Queen Size",
        category: "beds",
        price: 74999,
        image: "img/Beds/Beds- Harmony Bed - 5' x 6' - 134999.jpeg",
        description: "Built-in storage drawers for organization",
        material: "Engineered Wood",
        dimensions: "Queen Size (152cm x 190cm)"
    },
    {
        id: 14,
        name: "Canopy Bed with Posts",
        category: "beds",
        price: 154999,
        image: "https://images.unsplash.com/photo-157889888723te1-dff65121b59f?w=800",
        description: "Statement four-poster design",
        material: "Solid Mango Wood",
        dimensions: "King Size (183cm x 203cm)"
    },
    {
        id: 15,
        name: "Contemporary Leather Bed",
        category: "beds",
        price: 129999,
        image: "https://images.unsplash.com/photo-161rg5529328331-f8917597711f?w=800",
        description: "Sleek leather finish with LED lighting",
        material: "Premium Leather, Metal Frame",
        dimensions: "King Size (183cm x 203cm)"
    },
    {
        id: 16,
        name: "Rustic Farmhouse Bed",
        category: "beds",
        price: 89999,
        image: "https://images.unsplash.com/photo-1564078516393-csdf04bd966897?w=800",
        description: "Reclaimed wood aesthetic with vintage charm",
        material: "Reclaimed Teak Wood",
        dimensions: "Queen Size (152cm x 190cm)"
    },

    // Chairs
    {
        id: 17,
        name: "Mid-Century Leather Lounge Chair",
        category: "chairs",
        price: 14999,
        image: "img/chair/black.jpg",
        description: "Classic design with black leather and walnut frame",
        material: "Genuine Leather, Walnut Wood",
        dimensions: "75cm x 80cm x 85cm"
    },
    {
        id: 18,
        name: "Velloré Chair",
        category: "chairs",
        price: 23499,
        image: "img/chair/Chair -Velloré Chair - ( Price 23399 ).jpg",
        description: "Contemporary swivel design with brass accents",
        material: "Bouclé Fabric, Walnut Wood, Brass",
        dimensions: "45cm x 45cm x 110cm each"
    },
    {
        id: 19,
        name: "Circa Bar Stool",
        category: "chairs",
        price: 25999,
        image: "img/chair/Chair-  Circa Bar Stool- 25999.jpeg",
        description: "Minimalist design with suede finish",
        material: "Suede, Walnut Wood",
        dimensions: "40cm x 40cm x 95cm each"
    },
    {
        id: 20,
        name: "Ardelle Bar Stool",
        category: "chairs",
        price: 30999,
        image: "img/chair/Chair- Ardelle Bar Stool - 30999.jpeg",
        description: "Elegant curved back design",
        material: "Leather/Fabric, Solid Wood",
        dimensions: "50cm x 55cm x 82cm each"
    },
    {
        id: 21,
        name: "Olea Chair ",
        category: "chairs",
        price: 18999,
        image: "img/chair/Chair- Olea Chair - 18999.jpeg",
        description: "Unique sculptural design with brass details",
        material: "Bouclé Fabric, Ash Wood, Brass",
        dimensions: "65cm x 70cm x 95cm"
    },
    {
        id: 22,
        name: "Franka Dining Chair",
        category: "chairs",
        price: 21999,
        image: "img/chair/Chairs- Franka Dining Chair- 21999.jpeg",
        description: "Traditional elegance with modern comfort",
        material: "Velvet, Solid Wood Frame",
        dimensions: "80cm x 85cm x 105cm"
    },
    {
        id: 23,
        name: "Office Executive Chair",
        category: "chairs",
        price: 22999,
        image: "img/chair/red.jpg",
        description: "Ergonomic leather chair with lumbar support",
        material: "Premium Leather, Metal Base",
        dimensions: "70cm x 75cm x 120cm"
    },
    {
        id: 24,
        name: "Rattan Accent Chair",
        category: "chairs",
        price: 27999,
        image: "img/chair/white.jpg",
        description: "Natural rattan weave with cushion",
        material: "Natural Rattan, Cotton Cushion",
        dimensions: "65cm x 70cm x 85cm"
    },

    // Tables
    {
        id: 25,
        name: "Orren Jermani Dining Table",
        category: "tables",
        price: 81999,
        image: "img/Dining Tables with chair/Dining Table- Orren Jermani Dining Table- 6.5'x3'- 81999.jpeg",
        description: "Elegant marble surface with gold legs",
        material: "Italian Marble, Brass Legs",
        dimensions: "180cm x 90cm x 75cm"
    },
    {
        id: 26,
        name: " Pakloer European cream style dining table set",
        category: "tables",
        price: 91999,
        image: "img/Dining Tables with chair/Dining Table- Pakloer European cream style dining table set - 91999.jpeg",
        description: "Rustic charm with natural wood grain",
        material: "Solid Sheesham Wood",
        dimensions: "120cm x 60cm x 45cm"
    },
    {
        id: 27,
        name: "Retro Modern Oval Sintered Stone Dining Table Set",
        category: "tables",
        price: 129999,
        image: "img/Dining Tables with chair/Dining Table- Retro Modern Oval Sintered Stone Dining Table Sets - 129999.jpeg",
        description: "Modern design with tempered glass",
        material: "Tempered Glass, Metal Frame",
        dimensions: "140cm x 40cm x 80cm"
    },
    {
        id: 28,
        name: "Velisse Table",
        category: "tables",
        price: 83999,
        image: "img/Dining Tables with chair/Dining Table- Velisse Table- 6.5'x3'- 83999.jpeg",
        description: "Urban aesthetic with storage drawers",
        material: "Reclaimed Wood, Iron Frame",
        dimensions: "140cm x 70cm x 75cm"
    },
    {
        id: 29,
        name: "Dining Table-Sleek Black Coffee Table with Gold Accents",
        category: "tables",
        price: 74999,
        image: "img/Dining Tables with chair/Dining Table- Sleek Black Coffee Table with Gold Accents- 6.5'x3'- 74999.jpeg",
        description: "Classic round design seats 6 people",
        material: "Solid Oak Wood",
        dimensions: "Ø 140cm x 75cm"
    },
    {
        id: 30,
        name: "Marlow Cane Console Table",
        category: "tables",
        price: 35999,
        image: "img/Console Tables/Console - Marlow Cane Console - 2'6 x 3' - 35999.jpeg",
        description: "Space-saving design with gold finish",
        material: "Engineered Wood, Gold Metal",
        dimensions: "Various sizes (45-60cm)"
    },
    {
        id: 31,
        name: "Modern White Console Table",
        category: "tables",
        price: 44999,
        image: "img/Console Tables/Console- Modern White Console- 44999.jpeg",
        description: "Expandable design for large gatherings",
        material: "Solid Walnut Wood",
        dimensions: "180-240cm x 95cm x 75cm"
    },
    {
        id: 32,
        name: "Console Tables- Elara Table",
        category: "tables",
        price: 39999,
        image: "img/Console Tables/Console Tables- Elara Table - 4'x3'- 39999.jpeg",
        description: "Sleek Scandinavian-inspired design",
        material: "Beech Wood, Metal",
        dimensions: "50cm x 50cm x 55cm"
    },
     {
        id: 33,
        name: "Industrial Style Desk",
        category: "tables",
        price: 37999,
        image: "img/Console Tables/Console- Rattan Solid Wood Frame Home Doorway - 37999.jpeg",
        description: "Urban aesthetic with storage drawers",
        material: "Reclaimed Wood, Iron Frame",
        dimensions: "140cm x 70cm x 75cm"
    },
    {
        id: 34,
        name: "Traditional Art console Table",
        category: "tables",
        price: 42999,
        image: "img/Console Tables/Console- Traditional Art console - 42999.jpeg",
        description: "Space-saving design with gold finish",
        material: "Engineered Wood, Gold Metal",
        dimensions: "Various sizes (45-60cm)"
    },
    {
        id: 35,
        name: "Study Table - Brontë Desk",
        category: "tables",
        price: 34999,
        image: "img/Study Tables/Study Table - Brontë Desk - 32999.jpeg",
        description: "Expandable design for large gatherings",
        material: "Solid Walnut Wood",
        dimensions: "180-240cm x 95cm x 75cm"
    },
    {
        id: 36,
        name: "Study Table- Manor Table",
        category: "tables",
        price: 41999,
        image: "img/Study Tables/Study Table- Manor Table - 3' x 1'10 - 41999 - Copy.jpeg",
        description: "Sleek Scandinavian-inspired design",
        material: "Beech Wood, Metal",
        dimensions: "50cm x 50cm x 55cm"
    },
    // Storage
    {
        id: 33,
        name: "Wardrobe with Sliding Doors",
        category: "storage",
        price: 124999,
        image: "https://images.unsplash.com/photo-1595428773653-ddb8c6d58d85?w=800",
        description: "Spacious storage with mirror finish",
        material: "Engineered Wood, Glass",
        dimensions: "240cm x 60cm x 210cm"
    },
    {
        id: 34,
        name: "Modern Bookshelf Unit",
        category: "storage",
        price: 44999,
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800",
        description: "Open shelving for display and storage",
        material: "Solid Wood, Metal Frame",
        dimensions: "180cm x 35cm x 200cm"
    },
    {
        id: 35,
        name: "Chest of Drawers",
        category: "storage",
        price: 54999,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        description: "Classic design with brass handles",
        material: "Sheesham Wood",
        dimensions: "120cm x 45cm x 95cm"
    },
    {
        id: 36,
        name: "TV Entertainment Unit",
        category: "storage",
        price: 74999,
        image: "https://images.unsplash.com/photo-1603713696021-5a6573b3f998?w=800",
        description: "Contemporary media console with storage",
        material: "Walnut Veneer, Engineered Wood",
        dimensions: "200cm x 45cm x 60cm"
    },

    // Decor
    {
        id: 37,
        name: "Designer Floor Lamp",
        category: "decor",
        price: 18999,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
        description: "Arc design with marble base",
        material: "Brass, Marble",
        dimensions: "180cm height"
    },
    {
        id: 38,
        name: "Wall Mirror with Gold Frame",
        category: "decor",
        price: 24999,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
        description: "Statement piece for living spaces",
        material: "Glass, Metal Frame",
        dimensions: "90cm x 120cm"
    },
    {
        id: 39,
        name: "Handwoven Area Rug",
        category: "decor",
        price: 34999,
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=800",
        description: "Premium wool with geometric pattern",
        material: "100% Wool",
        dimensions: "200cm x 300cm"
    },
    {
        id: 40,
        name: "Decorative Vase Set",
        category: "decor",
        price: 8999,
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800",
        description: "Ceramic vases in neutral tones",
        material: "Ceramic",
        dimensions: "Various (25-40cm height)"
    }
];

// Format price in Indian Rupees
function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

// Get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === parseInt(id));
}

// Get all categories
function getAllCategories() {
    return [...new Set(products.map(product => product.category))];
}

// Search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
}

// Sort products
function sortProducts(productList, sortBy) {
    switch(sortBy) {
        case 'price-low':
            return [...productList].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...productList].sort((a, b) => b.price - a.price);
        case 'name':
            return [...productList].sort((a, b) => a.name.localeCompare(b.name));
        default:
            return productList;
    }
}
