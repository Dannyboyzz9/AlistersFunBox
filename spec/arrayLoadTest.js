//Test for correct set up

describe("Distance Calculations", function(){
	beforeEach(function(){
		manualDataLoad()
	})
	//Testing the Loading of the Towns in the List
	it("TownList array loading", function() {
		expect(townList.length).toEqual(26)
		expect(townList[0]).toEqual("Alexandra")
		expect(townList[4]).toEqual("Cromwell")
		expect(townList[25]).toEqual("Westport")
	})
	//Testing the right values of array are being loaded
	it("Correct Distance Values", function(){
		expect(townDistance.length).toEqual(26)
		//basic caluclations between single locations
		expect(townDistance[0][0]).toEqual(0)
		expect(townDistance[4][3]).toEqual(939)
		expect(townDistance[5][5]).toEqual(0)
		expect(townDistance[25][0]).toEqual(761)
		expect(townDistance[25][25]).toEqual(0)
	})
})

describe("JSON Testing", function(){
	beforeEach(function(){
		manualDataLoad()
	})
	//Test for correct JSON Saving
	it("Correct JSON Array", function(){
		destList = ['Queenstown','Christchurch','Wanaka','Timaru','Queenstown'] //dummy data
		saveJSON = saveTrip()
		expect(saveJSON).toEqual('["Queenstown","Christchurch","Wanaka","Timaru","Queenstown"]')	
	})
})

