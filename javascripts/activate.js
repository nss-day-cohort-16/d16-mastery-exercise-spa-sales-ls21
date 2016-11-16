"use strict";
var CarData = (function(oldCarData){

		oldCarData.activateEvents = function(random) {
			var divArray = document.getElementsByClassName("styled");
			for (var j = 0; j < divArray.length; j++){
				divArray[j].addEventListener('click', addBorder);
			}
			function addBorder() {
				if (event.currentTarget.className === "col-sm-4 styled"){
				CarData.changeBorder(event.currentTarget);
				}
				else if (event.currentTarget.className === "col-sm-4 styled thickBorder"){
					CarData.resetBorder(event.currentTarget);
				}
				addText();
			}
			function addText () {
				document.getElementById("input").focus();
				if(event.target.className === "description"){
					changeDescription(event.target);
				} else if(event.target.className !== "description"){
					let spot = event.target.parentNode.childNodes[1];
					changeDescription(spot);
				}
			}
				function changeDescription (spot) {
				document.getElementById('input').addEventListener('keydown', write);
				function write() {
					spot.innerHTML = document.getElementById("input").value;
				}
			}
		}
		return oldCarData;
})(CarData);