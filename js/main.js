var hourHand = document.querySelector(".hour-hand");
var minuteHand = document.querySelector(".minute-hand");
var dateElement = document.querySelector(".date-value");
var body = document.querySelector("body");

updateClock();
setInterval(updateClock, 20000);

function updateClock(){
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	hourHand.style.transform = "rotate(" + (hour * 30) + "deg)";
	minuteHand.style.transform = "rotate(" + minute * 6 + "deg)";
	dateElement.innerText = makeDate();
	if(hour >= 6){
		body.style.backgroundImage = "url('images/ochtend.jpg')";
	}
	else if(hour >= 12){
		body.style.backgroundImage = "url('images/middag.jpg')";
	}
	else if(hour >= 18){
		body.style.backgroundImage = "url('images/avond.jpg')";
	}
	else {
		body.style.backgroundImage = "url('images/nacht.jpg')";
	}
}

function makeDate() {

  var fulldate = new Date();

  // weekday
  var dayarray = new Array(7);
  dayarray[0]=  "Sunday";
  dayarray[1] = "Monday";
  dayarray[2] = "Tuesday";
  dayarray[3] = "Wednesday";
  dayarray[4] = "Thursday";
  dayarray[5] = "Friday";
  dayarray[6] = "Saturday";
  var weekday = dayarray[fulldate.getDay()];

  // month
  var montharray = new Array(7);
  montharray[0]=  "January";
  montharray[1] = "February";
  montharray[2] = "March";
  montharray[3] = "April";
  montharray[4] = "May";
  montharray[5] = "June";
  montharray[6] = "July";
  montharray[7] = "August";
  montharray[8] = "September";
  montharray[9] = "October";
  montharray[10] = "November";
  montharray[11] = "December";
  var month = montharray[fulldate.getMonth()];

  // monthday
  var monthday = fulldate.getDate();
  switch (monthday){
    case 1:
      monthday = monthday + 'st';
      break;
    case 2:
      monthday = monthday + 'nd';
      break
    case 3:
      monthday = monthday + 'rd';
      break
    case 21:
      monthday = monthday + 'st';
      break
    case 22:
      monthday = monthday + 'nd';
      break
    case 23:
      monthday = monthday + 'rd';
      break
    case 31:
      monthday = monthday + 'st';
      break
    default:
      monthday = monthday + 'th';
      break;
  }

  var parseddate = weekday + ', ' + month + ' ' + monthday;
  return parseddate;
}