let api="https://api.openweathermap.org/data/2.5/weather?"
let key='d119f1b49be7be07e728814df7ff9008';
let block1=document.getElementById('block1');
let block2=document.getElementById('block2');
let block3=document.getElementById('block3');
let block4=document.getElementById('block4');
let block5=document.getElementById('block5');
let block6=document.getElementById('block6');
let premierblock=document.getElementById('premierblock');

let lant;
let long;

const x = document.getElementById("demo");
       
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

getLocation();

function showPosition(position) {
  lant= position.coords.latitude ;
  long= position.coords.longitude;
  display(lant,long);
}

async function display(latitude,longitude){
    

    let response= await fetch(api+'lat='+latitude+'&lon='+longitude+'&appid='+key);
    let data=await response.json();

    

    let city=document.createElement('p');
    city.textContent=data.name;
    city.setAttribute('class','city');
    premierblock.appendChild(city);

    let temp=document.createElement('p');
    let nb=data.main.temp-273;
    temp.textContent= Math.round(nb)+"°";
    temp.setAttribute('class','temp');
    premierblock.appendChild(temp);

    let overcast=document.createElement('p');
    overcast.textContent='Overcast';
    overcast.setAttribute('class','overcast');

    let divdata=document.createElement('div');
    divdata.setAttribute('class','divdata');
    divdata.appendChild(temp);
    divdata.appendChild(overcast);
    premierblock.appendChild(divdata);

    let divsun=document.createElement('div');
    divsun.setAttribute('class','divsun');
    let sun=document.createElement('div');
    sun.textContent=`Sun   ${Math.round(data.main.temp_max-273.15)}°  ${Math.round(data.main.temp_min-273.15)}°`;
    sun.setAttribute('class','sun');
    divsun.appendChild(sun);
    premierblock.appendChild(divsun);

    
    let divairdeg=document.createElement('div');
    divairdeg.setAttribute('class','divairdeg');
    let airdeg=document.createElement('div');
    airdeg.textContent=`Air Deg: ${data.wind.deg}-Good`
    airdeg.setAttribute('class','airdeg');
    divairdeg.appendChild(airdeg);
    premierblock.appendChild(divairdeg);

    console.log(data);
    let feelstxt=document.createElement('p');
    feelstxt.textContent='Feels Like';
    feelstxt.setAttribute('class','block1');
    let feelsvalue=document.createElement('p');   
    feelsvalue.textContent=data.main.feels_like+"°";
    feelsvalue.setAttribute('class','blockvalue1');
    block1.appendChild(feelstxt);
    block1.appendChild(feelsvalue);

    let speedtxt=document.createElement('p');
    speedtxt.textContent='speed wind';
    speedtxt.setAttribute('class','block1');
    let speedvalue=document.createElement('p');   
    speedvalue.textContent=data.wind.speed+' mph';
    speedvalue.setAttribute('class','blockvalue2');
    block2.appendChild(speedtxt);
    block2.appendChild(speedvalue);

    let humiditytxt=document.createElement('p');
    humiditytxt.textContent='Humidity';
    humiditytxt.setAttribute('class','block2');
    let humidityvalue=document.createElement('p');   
    humidityvalue.textContent=data.main.humidity+'%';
    humidityvalue.setAttribute('class','blockvalue3');
    block3.appendChild(humiditytxt);
    block3.appendChild(humidityvalue);

    let codtxt=document.createElement('p');
    codtxt.textContent='codValue';
    codtxt.setAttribute('class','block2');
    let codvalue=document.createElement('p');   
    codvalue.textContent=data.cod;
    codvalue.setAttribute('class','blockvalue3');
    block4.appendChild(codtxt);
    block4.appendChild(codvalue);

    let visibtxt=document.createElement('p');
    visibtxt.textContent='visibility';
    visibtxt.setAttribute('class','block2');
    let visibvalue=document.createElement('p');   
    visibvalue.textContent=data.visibility+' mi';
    visibvalue.setAttribute('class','blockvalue2');
    block5.appendChild(visibtxt);
    block5.appendChild(visibvalue);

    let presstxt=document.createElement('p');
    presstxt.textContent='Pressure';
    presstxt.setAttribute('class','block2');
    let pressvalue=document.createElement('p');   
    pressvalue.textContent=data.main.pressure+' hPa';
    pressvalue.setAttribute('class','blockvalue2');
    block6.appendChild(presstxt);
    block6.appendChild(pressvalue);

}
