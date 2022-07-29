/*Declare a constant of "events" which will be an array of objects*/
const events = [{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018",
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018",
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019",
  },
  ];


//Create the Controller
//Call the buildDD function, which will be our driver function
buildDD();

/*Declare a new function named buildDD*/
function buildDD(){

    /*Withing the scope-block of buildDD create a variable named "eventDD" which will be defined as the value of the document-element possessing the id of "eventDropDown*/
  let eventDD = document.getElementById("eventDropDown");
  
  /*When called, the innerHTML of the eventDD item will have the value of an empty text string*/
  eventDD.innerHTML = "";

  /*Create a variable named "ddItemTemplate" which which will be defined as the value of the document-element possessing the id of "cityDD-Template"; Grabs the template*/
  let ddItemTemplate = document.getElementById("cityDD-template");
  
  /*Create a variable named "ddItemNode" which which will be defined as the value of the document-node's interior content with the "true" deep, in order to include the nodes descendants; Grab what's in between the template tags: we now have <li><a></a></li> */
  let ddItemNode = document.importNode(ddItemTemplate.content,true);

  /*Create a variable named "ddItem" which which will be defined as query returning the first element within ddItemNode containing the value "a";Get's all nodes and children elements: we now have <a></a>*/
  let ddItem = ddItemNode.querySelector("a");

  /*When called, the content of the ddItem will have the value of "All": we now have <a>All</a>*/
  ddItem.textContent = "All";

  /*When called, the attribute of the ddItemNode will be set to "data-string"; "data- creates a special array of variable custom attributes; The name of the array will be "All"; This acts as a filter*/
  ddItem.setAttribute("data-string", "All");

  /*When called the child of the "eventDD" item will be appended with the value of "ddItemNode": We now have <li><a>All</a></li>*/
  eventDD.appendChild(ddItemNode);

  /*Create a variable named "currentEvents" which will be defined as the "events" objects and their strings; The events we currently have */
  let currentEvents = events;


  //---Consolidate the "event" list to it's distinct cities--//


  /*Create a varaible named "distinctCities" which will be defined as a new array consisting of: a new set of the unique values of currentEvents which will be mapped to "event" property of the "events" object; and loop over that data to only return the city */
  let distinctCitites = [...new Set(currentEvents.map((event) => event.city))];

  /*Create a for loop where a variable of "index will have a value of zero; As long as teh value of "index is less than the lengh of the distinctCities array, add one to the the value of the index */
  for (let index = 0; index < distinctCitites.length;index ++){

    /*Within the scope of the for loop, which will be defined as named "cityName" which will be a new array containing the pass through value of the pass-through variable "index"*/
    let cityName = distinctCitites[index];

    /*The previously declared variable "ddItemNode" will called and it's value reset to be the value of the document-node's interior content with the "true" deep */
    ddItemNode = document.importNode(ddItemTemplate.content,true);

    /*The previously declared variable "ddItem" will be called and it's value will reset to be as a queery returnting the first elemetn within "ddItemNode" containing the value "a"*/
    ddItem = ddItemNode.querySelector("a");

    /*When called the content of the "ddItem" will have the value of the variable "cityName*/
    ddItem.textContent = cityName;

    /*When called, the attribute of the ddItemNode will be set to "data-string" which will The name of the array will have the values of the variable cityName*/
    ddItem.setAttribute("data-string", cityName);

    /*When called, the child of the "eventDD" item will be appended with the value of "ddItemNode", defined within the scope of this loop"*/
    eventDD.appendChild(ddItemNode);

  }

  
  /*Call the function named "displayStats" with the pass-through variable "currentEvents", which is an array of objects  */
  displayStats(currentEvents);

  
  displayData(currentEvents);


}

//---Display the stats for the selected city---//
  
