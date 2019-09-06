alert("Welcome to the Fruit Machine")

document.getElementById("b").addEventListener("click",spin)

function spin(){
    alert("You are spinning the wheels")
    spinReel("r1")
    spinReel("r2")
    spinReel("r3")
}

function spinReel(reel){
    let i = Math.floor(Math.random()*3)
if(i == 0){
    document.getElementById(reel).src = "images/lemon.jpg"
    return (i)
}
if(i == 1){
    document.getElementById(reel).src = "images/cherry.jpg"
    return (i)
}
if(i == 2){
    document.getElementById(reel).src = "images/banana.jpg"
    return (i)
}
if(i(r1) == i(r2) == i(r3){

alert ("You win £10")
}
}
