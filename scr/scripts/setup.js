
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
        document.getElementById("add-dest").addEventListener('click',function() {addDestination();});

        document.getElementById("save-button").addEventListener('click',function() {saveIten();});
        document.getElementById("calc-trip-button").addEventListener('click',function() {tripCalc();});
        document.getElementById("exit").addEventListener('click',function() {exit();});
       
        getElement("add_button").addEventListener('click',function() {addPurchaseToList(getElement("product_purchased").value);});
        getElement("purchase_list").addEventListener('click',function(event) {selectListItem(event.target)});
        getElement("remove_button").addEventListener('click',function() {removePurchaseFromList(getElement("selectedListItem"));});

    }

    function resetUI() {
        // Clear teh input values
        // Clear the visit information
        alert("hello It works")
        
        getElement("visit_date").valueAsDate = new Date();
        getElement("visit_place").value = "";
        getElement("visit_rating").value = null;
        getElement("visit_spend").value = null;
        
        // Clears the destination list
        getElement("product_purchased").value = "";
        writeToElement("purchase_list","");
        
    }