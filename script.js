// Function to fetch a joke
function fetchJoke() {
    return fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            document.getElementById('joke-text').innerText = data.setup + ' - ' + data.punchline;
        })
        .catch(error => console.error('Error fetching joke:', error));
}

// Function to fetch weather information
function fetchWeather() {
    const apiKey = 'aedb7fd6c37898b53cb1e2e114e4eb8b'; // Replace with your OpenWeatherMap API key
    const city = 'Bangalore';
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            document.getElementById('weather-text').innerText = `Weather: ${weatherDescription}, Temperature: ${temperature}°C`;
        })
        .catch(error => console.error('Error fetching weather:', error));
}

// Function to fetch latest news
function fetchNews() {
    const apiKey = 'fea5c86c05a148038d34002d7ab3cbf2'; // Replace with your News API key
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const newsList = document.getElementById('news-list');
            newsList.innerHTML = '';
            data.articles.forEach(article => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerText = article.title;
                newsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
}

// Event listeners for buttons
document.getElementById('joke-button').addEventListener('click', fetchJoke);
document.getElementById('weather-button').addEventListener('click', fetchWeather);
document.getElementById('news-button').addEventListener('click', fetchNews);

// Initial fetches
fetchJoke();
fetchWeather();
fetchNews();

