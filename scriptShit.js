getElementById("Demo").innerHTML = "Hello";

getElementById("AnyName").innerHTML = "Hello";

alert('erm what the sigma');

window.addEventListener('click', function () {
    
    var audio = document.getElementById("AnyName");
    audio.play();
});

let x = document.querySelector('audio');
function play(){
x.play();
}
document.getElementById("ButtonForTestShit").addEventListener('click', function(){
    audio.play();
});