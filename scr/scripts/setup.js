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
        document.getElementById("reset").addEventListener('click',function() {resetUI();});
        document.getElementById("save-button").addEventListener('click',function() {saveTrip();});
        document.getElementById("load-button").addEventListener('click',function() {loadTrip();});
        document.getElementById("exit").addEventListener('click',function() {exit();});
        document.getElementById("add-button").addEventListener('click',function() {addDest(getElement("search").value);});
        document.getElementById("add-button").addEventListener('click',function() {destDistCalc();});
        document.getElementById("search").addEventListener('keyup',function() {searchTOWN(this);});
        document.getElementById("destination-list").addEventListener('click',function(event) {selectDest(event.target)});
        document.getElementById("remove-button").addEventListener('click',function() {removeDest(getElement("selectDest"));});
        document.getElementById("remove-button").addEventListener('click',function() {finalDest();});

    }

    function resetUI() {
        // Clears the destination list
        document.getElementById("search").value = ""
        document.getElementById("destination-list").innerHTML = ""
        document.getElementById("trip-distance").innerHTML = ""
        destList = []
    }

    function getElement(elementId) {
        return document.getElementById(elementId)
    }