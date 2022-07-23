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


//Call the buildDD function 
buildDD();

//Create the Controller
/*Declare a new function named buildDD*/
function buildDD(){

  /*Withing the scope-block of buildDD create a variable named "eventDD" which will be defined as the value of the document-element possessing the id of "eventDropDown*/
  let eventDD = document.getElementById("eventDropDown");
  
  /*When called, the innerHTML of the eventDD item will have the value of an empty text string*/
  eventDD.innerHTML = "";

  /*Create a variable named "ddItemTemplate" which which will be defined as the value of the document-element possessing the id of "cityDD-Template" */
  let ddItemTemplate = document.getElementById("cityDD-template");
  
  /*Create a variable named "ddItemNode" which which will be defined as the value of the document-node's interiot content with the "true" deep, in order to include the nodes descendants */
  let ddItemNode = document.importNode(ddItemTemplate.content,true);

  /*Create a variable named "ddItem" which which will be defined as query returning the first element within ddItemNode containing the value "a" */
  let ddItem = ddItemNode.querySelector("a");

  /*When called, the content of the ddItem will have the value of "all"*/
  ddItem.Item.setContent = "All";

  /*When called the child of the "eventDD" item will be appended with the value of "ddItem"*/
  eventDD.appendChild(ddItem);
}