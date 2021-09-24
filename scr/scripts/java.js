
//function to grab inserted location from search bar
function addDestination(){
	let destination = document.getElementById("search").value;
	console.log(destination);
}

//constants which may be used for output
const BLANK = "";
const SPACE = "&nbsp;";
const TAB = SPACE.repeat(3);
const NEWLINE = "<br/>";

function getElement(elementId) {
	"use strict"
// Finds an element on teh page
	return document.getElementById(elementId)
}

function writeToElement(elementID,newText) {
// Writes a section of text inside an element
    "use strict";
    getElement(elementID).innerHTML = newText;
}

function readFromElement(elementID) {
// Reads data from element
	"use strict"
	return (getElement(elementID).value);
}

//Rewrite for iten list


function addPurchaseToList(itemPurchased) {
	// Adds the new purchse to the list, No error checking to see if teh purchase is already there or a blank being added
	let newItem = document.createElement("LI");	// A new list item
	let newItemText = document.createTextNode(itemPurchased);	// The text for teh list item
	newItem.appendChild(newItemText); // Add teh text to the list item
	getElement("purchase_list").appendChild(newItem);	// Add the new list item to the list
}

function removePurchaseFromList(itemToRemove) {
	// Removes teh item from teh list, if there is one to remove
	if (itemToRemove != null) {
		itemToRemove.parentNode.removeChild(itemToRemove)
	}
}



function selectListItem(selectedListItem) {
	// Sets teh id of teh currently chosen list item so that styles can be applied to it
	// Unselect previous selection
	currentSelected = getElement("selectedListItem");
    if (currentSelected != null) {
		currentSelected.id = "";
		currentSelected.classList.remove("selected");
	}
	// Select teh current one - how it shows is set in CSS
	selectedListItem.id = "selectedListItem";
	selectedListItem.classList.add("selected");
}

//End of Rewrite

function saveIten() {
	alert("Your visit has been saved.  Honest.");
}

function exit(){
    alert("You have exited Well Done :)");
}

//Distance Calculation and trip info Code:

function tripCalc(){
    alert("A trip Has been Calculated");
}


/*
Start town
    xxx

Next town
    xxx

*/

/*Fuel Calculation Code*/
    function fuelCost_click(){
        /*Gets fuel economy info from webpage */
        let econ = document.getElementById("fuel-econ").value;
        /*Gets distance travelled info from the webpage */
        let dist = document.getElementById("fuel-dist").value;
       
        /*If, else if, else stament to set fuel price depending on what fuel type is selected*/
        let fuelType = document.getElementById("fuel-type").value;
        console.log(fuelType);

        /*Sets the value of the varible 'price' to 0 */
        var price = 0

        /*If statment determining what the price value should be given a fuel type*/
        if (fuelType == 1){
            /*If the fuelType value is = 1 (petrol-91) the price varible is equal to '2' */
            var price = 2.309
        } else if (fuelType == 2) {
            var price = 2.497
        } else if (fuelType == 3) {
            var price = 1.499
        } else {
            var price = 0
        }
        /* need more stuff for other fuel types */

        console.log(price);

        /*Total Fuel cost calculation Code*/
        let cost = ((dist/100) * econ) * price;

        /*Outputs the fuel cost to the HTML*/
        document.getElementById("fuel-result").innerHTML = cost;
    }