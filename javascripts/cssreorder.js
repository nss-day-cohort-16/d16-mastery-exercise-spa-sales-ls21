var CarData = (function(oldCarData){
	oldCarData.resetBorder = function(item){
		item.classList = "col-sm-4 styled";
	},

	oldCarData.changeBorder = function(target, color) {
		event.target.classList += " thickBorder"
	}
	return oldCarData
})(CarData);