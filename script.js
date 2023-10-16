let btn = document.getElementById("btn");
let get = document.getElementById("search");
let temp = document.getElementById("temp");
let nam = document.getElementById("name");
let pre = document.getElementById("pre");
let hum= document.getElementById("hum");
let city= document.getElementById("city");
let image = document.getElementById("c-img");

//API
let api = 'https://api.openweathermap.org/data/2.5/weather?';
//API KEY
 let key = 'c0f32f04db32bfc6085ea1bf4d22bed8';
 
async function weather(){
      let res = await fetch(api+`q=${get.value}`+`&appid=${key}`);
      let ret = await res.json();

      console.log(ret)

      temp.innerHTML =Math.round(ret.main.temp) + " °c";
      nam.innerHTML = ret.weather[0].main;
     pre.innerHTML = ret.main.pressure + "<br> pressure";
     hum.innerHTML = ret.main.humidity + "<br> humidity";
     city.innerHTML = ret.name;

     if(ret.weather[0].main=="Clouds"){
       image .src = "cloud.png";
     }
     else if(ret.weather[0].main=="Haze"){
        image .src = "haze.png";
      }
     else if(ret.weather[0].main=="Rain"){
        image .src = "rain.png";
      }
      else if(ret.weather[0].main=="Smoke"){
        image .src = "smog.png";
      }

     
}
btn.addEventListener('click', ()=>{
    
    weather();
})


