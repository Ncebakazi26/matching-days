var firstD = document.querySelector(".date1")
var secondD = document.querySelector(".date2")
var allDays = document.querySelector(".day")
var bothDatesElem = document.querySelector(".bothDates")

var weekDayarr = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]

var matchdays = matchingDays()
var templateSource = document.querySelector(".matchingTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var days = document.getElementById('days')


days.innerHTML = userTemplate({day: weekDayarr })
bothDatesElem.addEventListener('change',function() {
   var date1 = new Date(firstD.value)
    var date2 = new Date (secondD.value)
    days.innerHTML = userTemplate({day: weekDayarr })
     var day1 = date1.getDay()
     var day2 = date2.getDay()
    
    for(var i = 0; i<weekDayarr .length;i++){
        weekDayarr [i].classList.remove("dateMatch")
        weekDayarr [i].classList.remove("dateOne")
        weekDayarr [i].classList.remove("dateTwo")
    
    }
    matchdays.setDate1(date1)
    matchdays.setDate2(date2)
    
    if(matchdays.getDate1()===matchdays.getDate2()){
        weekDayarr[day1].classList.add("dateMatch")
        //allDays[matchdays.getDate2()].classList.add("dateMatch")
    }
    // else if (matchdays.getDate1()!==matchdays.getDate2()){
    //     if(matchdays.getDate1()){
    //         allDays[matchdays.getDate1()].classList.add("dateOne") 
    //     }
    //     if(matchdays.getDate2()){
    //         allDays[matchdays.getDate2()].classList.add("dateTwo") 
    //     }
    // }
});



