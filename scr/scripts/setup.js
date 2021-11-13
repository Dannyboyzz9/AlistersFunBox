document.addEventListener('DOMContentLoaded', function() {
    //When the document is loaded the listeneners are set up
        setUpListeners()
    })
    
    // adds the event listeners that are required for the webpage to run all the required JavaScript Functions   
    function setUpListeners() {       
        document.getElementById("reset").addEventListener('click',function() {resetUI();});
        document.getElementById("save-button").addEventListener('click',function() {saveTrip();});
        document.getElementById("load-button").addEventListener('click',function() {loadTrip();});
        document.getElementById("exit").addEventListener('click',function() {exit();});
        document.getElementById("add-button").addEventListener('click',function() {addDest(getElement("search").value);destDistCalc();distCalcInfo();});
        document.getElementById("search").addEventListener('keyup',function() {searchTOWN(this);});
        document.getElementById("destination-list").addEventListener('click',function(event) {selectDest(event.target)});
        document.getElementById("remove-button").addEventListener('click',function() {removeDest();});
        document.getElementById("calc-button").addEventListener('click',function() {fuelCalcVar();fuelCostCalc();});
    }

    //Function which resets all the input fields and background arrays and varibles 
    function resetUI() {
        document.getElementById("search").value = ""
        document.getElementById("destination-list").innerHTML = ""
        document.getElementById("trip-distance").innerHTML = ""
        destList = []
        document.getElementById("fuel-dist").setAttribute('value', '0')
        window.location.reload()
    }

    //Shortcut function for getElementById
    function getElement(elementId) {
        return document.getElementById(elementId)
    }