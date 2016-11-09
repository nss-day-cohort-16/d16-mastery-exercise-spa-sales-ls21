"use strict";
var CarData = (function(oldCarData){
	oldCarData.resetBorder = function(item){
		item.classList = "col-sm-4 styled";
	},

	oldCarData.changeBorder = function(target) {
		target.classList += " thickBorder"
	}
	return oldCarData
})(CarData);

