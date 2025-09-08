Awesome! 🌐 Let’s now move into **dynamic data fetching** — one of the most **powerful** and **real-world** uses of JavaScript!

---

# 🟩 Chapter 69: **AJAX & Fetch API — Real-Time Weather App 🌦️**

> 🎯 *Learn how to bring real-time data into your web applications using modern JavaScript (Fetch API). We’ll build a live Weather App using a free API.*

---

## 🧠 What is AJAX?

**AJAX** stands for:

```
Asynchronous JavaScript and XML
```

✅ In simple terms: It allows your website to **get data from a server without reloading the page** — for example, fetching weather, news, or stock market updates dynamically.

> Today, we use `fetch()` instead of the old `XMLHttpRequest`.

---

## ⚙️ What is the Fetch API?

The `fetch()` method is the modern way to make AJAX calls:

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
```

---

## 🛠️ Let's Build: **Real-Time Weather App**

### 🔗 We’ll use the OpenWeatherMap API:

> Get free weather data from:
> 🌍 [https://openweathermap.org/api](https://openweathermap.org/api)

---

## 📁 Folder Structure

```
weather-app/
│
├── index.html
├── style.css
└── app.js
```

---

## 🔤 Step 1: Basic HTML UI

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Weather App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="weather-box">
    <h2>🌦️ Weather App</h2>
    <input type="text" id="cityInput" placeholder="Enter city name" />
    <button onclick="getWeather()">Get Weather</button>
    <div id="weatherResult"></div>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

---

## 🎨 Step 2: CSS Styling

```css
/* style.css */
body {
  font-family: Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #d0e7ff;
}

.weather-box {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  text-align: center;
}

input {
  padding: 10px;
  width: 200px;
  margin: 10px;
}

button {
  padding: 10px 20px;
  background: dodgerblue;
  color: white;
  border: none;
  cursor: pointer;
}
```

---

## 🔌 Step 3: JavaScript Logic using `fetch()`

```js
// app.js
const apiKey = 'your_api_key'; // Replace this with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const weather = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>🌥️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weatherResult').innerHTML = weather;
    })
    .catch(err => {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">City not found.</p>`;
      console.error(err);
    });
}
```

---

## 🔑 How to Get Free API Key?

1. Go to: [https://home.openweathermap.org/users/sign\_up](https://home.openweathermap.org/users/sign_up)
2. Create a free account
3. Go to API Keys > Copy your key
4. Replace it in `app.js`:

   ```js
   const apiKey = "your_real_key";
   ```

---

## 🔁 Concept Recap

| Concept        | Description                                 |
| -------------- | ------------------------------------------- |
| AJAX           | Get data from API without refreshing        |
| Fetch API      | Modern method to make HTTP requests         |
| JSON           | Format used for server-client communication |
| Error Handling | `.catch()` block in fetch                   |

---

## 📦 Online Code Editors to Practice

| Platform   | Link                                             |
| ---------- | ------------------------------------------------ |
| CodePen    | [https://codepen.io](https://codepen.io)         |
| JSFiddle   | [https://jsfiddle.net](https://jsfiddle.net)     |
| StackBlitz | [https://stackblitz.com](https://stackblitz.com) |
| Replit     | [https://replit.com](https://replit.com)         |

---

## 🧪 Student Task

> ✅ Create a **real-time weather app** that fetches temperature, humidity, weather condition, and wind speed using Fetch API.

Bonus:

* Add a loading spinner
* Handle invalid city names
* Add weather icons from OpenWeatherMap

---

## 🎁 Bonus: Optional API Project Ideas

* 📰 News App (News API)
* 💸 Currency Converter (ExchangeRate API)
* 📸 Image Gallery (Unsplash API)
* 🎧 Music Search (Spotify API)

---

## 🔮 Next Chapter Preview: Chapter 70

> In the next chapter, we will explore **JSON** and **API Response Handling in depth**, then build a **GitHub User Finder App**.

Would you like to proceed with
👉 **Chapter 70: JSON Mastery + GitHub API Project**?
