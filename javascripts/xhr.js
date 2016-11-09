"use strict";
var CarData = (function(random){
	var returnedData = [];

	return {
		loadInventory: function(callback){
			var request = new XMLHttpRequest();
			request.addEventListener("load", function () {
				returnedData = JSON.parse(this.responseText).cars;
				callback(returnedData);
			});
			request.open("GET", "javascripts/inventory.json");
			request.send();
		},

		getInventory: function(car){ 
			return returnedData += car;
		}
	}

})();


