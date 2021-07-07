var body     = document.getElementsByTagName('body');
var text     = document.getElementById('demo');
var btn      = document.getElementById('btn');
var color    = [205,58,156];
btn.addEventListener('click' , function () {
    var num = (Math.floor(Math.random()*10));
    for (let element = 0; element < color.length; element++) {
        color[element] = color[element]+num*(Math.floor(Math.random()*10));
        if(color[element] > 225) {
            color[element] = 32;
        }
    }
    console.log(color);
    body[0].style.backgroundColor='rgb('+color[0]+','+color[1]+','+color[2]+')';
    text.textContent= 'rgb('+color[0]+','+color[1]+','+color[2]+')';

});
console.log(color);





