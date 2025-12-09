const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weatherImg = document.querySelector('.img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const img = document.getElementById('img');

async function chaeckWheather(city){
   const api_key ="0a78f74ab07846423e30e59653f36db5"
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

   const weather_data = await fetch(`${url}`).then(response=>response.json());
   
    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}KM/H`;

   
     switch(weather_data.weather[0].main){
         case 'Clouds':
            img.innerHTML=`<i id="img" class="fa-solid fa-cloud"></i>`;
         case 'Clear' :
            img.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
         case 'Rain':
            img.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
         case 'Mist' :
            img.innerHTML=`<i class="fa-brands fa-cloudflare"></i>`;
         case 'Snow' :
             img.innerHTML=`<i class="fa-solid fa-snowman"></i>`;
           default :
           img.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
         }

    
    console.log(weather_data);

}

searchbtn.addEventListener('click',()=>{
    chaeckWheather(inputbox.value);
});

