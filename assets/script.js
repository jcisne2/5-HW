var saveBtn = $(".saveBtn");

 // current day is displayed at the top of the calendar
 $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
 
 // color indication of past, present, or future
 function timeBlockColor() {
     var hour = moment().hours();
 
     $(".time-block").each(function() {
         var currHour = parseInt($(this).attr("id"));
 
         // console.log
         if (currHour > hour) {
             $(this).addClass("future");
         } else if (currHour === hour) {
             $(this).addClass("present");
         } else {
             $(this).addClass("past");
         }
     })
 };
 
 // using on click to save info
 saveBtn.on("click", function() {
 
     // console.log
     var time = $(this).siblings(".hour").text();
     var plan = $(this).siblings(".plan").val();
 
     // text is saved in local storage
     localStorage.setItem(time, plan);
 });
 
 // info still persists
 function usePlanner() {
 
     $(".hour").each(function() {
         var currHour = $(this).text();
         var currPlan = localStorage.getItem(currHour);
 
         // console.log(this);
         // console.log(currHour);
         if(currPlan !== null) {
             $(this).siblings(".plan").val(currPlan);
         }
     });
 }
 
 // CALL FUNCTIONS
 timeBlockColor();
 usePlanner();