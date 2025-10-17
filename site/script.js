const rates = require('./rates.json');

const products = [
    { name: 'Product A', sales: 100, region: 'north-america' },
    { name: 'Product B', sales: 200, region: 'europe' },
    { name: 'Product C', sales: 150, region: 'asia' },
    { name: 'Product D', sales: 300, region: 'north-america' },
];

const currencySelector = document.getElementById('currency-selector');
const regionFilter = document.getElementById('region-filter');
const productTable = document.getElementById('product-table').getElementsByTagName('tbody')[0];
const resultDiv = document.getElementById('result');

function populateTable() {
    productTable.innerHTML = '';
    const selectedRegion = regionFilter.value;
    const filteredProducts = products.filter(product => selectedRegion === 'all' || product.region === selectedRegion);
    filteredProducts.forEach(product => {
        const row = productTable.insertRow();
        row.insertCell(0).innerText = product.name;
        row.insertCell(1).innerText = product.sales;
        row.insertCell(2).innerText = product.region;
    });
}

function calculateSum() {
    const selectedCurrency = currencySelector.value;
    const selectedRegion = regionFilter.value;
    const filteredProducts = products.filter(product => selectedRegion === 'all' || product.region === selectedRegion);
    const totalSales = filteredProducts.reduce((sum, product) => sum + product.sales, 0);
    const convertedTotal = totalSales * rates[selectedCurrency];
    resultDiv.innerText = `Total Sales in ${selectedCurrency}: ${convertedTotal.toFixed(2)}`;
}

currencySelector.addEventListener('change', calculateSum);
regionFilter.addEventListener('change', populateTable);
document.getElementById('calculate-sum').addEventListener('click', calculateSum);
populateTable();