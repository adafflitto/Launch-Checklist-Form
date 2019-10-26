// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let coPilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
     
      if (pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" 
      || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }

      function allLetter(inputtxt) {
         var letters = /^[A-Za-z]+$/;
         if(inputtxt.value.match(letters)) {
         return true;
         } else {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
         return false;
         }
      }

      allLetter(pilotName);
      allLetter(coPilotName);

      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
      
      let pilotStatus = document.getElementById("pilotStatus");
      let coPilotStatus = document.getElementById("copilotStatus");

      pilotStatus.innerHTML = `${pilotName.value} is ready for launch!`;
      coPilotStatus.innerHTML = `${coPilotName.value} is ready for launch!`;
      
      

   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
