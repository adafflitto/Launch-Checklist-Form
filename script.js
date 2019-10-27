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
      let list = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (allLetter(pilotName)) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      } else {
         pilotStatus.innerHTML = "Enter a valid name";
      };

      if (allLetter(coPilotName)) { 
         coPilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready for launch`;
      } else {
         coPilotStatus.innerHTML = "Enter a valid name";
      };
      
      if (fuelLevel.value < 10000) {
         list.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch!";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      };  
      
      if (cargoMass.value > 10000) {
         list.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass too heavy for launch!";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      }; 
      
      if (allLetter(pilotName) && allLetter(coPilotName) && fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
      launchStatus.innerHTML = "Shuttle is ready for launch!";
      launchStatus.style.color = "green";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      coPilotStatus.innerHTML = `Co-pilot ${coPilotName.value} is ready for launch`;
      fuelStatus.innerHTML = "Fuel level high enough for launch";
      cargoStatus.innerHTML = "Cargo mass low enough for launch!";
      event.preventDefault();
      };
   });
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      div.innerHTML = `
            <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[3].name}</li>
         <li>Diameter: ${json[3].diameter}</li>
         <li>Star: ${json[3].star}</li>
         <li>Distance from Earth: ${json[3].distance}</li>
         <li>Number of Moons: ${json[3].moons}</li>
      </ol>
      <img src="${json[3].image}">
      `
   })
})

