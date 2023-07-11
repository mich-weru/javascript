let a=10
a++
console.log(a)
for(var i=0; i<=10; i++){
    console.log(i)
}
// display the week
// display the day-7 days
// do this for 4 weeks
for(let w=1; w<=4; w++){
    console.log(" ")
    console.log("Week " + w)
    for(let d=1; d<=7; d++){
        if(d==1){
            console.log("Monday")
        }
        else if(d==2){
            console.log("Tuesday")          
    }
    else if(d==3){
        console.log("Wednesday")
    }
    else if(d==4){
        console.log("Thursday")
    }
    else if(d==5){
        console.log("Friday")
    }
    else if(d==6){
        console.log("Saturday")
    }
    else if(d==7){
        console.log("Sunday")
    }
}
}
/*CREATE THE MULTIPLICATION TABLE FROM 1 TO 19 OUTPUT IN THE FORMAT
     MULTIPLICATION TABLE FOR 1
     1 *1=2
     1*2=2
*/
for(let j=1;j<=19;j++){
    console.log(" ")
        console.log("MULTIPLICATION TABLE FOR " + j)
        for(let i=1;i<=19;i++){
            console.log(j + "x" + i +"=" + j*i)
        }
}