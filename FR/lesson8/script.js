import { products } from "./products.js";
document.getElementById('filterName').addEventListener('oninput', filterProducts);
document.getElementById('filterPrice').addEventListener('oninput', filterProducts);
document.getElementById('filterCategory').addEventListener('oninput', filterProducts);


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
  

