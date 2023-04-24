function calculate(){
    let day=document.getElementById("date").value
    let month=document.getElementById("month").value
    let year=document.getElementById("year").value

    const date=new Date()
    let updateday=date.getDate()
    let monthupdate=1+date.getMonth()
    let yearupdate=date.getFullYear()

    let months=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(day>updateday){
        updateday=updateday+months[monthupdate-1]
        monthupdate=monthupdate-1
    }
    if(month>monthupdate){
        monthupdate=monthupdate+12
        yearupdate=yearupdate-1
    }
    let dates=updateday-day
    let monthss=monthupdate-month
    let years=yearupdate-year

    document.getElementById("output").innerHTML="Your age is"+" "+years+" "+"Years"+" "+monthss+" "+"Months"+" "+dates+" " +"Days"
}