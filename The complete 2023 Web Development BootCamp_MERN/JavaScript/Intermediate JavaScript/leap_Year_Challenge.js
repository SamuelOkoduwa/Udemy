// function leapYearFinder (year){
// 	//var YearFinder = year/4 && year/100 & year/400;
// 	if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0){
// 		return("Leap Year.")
// 	}else{
// 		return("Not leap year.")
// 	}
// } 
// //var YearFinder = leapYearFinder(2023);
// //console.log(YearFinder);
// console.log(leapYearFinder(202))
function lsLeap(year){
	// CHeck first for leap year
	if ( year % 4 === 0 && year % 400 === 0 ){
		// If above resolves to true, then result is tentatively Leap year
			if( year % 100 === 0 ){
				return ("Not Leap year");
			} else {
				return ("Leap year");
			}

	}
}
