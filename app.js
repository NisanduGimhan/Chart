//arrTem=[];

const apiwheather = "http://api.weatherapi.com/v1/current.json?key=1d70e4b03e3544db87054438242711&q=panadura";

   
    fetch(apiwheather)
        .then(response => response.json())
        .then(data => {
            console.log(data);          
            document.getElementById('current-temp').innerText = `Temperature: ${data.current.temp_c}°C `;
            document.getElementById('humidity').innerText = `Humidity: ${data.current.humidity}%`;
            if(data.current.temp_c<25 && data.current.temp_c>22 ){
                document.getElementById('recomondation').innerText ="Its good day for go to Out🚶🏻🚶🏻‍♀️";
            }else{
                document.getElementById('recomondation').innerText ="Its not good day for go to Out⛈️";
            }
            const weatherData = [data.current.temp_c, data.current.humidity, data.current.wind_mph];
            const weatherLabels = ['Temperature', 'Humidity', 'Wind Speed'];
 
           //arrTem.push(data.current.temp_c);
           //console.log(arrTem)
            
        })
        .catch(error => console.error('Error fetching data:', error));





const ctx = document.getElementById('forecastChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Temperature',
        data: [27, 16, 26, 28, 24, 26,11],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const ctxx = document.getElementById('HumidityChart');
      
        new Chart(ctxx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'wheather',
              data: [12, 19, 10, 5, 20, 3,15],
             // background:
              borderWidth: 5,
              cutout:5,
              
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });


        const ctxxv = document.getElementById('TempChart');
      
        new Chart(ctxxv, {
          type: 'radar',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'wheather',
              data: [27, 16, 26, 28, 24, 26,11],
             // background:
              borderWidth: 5,
              cutout:5,
              
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });