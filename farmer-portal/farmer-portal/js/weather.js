const weatherData = {
  shrirampur: { city: 'Shrirampur, Maharashtra', temp: 30, feels: 33, humidity: 62, wind: 14, desc: 'Partly Cloudy', icon: '⛅', rain: '10%', uv: 7, visibility: 10 },
  nashik:     { city: 'Nashik, Maharashtra',     temp: 27, feels: 29, humidity: 55, wind: 12, desc: 'Clear Sky',      icon: '☀️', rain: '5%',  uv: 8, visibility: 15 },
  pune:       { city: 'Pune, Maharashtra',        temp: 29, feels: 31, humidity: 58, wind: 18, desc: 'Hazy',           icon: '🌤️', rain: '8%',  uv: 7, visibility: 8  },
  nagpur:     { city: 'Nagpur, Maharashtra',      temp: 35, feels: 39, humidity: 42, wind: 20, desc: 'Hot & Sunny',    icon: '🌞', rain: '2%',  uv: 10, visibility: 20 },
  mumbai:     { city: 'Mumbai, Maharashtra',      temp: 32, feels: 37, humidity: 78, wind: 22, desc: 'Humid & Cloudy', icon: '🌫️', rain: '25%', uv: 5, visibility: 5  },
  delhi:      { city: 'Delhi',                    temp: 22, feels: 20, humidity: 45, wind: 16, desc: 'Foggy',          icon: '🌁', rain: '3%',  uv: 4, visibility: 4  },
  aurangabad: { city: 'Aurangabad, Maharashtra',  temp: 31, feels: 34, humidity: 50, wind: 11, desc: 'Sunny',          icon: '☀️', rain: '4%',  uv: 9, visibility: 18 },
  default:    { city: 'India',                    temp: 28, feels: 30, humidity: 60, wind: 15, desc: 'Pleasant',       icon: '🌤️', rain: '10%', uv: 6, visibility: 12 },
};

const forecast = [
  { day: 'Today', icon: '⛅', high: 30, low: 22, rain: '10%' },
  { day: 'Sun',   icon: '☀️', high: 32, low: 23, rain: '5%' },
  { day: 'Mon',   icon: '🌦️', high: 28, low: 21, rain: '40%' },
  { day: 'Tue',   icon: '🌧️', high: 26, low: 20, rain: '70%' },
  { day: 'Wed',   icon: '🌦️', high: 27, low: 21, rain: '45%' },
  { day: 'Thu',   icon: '⛅', high: 29, low: 22, rain: '15%' },
  { day: 'Fri',   icon: '☀️', high: 31, low: 23, rain: '5%'  },
];

const agroTipsData = [
  { icon: '💧', title: 'Irrigation Advisory',   text: 'Soil moisture is adequate. No irrigation needed for the next 2 days. Schedule drip irrigation for Day 3 morning.' },
  { icon: '🌱', title: 'Sowing Conditions',     text: 'Good conditions for Rabi crop sowing. Soil temperature is optimal at 18–22°C. Ideal for wheat and mustard.' },
  { icon: '🐛', title: 'Pest Alert',             text: 'Low risk of fungal disease this week. Continue preventive spray of copper fungicide on susceptible crops.' },
  { icon: '🌾', title: 'Harvest Advisory',       text: 'Dry weather for next 3 days — ideal window for harvesting mature Rabi crops. Start early morning harvest.' },
];

function fetchWeather() {
  const city = document.getElementById('cityInput').value.toLowerCase().trim();
  const data = weatherData[city] || { ...weatherData.default };
  if (city && !weatherData[city]) {
    data.city = city.charAt(0).toUpperCase() + city.slice(1);
  }

  document.getElementById('weatherDisplay').innerHTML = `
    <div class="weather-hero">
      <div class="weather-main">
        <div class="weather-icon-big">${data.icon}</div>
        <div>
          <div class="weather-temp">${data.temp}<span>°C</span></div>
          <div class="weather-desc">${data.desc}</div>
          <div class="weather-location">📍 ${data.city}</div>
        </div>
      </div>
      <div class="weather-details-row">
        <div class="w-detail"><div class="val">${data.feels}°C</div><div class="key">Feels Like</div></div>
        <div class="w-detail"><div class="val">${data.humidity}%</div><div class="key">Humidity</div></div>
        <div class="w-detail"><div class="val">${data.wind} km/h</div><div class="key">Wind</div></div>
        <div class="w-detail"><div class="val">${data.rain}</div><div class="key">Rain Chance</div></div>
        <div class="w-detail"><div class="val">${data.uv}</div><div class="key">UV Index</div></div>
        <div class="w-detail"><div class="val">${data.visibility} km</div><div class="key">Visibility</div></div>
      </div>
    </div>
  `;

  document.getElementById('forecastGrid').innerHTML = forecast.map(f => `
    <div class="forecast-card">
      <div class="day">${f.day}</div>
      <div class="f-icon">${f.icon}</div>
      <div class="f-temp">${f.high}° / <span style="color:#888;">${f.low}°</span></div>
      <div class="f-rain">🌧️ ${f.rain}</div>
    </div>
  `).join('');

  document.getElementById('agroTips').innerHTML = agroTipsData.map(t => `
    <div class="agro-tip">
      <div class="tip-icon">${t.icon}</div>
      <h4>${t.title}</h4>
      <p>${t.text}</p>
    </div>
  `).join('');
}

// Auto-load on page open
window.addEventListener('DOMContentLoaded', fetchWeather);
