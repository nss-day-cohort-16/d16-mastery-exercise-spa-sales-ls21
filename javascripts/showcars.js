"use strict";
var CarData = (function(oldCarData){

	oldCarData.showCars = function (returnedData) {
		var divString = "<div class='row'>"
		for (var i = 0; i < returnedData.length; i++){
			var newDiv = document.createElement("div");
			newDiv.classList = "col-sm-4 styled";
			divString = "<p class='make'>" + returnedData[i].year +  " " + returnedData[i].make + " " + returnedData[i].model + "<p class='description' id='" + i + "'>" + returnedData[i].description + "</p>" + "<p class='price'>" + returnedData[i].price + " " + "Dollars" + "</p>";
			newDiv.innerHTML = divString;
			document.getElementById("outputDiv").appendChild(newDiv);
		}
		CarData.activateEvents();
		// divString += "</div";
		// document.getElementById("outputDiv").innerHTML = divString;
		// var paragraphs = document.getElementsByClassName("description");

		// for( var j = 0; j <paragraphs.length; j++){
		// 	paragraphs[j].addEventListener('click', CarData.activateEvents(returnedData));
		// }
	}	

	CarData.loadInventory(CarData.showCars);
	return oldCarData

})(CarData);

