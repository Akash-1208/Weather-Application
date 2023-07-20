const apiKey="759b0b87bcfd9ca950be4beec21b527c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiurl+city+`&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);
    document.getElementById("cityname").innerHTML=data.name;
    if(data.name==undefined){
        document.getElementById("temp").innerHTML="Enter A Valid city Name";
    }
    else{
        document.getElementById("temp").innerHTML=Math.round(data.main.temp)+'°C';
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

