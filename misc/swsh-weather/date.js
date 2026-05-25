const monthdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getDaysSinceJan1(month, day) { 
    let days = 0;
    for (let i = 0; i < month; i++) { 
        days += monthdays[i];
    }
    days += (day - 1);
    return days;
}

function getMonthDayFromIndex(index) { 
    let ct = 0;
    let month = 0;
    for (month; month < monthdays.length; month++) { 
        ct += monthdays[month];
        if (ct > index) break;
    }
    let days = index - ct + monthdays[month] + 1;
    return [months[month], days];
}

function getDaysFromInput(input) { 
    let spl = input.split("-");
    let m = spl[1] - 1;
    let d = spl[2];
    return getDaysSinceJan1(m, d);
}

function toDateInputValue(date) {
    const local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
};