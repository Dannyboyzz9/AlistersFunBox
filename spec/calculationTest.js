//Testing for Correct Distance Calculation
describe("Distance Calculations", function(){
	beforeEach(function(){
		manualDataLoad()
	})
	//Runs tests on distance calculations to check whether the right outputs are being delievered
	it("Testing for Correct Distance Calculations", function(){
		destList = ['Queenstown','Christchurch','Wanaka','Timaru','Queenstown'] //dummy data
		destCalc = destDistCalc()
		expect(destCalc).toEqual(3517)
	})

	//Runs tests for correct distance calculations for when a town is loaded more than once
	it("Testing for correct distance for towns loaded more than twice", function(){
		destList = ['Queenstown','Christchurch','Wanaka','Timaru','Wanaka','Christchurch','Queenstown'] //dummy data
		destCalc = destDistCalc()
		expect(destCalc).toEqual(7456)
	})

})
	
//Fuel Calculation TEsts
describe("Fuel Calculations", function(){
	//Testing the correct calculations for each type of fuel (keeping the fuel econ constant)
	it("Correct Calculation for 91", function(){
		fuelCalc = fuelCostCalc()
		fuelType = 1 //2.3
		econ = 10
		dist = 10
		expect(fuelCalc).toEqual(2.3)
	})

	it("Correct Calculation for 95/96", function(){
		fuelCalc = fuelCostCalc()
		fuelType = 2 //2.5
		econ = 10
		dist = 20
		expect(fuelCalc).toEqual(5)
	})

	it("Correct Calculation for Diesel", function(){
		fuelCalc = fuelCostCalc()
		fuelType = 3 //1.5
		econ = 10
		dist = 30
		expect(fuelCalc).toEqual(4.5)
	})

	//Testing for correct calculations for different fuel econ (keeping the fuel type constant)
	it("Correct Calculation for 7.5L/100km", function(){
		fuelCalc = fuelCostCalc()
		fuelType = 1 
		econ = 7.5
		dist = 100
		expect(fuelCalc).toEqual(17.5)
	})
	it("Correct Calculation for 6.66L/100km", function(){
		fuelCalc = fuelCostCalc()
		fuelType = 1 
		econ = 6
		dist = 250
		expect(fuelCalc).toEqual(34.5)
	})
	it("Correct Calculation for 12.5L/100km", function(){
		fuelCalc = fuelCostCalc()
		fuelType = 1 
		econ = 12.5
		dist = 100
		expect(fuelCalc).toEqual(28.75)
	})
})
