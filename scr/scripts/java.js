
/*Planning Space for code
JSON code:

???

Distance Calculation and trip info Code:
   
????

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
        if (fuelType = 1){
            /*If the fuelType value is = 1 (petrol-91) the price varible is equal to '2' */
            var price = 2
        } 
        /* need more stuff for other fuel types */

        console.log(price);

        /*Total Fuel cost calculation Code*/
        let cost = ((dist/100) * econ) * price;

        /*Outputs the fuel cost to the HTML*/
        document.getElementById("fuel-result").innerHTML = cost;
    }