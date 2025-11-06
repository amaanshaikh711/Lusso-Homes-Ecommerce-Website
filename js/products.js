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
        id: 5,
        name: "Valencia Velvet 3-Seater Sofa",
        category: "sofas",
        price: 89999,
        image: "img/Sofas/Sofas- Elliot Sofa- 84999.jpeg",
        description: "Luxurious velvet upholstery with solid wood frame",
        material: "Velvet, Teak Wood",
        dimensions: "220cm x 90cm x 85cm"
    },
    // {
    //     id: 6,
    //     name: "Contemporary Fabric Sofa",
    //     category: "sofas",
    //     price: 74999,
    //     image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800",
    //     description: "Clean lines with comfortable cushioning",
    //     material: "Textured Fabric, Solid Wood",
    //     dimensions: "200cm x 88cm x 82cm"
    // },
    // {
    //     id: 7,
    //     name: "Scandinavian Style Sofa",
    //     category: "sofas",
    //     price: 94999,
    //     image: "https://images.unsplash.com/photoss-1551298370-9d3d53740c72?w=800",
    //     description: "Nordic-inspired design with wooden legs",
    //     material: "Wool Blend, Beech Wood",
    //     dimensions: "195cm x 85cm x 78cm"
    // },
    // {
    //     id: 8,
    //     name: "Luxury Italian Leather Sofa",
    //     category: "sofas",
    //     price: 179999,
    //     image: "https://images.unsplash.com/photo-159830ss0042247-d088f8ab3a91?w=800",
    //     description: "Handcrafted Italian leather with superior comfort",
    //     material: "Italian Leather, Walnut Wood",
    //     dimensions: "240cm x 100cm x 88cm"
    // },

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
    // {
    //     id: 14,
    //     name: "Canopy Bed with Posts",
    //     category: "beds",
    //     price: 154999,
    //     image: "https://images.unsplash.com/photo-157889888723te1-dff65121b59f?w=800",
    //     description: "Statement four-poster design",
    //     material: "Solid Mango Wood",
    //     dimensions: "King Size (183cm x 203cm)"
    // },
    // {
    //     id: 15,
    //     name: "Contemporary Leather Bed",
    //     category: "beds",
    //     price: 129999,
    //     image: "https://images.unsplash.com/photo-161rg5529328331-f8917597711f?w=800",
    //     description: "Sleek leather finish with LED lighting",
    //     material: "Premium Leather, Metal Frame",
    //     dimensions: "King Size (183cm x 203cm)"
    // },
    // {
    //     id: 16,
    //     name: "Rustic Farmhouse Bed",
    //     category: "beds",
    //     price: 89999,
    //     image: "https://images.unsplash.com/photo-1564078516393-csdf04bd966897?w=800",
    //     description: "Reclaimed wood aesthetic with vintage charm",
    //     material: "Reclaimed Teak Wood",
    //     dimensions: "Queen Size (152cm x 190cm)"
    // },

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
    
    // Study Tables
    {
        id: 25,
        name: "Study Table - Brontë Desk",
        category: "study-tables",
        price: 32999,
        image: "img/Study Tables/Study Table - Brontë Desk - 32999.jpeg",
        description: "Classic design with ample workspace",
        material: "Premium Hardwood, Metal Accents",
        dimensions: "Standard Study Table Size"
    },
    {
        id: 26,
        name: "Study Table - Manor Table",
        category: "study-tables",
        price: 41999,
        image: "img/Study Tables/Study Table- Manor Table - 3' x 1'10 - 41999 - Copy.jpeg",
        description: "Elegant manor-style study desk with spacious surface",
        material: "Solid Wood, Metal Hardware",
        dimensions: "3' x 1'10\""
    },
    {
        id: 27,
        name: "Study Table - Stratford Table",
        category: "study-tables",
        price: 45999,
        image: "img/Study Tables/Study Table- Stratford Table -1'10 x 3'- 45999.jpeg",
        description: "Contemporary design with modern aesthetics",
        material: "Engineered Wood, Metal Frame",
        dimensions: "1'10\" x 3'"
    },
    {
        id: 28,
        name: "Study Table - Ventana Writing Desk",
        category: "study-tables",
        price: 30999,
        image: "img/Study Tables/Study Table- Ventana Writing Desk- 30999.jpeg",
        description: "Modern writing desk with minimalist design",
        material: "Premium MDF, Steel Frame",
        dimensions: "Standard Writing Desk Size"
    },
    {
        id: 29,
        name: "Study Table - Langford Executive Desk",
        category: "study-tables",
        price: 32999,
        image: "img/Study Tables/Study Table-Langford Executive Desk - 22 x 3' - 32999.jpeg",
        description: "Executive style desk with professional appeal",
        material: "Premium Wood, Metal Base",
        dimensions: "22\" x 3'"
    },
    
    // Wardrobes
    {
        id: 30,
        name: "Wardrobe - Serene Wardrobe",
        category: "wardrobes",
        price: 129999,
        image: "img/Wardrobes/Wardrobe - Serene Wardrobe - 129999 - 6x9.jpeg",
        description: "A serene and elegant wardrobe.",
        material: "Wood",
        dimensions: "6x9"
    },
    {
        id: 31,
        name: "Wardrobe - Verelle Cabinet",
        category: "wardrobes",
        price: 749999,
        image: "img/Wardrobes/Wardrobe - Verelle Cabinet -749999.jpeg",
        description: "A stylish and spacious cabinet.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 32,
        name: "Wardrobe- Armoire",
        category: "wardrobes",
        price: 149000,
        image: "img/Wardrobes/Wardrobe- Armoire- 6' x 8'- 149000.jpeg",
        description: "A classic armoire for your clothing.",
        material: "Wood",
        dimensions: "6' x 8'"
    },
    {
        id: 33,
        name: "Wardrobe- Big Luxury Wooden Wardrobes Armario",
        category: "wardrobes",
        price: 179999,
        image: "img/Wardrobes/Wardrobe- Big Luxury Wooden Wardrobes Armario - 179999.jpeg",
        description: "A big, luxurious wooden wardrobe.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 34,
        name: "Wardrobe- Rattan modern simple wardrobe",
        category: "wardrobes",
        price: 68999,
        image: "img/Wardrobes/Wardrobe- Rattan modern simple wardrobe- 68999.jpeg",
        description: "A modern and simple rattan wardrobe.",
        material: "Rattan, Wood",
        dimensions: "N/A"
    },

    // Center Tables
    {
        id: 35,
        name: "2-Tiered Japandi Round Walnut Wood Coffee Table with Storage Rattan Base",
        category: "center-tables",
        price: 23499,
        image: "img/Centre Tables/Center Table - 2-Tiered Japandi Round  Walnut Wood Coffee Table with Storage Rattan Base - 23499.jpg",
        description: "A beautiful and functional Japandi-style coffee table.",
        material: "Walnut Wood, Rattan",
        dimensions: "N/A"
    },
    {
        id: 36,
        name: "Kairos Coffee Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table - Kairos Coffee Table - 25999.jpeg",
        description: "A stylish and modern coffee table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 37,
        name: "Linea Coffee Table",
        category: "center-tables",
        price: 23999,
        image: "img/Centre Tables/Center Table - Linea Coffee Table 23999.jpg",
        description: "A sleek and minimalist coffee table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 38,
        name: "Seren Wood Table",
        category: "center-tables",
        price: 33999,
        image: "img/Centre Tables/Center Table - Seren Wood Table- 33999.jpg",
        description: "A serene and elegant wooden coffee table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 39,
        name: "Circa Duo Coffee Table",
        category: "center-tables",
        price: 32999,
        image: "img/Centre Tables/Center Table- Circa Duo Coffee Table -32999.jpeg",
        description: "A unique and stylish duo coffee table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 40,
        name: "Glass Coffee Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table- Glass Coffe Table - 25999.jpeg",
        description: "A modern glass coffee table.",
        material: "Glass, Metal",
        dimensions: "N/A"
    },
    {
        id: 41,
        name: "Luno Table",
        category: "center-tables",
        price: 30999,
        image: "img/Centre Tables/Center Table- Luno Table- 3' x 20'- 30999.jpeg",
        description: "A stylish and functional coffee table.",
        material: "Wood",
        dimensions: "3' x 20'"
    },
    {
        id: 42,
        name: "Modern Round Coffee Table Stainless Steel White Sintered Stone Top Accent Table",
        category: "center-tables",
        price: 25999,
        image: "img/Centre Tables/Center Table- Modern Round Coffee Table Stainless Steel White Sintered Stone Top Accent Table - 25999.jpeg",
        description: "A modern and luxurious coffee table.",
        material: "Sintered Stone, Stainless Steel",
        dimensions: "N/A"
    },

    // Dining Tables
    {
        id: 43,
        name: "Orren Jermani Dining Table",
        category: "dining-tables",
        price: 81999,
        image: "img/Dining Tables with chair/Dining Table- Orren Jermani Dining Table- 6.5'x3'- 81999.jpeg",
        description: "A beautiful and elegant dining table.",
        material: "Wood",
        dimensions: "6.5'x3'"
    },
    {
        id: 44,
        name: "Pakloer European cream style dining table set",
        category: "dining-tables",
        price: 91999,
        image: "img/Dining Tables with chair/Dining Table- Pakloer European cream style dining table set - 91999.jpeg",
        description: "A stylish and modern dining table set.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 45,
        name: "Retro Modern Oval Sintered Stone Dining Table Sets",
        category: "dining-tables",
        price: 129999,
        image: "img/Dining Tables with chair/Dining Table- Retro Modern Oval Sintered Stone Dining Table Sets - 129999.jpeg",
        description: "A retro and modern dining table set.",
        material: "Sintered Stone, Metal",
        dimensions: "N/A"
    },
    {
        id: 46,
        name: "Sleek Black Coffee Table with Gold Accents",
        category: "dining-tables",
        price: 74999,
        image: "img/Dining Tables with chair/Dining Table- Sleek Black Coffee Table with Gold Accents- 6.5'x3'- 74999.jpeg",
        description: "A sleek and modern dining table with gold accents.",
        material: "Wood, Metal",
        dimensions: "6.5'x3'"
    },
    {
        id: 47,
        name: "Velisse Table",
        category: "dining-tables",
        price: 83999,
        image: "img/Dining Tables with chair/Dining Table- Velisse Table- 6.5'x3'- 83999.jpeg",
        description: "A stylish and elegant dining table.",
        material: "Wood",
        dimensions: "6.5'x3'"
    },
    
    // Side Tables
    {
        id: 48,
        name: "Curvo Side Table",
        category: "side-tables",
        price: 18999,
        image: "img/Side Tables/Side Table - Curvo Side Table - 18999.jpeg",
        description: "A stylish and curved side table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 49,
        name: "Elysia Table",
        category: "side-tables",
        price: 12999,
        image: "img/Side Tables/Side Table - Elysia Table - 12999.jpg",
        description: "A beautiful and elegant side table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 50,
        name: "Lunara Table",
        category: "side-tables",
        price: 19499,
        image: "img/Side Tables/Side Table - Lunara Table  - 19499.jpg",
        description: "A modern and stylish side table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 51,
        name: "Serenno Table",
        category: "side-tables",
        price: 22999,
        image: "img/Side Tables/Side Table - Serenno Table - 22999.jpeg",
        description: "A serene and elegant side table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 52,
        name: "Seréno Table",
        category: "side-tables",
        price: 17999,
        image: "img/Side Tables/Side Table - Seréno Table  ( Price 17999 ).jpg",
        description: "A stylish and elegant side table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 53,
        name: "Tavolaé",
        category: "side-tables",
        price: 17999,
        image: "img/Side Tables/Side Table - Tavolaé  ( Price 17999 ).jpg",
        description: "A unique and stylish side table.",
        material: "Wood",
        dimensions: "N/A"
    },

    // Console Tables
    {
        id: 54,
        name: "Marlow Cane Console",
        category: "console-tables",
        price: 35999,
        image: "img/Console Tables/Console - Marlow Cane Console - 2'6 x 3' - 35999.jpeg",
        description: "A beautiful and elegant console table.",
        material: "Cane, Wood",
        dimensions: "2'6 x 3'"
    },
    {
        id: 55,
        name: "Elara Table",
        category: "console-tables",
        price: 39999,
        image: "img/Console Tables/Console Tables- Elara Table - 4'x3'- 39999.jpeg",
        description: "A stylish and modern console table.",
        material: "Wood",
        dimensions: "4'x3'"
    },
    {
        id: 56,
        name: "Modern White Console",
        category: "console-tables",
        price: 44999,
        image: "img/Console Tables/Console- Modern White Console- 44999.jpeg",
        description: "A sleek and minimalist console table.",
        material: "Wood",
        dimensions: "N/A"
    },
    {
        id: 57,
        name: "Rattan Solid Wood Frame Home Doorway",
        category: "console-tables",
        price: 37999,
        image: "img/Console Tables/Console- Rattan Solid Wood Frame Home Doorway - 37999.jpeg",
        description: "A beautiful and functional console table.",
        material: "Rattan, Wood",
        dimensions: "N/A"
    },
    {
        id: 58,
        name: "Traditional Art console",
        category: "console-tables",
        price: 42999,
        image: "img/Console Tables/Console- Traditional Art console - 42999.jpeg",
        description: "A traditional and artistic console table.",
        material: "Wood",
        dimensions: "N/A"
    },

    // Shoe Racks
    {
        id: 59,
        name: "Modena Shoe Cabinet",
        category: "shoe-racks",
        price: 39999,
        image: "img/Shoe Racks/Shoe Rack - Modena Shoe Cabinet - 3'6 x 3' - 39999.jpeg",
        description: "A stylish and modern shoe cabinet.",
        material: "Wood",
        dimensions: "3'6 x 3'"
    },
    {
        id: 60,
        name: "Rattan wood shoe rack",
        category: "shoe-racks",
        price: 42999,
        image: "img/Shoe Racks/Shoe Rack - Rattan wood shoe rack - 3'6 x 3' - 42999.jpeg",
        description: "A beautiful and functional rattan shoe rack.",
        material: "Rattan, Wood",
        dimensions: "3'6 x 3'"
    },
    {
        id: 61,
        name: "Rustique Rack",
        category: "shoe-racks",
        price: 32999,
        image: "img/Shoe Racks/Shoe Rack- Rustique Rack- 3.5'x2.5'- 32999.jpeg",
        description: "A rustic and charming shoe rack.",
        material: "Wood",
        dimensions: "3.5'x2.5'"
    },
    {
        id: 62,
        name: "Walnut Solid Wood",
        category: "shoe-racks",
        price: 38999,
        image: "img/Shoe Racks/Shoe Rack- Walnut Solid Wood - 3'6 x 3' - 38999.jpeg",
        description: "A solid and durable walnut shoe rack.",
        material: "Walnut Wood",
        dimensions: "3'6 x 3'"
    },
    {
        id: 63,
        name: "White Wood Shoe Rack",
        category: "shoe-racks",
        price: 41999,
        image: "img/Shoe Racks/Shoe Rack- White Wood Shoe Rack - 3'6 x 3' - 41999.jpeg",
        description: "A clean and modern white shoe rack.",
        material: "Wood",
        dimensions: "3'6 x 3'"
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