function displayStats(currentEvents){
  
  /*Initialize the variables, total, average, most,and give them a value of 0, initialize a variable of least and give it a value
  of the first value of attendance within the "currentEvents" array, which will then be set to zero*/
  //Ref. JS Operators//

  let total = 0;
  let average = 0;
  let most = 0;
  let least = currentEvents[0].attendance;

  /*Create a for loop where a variable of index" will have a value of zero; As long as the value of "index" is less than the length of the currentEvents array
  add one to it*/
  for (let index = 0; index < currentEvents.length; index++) {

    /*Within the scope of the for-loop initialize a variable named "attendance" which will the value of attendance at the "currentEvents" index*/

    let attendance = currentEvents[index].attendance;

    /*add the value of "total" to the vaule of attendance*/
    total += attendance;

    /* create an if-statement where, if the value of "most" is less than the value of "attendance", within the scope of the statement, the value of most will be the value of attendance*/
    if(most < attendance){
      most = attendance;
    }

    /*Create an if-statement where, if the value of least is greater than the value of attendance or (||) if the value of least is less than zero, the value of least will be the value of attendance*/
    if(least > attendance){
      least = attendance
    }
      
  }

  /*When called, the value of avearge has the value of the previously defined variable "total" divided by the length of the currentEvents array*/
  average = total / currentEvents.length;

  //Now we must display our calcluations// //MLC//

  /*When called, the document elements with the id's of total, most, least, and average will have the value of their respective previously defined variables, and
  will be formatted using "toLocaleString()" function, which formats the string as a number based on the users locale */

  document.getElementById("total").innerHTML = total.toLocaleString();
  document.getElementById("most").innerHTML = most.toLocaleString();
  document.getElementById("least").innerHTML = least.toLocaleString();

  /*In the case of average, the locale string will be english, US and the minimum and maximum fractional digits allowed will be 0*/
  document.getElementById("average").innerHTML = average.toLocaleString("en-US",{
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }
  );

}

//---Get the events---//
/*Declare a new function named "getEvents"*/
/*the parameter "elements" is used in this function because the keyword "this" was used in the html*/
function getEvents(element){

  /*Within the scope of the function, initialize a varaible which will be defined as the element with the data attribute of "data-string"; this will filter the array by the city name*/
  let city = element.getAttribute("data-string");

  let currentEvents = getEventData();

  //if the city is 'All'
  if (city != "All") {
    
    
    currentEvents = currentEvents.filter(function (event){
      
      
      if(event.city == city){
      
      
        return event;
      
      
      }
    });
  }

  displayStats(currentEvents);
  displayData(currentEvents);

  //filter the array by city name
}

//now we will store events into local storage

/*Declare a new function named "getEventData"*/
function getEventData(){

  /*Initialize a variable named "currentEvents" which will have a value of will parse the local data for items with the id of "eventData", which will be then converted into JSON  */
  let currentEvents = JSON.parse(localStorage.getItem("eventData"));

  /*Create an if statement where if current events has a value of null*/
  if(currentEvents == null){

    /*Within the scope of the statement, the variable currentEvents will have the value of the object "events"*/
    currentEvents = events;

    /*the local data item with the id of "eventData", will be set to the value of the varialbe "currentEvents" which has been converted to JSON via stringification*/
    localStorage.setItem("eventData",JSON.stringify(currentEvents));
  }
  
  return currentEvents;
  
}


function displayData(currentEvents){
  
  let eventTemplate = document.getElementById("eventData-template");
  
  let eventBody = document.getElementById("eventBody");

  eventBody.innerHTML = "";

  //Same process as line 87
  for (let index = 0; index < currentEvents.length; index++) {
    
    let eventNode = document.importNode(eventTemplate.content,true);

    let eventItems = eventNode.querySelectorAll("td");

    
    
    eventItems[0].textContent = currentEvents[index].event;

    eventItems[1].textContent = currentEvents[index].city;
    
    eventItems[2].textContent = currentEvents[index].state;
    
    eventItems[3].textContent = currentEvents[index].attendance.toLocaleString();
    
    eventItems[4].textContent = new Date(currentEvents[index].date).toLocaleDateString();


    
    eventBody.appendChild(eventNode);
        
  }

}

//saves event data from the modal form
function saveEventData(){

}