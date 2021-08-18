function destSearch_click(){
    let search = document.getElementById("destSearch").value;
    console.log(search);
    document.getElementById("Output").innerHTML = search;
}

/*Planning Space for code

Search code:

sorting and listing code n=0 when search is computer n+1 each search increases n by 1
**additional note n will be important for numbering and such
ie 
    n=0

    function someFunction(){
        n=n+1
    }

Get destination search string, ie Christchurch

    destination search string sorting system, takes search string and sorts it by first character then second, then thrid, and four if needed.
    if a single location is left after each set of sorting then let the last remaining code to be set as Location 
    Then:

        Store first location as JSON, ie '[n], [Location]' as n being which number the location appears in the calculation and location being the location

       
        add block of html code something along the lines of; this code would be placed in a div with the id of "locationPlacement",
        ideally this div would be replaced with the code below.
        <div class="LocationCard">
            <p>[N], [Location]</p>
            <button id="[n]delete" onclick="[n]_delete()">X</button>
            <button id="[n]_reorder" onclick="[n]_reorder()">REORDER</button>
        </div>
        <div id="LocationPlacement"></div>

        **Note [xx] is just the notation im using to show where values of the function is being placed inside the html code

    if no result can be found, then post the following msg
    "Destination was not found", if a vaild destination is found then take the vaild destination and store this result as a string: "Location"



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


Automattic Calculation Code: *** only if have time :D

*/ 
