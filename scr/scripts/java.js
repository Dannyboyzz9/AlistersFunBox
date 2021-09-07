
/*Planning Space for code

Search code:

JSON saving code:

JSON deleting code:

Loading JSON Code:

[N]_delete code:

[N]_reorder code:

Distance Calculation Code:
    when calculate button is clicked then 
    function calcButton_click(){
        
        IDEA:
        n=1
        FUNCTION BEGIN{
            Get Json code
            loop{
                set a=location n -- get location n=1 on first run through then n=2 on second run
                n=n+1
                set b=location n -- get location n=2 on first run through then n=3 on second run

                set distance = distance between a+b
                set totaldistance = totaldistance + distance
                n=n

                stopping code 
            }
        calculate driving est driving time (for simplisity sake the speed 90km/h will be used for time calculations)
        set DrivingTimeHours = totaldistance / speed (90) 
        set DrivingTimeMins = DrivingTimeHours (only after the .xxx) * 60
        set DrvingTimeSec = DrivingTimeMins (only after the .xxx) * 60
        set TotalDrivingTime = "DrivingTimeHours : DrivingTimeMins : DrvingTimeSec"

        output totatldistance
        output TotalDrivingTime
        }
    }



Fuel Calc code: THIS WORKS

    function fuelCost_click(){
        let econ = document.getElementById("fuel-econ").value;
        let dist = document.getElementById("fuel-dist").value;
        let price = 2; ***Needs to be more specific on price, as in price changes depending on fuel

        let cost = ((dist/100) * econ) * price

        document.getElementById("fuel-result").innerHTML = cost; <-- this is the output
    }


*/ 
