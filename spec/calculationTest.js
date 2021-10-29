//Testing for Correct Distance Calculation
describe("Distance Calculations", function(){
	beforeEach(function(){
		manualDataLoad()
	})
	//Runs tests on distance calculations to check whether the right outputs are being delievered
	it("Testing for Correct Distance Calculations", function(){
		expect(townDistance[5][8]+townDistance[8][5]).toEqual(302)
		expect(townDistance[5][8]+townDistance[8][5]+townDistance[9][21]+townDistance[8][5]).toEqual(1192)
		expect(townDistance[9][21]+townDistance[24][5]+townDistance[9][21]+townDistance[9][21]+townDistance[21][21]+townDistance[9][21]).toEqual(3232)
		expect(townDistance[4][4]+townDistance[10][2]+townDistance[4][4]+townDistance[10][23]+townDistance[4][4]).toEqual(820)
	})

	//Runs tests for correct distance calculations for when a town is loaded more than once
	it("Testing for correct distance for towns loaded more than twice", function(){
		expect(townDistance[5][8]+townDistance[8][5]+townDistance[9][21]+townDistance[8][5]).toEqual(1192)
		expect(townDistance[9][21]+townDistance[24][5]+townDistance[9][21]+townDistance[9][21]+townDistance[21][21]+townDistance[9][21]).toEqual(3232)
		expect(townDistance[18][8]+townDistance[18][8]+townDistance[18][8]).toEqual(798)
		expect(townDistance[4][4]+townDistance[10][2]+townDistance[4][4]+townDistance[10][23]+townDistance[4][4]).toEqual(820)
	})

})
	
//Fuel Calculation TEsts

	//Test for correct calculations 