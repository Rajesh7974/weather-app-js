let body = document.querySelector("body")
let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let p = document.querySelector("p");
let card = document.querySelector(".card");

const getWeather = async (e) => {
  e.preventDefault();

  try {
    const response =
      await fetch(`https://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${input.value}&aqi=yes
    `);
    const data = await response.json();


    card.className = "card p-5 rounded-0 shadow-lg";
    h1.innerText = data.current.temp_c + "°C";
    h2.innerText = data.location.name;
    p.innerText = data.current.condition.text;
    img.setAttribute("src", data.current.condition.icon);
  } catch (error)
   {
    window.alert("Please Enter Valid City Name!");
    card.className = "card p-5 rounded-0 shadow-lg d-none";
  }

  form.reset();
};

form.addEventListener("submit", getWeather);