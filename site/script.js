document.addEventListener('DOMContentLoaded', function() {
    const currencySelector = document.getElementById('currency-selector');
    const regionFilter = document.getElementById('region-filter');
    const productTableBody = document.querySelector('#product-table tbody');

    // Sample data for products
    const products = [
        { name: 'Product A', sales: 100, region: 'north-america' },
        { name: 'Product B', sales: 200, region: 'europe' },
        { name: 'Product C', sales: 150, region: 'asia' }
    ];

    function updateTable() {
        const selectedCurrency = currencySelector.value;
        const selectedRegion = regionFilter.value;
        productTableBody.innerHTML = '';

        const filteredProducts = products.filter(product => {
            return selectedRegion === 'all' || product.region === selectedRegion;
        });

        filteredProducts.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${product.name}</td><td>${convertCurrency(product.sales, selectedCurrency)}</td><td>${selectedCurrency}</td>`;
            productTableBody.appendChild(row);
        });
    }

    function convertCurrency(amount, currency) {
        // Placeholder for currency conversion logic
        return amount; // Return the amount as is for now
    }

    currencySelector.addEventListener('change', updateTable);
    regionFilter.addEventListener('change', updateTable);

    updateTable(); // Initial table population
});