document.addEventListener('DOMContentLoaded', function() {
    //When the document is loaded the listeneners are set up
    //And loads the reset UI code
        "use strict"
        setUpListeners();
        resetUI();
    })
    
    function setUpListeners() {
        "use strict"
        // adds the event listeners that are required
       /*
        getElement("add_button").addEventListener('click',function() {addPurchaseToList(getElement("product_purchased").value);});
        getElement("remove_button").addEventListener('click',function() {removePurchaseFromList(getElement("selectedListItem"));});
        getElement("save_button").addEventListener('click',function() {saveVisit();});
        // Sets up listeners for items added to the 
        getElement("purchase_list").addEventListener('click',function(event) {selectListItem(event.target)});
        */
        document.getElementById("reset").addEventListener('click',function() {resetUI();});
        document.getElementById("save-button").addEventListener('click',function() {saveTrip();});
        document.getElementById("load-button").addEventListener('click',function() {loadTrip();});
        document.getElementById("calc-trip-button").addEventListener('click',function() {tripCalc();});
        document.getElementById("exit").addEventListener('click',function() {exit();});
        document.getElementById("add-button").addEventListener('click',function() {addDest(getElement("search").value);});
        document.getElementById("search").addEventListener('keyup',function() {searchTOWN(this);});
        document.getElementById("destination-list").addEventListener('click',function(event) {selectDest(event.target)});
        document.getElementById("remove-button").addEventListener('click',function() {removeDest(getElement("selectDest"));});

    }

    function resetUI() {
        // Clears the destination list
        document.getElementById("search").value = ""
        document.getElementById("destination-list").innerHTML = ""
        
    }

    function getElement(elementId) {
        return document.getElementById(elementId)
    }