// Get the canvas element where the chart will be drawn
const ctx = document.getElementById('forecastChart').getContext('2d');

// Create a new Chart using Chart.js
new Chart(ctx, {
    type: 'line',  // You can change this to 'bar', 'radar', etc., if you prefer
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],  // Labels for the x-axis
        datasets: [{
            label: 'Temperature',  // Label for the dataset
            data: [20, 22, 25, 23, 26, 28, 30],  // Example data for temperatures for each day
            borderColor: 'blue',  // Line color
            fill: false  // Do not fill the area under the line
        }]
    },
    options: {
        responsive: true,  // Make the chart responsive
        maintainAspectRatio: false,  // Allow the chart to adjust aspect ratio to fit the container
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days of the Week'  // Label for the x-axis
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°C)'  // Label for the y-axis
                }
            }
        }
    }
});
