import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { HungryBear } from './hungrybear.js';


$(document).ready(function() { 
  let fuzzy = new HungryBear();
  let food = fuzzy.foodLevel;
  let rest = fuzzy.sleepLevel;
  let mood = fuzzy.moodLevel;
  // $("#food").text(food);

  setInterval(() => {
    if (fuzzy.foodLevel > 0) {
      console.log('i am in the if');
        fuzzy.foodLevel--;
         $('#food').text(fuzzy.foodLevel)
      }
    }, 1000);


  // $("#sleep").text(rest);
  // $("#mood").text(mood);
  
  $("#feed").click (function(event) {
    event.preventDefault();
    // fuzzy.setHunger();
    // let foodLevel = fuzzy.feed();
    // console.log(foodLevel);
    // $("#food").text(foodLevel); //put this in an interval
    fuzzy.feed();
    console.log('fuzzy.foodLevel: ', fuzzy.foodLevel)
  });
});;