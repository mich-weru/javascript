a=20
b=10
if(a<b){
    console.log("run")
}
else if(a>b){
    console.log("monday")
}
let stop="red"
let wait="orange"
let go="green"
if (stop=="red"){
    console.log("stop")
}
else if(wait=="orange"){
    console.log("wait")}
else if(go=="green"){
    console.log("go")}
   /*TASK 2:CHECK AGE - DETERMINE INCOME
   0-17 ==>allowance
   18-22==>stipend
   23-65==>salary
   Above 65==>pension
   */ 

document.getElementById("submit").onclick = function(){
    let age =document.getElementById("age").value;
    let income = document.getElementById("income").value;
    if(age>0 && age<=17){
        document.getElementById("display").innerText= "Allowance is:  " + income 
    }
    else if(age>=18 && age<=22){
        document.getElementById("display").innerText= "Stipend is:  " + income 
    }
    else if(age>=23 && age<=65){
        document.getElementById("display").innerText= "Salary is:  " + income 
    }
    else{
        document.getElementById("display").innerText= "Pension is:  " + income 
    }
}


//TASK 3:
/*
promocode =KARIBU then discount =25%
only applicable if discount is above 20000
for purchases above 50000 additional discount=2%
for purchases above 100000 additional discount=5%

promocode=Nairobi then discount =15%
applicable if purchase is above 10000
*/

document.getElementById("submited").onclick = function(){
    let promocode =document.getElementById("promocode").value;
    let amount = document.getElementById("amount").value;
    if(promocode=="KARIBU" && amount >=20000){
        let discount =0.25
        if (promocode=="KARIBU" && amount>=50000 && amount<100000){
            discount +=0.02
        }
        else if(promocode=="KARIBU" && amount>=100000){
            discount +=0.05
        }
        purchase=amount-(amount*discount)
        document.getElementById("displayed").innerText=purchase
    }
    else if(promocode=="Nairobi" && amount >=10000){
        let discount =0.15
        if (promocode=="Nairobi" && amount>=50000 && amount<100000){
            discount +=0.02
        }
        else if(promocode=="Nairobi" && amount>=100000){
            discount +=0.05
        }
        purchase=amount-(amount*discount)
        document.getElementById("displayed").innerText=purchase
    }
    else if(promocode=="Nairobi" && amount<10000){
        document.getElementById("display").innerText= amount
    }
    else if(promocode=="KARIBU" && amount<20000){
        document.getElementById("display").innerText= amount
    }
    else if(!promocode){
        document.getElementById("display").innerText= amount
    }
    else{
            document.getElementById("display").innerText="INVALID PROMOCODE"
        }
}