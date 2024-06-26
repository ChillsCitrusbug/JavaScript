// Events

// JavaScript code is often several lines long. It is more common to see event attributes calling functions:
function displayDate(){
    document.getElementById("demo2").innerHTML = Date();
}


// for accessing element where event is occuring (this.innerhtml in html same as target in js)

document.addEventListener("click", (event)=>{
    console.log(event.target)
})