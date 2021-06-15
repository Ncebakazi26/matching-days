var firstD = document.querySelector(".date1")
var secondD = document.querySelector(".date2")
var allDays = document.querySelector(".day")
var bothDatesElem = document.querySelector(".bothDates")


var matchdays = matchingDays()
var templateSource = document.querySelector(".matchingTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var days = document.querySelector(".days")


days.innerHTML = userTemplate({ day: matchdays.weekArray() })
bothDatesElem.addEventListener('change', function () {
    var date1 = new Date(firstD.value)
    var date2 = new Date(secondD.value)
    weekList = document.querySelectorAll(".day")

    for (var i = 0; i < weekList.length; i++) {
        weekList[i].classList.remove("green")
        weekList[i].classList.remove("yellow")
        weekList[i].classList.remove("red")

    }

    matchdays.setDate1(date1)
    matchdays.setDate2(date2)
    console.log(matchdays.getDate1());
    if (matchdays.getDate1() === matchdays.getDate2()) {

        weekList[matchdays.getDate1()].classList.add("green")
    }
    else if (matchdays.getDate1() !== matchdays.getDate2()) {

        if (matchdays.getDay1()) {
            weekList[matchdays.getDate1()].classList.add("yellow")
        }
        if (matchdays.getDay2()) {
            weekList[matchdays.getDate2()].classList.add("red")
        }
    }

});



