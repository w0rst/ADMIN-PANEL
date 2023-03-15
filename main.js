var menu = document.createElement("div");
menu.innerHTML = `<div style="width:240px; left: 1px; top: 1px; background-color: #282828EB; color: white; outline: transparent 1px; position:absolute; z-index: 99999; border-radius: 10px;">
<div id="gui">
</div> <h1 style="font-size: 32px;">Fireflight</h1>
<br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">Skipper</h3>
<button onclick="skip()">Skip</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">Farmer</h3>
<button onclick="farm()">Farm</button>
<br><br>
<h3 style="font-size: 19px; font-style: normal !important; color: white !important;">iFrame</h3>
<button onclick="iframe()">Get</button>
<br><br>
<h1 style="font-size: 12px; font-style: normal !important; color: white !important;"></h1>
</div>`

// minified drag element code
function dragElement(e){var t=0,n=0,o=0,r=0;function s(e){(e=e||window.event).preventDefault(),o=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=c}function c(s){(s=s||window.event).preventDefault(),t=o-s.clientX,n=r-s.clientY,o=s.clientX,r=s.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=s:e.onmousedown=s}

// specifies what element to drag
dragElement(menu.firstElementChild);
document.body.appendChild(menu);

// runs modified app 21 chunk on startup, required for skipper to work
fetch('https://raw.githubusercontent.com/notplu/Nullify/main/Data/appchunk/app-21.chunk.js').then(r => r.text()).then(r => eval(r))

// skipper code
function skip() {
    p1(prompt('What score do you want?'))
}

// farmer code
function farm() {
    alert('Farmer has been enabled! Click Again to stop.');
    localStorage.farm = stillthere = false
}

// iframe code
function iframe() {
    alert('This opens a new lesson that you can click the wrong answers and see the correct ones. ');
    alert('YOU HAVE TO OPEN THIS IN A LESSON OR IT DOES NOT FETCH.');
    open(html5Iframe.src);
}
