var level_fontsize = 6;
var version_fontsize = 4;

// Get navwheel
var navwheel = $('#navwheel')[0];

// Register event handlers
window.addEventListener("wheel", ScrollHandler);
$(document).keyup(function(e) {
  var key = event.which || event.keyCode;
  if(key == 38 || key == 40)
  {
    var delta = (key == 38) - (key == 40);
    var e = new MouseEvent("wheel");
    e.wheelDelta = delta;
    window.dispatchEvent(e);
    console.log(delta);
  }
});

// Position of scroll
var y = 0;

// Initial event call
var e = new MouseEvent("wheel", {"wheelDelta": 0});
window.dispatchEvent(e);

// Change color on hover
$("a").hover(function(){
    $(this).css("color", getRandomColor());
  }, 
  function(){
    $(this).css("color", "green");
  }
);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function bound(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function ScrollHandler(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  console.log(e.wheelDelta);
  y = bound(y - delta, 0, 38);

  // Change level headers
  var levels = $(".level").toArray();
  var l;
  for (l in levels) {
    var shrink = bound(y - l * 8, 0, 8);
    var grow = bound(9 - y - (2 - l) * 8, 0, 8);
    var temp = (shrink + grow) * (shrink + grow);
    
	levels[l].style.fontSize = (level_fontsize*(1 - (1/8)*(shrink + grow))) + 'vh'; //(36 - 0.5625 * temp) + 'px'; 
    levels[l].style.width = (100 - 12.5*(shrink + grow)) + '%';   //(100 - 1.5625 * temp) + '%';   
    levels[l].style.opacity = 1 - 0.125 * (shrink + grow);        //(1 - 0.015625 * temp);
  }
  
  // Change version labels
  var versions = $(".version").toArray();
  for (var v in versions){
    var level = 1 + Math.floor(v / 5);
    var shrink = bound(y - level * 8 - (v % 5) - 1, 0, 8);
    var grow = bound(9 - y - (2 - level) * 8 + (v % 5) + 1, 0, 8);
    var temp = (shrink + grow) * (shrink + grow);
    
    versions[v].style.fontSize =  (version_fontsize*(1 - (1/8)*(shrink + grow))) + 'vh'; //(24 - 0.375 * temp) + 'px'; 
    versions[v].style.opacity = (1 - 0.015625 * temp); //1 - 0.125 * (shrink + grow); 
  }
  
  // Set scroll height
  navwheel.scrollTop = y*(window.innerHeight * 0.046);
}

