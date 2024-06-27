

const API_KEY = `6d83156e4e40ca97d0c6924b832fe00c`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const first = document.querySelector("#first")

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async (city) => {
    
    first.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url); //async and await is imp coz js doesn't wait for promise to be resolved
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        first.innerHTML = `<h2>City not found :(</h2>`
        weather.innerHTML=``
        return;
    }

    first.innerHTML=`<h3>Weather Details:</h3>`
    weather.innerHTML = `
  <style>
  #weather,.row2{
    display : flex;

}

  .line,.icon,.temp,.humid
  {background-color:lightsteelblue;
  color: black;
  border-radius:10px;
 border-color: black;
  border-width: 10px;
  height:80%;
  width:60%;
  box-shadow:0px 0px 10px black ;
  padding:10px;

  text-align: center;
margin:20px;
  font-size: 40px;
  opacity:1;
}
  </style>

        <div class="line"><br>
        <img src="icons8-earth-64.png"><br>
        <h6>${data.name}</h6>
           
            
        </div>
        
        <div class="icon">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h6>${data.weather[0].main}</h6>
        </div>
         <div class="temp">
         <img src="icons8-thermometer-64.png">
            <h6>${data.main.temp}℃ Feels like ${data.main.feels_like}℃ </h6> 
        </div>
        <div class="humid">
        <img src="icons8-humidity-80.png">
            <h6>Humidity ${data.main.humidity}%</h6>
         </div>


            `


}
//<!--window key+full stop--> for celsius sign
form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        gsap.fromTo(".row2",{opacity:0,x:'-100%'},{opacity:1,duration:3,x:'0%'});
       // gsap.fromTo(".temp,.humid",{opacity:0,x:'100%'},{opacity:1,duration:3,x:'0%'});
        event.preventDefault(); //prevent form from reload after submitting
    }
)



