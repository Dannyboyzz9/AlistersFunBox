const town = {
	"1":["Alexandra ","town","mountains"],
	"2":["Blenheim ","town","ocean"],
	"3":["Christchurch ","city","ocean"],
	"4":["Collingwood ","town","who the fuck knows"],
	"5":["Cromwell ","town","lake"],
	"6":["Dunedin ","city","ocean"],
	"7":["Franz Josef ","town","glacier"],
	"8":["Geraldine ","town","mountains"],
	"9":["Gore ","town","who the fuck knows"],
	"10":["Greymouth ","town","ocean"],
	"11":["Haast ","town","ocean"],
	"12":["Invercargill ","city","ocean"],
	"13":["Kaikoura ","town","ocean"],
	"14":["Lake Tekapo ","town","lake"],
	"15":["Milford Sound ","town","fiord"],
	"16":["Mount Cook ","town","mountains"],
	"17":["Murchison ","town","mountains"],
	"18":["Nelson ","city","ocean"],
	"19":["Oamaru ","city","ocean"],
	"20":["Picton ","town","ocean"],
	"21":["Queenstown ","city","lake"],
	"22":["Te Anau ","town","lake"],
	"23":["Timaru ","city","ocean"],
	"24":["Twizel ","town","mountains"],
	"25":["Wanaka ","town","lake"],
	"26":["Westport ","town","ocean"]
}

function searchTOWN(elem) {
	let selector = document.getElementById("selector");
	// Checks if search bar is empty
	if (elem.value.trim() !== "") {
		// Creates the selector div element as it does not yet exist.
		if (selector == null) {
			selector = document.createElement("div");
			selector.id = "selector";
			elem.parentNode.appendChild(selector);
			// Position the dropdown menu below the input element
			selector.style.left = elem.getBoundingClientRect().left + "px";
			selector.style.top = elem.getBoundingClientRect().bottom + "px";
			selector.style.width = elem.getBoundingClientRect().width + "px";
		}
		// Clears everything before new search
		selector.innerHTML = "";
		// Variable if result is empty
		let empty = true;
		for (let item in town) {
			// Join the town elements in one string
			let str = [item.toLowerCase(), town[item][0].toLowerCase(), town[item][1].toLowerCase(), town[item][2].toLowerCase()].join();
			// If exists, create an item (button)
			if (str.indexOf(elem.value) !== -1) {
				let opt = document.createElement("button");
				opt.setAttribute("onclick","insertValue(this);")
				opt.innerHTML = town[item][0];
				selector.appendChild(opt);
				empty = false;
			}
		}
		// If result is empty, display a disabled button with text
		if (empty == true) {
			let opt = document.createElement("button");
			opt.innerHTML = "No results";
			selector.appendChild(opt);
		}
	}
	// Remove selector element if input is empty
	else {
		if (selector !== null) {
			selector.parentNode.removeChild(selector);
			elem.classList.remove("dropdown");
		}
	}
}

// Function to insert the selected item back to the input element
function insertValue(elem) {
	window.search.classList.remove("dropdown");
	window.search.value = elem.innerHTML;
	elem.parentNode.parentNode.removeChild(elem.parentNode);
}