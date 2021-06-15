var firstD = document.querySelector(".date1")
var secondD = document.querySelector(".date2")
var allDays = document.querySelector(".day")
var bothDatesElem = document.querySelector(".bothDates")

//var weekDayarr = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]

var matchdays = matchingDays()
var templateSource = document.querySelector(".matchingTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var days = document.querySelectorAll(".days")


days.innerHTML = userTemplate({day: matchdays.weekArray()})
bothDatesElem.addEventListener('change',function() {
   var date1 = new Date(firstD.value)
    var date2 = new Date (secondD.value)
    var week = matchdays.weekArray()
   // days.innerHTML = userTemplate({day: matchdays.weekArray() })
    //  var day1 = date1.getDay()
    //  var day2 = date2.getDay()
    
    for(var i = 0; i<week.length;i++){
        console.log(week[i])
        days.classList.remove("green")
        days.classList.remove("yellow")
        days.classList.remove("red")
    
    }
    matchdays.setDate1(date1)
    matchdays.setDate2(date2)
    
    if(matchdays.getDate1()===matchdays.getDate2()){
        // console.log(week[matchdays.getDate1()]);
       days[matchdays.getDate1()].classList.add("green")
        //allDays[matchdays.getDate2()].classList.add("dateMatch")
    }
    // else if (matchdays.getDate1()!==matchdays.getDate2()){
    //     if(matchdays.getDate1()){
    //         allDays[matchdays.getDate1()].classList.add("yellow") 
    //     }
    //     if(matchdays.getDate2()){
    //         allDays[matchdays.getDate2()].classList.add("red") 
    //     }
    // }
});



