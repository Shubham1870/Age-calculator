function calculate() {
    let day = document.getElementById("date").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    if ((!month || isNaN(month) || month < 1 || month > 12) && (!year || isNaN(year))) {

        document.getElementById("output").innerHTML = "please enter a valid month and year value ."
        return
    }
    if (!month || isNaN(month) || month < 1 || month > 12 && (!day || isNaN(day) || day < 1 || day > 31)) {

        document.getElementById("output").innerHTML = "please enter a valid month and date value ."
        return
    }
    if ((!day || isNaN(day) || day < 1 || day > 31) && (!year || isNaN(year))) {

        document.getElementById("output").innerHTML = "please enter a valid day and year value ."
        return
    }
    if (!day || isNaN(day) || day < 1 || day > 31) {

        document.getElementById("output").innerHTML = "please enter a valid day value (1-31)."
        return
    }
    if (!month || isNaN(month) || month < 1 || month > 12) {

        document.getElementById("output").innerHTML = "please enter a valid month value (1-12)."
        return
    }
    if (!year || isNaN(year)) {

        document.getElementById("output").innerHTML = "please enter a valid year value ."
        return
    }

    const date = new Date()
    let updateday = date.getDate()
    let monthupdate = 1 + date.getMonth()
    let yearupdate = date.getFullYear()

    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (day > updateday) {
        updateday = updateday + months[monthupdate - 1]
        monthupdate = monthupdate - 1
    }
    if (month > monthupdate) {
        monthupdate = monthupdate + 12
        yearupdate = yearupdate - 1
    }
    let dates = updateday - day
    let monthss = monthupdate - month
    let years = yearupdate - year

    document.getElementById("output").innerHTML = "Your age is" + " " + years + " " + "Years" + " " + monthss + " " + "Months" + " " + dates + " " + "Days"
}