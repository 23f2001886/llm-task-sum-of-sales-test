fetch('data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').slice(1);
        let totalSales = 0;
        rows.forEach(row => {
            const columns = row.split(',');
            const sales = parseFloat(columns[1]); // Assuming sales is in the second column
            if (!isNaN(sales)) {
                totalSales += sales;
            }
        });
        document.getElementById('total-sales').innerText = `Total Sales: $${totalSales.toFixed(2)}`;
    })
    .catch(error => console.error('Error fetching the CSV file:', error));