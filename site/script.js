const currencySelector = document.getElementById('currency-selector');
const regionFilter = document.getElementById('region-filter');
const productTableBody = document.querySelector('#product-table tbody');

const products = [
    { name: 'Product A', sales: { USD: 100, EUR: 90, GBP: 80 }, region: 'north-america' },
    { name: 'Product B', sales: { USD: 200, EUR: 180, GBP: 160 }, region: 'europe' },
    { name: 'Product C', sales: { USD: 150, EUR: 135, GBP: 120 }, region: 'asia' }
];

function populateTable() {
    productTableBody.innerHTML = '';
    const selectedCurrency = currencySelector.value;
    const selectedRegion = regionFilter.value;

    products.forEach(product => {
        if (selectedRegion === 'all' || product.region === selectedRegion) {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${product.name}</td><td>${product.sales[selectedCurrency]}</td>`;
            productTableBody.appendChild(row);
        }
    });
}

currencySelector.addEventListener('change', populateTable);
regionFilter.addEventListener('change', populateTable);

// Initial population of the table
populateTable();