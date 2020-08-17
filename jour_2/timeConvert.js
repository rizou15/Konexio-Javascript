

function timeConvert(num) {
    {
        var hours = Math.floor(num / (60 * 60));

        var divisor_for_minutes = num % (60 * 60);
        var minutes = Math.floor(divisor_for_minutes / 60);

        var divisor_for_seconds = divisor_for_minutes % 60;
        var seconds = Math.ceil(divisor_for_seconds);

        var timeLeft = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return timeLeft;
    }

}

console.log(timeConvert(126));



