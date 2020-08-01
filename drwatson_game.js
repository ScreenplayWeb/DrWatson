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
	var countdown;
	var historyArray = [];//ARRAY TO HOLD SELECTED BUILDINGS
	var timerVar = null;

//GET NEEDED ELEMENTS
var slct_case = document.getElementById("CaseSelect");
var txt_case = document.getElementById("caseName");
var btns_clues = document.getElementsByClassName("btn_location");
var li_searches = document.getElementById('searchText');
var txt_clue = document.getElementById('clueText');

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

			//DISPLAY CLUE TEXT
			let clueNumber = cases[caseNum][clueIndex];//GET CLUENUMBER
			let clueText = clueArray[clueNumber];//GET CLUE TEXT STRING
			txt_clue.innerHTML = "<strong>" + clueText + "</strong>";

			//START TIMER
			resetTimer();
	}//end showClue
//==============================================================================UNVERIFIED=============
	function resetTimer() {
		//RESET TIMER VARIABLE
		console.log("START TIMER");
		/*clearInterval(timerVar);
		timerVar = null;
		
					//INITIALIZE TIMER BOX FOR CLUE DISPLAY
			setTimeout('hideClue()', 35000);//TIMER SET FOR 35 SECONDS
			document.getElementById('timerInner').style.display = "block";
			document.getElementById('timerInner').style.width = "100%";//START RED BAR AT 100% ACROSS
			countdown = 100;//INITIALIZE COUNTDOWN
			timeBar = setInterval('timePercent()',1000);//FUNCTION FOR TIMER BOX RED BAR*/
		
	}//END resetTimer

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