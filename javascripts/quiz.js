
var CarData = (function(oldCarData){

		oldCarData.resetBorder = function(clickedOnElement) {
			clickedOnElement.classList = "styled";

		},

		oldCarData.changeBorder = function (clickedOnElement, color){
			clickedOnElement.color = "color";	
		}
			return oldCarData

})(CarData);
