var degree=document.getElementById("degree");
var cityName=document.getElementById("cityName");
var humidity=document.getElementById("humidity");
var wind=document.getElementById("wind");
var imgresult=document.getElementById("imgresult");
console.log("hello world!");
const apikey="1beec6cd3f48be9fe278a61fa88a3e03";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric"
async function weatherC(city){
    const response = await fetch(apiurl+`&q=${city}`+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    const dd=data.main.temp;
    const cc=data.name;
    const country=data.sys.country;
    const humi=data.main.humidity;
    const ww=data.wind.speed;
    const wheater=data.weather[0].main;
    degree.innerHTML = dd;
    cityName.innerHTML =cc+","+country;
    humidity.innerHTML="Humidity-"+humi+"%";
    wind.innerHTML="Wind Speed-"+ww+"Km/h";
    if(wheater=="Clouds"){
        imgresult.src="/image/clouds.png";
    }
    else if(wheater=="Clear")
    {
        imgresult.src="/image/clear.png";
    }
    else if(wheater=="Rain")
    {
        imgresult.src="/image/rain.png";
    }
    else if(wheater=="Drizzle")
    {
        imgresult.src="/image/drizzle.png";
    }
    else if(wheater=="Mist")
    {
        imgresult.src="/image/mist.png";
    }
}
function infetch(){
    var input =document.getElementById("input");
    var city =input.value;
    if(city=='')
    {
        city="Delhi";
        weatherC(city);
    }
    else{
        weatherC(city);
    }
}
infetch();