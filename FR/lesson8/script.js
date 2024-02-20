
document.getElementById('filterName').addEventListener('oninput', filterProducts);
document.getElementById('filterPrice').addEventListener('oninput', filterProducts);
document.getElementById('filterCategory').addEventListener('oninput', filterProducts);

const products = [
    { name: 'Товар 1', category: 'Категория 1', price: 100 },
    { name: 'Товар 2', category: 'Категория 2', price: 200 },
    { name: 'Товар 3', category: 'Категория 1', price: 150 },
    { name: 'Товар 4', category: 'Категория 2', price: 120 },
    { name: 'Товар 5', category: 'Категория 3', price: 180 },
    { name: 'Товар 6', category: 'Категория 3', price: 250 },
    { name: 'Товар 7', category: 'Категория 1', price: 300 },
    { name: 'Товар 8', category: 'Категория 2', price: 170 },
    { name: 'Товар 9', category: 'Категория 3', price: 220 },
    { name: 'Товар 10', category: 'Категория 1', price: 1000 },
    { name: 'Товар 11', category: 'Категория 2', price: 2200 },
    { name: 'Товар 12', category: 'Категория 1', price: 1500 },
    { name: 'Товбар 13', category: 'Категория 2', price: 1200 },
    { name: 'Товар 14', category: 'Категория 3', price: 1850 },
    { name: 'Товар 15', category: 'Категория 3', price: 2580 },
    { name: 'Товбар 16', category: 'Категория 1', price: 3020 },
    { name: 'Товар 17', category: 'Категория 2', price: 1780 },
    { name: 'Товар 18', category: 'Категория 3', price: 220 }
];

    function renderProducts(products) {
        const productsDiv = document.getElementById('products');
        productsDiv.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <p><strong>Название:</strong> ${product.name}</p>
                <p><strong>Категория:</strong> ${product.category}</p>
                <p><strong>Цена:</strong> ${product.price}</p>
            `;
            productsDiv.appendChild(card);
        });
    }
   

    function filterProducts() {
        const filterName = document.getElementById('filterName').value.trim().toLowerCase();
        const filterPrice = parseInt(document.getElementById('filterPrice').value) || 0;
        const filterCategory = document.getElementById('filterCategory').value.trim().toLowerCase();
        
        let filteredProducts = products.filter(product => {
            const matchesName = product.name.toLowerCase().includes(filterName) || filterName === '';
            const matchesPrice = isNaN(filterPrice) || product.price === filterPrice || product.price >= filterPrice || filterPrice === 0;
            const matchesCategory = product.category.toLowerCase().includes(filterCategory) || filterCategory === '';
    
            return matchesName && matchesPrice && matchesCategory;
        });
        
        renderProducts(filteredProducts);
    }


    renderProducts(products);
  

