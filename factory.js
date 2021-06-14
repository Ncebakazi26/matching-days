function matchingDays() {
    var date1 = "";
    var date2 = "";
    var weekDayarr = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"]

    function setDate1(date) {
        date1 = new Date(date) 
    }
    function getDate1(){

        return date1.getDay()
    }
    function getDay1() {
        return weekDayarr[getDate1()]
    }
    function setDate2(date) {
         date2 = new Date(date)
        
    }
    function getDate2(){
        return date2.getDay()
    }

    function getDay2() {
      return weekDayarr[getDate2()]
    }
    function matchingDates() {
        if ( getDate1() === getDate2()) {
            return "green"
        }
        else if (getDate1() !== getDate2()) {
            if (getDate1()) {
                return "yellow"
            }
            if ( getDate2()) {
                return "red"
            }
        }
    }
    return {
        setDate1,
        getDay1,
        setDate2,
        getDay2,
        matchingDates,
        getDate1,
        getDate2

    }

}