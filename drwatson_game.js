/** 221-B Baker Street (the board game) Player Aid.
By Sean W Doyle.
v 2.0 July 2020

New in V2

For next v
-standardize the text of the clues in the clues file
*/
window.onload = function(){
var case2show, caseNum;
var timeRemain;
var countdown = 0;
var historyArray = [];//ARRAY TO HOLD SELECTED BUILDINGS
var timerVar = null;//interval variable

//GET NEEDED ELEMENTS
var slct_case = document.getElementById("CaseSelect");
var txt_case = document.getElementById("caseName");
var btns_clues = document.getElementsByClassName("btn_location");
var li_searches = document.getElementById('searchText');
var txt_clue = document.getElementById('clueText');
var timeBar = document.getElementById('timerInner');

//====FUNCTIONS========================================================
//####FUNCTION TO GET CASE ID AND DISPLAY STRING NAME OF CASE ####
	function caseSelect() {
		let caseNameText = "";
		case2show = slct_case.options[slct_case.selectedIndex].text;
		caseNum = slct_case.options[slct_case.selectedIndex].value;

		//CHECK WHICH CASE WAS SELECTED AND GRAB THE ID AND TEXT VALUE
		//IF --SELECT-- WAS SELECTED, SHOW NOTHING
		if (caseNum !== "zz"){
			caseNameText = caseName[caseNum];

		//DISPLAY THE NAME OF THE CASE
			txt_case.innerHTML = "You are currently solving: <br /><em>The Adventure of " + caseNameText + "</em>";
		} else {
			txt_case.innerHTML = "";
		}
  }//END caseSelect


//####FUNCTION TO DISPLAY CLUES WHEN LOCATION BUTTONS ARE PRESSED ####
	function showClue(){
			var building = this.value;  //GET NAME OF BUILDING
			let clueIndex = parseInt(this.id);//GET BUILDING INDEX
			let historyCount = historyArray.unshift(building);
			
			//GET RID OF HISTORY AFTER 12
			if(historyArray.length > 12) {
				historyArray.pop();
			}

			//UPDATE LOCATION HISTORY
			let historyList = historyArray.toString();
			let histListFormat2 = historyList.replace(/,/g, "<br />");
			let histListFormat = historyArray.join("<br />");
			li_searches.innerHTML = histListFormat;

			//START TIMER
			resetTimer();
			
			//DISPLAY CLUE TEXT
			let clueNumber = cases[caseNum][clueIndex];//GET CLUENUMBER
			let clueText = clueArray[clueNumber];//GET CLUE TEXT STRING
			txt_clue.innerHTML = "<strong>" + clueText + "</strong>";
	}//end showClue


//####FUNCTION TO RESET AND START THE CLUE TIMER
	function resetTimer() {
	//RESET TIMER VARIABLE AND TIMER DIV
		hideClue();
		countdown = 0;
		clearInterval(timerVar);
		timerVar = null;
		timeBar.style.display = "block";
		timeBar.style.width = "100%";

	//INITIALIZE TIMER BOX FOR CLUE DISPLAY
		countdown = 100;
		timerVar = setInterval(timePercent, 1000);//FUNCTION FOR TIMER BOX RED BAR
	}//END resetTimer

//####FUNCTION TO SHRINK THE RED BAR IN THE COUNTDOWN BOX AS PART OF THE TIMER
	function timePercent(){
		if(countdown > 0){
			countdown = countdown - (100/35);//2.86;
			timeBar.style.width = countdown + "%";
		} else {
			clearInterval(timerVar);
			timeBar.style.width = "0%";
			hideClue();
		}
	}//END timePercent

//####FUNCTION TO RESET THE CLUE BOX TO EMPTY
	function hideClue(){
		txt_clue.innerHTML = "";
		clearInterval(timeBar);
		timeBar.style.width = 0+"%";
	}//END hideClue
//==============================================================================UNVERIFIED=============


//###FUNCTION HIDES THE CLUE AFTER A PERSON'S TURN	###

	function hideClue(){

			document.getElementById('clueText').innerHTML = null;

	}


//===========================LISTENERS===========================
	slct_case.onchange = caseSelect;
	for (let i = 0; i < btns_clues.length; i++){
		btns_clues[i].onclick = showClue;
	}

};//end onload