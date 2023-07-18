function addTime(oldTime, milliseconds) {
   var newTime = new Date(); // Create a new date object
   var newValue = oldTime.getTime() + milliseconds; // Calculate the new value
   newTime.setTime(newValue); // Set the time of the new date object
   return newTime; // Return the new date object
 }
 
 function showTime(time) {
   var hour = time.getHours();
   var minute = time.getMinutes();
   var ampm = hour >= 12 ? 'PM' : 'AM';
   hour = hour % 12;
   hour = hour ? hour : 12; // the hour '0' should be '12'
   minute = minute < 10 ? '0'+minute : minute;
   var timeStr = hour + ':' + minute + ' ' + ampm;
   return timeStr;
 }

 function worldClock() {
   var today = new Date(); // Get the current date and time
   var offset = today.getTimezoneOffset() * 60 * 1000; // Calculate the offset in milliseconds
   var universalTime = addTime(today, offset); // Calculate the universal time
   var houstonTime = addTime(universalTime, -360 * 60 * 1000); // Calculate the time in Houston
   var londonTime = addTime(universalTime, 0); // Calculate the time in London
   var newyorkTime = addTime(universalTime, -240 * 60 * 1000); // Calculate the time in New York
   var seattleTime = addTime(universalTime, -480 * 60 * 1000); // Calculate the time in Seattle
   var sydneyTime = addTime(universalTime, 600 * 60 * 1000); // Calculate the time in Sydney
   var tokyoTime = addTime(universalTime, 9 * 60 * 60 * 1000); // Calculate the time in Tokyo
 
   document.getElementById("place1").value = showTime(houstonTime);
   document.getElementById("place2").value = showTime(londonTime);
   document.getElementById("place3").value = showTime(newyorkTime);
   document.getElementById("place4").value = showTime(seattleTime);
   document.getElementById("place5").value = showTime(sydneyTime);
   document.getElementById("place6").value = showTime(tokyoTime);
 }
 
 window.onload = function() {
   worldClock();
   setInterval(worldClock, 1000); // Update the clock every second
 };



