describe("The Matching Days factory function", function () {
    describe("Day of the week that correspond to the input date ", function () {
    it("should return Monday for the input date of 2020/10/05", function () {
        let days= matchingDays()
        days.setDate1("2020/10/05")

     assert.equal(days.getDay1(),"Monday")
        
    });
    it("should return Wednsday for the input date of 2019/10/02", function () {
        let days= matchingDays()
        days.setDate1("2019/10/02")

     assert.equal(days.getDay1(),"Wednsday")
        
    });
    it("should return Friday for the input date of 2019/10/02", function () {
        let days= matchingDays()
        days.setDate1("2018/01/05")

     assert.equal(days.getDay1(),"Friday")
        
    });
    it("should return Sunday for the input date of 2021/06/06", function () {
        let days= matchingDays()
        days.setDate2("2021/06/06")

     assert.equal(days.getDay2(),"Sunday")
        
    });
    it("should return Thursday for the input date of 2019/07/11", function () {
        let days= matchingDays()
        days.setDate2("2019/07/11")

     assert.equal(days.getDay2(),"Thursday")
        
    });  
    it("should return Saturday for the input date of 2019/07/11", function () {
        let days= matchingDays()
        days.setDate2("2018/07/14")

     assert.equal(days.getDay2(),"Saturday")
        
    });  
});
describe("Compare the two dates if they fall on the same day or not ", function () {
    it("should return green  for the two dates that fall on the same day", function () {
        let days= matchingDays()
        days.setDate1("2020/10/05")
        days.setDate2("2020/10/05")

    assert.equal(days.matchingDates(),"green")
        
    }); 
    it("should return green  for the two dates that fall on the same day", function () {
        let days= matchingDays()
        days.setDate1("2019/10/05")
        days.setDate2("2020/10/10")

    assert.equal(days.matchingDates(),"green")
        
    }); 

    it("should return yellow for date1 and red for date2", function () {
        let days= matchingDays()
        days.setDate1("2020/09/05")
        days.setDate2("2020/09/06")

        assert.equal(days.matchingDates(),"yellow","red")
        
    });  

    it("should return yellow for date1 and red for date2", function () {
        let days= matchingDays()
        days.setDate1("2017/07/05")
        days.setDate2("2016/01/08")

        assert.equal(days.matchingDates(),"yellow","red")
    });
});

});