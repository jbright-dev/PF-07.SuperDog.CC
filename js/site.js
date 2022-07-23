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

  /*When called the child of the "eventDD" item will be appended with the value of "ddItemNode": We now have <li><a>All</a></li>*/
  eventDD.appendChild(ddItemNode);

  /*Create a variable named "currentEvents" which will be defined as the "events" objects and their strings; The events we currently have */
  let currentEvents = events;


  //---Consolidate the "event" list to it's distinct cities--//


  /*Create a varaible named "distinctCities" which will be defined as a new array consisting of: a new set of the unique values of currentEvent which will be mapped to "event" property of the "events" object; and loop over that data to only return the city */
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

    /*When called, the child of the "eventDD" item will be appended with the value of "ddItemNode", defined within the scope of this loop"*/
    eventDD.appendChild(ddItemNode);

  }

  /*Call the function named "displayStats" with the pass-through variable "currentEvents", which is an array of objects  */
  displayStats(currentEvents);

}

//---Display the stats for the selected city---//
  
function displayStats(currentEvents){
  
  /*Initialize the variables, total, average, most, least, and give them a value of 0*/
  //Ref. JS Operators//

  let total = 0;
  let average = 0;
  let most = 0;
  let least = 0;

  /*Create a for-loop where index has a value of 0. As long as the value of index is less than the length of the "currentEvents array, add one to the value of index" */
  for (let index = 0; index < currentEvents.length; index++) {

    /*Within the scope of the for-loop initialize a variable named "attendance" which will the value of attendance at the "currentEvents" index*/

    let attendance = currentEvents[index].attendance;

    /*add the value of "total" to the vaule of attendance*/
    total += attendance;

    
    
  }
}