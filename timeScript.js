    var today = new Date('January 19, 1975 03:05:05');
    var dayOfMonth = today.getDate();
    var month = today.getMonth();
    var day = today.getDay();
    var hourNow = today.getHours();
    var minuteNow = today.getMinutes();
    var secondNow = today.getSeconds();
    var yearNow = today.getFullYear();

    var monthList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var dayList = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Tursday', 'Friday', 'Saturday'];
    
    var isZero;


        function zero(isZero) {
            if (isZero < 10) {
                valueZero = ('0'+isZero);
            }
            else
                valueZero = isZero;
        };

zero(hourNow);
hourNow = valueZero;
zero(minuteNow);
minuteNow = valueZero;
zero(secondNow);
secondNow = valueZero;

console.log('Today is ' + dayOfMonth + ' ' + monthList[month] + ' ' + dayList[day] + ', ' + yearNow);

console.log(hourNow + ':' + minuteNow + ':' + secondNow);

//Print current page
function print_current_window () {
    window.print();
}



