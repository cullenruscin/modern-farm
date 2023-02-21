/*

1.  Create a plan (plan.js)
    a.  randomly generate crop plots
    b.  return the plan

2.  Plant seeds in the field according to the plan (field.js, tractor.js)
    a.  if the seed is an array, push each seed within it
    b.  otherwise push each seed normally

3.  Harvest each plant and return new seeds (harvester.js)
    a.  seed amount is output property of each plant
    b.  if corn, halve the output amount
    c.  return the seeds

4.  Present each new seed on the page (catalog.js, main.js)
    a.  use string interpolation to append html elements to each plant
    b.  return the string, which will add elements to the page
    c.  style the CSS in a grid layout

*/


//Import functions from the other files
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"; 
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

//Assign the imported functions to variables and call them
const yearlyPlan = createPlan()
const planted = plantSeeds(yearlyPlan)
const harvest = harvestPlants(planted)
const parentHTMLElement = document.querySelector(".container")

//Inject catalog's html elements into the page
parentHTMLElement.innerHTML = catalog(harvest)