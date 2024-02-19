
document.getElementById('filterName').addEventListener('input', filterProducts);
document.getElementById('filterPrice').addEventListener('input', filterProducts);
document.getElementById('filterCategory').addEventListener('input', filterProducts);


    const products = [
        { name: 'Товар 1', category: 'Категория 1', price: 100 },
        { name: 'Товар 2', category: 'Категория 2', price: 200 },
        { name: 'Товар 3', category: 'Категория 1', price: 150 },
        { name: 'Товар 4', category: 'Категория 2', price: 120 },
        { name: 'Товар 5', category: 'Категория 3', price: 180 },
        { name: 'Товар 6', category: 'Категория 3', price: 250 },
        { name: 'Товар 7', category: 'Категория 1', price: 300 },
        { name: 'Товар 8', category: 'Категория 2', price: 170 },
        { name: 'Товар 9', category: 'Категория 3', price: 220 }
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
        const filterName = document.getElementById('filterName').value.toLowerCase();
        const filterPrice = parseInt(document.getElementById('filterPrice').value) || 0;
        const filterCategory = document.getElementById('filterCategory').value.toLowerCase();
        
        let filteredProducts = products.filter(product => {
            return (product.name.toLowerCase().includes(filterName) || filterName === '') &&
                   (isNaN(filterPrice) || product.price === filterPrice || filterPrice === 0) &&
                   (product.category.toLowerCase().includes(filterCategory) || filterCategory === '');
        });
        
        renderProducts(filteredProducts);
    }
    filterProducts(products)

 

    renderProducts(products);
