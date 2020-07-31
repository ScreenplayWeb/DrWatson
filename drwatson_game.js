/** 221-B Baker Street (the board game) Player Aid.
By Sean W Doyle.
v 2.0 July 2020

New in V2

For next v

*/
window.onload = function(){
	var caseNum;
	var timeRemain;
	var countdown;

//GET NEEDED ELEMENTS
var slct_case = document.getElementById("CaseSelect");


//####FUNCTION TO DISPLAY STRING NAME OF CASE AND GET CASE ID	####
	function caseSelect(dropdown) {
	  case2show = dropdown.options[dropdown.selectedIndex].text;
		caseNum = dropdown.options[dropdown.selectedIndex].value;

		//CHECK WHICH CASE WAS SELECTED AND GRAB THE ID AND TEXT VALUE
		//IF --SELECT-- WAS SELECTED, SHOW NOTHING
		if (caseNum !== "zz"){
		var caseNameText = caseName[caseNum];

		//DISPLAY THE NAME OF THE CASE
		document.getElementById('caseName').innerHTML = "You are currently solving: <br /><em>The Adventure of " + caseNameText + "</em>";
		}
		else document.getElementById('caseName').innerHTML = null;
  }


//####FUNCTION TO DISPLAY CLUES WHEN LOCATION BUTTONS ARE PRESSED ####
var historyArray = [];//ARRAY TO HOLD SELECTED BUILDINGS

	function showClue(bldg){
		//if(document.getElementById('caseName').innerHTML != null){
			var building = bldg.value;  //GET NAME OF BUILDING
			historyCount = historyArray.unshift(building);
			
			//GET RID OF HISTORY AFTER 12
			if(historyArray.length > 12) {
				historyArray.pop();
			}

			var historyList = historyArray.toString();
			var histListFormat2 = historyList.replace(/,/g, "<br />");
			var histListFormat = historyArray.join("<br />");
			document.getElementById('searchText').innerHTML = histListFormat;

			var caseIndex = parseInt(window.caseNum);//GET CASE INDEX
			var clueIndex = parseInt(bldg.id);//GET BUILDINGINDEX
			var clueNumber = cases[caseIndex][clueIndex];//GET CLUENUMBER
			var clueText = clueArray[clueNumber];//GET CLUE TEXT STRING

			//OUTPUT CLUE TEXT TO CLUE BOX
			document.getElementById('clueText').innerHTML = "<strong>" + clueText + "</strong>";

			//INITIALIZE TIMER BOX FOR CLUE DISPLAY
			setTimeout('hideClue()', 35000);//TIMER SET FOR 35 SECONDS
			document.getElementById('timerInner').style.display = "block";
			document.getElementById('timerInner').style.width = "100%";//START RED BAR AT 100% ACROSS
			countdown = 100;//INITIALIZE COUNTDOWN
			timeBar = setInterval('timePercent()',1000);//FUNCTION FOR TIMER BOX RED BAR
	}//end showClue


//####FUNCTION TO SHRINK THE RED BAR IN THE COUNTDOWN BOX AS PART OF THE TIMER
	function timePercent(){
		//countdown = 100;
		if(countdown > 0){
		//document.getElementById('timerInner').style.display = "block";
		countdown = countdown - 2.86;
		document.getElementById('timerInner').style.width = countdown+"%";
		//document.getElementById('timerInner').innerHTML = countdown;
		}
		else clearInterval(timeBar);
	}

//####FUNCTION TO RESET THE CLUE BOX TO EMPTY####	
	function hideClue(){
			document.getElementById('clueText').innerHTML = null;
			clearInterval(timeBar);
			document.getElementById('timerInner').style.width = 0+"%";
	}
	
	//====FUNCTIONS====

	

	function showCase(thisCase){

		//alert("Here's the case!");

		//alert(this.value);

		//var case2show = thisCase.options(thisCase.selectedIndex).text;

		var case2show = thisCase.options[thisCase.selectedIndex].value;

		alert(case2Show);

		

		var caseNameText = caseName[case2show];

		document.getElementById('caseName').innerHTML = "You are currently solving <em>" + caseNameText + "</em> mystery.";	

	}



//####FUNCTION TO DISPLAY STRING NAME OF CASE	####

	function getData(dropdown) {

    var case2show = dropdown.options[dropdown.selectedIndex].text;

	var value = dropdown.options[dropdown.selectedIndex].value;

    alert("Value:" + value + " Text:" +case2show);

	var caseNameText = caseName[value];

	document.getElementById('caseName').innerHTML = "You are currently solving <em>" + caseNameText + "</em>";

}

	

//####FUNCTION DISPLAYS NAME OF SELECTED CASE###	

/*	function getData(dropdown) {

    var case2show = dropdown.options[dropdown.selectedIndex].text;

	var value = dropdown.options[dropdown.selectedIndex].value;

     alert("Value:" + value + " Text:" +text);

	

	//var caseNameText = caseName[case2show];

	document.getElementById('caseName').innerHTML = "You are currently solving <em>" + case2show + "</em>.";

}*/

	function showClue(bldg){

			//alert(bldg.value);

			var building = bldg.value;

			document.getElementById('clueText').innerHTML = "Button " + building;

	}

//###FUNCTION HIDES THE CLUE AFTER A PERSON'S TURN	###

	function hideClue(){

			document.getElementById('clueText').innerHTML = null;

	}
//LISTENERS
	slct_case.onchange = caseSelect;

};//end onload