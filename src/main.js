import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { HungryBear } from './hungrybear.js';


$(document).ready(function() { 
  $('#start').click(function() {
    let request = new XMLHttpRequest();
    const url = `http://api.giphy.org/data/2.5/weather?q=${bear}&api_key=[API-KEY-GOES-HERE]`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
     console.log(response);
      $('.box').text(`The humidity in ${bear} is ${response.data[0].gif_url}%`);
      $().html('<img src=`${response.asdfasdf.url}')
    
    }
  });

  let fuzzy = new HungryBear();
  let food = fuzzy.foodLevel;
  let rest = fuzzy.sleepLevel;
  let mood = fuzzy.moodLevel;
  // $("#food").text(food);

  setInterval(() => {
    if (fuzzy.foodLevel > 0) {
        fuzzy.foodLevel--;
         $('#food').text(fuzzy.foodLevel)
      }
    }, 1000);

   setInterval(() => {
    fuzzy.sleepLevel--;
    $("#sleep").text(fuzzy.sleepLevel);
   }, 20000);

  // $("#sleep").text(rest);
  // $("#mood").text(mood);
  
  $("#feed").click (function(event) {
    event.preventDefault();
    fuzzy.feed();
  
    // fuzzy.setHunger();
    // let foodLevel = fuzzy.feed();
    // console.log(foodLevel);
    // $("#food").text(foodLevel); //put this in an interval
  });
   $("#sleep").click(function (event) {
     event.preventDefault();
     fuzzy.sleep();

     // fuzzy.setHunger();
     // let foodLevel = fuzzy.feed();
     // console.log(foodLevel);
     // $("#food").text(foodLevel); //put this in an interval
   });
});