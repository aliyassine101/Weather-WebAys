let api="https://api.openweathermap.org/data/2.5/forecast?"
let key='d119f1b49be7be07e728814df7ff9008';
let block1=document.getElementById('block1');
let block2=document.getElementById('block2');
let block3=document.getElementById('block3');
let block4=document.getElementById('block4');
let block5=document.getElementById('block5');
let block6=document.getElementById('block6');
let premierblock=document.getElementById('premierblock');
let troisiemblock=document.getElementById('item3');
let lant;
let long;    
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

    console.log(data)
    

    let city=document.createElement('p');
    city.textContent=data.city.name;
    city.setAttribute('class','city');
    premierblock.appendChild(city);

    let temp=document.createElement('p');
    let nb=data.list[0].main.temp-273;
    temp.textContent= Math.round(nb)+"°";
    temp.setAttribute('class','temp');
    premierblock.appendChild(temp);

    let overcast=document.createElement('p');
    overcast.textContent=data.list[0].weather[0].description;
    overcast.setAttribute('class','overcast');

    let divdata=document.createElement('div');
    divdata.setAttribute('class','divdata');
    divdata.appendChild(temp);
    divdata.appendChild(overcast);
    premierblock.appendChild(divdata);

    let divsun=document.createElement('div');
    divsun.setAttribute('class','divsun');
    let sun=document.createElement('div');
    sun.textContent=`Sun   ${Math.round(data.list[0].main.temp_max-273.15)}°  ${Math.round(data.list[0].main.temp_min-273.15)}°`;
    sun.setAttribute('class','sun');
    divsun.appendChild(sun);
    premierblock.appendChild(divsun);

    
    let divairdeg=document.createElement('div');
    divairdeg.setAttribute('class','divairdeg');
    let airdeg=document.createElement('div');
    airdeg.textContent=`Air Deg: ${data.list[0].wind.deg}-Good`
    airdeg.setAttribute('class','airdeg');
    divairdeg.appendChild(airdeg);
    premierblock.appendChild(divairdeg);

    let feelstxt=document.createElement('p');
    feelstxt.textContent='Feels Like';
    feelstxt.setAttribute('class','block1');
    let feelsvalue=document.createElement('p');   
    feelsvalue.textContent=data.list[0].main.feels_like+"°";
    feelsvalue.setAttribute('class','blockvalue1');
    block1.appendChild(feelstxt);
    block1.appendChild(feelsvalue);

    let speedtxt=document.createElement('p');
    speedtxt.textContent='speed wind';
    speedtxt.setAttribute('class','block1');
    let speedvalue=document.createElement('p');   
    speedvalue.textContent=data.list[0].wind.speed+' mph';
    speedvalue.setAttribute('class','blockvalue2');
    block2.appendChild(speedtxt);
    block2.appendChild(speedvalue);

    let humiditytxt=document.createElement('p');
    humiditytxt.textContent='Humidity';
    humiditytxt.setAttribute('class','block2');
    let humidityvalue=document.createElement('p');   
    humidityvalue.textContent=data.list[0].main.humidity+'%';
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
    visibvalue.textContent=data.list[0].visibility+' mi';
    visibvalue.setAttribute('class','blockvalue2');
    block5.appendChild(visibtxt);
    block5.appendChild(visibvalue);

    let presstxt=document.createElement('p');
    presstxt.textContent='Pressure';
    presstxt.setAttribute('class','block2');
    let pressvalue=document.createElement('p');   
    pressvalue.textContent=data.list[0].main.pressure+' hPa';
    pressvalue.setAttribute('class','blockvalue2');
    block6.appendChild(presstxt);
    block6.appendChild(pressvalue);

    let day1=document.createElement('p');
    day1.textContent="Sun";
    day1.setAttribute('class','day1');
    let day2=document.createElement('p');
    day2.textContent="Mon";
    day2.setAttribute('class','day1');
    let day3=document.createElement('p');
    day3.textContent="Tue";
    day3.setAttribute('class','day1');
    let day4=document.createElement('p');
    day4.textContent="Wed";
    day4.setAttribute('class','day1');
    let day5=document.createElement('p');
    day5.textContent="Thur";
    day5.setAttribute('class','day1');
    troisiemblock.appendChild(day1);
    troisiemblock.appendChild(day2);
    troisiemblock.appendChild(day3);
    troisiemblock.appendChild(day4);
    troisiemblock.appendChild(day5);

  

}



// var a = [
//     [0, 45],
//     [232, 357],
//     [476, 316],
//     [754, 67]
//   ];
  
//   let canvas=document.createElement('canvas');
//   let divline=document.createElement('div');
//   var ctx = canvas.getContext("2d");
//   divline.appendChild(canvas);
//   troisiemblock.appendChild(divline);

//   ctx.beginPath();
//   ctx.moveTo.apply(ctx, a[0]); // es5 friendly
//   ctx.strokeStyle = "green";
//   ctx.lineWidth = "2";
//   ctx.moveTo(50, 0);
//   ctx.lineTo(...a[1]); // es6+
//   ctx.lineTo(...a[2]);
//   ctx.lineTo(...a[3]);
//   ctx.stroke();
//   troisiemblock.appendChild(ctx);
  