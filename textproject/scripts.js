setTimeout(function() {
  randoColor(1);
  $('#start').fadeIn(250).show(1);
  $('#cite').fadeIn(250).show(1);
  $('body')[0].css('cursor', 'default');
}, 2500);



$('#start').click(function () {
  $('#start').fadeOut(250).hide(1);
  $('#cite').fadeOut(250).hide(1);
  nextLine(1);
});

function changeText() {
  $('#cite')[0].innerHTML = "Quotes from the Hobbit, by J.R.R Tolkien";
}

function deleteText() {
  $('#cite')[0].innerHTML = "*";
}

function nextLine(number) {
  if (number === 1) {
    $('#line1').delay(250).show(1);
  } else if (number === 0) {
    $('#line14').fadeOut(250).hide(1);
    $('#start').delay(250).show(1);
  } else {
    $('#line' + (number - 1)).fadeOut(250).hide(1);
    $('#line' + number).delay(250).show(1);
  }
  if (number % 2 == 1) {
    $('body').delay(250).css('background-color', randoColor());
  }
}

function randoColor(timeDelay) {
  setTimeout(function () {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (i = 0; i < 6; i++) {
      if (i % 2 == 0) {
        color += letters[Math.floor(Math.random() * 2) + 1];
      } else
        color += letters[Math.floor(Math.random() * 3) + 2];
    }

    $('body').css('background-color', color);
  }, timeDelay);
}

function river() {
  $('#line1').delay(1500).hide(1);
  $('#line2').delay(1500).show(1);
  $("#darkCloud").show(1).delay(1500).fadeOut(500).hide(1);

  $('#bridge').delay(1500).show(1);
  $('#bridge')[0].play();
  $('#bridge')[0].loop = true;

  randoColor(1500);
}

function bridge() {
  nextLine(3);

  $('#bridge').fadeOut(250).hide(1);
  $('#bridge')[0].pause();
  $('#bridge')[0].loop = false;

  randoColor(1);
}

function snowblind() {
  $('#line3').fadeOut(2000).hide(1);
  $('#line4').delay(2400).show(1);
  $("#snow").show(1).delay(3000).hide(1);
  setTimeout(function () {
    $("#snow")[0].src = "";
  }, 1800);

  $('#windows').delay(2400).show(1);
  $('#windows')[0].play();
  $('#windows')[0].loop = true;

  randoColor(2400);
}

function windows() {
  nextLine(5);
  $('#windows').fadeOut(250).hide(1);
  $('#windows')[0].pause();
  $('#windows')[0].loop = false;

  randoColor(1);
}

function wolf() {
  $('#line5').delay(700).hide(1);
  $('#line6').delay(1000).show(1);
  $("#bite").show(1).delay(1000).fadeOut(500).hide(1);

  $('#drips').delay(1000).show(1);
  $('#drips')[0].play();
  $('#drips')[0].loop = true;

  randoColor(1000);
}

function poison() {
  nextLine(7);

  $('#drips').fadeOut(250).hide(1);
  $('#drips')[0].pause();
  $('#drips')[0].loop = false;

  randoColor(1);
}

function circle() {
  $('#circle').show(1).delay(1500).fadeOut(500).hide(1);
  $('#line7').delay(1500).hide(1);
  $('#line8').delay(1500).show(1);

  $('#stairs').delay(1500).show(1);
  $('#stairs')[0].play();
  $('#stairs')[0].loop = true;

  randoColor(1500);
}

function stairs() {
  nextLine(9);

  $('#stairs').fadeOut(250).hide(1);
  $('#stairs')[0].pause();
  $('#stairs')[0].loop = false;

  randoColor(1);
}

function paths() {
  $('#paths').show(1).delay(3000).fadeOut(500).hide(1);
  $('#line9').delay(3000).hide(1);
  $('#line10').delay(3000).show(1);

  $('#footprints').delay(3000).show(1);
  $('#footprints')[0].play();
  $('#footprints')[0].loop = true;

  randoColor(3000);
}

function footprints() {
  nextLine(11);

  $('#footprints').fadeOut(250).hide(1);
  $('#footprints')[0].pause();
  $('#footprints')[0].loop = false;

  randoColor(1);
}

function mountain() {
  $('#mountain').show(1).delay(2000).fadeOut(250).hide(1);
  $('#line11').delay(2000).hide(1);
  $('#line12').delay(2000).show(1);

  $('#crevice').delay(2000).show(1);
  $('#crevice')[0].play();
  $('#crevice')[0].loop = true;

  randoColor(2000);
}

function crevice() {
  nextLine(13);

  $('#crevice').fadeOut(250).hide(1);
  $('#crevice')[0].pause();
  $('#crevice')[0].loop = false;

  randoColor(1);
}

function sludge() {
  $('#line13').delay(2000).hide(1);
  $('#line14').delay(2000).show(1);
  $("#sludge").show(1).delay(2000).fadeOut(500).hide(1);

  randoColor(2000);
}
