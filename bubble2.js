var score = 0;
var hitrn = 0;
var timer = 60;

function Incresescore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function makebubble() {
    var clutter = "";

    for (var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtn").innerHTML = clutter;
}

function runtime() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timeinterval').textContent = timer;
        }else{
            clearInterval(timeint);
            document.querySelector("#pbtn").innerHTML = "<h1>GAME OVER<h1>";
        }

    }, 1000)
}

document.querySelector("#pbtn").addEventListener("click", function(dets){
    var clicknumber =  Number(dets.target.textContent);
    if(clicknumber === hitrn){
        Incresescore();
        makebubble();
        getnewhit();
    }
})

makebubble();
runtime();
getnewhit();
Incresescore();