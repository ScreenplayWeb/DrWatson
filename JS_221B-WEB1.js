// JavaScript Document
window.onload = function(){
/*
THIS FILE HOLDS THE CASE AND CLUE ARRAYS TO PLAY WITH THE 221-B BAKER 
STREET BOARD GAME (1977 Hansen Edition).  THIS IS INTENDED AS A PLAYER'S 
AID AND REQUIRES THE BOARD GAME TO PLAY.

CREATED BY SEAN DOYLE OCTOBER 2012.  VERSION 1.1
*/

//alert("Test from external page");
/*function showClue(){
		alert("Here's the clue!");	
	}*/
//showClue();	
//====CASE NAME ARRAY
caseName = new Array(
"The Unholy Man", 
"The Dead Inventor", 
"Silver Patch", 
"The Chameleon&rsquo;s Vengeance", 
"The Coded Message", 
"The Murdered Banker", 
"The Bones of Contention", 
"The Eternal Sleep", 
"The Kinetoscope Killer",
"The Kidnapped Infant",
"The Missing Cuckoo",
"The Locked Chamber",
"The Suicidal Architect",
"The Murdered Prankster",
"The Anonymous Assassin",
"The Bludgeoning Bobby",
"The Clark's Demise",
"The Waylaid Courier",
"The Murdered Druggist",
"The Beeswax Heiress");

//====CASE/CLUES MULTI ARRAY====
//FIND THE HELPER FOR THIS IN THE BUDGET.XLS FILE
cases = [];
cases[0] = new Array(1, 11, 21, 31, 41, 51, 61, 71, 76, 91, 101, 111, 121, 131);
cases[1] = new Array(2,12,22,32,42,52,62,72,77,92,102,112,122,132);
cases[2] = new Array(4, 14, 24, 34, 44, 54, 64, 74, 79, 94, 104, 114, 124, 134);  
cases[3] = new Array(7,17,27,37,47,57,67,82,87,97,107,117,127,137);
cases[4] = new Array(141,146,151,156,161,166,171,176,181,196,192,201,186,206);
cases[5] = new Array(5,15,25,35,45,55,65,75,80,95,105,115,125,135);
cases[6] = new Array(239,224,234,244,249,254,259,264,269,274,219,214,229,279);
cases[7] = new Array(8,18,28,38,48,58,68,83,88,98,108,118,128,138);
cases[8] = new Array(6,16,26,36,46,56,66,81,86,96,106,116,126,136);
cases[9] = new Array(143,148,153,158,163,168,173,178,183,198,194,203,188,208);
cases[10] = new Array(3,13,23,33,43,53,63,73,78,93,103,113,123,133);
cases[11] = new Array(9,19,29,39,49,59,139,84,89,99,109,119,129,69);
cases[12] = new Array(144,149,154,159,164,169,174,179,184,199,195,204,189,209);
cases[13] = new Array(240,225,235,245,250,255,260,265,270,275,220,215,230,280);
cases[14] = new Array(10,20,30,40,50,60,70,85,90,100,110,120,130,140);
cases[15] = new Array(237,222,232,242,247,252,257,262,267,272,217,212,227,277);
cases[16] = new Array(236,221,231,241,246,251,256,261,266,271,216,211,226,276);
cases[17] = new Array(145,150,155,160,165,170,175,180,185,200,191,205,190,210);
cases[18] = new Array(238,223,233,243,248,253,258,263,268,273,218,213,228,278);
cases[19] = new Array(142,202,152,157,162,167,172,177,182,197,193,147,187,207);
	
//====CLUE TEXT ARRAY====	
clueArray = new Array("CLUE 0",
"Earl Longworth has constant headaches.",
"The knife in Foster's chest was not thrust by human hands.",
"KILLER CLUE (Three Parts) III A type of fabric.",
"The floor of Silver Patch's stall contained some fresh black paint.",
"MOTIVE CLUE (Four Parts) III The alphabet letter after K.",
"Colonel Sebastian Moran.",
"No clue.",
"Jules Ridgely purchased some pills to help his severe case of vertigo.",
"WEAPON CLUE (Two Parts) I \"Yo, ho, the man down.\" (Song).",
"One should never attempt to christen, with a bottle full of nitroglycerin.",
"Duke Tailcourt is a well-known collector of original manuscripts.",
"Mr. Foster and Mr. T. Walton had worked together as partners on a number of inventions.",
"One of McSwade's hobbies is collecting gold coins.",
"Sir Reginald Cosgrove had a large insurance policy on his prize horse, Silver Patch.",
"At a board meeting scheduled for this afternoon, Mr. Ostermann was to give a report on the Bank's profits.",
"The package contained a look-alike replica of the Ziegfield necklace and a note. For text of note, go to Tobacconist.",
"\"SURPRISE\" CLUE(Threepar.ts) III More than one sip.",
"WEAPON CLUE (Three Parts) III Common name for an urban area.",
"The engraver was dead before the ventilator grating was removed.",
"An important clue is at the Dock.",
"Longworth was seen reading a Bible to the victim and Duke Tallcourt the day before the murder.",
"KILLER CLUE (Two Parts) I Up against the",
"Sir Bertram Lam pfelt just returned from a recent trip to Paris.",
"WEAPON CLUE (Three Parts) III Rhymes with throttle.",
"MOTIVE CLUE (Four Parts) IV Past tense of the verb mean.",
"Jonathan Hackett's real name is at the Apothecary.",
"The carriage driver is not the Chameleon.",
"Leopold Hark ness is an undercover agent for British intelligence.",
"MASTERMIND CLUE (Two Parts) I The alphabet letter after 0.",
"A clue to the assassin's identity is at the Newspaper Shop.",
"GENERAL MOTIVE CLUE You can't judge a book by it's cover.",
"KILLER CLUE (Two Parts) II 2,000 pounds. (Unit of Measure)",
"WEAPON CLUE (Three Parts) I Money paid for a service.",
"KILLER CLUE (Two Parts) II An arrangement of fruit trees.",
"KILLER CLUE (Two Parts) II The opposite of woman.",
"Colonel Sebastian Moran is ar adept hypnotist.",
"CHAMELEON CLUE (Two Parts) II Past tense of the verb tread.",
"You got here just in time to stop Boris Crepnick from leaving the country.",
"There were air holes drilled into one of the packing crates that Peabody brought back from Africa.",
"Hickory, dickory, dock; the mouse ran up the clock. When the clock strikes one, my task will be done. Hickory, dickory, dock!",
"The Duchess's daughter, Anastasia, did not like the strange preacher.",
"Mr. Foster and Mrs. Walton were seen whisperirg to each other in the Hotel lobby the day before the murder.",
"KILLER CLUE (Three Parts) I Not variables.",
"Some fresh silver paint was found on the stall floor of Night Dancer, another of Sir Reginald's horses.",
"Rita Frawley and Walter Ostermann occasionally spent nights together at the Hotel.",
"Colonel Sebastian Moran is an associate of the notorious Professor Moriarty.",
"\"SURPRISE\" CLUE (Three Parts) II What the wind does.",
"A kite and length of copper wire is found on the roof of the Hotel.",
"MASTERMIND CLUE (Two Parts) II Acorpse.",
"A weapon clue is at the Pub.",
"GENERAL WEAPON CLUE The Bible says that if you live by one, you'll die by one.",
"On the bureau in Mr. Foster's Hotel room, a catapult-like fixture was secretly hooked up to Foster's cigar box.",
"COMPLETE MOTIVE CLUE (Two Parts) I Grownup. II Apples grow on a___",
"No clue.",
"MOTIVE CLUE~(Four Parts) I The alphabet letter after L.",
"\"WHO'S BEHIND IT\" CLUE (Four Parts) I The opposite of less. II The alphabet letter after D.",
"HIDING PLACE CLUES (Four Parts) II The alphabet letter before P. III Nickname for Linda.",
"KILLER CLUE (Two Parts) II A Civil War general.",
"KILLER CLUE (Two Parts) II Better you than ___",
"No clue.",
"Earl Longworth is considered a foremost authority on the authenticity of original manuscripts.",
"MOTIVE CLUES (Four Parts) II The sound a clock makes. III A gelatin dessert.",
"The killer was a ham radio operator.",
"MOTIVE CLUE (Three Parts) II Another word for positive or certain.",
"MOTIVE CLUE (Four Parts) II The sound a bee makes.",
"Sir Hyman Pearson is the curator in charge of security at the Museum's international jewel exhibit this weekend.",
"No clue.",
"MOTIVE CLUE (Three Parts) III Specially mixed food for a baby.",
"HIDING PLACE (Two Parts) I The plates are hidden in the hollow bottom. (Part II at the Museum)",
"Stop at the Newspaper Shop.",
"The original manuscript of Hamlet was stolen recently from an exhibit on the Riviera.",
"No clue.",
"GENERAL KILLER & MOTIVE CLUE A little birdie told her.",
"MOTIVE CLUES (Three Parts) I The opposite of out. III Creatures that love picnics.",
"For the past two years, Wellington Bakman has been living way above his means.",
"KILLER CLUE (Two Parts) I Not short.",
"The killer is a man.",
"WEAPON CLUE (Three Parts) II Insects who make honey.",
"KILLER CLUE (Two Parts) I Something that produces an effect.",
"WEAPON CLUE (Three Parts) III \" ___ Til The Sun Shines, Nellie\" (Song)",
"The Museums jewel exhibit this weekend will feature a rare public showing of the world's most valuable collection of precious stones, the Ziegfield necklace.",
"No clue.",
"MOTIVE CLUE (Three Parts) II A sewer rodent.",
"Mario Morelli's monkey kno~s how to use a slingshot.",
"The letters before and after N, will give you a clue to who I am. Also the letter before F, And the letters before and after S.",
"The kinetoscope pictures show Sir Hyman, with a blank look on his face, standing over the slain victims at the Thomson mansion, and removing the large diamond from the wall safe.",
"CHAMELEON CLUE (Two Parts) I The opposite of more.",
"Ridgely was seen talking to Boris Crepnick in the Park the day before Ladder's death.",
"WEAPON CLUE (Two Parts) II __ With The Wind (Book & Movie)",
"There is no clue at the Tobacconist.",
"KILLER CLUE (Two Parts) II Value.",
"MOTIVE CLUES (Four Parts) I Caesarwasa __ IV A large body of salt water.",
"WEAPON CLUE (Three Parts) III The opposite of most.",
"The pawnbroker's ticket at the scene of the crime belonged to Sir Reginald Cosg rove.",
"KILLER CLUE (Two Parts) I The opposite of front.",
"COMPLETE MOTIVE This scheme was hatched as a means of acquiring both the Thomson diamond and the Ziegfield necklace.",
"No clue.",
"KILLER CLUE (Two Parts) I The opposite of poor.",
"COMPLETE METHOD OF REMOVAL The plates were carried ltp the air shaft in human hands.",
"No clue.",
"The Bishop of Whittenfroth was in attendance at the Playhouse the night of the murder.",
"The evening of the murder, Mr. & Mrs. Foster went to the Playhouse with Mr. & Mrs. Southerington.",
"No clue.",
"Footprints at the stables show that the killer wore a size 12 shoe.",
"WEAPON CLUE (Three Parts) I Crime doesn't -~",
"\"WHO'S BEHIND IT\" CLUE (Four Parts) III The alphabet letter after Q. IV A favorite British beverage.",
"HIDING PLACE CLUE (Four Parts) I To compete with. IV Afterj'scome ___",
"WEAPON CLUE (Three Parts) II Moss grows on the north side of a ____",
"The killer is a native of Africa.",
"An important clue is at the Apothecary.",
"No clue.",
"Mr. Foster and Mrs. Walton were having an affair.",
"Torchfield bought the cuckoo clock on a recent trip to Switzerland.",
"WEAPON CLUES (Three Parts) I When you have no money, you're flat II The alphabet letter after M.",
"Both Rita Frawley and Patrick Reardon are left-handed.",
"Upon returning home from 221 B Baker Street, Sir Hyman found a second package waiting for him. To learn its contents, go to the Bank.",
"\"SURPRISE\" CLUE (Three Parts) I The alphabet letter after W.",
"WEAPON CLUE (Three Parts) I To vote into office.",
"KILLER CLUE (Two Parts) I A swine or glutton.",
"A bit of the bubbly will make him sky high: and if you knew the contents, you d know why!",
"The victim had a handsome tan, peculiar in London.",
"No clue.",
"A coroner's check revealed two dead fleas on the victim's neck.",
"Bobby Jansen is now working at the Locksmith shop.",
"The victim was hit on the head from behind.",
"Scotland Yard has been enlisted to provide heavy security at the Museum's international jewel exhibit this weekend.",
"Lestrade was taking the Chameleon to a new prison when the criminal escaped.",
"No clue.",
"There is a puncture the size of a pinhole at the base of the engraver's neck.",
"No clue.",
"The Bishop of Whittenfroth smokes German-made cigarettes.",
"It was well known to Mr. Foster's friends that he rose early every morning and, before doing anything else, smoked a cigar.",
"KILLER CLUE (Three Parts) II It produces light.",
"Sir Reginald would never kill his prize horse, Silver Patch.",
"WEAPON CLUE (Three Parts) II The sound made by a contented cat.",
"TEXT OF SECOND NOTE \"Replace the real Ziegfield necklace with this replica and await further instructions. If you fail to do this, we shall contact Scotland Yard and recommend they view the kinetoscope pictures in the Park.\"",
"GENERAL CLUE The Chameleon expects to see Holmes high strung.",
"MOTIVE CLUE (Three Parts) I and you shall find.",
"HIDING PLACE (Two Parts) II . . . of a Museum display case. (Part I at the Tobacconist)",
"No clue.",
"CODE CLUE H=l B=C",
"The hunk of candle found by Holmes was from a heavy decorative candle approximately two kilograms (six pounds) in weight. It's safe to assume that a man taking a candle for the purpose of lighting his way, would use a much smaller candle.",
"No clue.",
"J.S. Subkow takes little yellow pills regularly for a liver condition.",
"The weapon and the courier's valise were thrown overboard.",
"CODE CLUE O~P",
"KILLER CLUE (Four Parts) I The opposite of lose.",
"MOTIVE CLUES (Four Parts) II The Merchant __ Venice (Play) III Another name for prostitute.",
"While mopping the Bank floor last Saturday, maintenance man Harvey Willis says he heard a noise like a firecracker which seemed to come from the architects' office next store.",
"Prescott's ship is being repossessed.",
"CODE CLUE ZA X~Y",
"COMPLETE WEAPON CLUES I A cylindrical tin container. II The opposite of sharp or bright.",
"KIDNAPPER CLUE (Three Parts) III \"Let him who has not sinned cast the first __",
"KILLER CLUES (Four Parts) __ '5 Well That Ends Well (Play) IV doctor's assistant; usually a woman.",
"FORTUNE CLUE (Two Parts) I Not medium or well done.",
"The message contains three words.",
"MOTIVE CLUES (Three Parts) I Another name for a hotel or lodge. II Strands that grow from the scalp.",
"WHEREABOUTS CLUE (Three Parts) I Bass, trout and perch are ____-",
"KILLER CLUES (Four Parts) II Expression used in golf to warn someone of an oncoming ball. III A portion or section; not the whole thing.",
"Holmes noticed a streak of rust between the thumb and forefinger of Captain Prescott's right hand.",
"CODECLUE K--L",
"While Mrs. Dunphy disdained all social activities, Mr. Dunphy yearned for a more active night life.",
"KIDNAPPER CLUE (Three Parts) I Name for a cowboy's lasso.",
"MOTIVE CLUES (Four Parts) I Common name for a blanket or bed quilt. II The opposite of down.",
"KILLER CLUE (Two Parts) II A collapsible u~t expressly made for sleeping upon.",
"CODE CLUE M=N",
"KILLER CLUE (Four Parts) IV A famous giant said:\"____ fi fo fuml\"",
"KIDNAPPER CLUE (Three Parts) II The color of some grapefruit.",
"George Netter had a new house key made on Monday",
"WEAPON CLUE (Two Parts) II Painful twist of a joint.",
"The Eyes of Lucifer were too \"hot\" for Hickel to unload. He still had the precious pearls in his possession when he died.",
"Mrs. Dunphy often argued with her husband about the way he squandered her money.",
"MOTiVE CLUE (Four Parts) I Most wine should be served ____",
"William Skottle, basically an honest man, had for some time been bothered by strong pangs of guilt.",
"Lawyer James Pushkin is an authority on rare coins and stamps.",
"CODE CLUE C=D",
"KILLER CLUE (Four Parts) III Completed; finished.",
"WHEREABOUTS CLUE (Three Parts) III Sits on water and rhymes with float.",
"A woman who lives above the Newspaper Shop says she saw three or four men get out of a private carriage in the back alley last Saturday afternoon.",
"No clue.",
"CODE CLUE R=S",
"Where a seated man will always cross his legs to catch a thrown object in his lap, a seated woman will usually spread her legs apart to catch the object in her skirt.",
"Harriet Pinkston has worked as a governess and nanny for nearly twenty years.",
"MOTIVE CLUES (Four Parts) III Niagara IV Discs you play on a phonograph.",
"KILLER CLUE (Two Parts) I A button on machinery might read this.",
"No clue.",
"Mrs. Dun phy has a gardener named Winthrop Capp.",
"Harriet Pinkston's husband, Carl Pinkston, is a fisherman.",
"Although there was the smell of beer on Skottle's lips, a coroner's report showed no alcohol in his bloodstream.",
"There is no blood on the walking stick.",
"WEAPON CLUE (Two Parts) I A jungle creature whojikes bananas.",
"CODE CLUE D=E",
"Holmes noticed that Mrs: Dunphy was wearing no wedding ring; nor was there a ring mark on any of her fingers.",
"No clue.",
"Skottle's firm had been falsifying records to conceal the company's continually worsening financial situation.",
"The message tells where the Eyes of Lucifer are hidden.",
"MOTIVE CLUE (Three Parts) III BoyScoutsknowhowtopitch",
"WHEREABOUTS CLUE (Three Parts) II \" a song of sixpence\"",
"The carpet in Thomas Jones' office contains two freshly cleaned spots. One of them has the slight smell of beer.",
"No clue.",
"The translated message must be read backwards.",
"Mr. Dunphy knew that he was not the sole benefactor of his wife's will. In fact, Mrs. Dunphy's will leaves most of her inheritance to charity.",
"MOTIVE CLUE (Four Parts) IV To possess something. (Rhymes with moan.)",
"Thomas Jones and George Netter were seen drinking at the Pub Saturday afternoon.",
"Holmes has the fortune in his pocket.",
"CODE CLUE O=R",
"KILLER CLUE (Four Parts) II A rolling gathers no moss.",
"Harriet Pinkston is not able to have a baby of her own.",
"Arthur Kendrick smokes Turkish cigars.",
"FORTUNE CLUE (Two Parts) II Necessary to mail a letter.",
"Holmes knows that any person actually involved in~he Erse Kernes would use the old Gaelic spelling of Ireland-ER U-instead of ERIN.",
"The clothes of the three victims had a dank smell, not unlike that found in a boiler room.",
"MOTIVE CLUES (Five Parts) I The number after nine. II A track of grassland; especially in the Western USA.",
"THIEF CLUE (Two Parts) I A part of the foot.",
"No clue.",
"Actress Erin McCann is starring in the current production of The Taming el the Shrew.",
"The ground between Scotland Yard and the Bank is composed of rich, black mud.",
"Clara Wexier is innocent.",
"HIDING PLACE CLUE (Two Parts) I One of four in a deck of cards.",
"No clue.",
"MOTIVE CLUE (Two Parts) I The darkest color in the spectrum.",
"The largest shipment of gold ever to reach London will arrive later this month for storage in the Ban k~vauIt.",
"Myra Hyatt is innocent.",
"MOTIVE CLUE (Three Parts) II Missing vowel in A, I, 0, U.",
"The shot that killed Tom Dayton was fired from outside the porthole.",
"COMPLETE KILLER CLUE A person who prepares food.",
"Attached to the rear of the Scotland Yard building, is an abandoned bungalow which has a deep cellar and boiler room.",
"Michael Milligan is innocent.",
"No clue.",
"Only one bullet was fired from Stanley Bosworth's revolver.",
"WEAPON CLUE (Two Parts) I Cyclops had only one of these.",
"There is a KILLER CLUE at the Newspaper Shop.",
"COMPLETE WEAPON CLUES I A is the first ~~of the alphabet. II The first ball game of the season is known as the season",
"HIDING PLACE CLUE (Two Parts) II Belongs to Kay.",
"Although everyone on the yacht heard two shots, Tom Dayton had only one bullet in his forehead.",
"Manfred Maloney had documents relating to Donald Hobson's disgraceful past.",
"MOTIVE CLUES (Four Parts) III Thenumberafterone. IV The sound a gun makes.",
"Eugene Kane often teased the postman about being tardy with the mail.",
"MOTIVE CLUE (Three Parts) I Nickname for Alexander Graham Bell's best known invention.",
"Doctor Peerpoint reveals that Tom Dayton was terminally ill, with only a few weeks to live.",
"WEAPON CLUE (Two Parts) II The USSR emblem is the hammer and ___",
"MOTIVE CLUES (Four Parts) I The number after nine. II The alphabet letter after K.",
"No clue.",
"Heelwright's malaria was cutting his expedition short.",
"Tom Dayton was not killed with Stanley Bosworth's gun.",
"While stationed in Ireland years ago, Donald Hobson was dishonorably discharged from the British military for illegal mistreatment of civilians.",
"KILLER CLUE (Three Parts) I A seed of corn.",
"Grant Evans, the postman who services Mrs. Farr's neighborhood, is often late and often leaves mail at the wrong addresses.",
"THIEF CLUE (Two Parts) II It can be done with a pen or pencil.",
"MOTIVE CLUE (Two Parts) I Rhymes with tactical.",
"GENERAL WEAPON CLUE The weapon is the water.",
"WEAPON CLUE (Two Parts) II The alphabet letter after K.",
"MOTIVE CLUE (Five Parts) IV Claus",
"MOTIVE CLUE (Three Parts) III Slang for dice or dominoes.",
"MOTIVE CLUE (Two Parts) II Rhymes with bloke.",
"MOTIVE CLUE (Two Parts) II The opposite of female.",
"No clue.",
"Daniel Kirwin is innocent.",
"The Sumatra Bones were not in the packing cases when the cases arrived at the Museum.",
"No clue.",
"Alfred Cooke's real name is Donald Hobson.",
"KILLER CLUES (Three Parts) II The opposite of less. III Henry VIII divorced Katherine to marry Bullen.",
"MOTIVE CLUE (Five Parts) V When driving a golf ball, most players set the ball on a",
"Heelwright's greatest desire is to make some notable archeological discovery during his lifetime.",
"The actual murder weapon is under water.",
"As British soldiers nearly twenty years ago, Manfred Maloney and Donald Hobson were stationed together in Ireland.",
"WEAPON CLUE (Two Parts) I Another word for push. (Rhymes with glove.)",
"Wilma Farr is innocent.",
"The packing cases die not come open in th~ crash; nor were they tampered with.",
"KILLER CLUE (Two Parts) II The number before eleven.",
"No clue.",
"GENERAL KILLER AND MOTIVE CLUE He had them do his dirty work.",
"MOTIVE CLUE (Five Parts) III The opposite of out.",
"Archibald has no scholarly background in archeology.",
"KILLER CLUE (Two Parts) I Partofamonth.",
"In the photograph, Maloney is smoking his pipe with his left hand.",
"Colonel Sebastian Moran, an associate of the notorious Professor James Moriarty, is of medium height, medium build and around forty years of age.",
"Grant Evans held an executive position in the British postal system until he suffered a nervous breakdown and was demoted.",
"Holmes notices a speck of dust leaking from the bottom of Heelwright's suitcase.",
"KILLER CLUES are at the Pawnbroker (I) and at the Park (II)."
);

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
}