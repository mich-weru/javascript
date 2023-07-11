document.getElementById("create").onkeyup=function(){
    var content=document.getElementById("create").value
    document.getElementById("item").innerText=content
}

document.getElementById("special").onkeydown=function(){
    var content=document.getElementById("special").value
    document.getElementById("chicken").innerText=content
}
document.getElementById("stop").onmouseover=function(){
    document.getElementById("stop").innerText="monday"}

    document.getElementById("stop").onmouseout=function(){
        document.getElementById("stop").innerText="today is monday"}

        document.getElementById("stop").innerText="today"
    
document.getElementById("select").onchange=function(){
    selectedItem=document.getElementById("select").value
    document.getElementById("top").innerText=selectedItem
}
onload=function(){
    alert("welcome")
}