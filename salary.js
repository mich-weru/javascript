document.getElementById("submit").onclick= function (){
    let salary=document.getElementById("salaryInput").value
    let expense=document.getElementById("rentInput").value
    document.getElementById("original").innerText=salary
    document.getElementById("rent").innerText=expense
    salary=salary-expense
    document.getElementById("afterRent").innerText=salary
    expense=document.getElementById("electricityInput").value
    document.getElementById("electricity").innerText=expense
    salary=salary-expense
    document.getElementById("afterElectricity").innerText=salary
    expense=document.getElementById("foodInput").value
    document.getElementById("food").innerText=expense
    salary=salary-expense
    document.getElementById("afterFood").innerText=salary
    expense=document.getElementById("waterInput").value
    document.getElementById("water").innerText=expense
    salary=salary-expense
    document.getElementById("afterWater").innerText=salary
    expense=document.getElementById("wifiInput").value
    document.getElementById("wifi").innerText=expense
    salary=salary-expense
    document.getElementById("afterWifi").innerText=salary
    expense=document.getElementById("debtInput").value
    document.getElementById("debt").innerText=expense
    salary=salary-expense
    document.getElementById("afterDebt").innerText=salary
    expense=document.getElementById("titheInput").value
    document.getElementById("tithe").innerText=expense
    salary=salary-expense
    document.getElementById("afterTithe").innerText=salary
    expense=document.getElementById("insuranceInput").value
    document.getElementById("insurance").innerText=expense
    salary=salary-expense
    document.getElementById("afterInsurance").innerText=salary
    expense=document.getElementById("savingsInput").value
    document.getElementById("savings").innerText=expense
    salary=salary-expense
    document.getElementById("afterSavings").innerText=salary




}