var random = [];
var litID = [];
var lit;
var clicked = [];
var i;
var j=0;
var count = 1;
var on;
var off;
var x;


/// Interval length ///
function change1() {
  if (count <= 10) {
    off = 300;
    on = 600;
  }
  else if (count <= 20){
    off = 250;
    on = 500;
  }

/// Lights squares ///
x = setInterval(function () {
  if (random[j] == 1) {
    lit = 'light1';
    $('#one').addClass(lit);
    litID.push(1);
    setTimeout(function () {
      $('#one').removeClass(lit);
    }, off);
  }
  else if (random[j] == 2) {
    lit = 'light2';
    $('#two').addClass(lit);
    litID.push(2);
    setTimeout(function () {
      $('#two').removeClass(lit);
    }, off);
  }
  else if (random[j] == 3) {
    lit = 'light3';
    $('#three').addClass(lit);
    litID.push(3);
    setTimeout(function () {
      $('#three').removeClass(lit);
    }, off);
  }
  else {
    lit = 'light4';
    $('#four').addClass(lit);
    litID.push(4);
    setTimeout(function () {
      $('#four').removeClass(lit);
    }, off);
  }

j++;
if (j>=count) {
  clearInterval(x);
}
}, on);

}


/// Checks for accurate clicks, Win condition ///
function checking() {
  if (litID.length == clicked.length) {
    if (litID.join() == clicked.join()) {
      if (count == 6) {
        setTimeout(function () {
          alert("You win!");
          location.reload();
        }, 1000);
      }
      else {
        setTimeout(function () {
          $('#count').text(count + 1);
          count++;
          litID = [];
          clicked = [];
          j = 0;
          change1();
        }, 1000);
      }
    }
    else {
      if (strict == 1) {
        location.reload();
      }
      else {
        setTimeout(function () {
          $('#count').text('!!');
          litID = [];
          clicked = [];
          j = 0;
          change1();
        }, 1000);
      }
    }
  }
}

/// Turn game on ///
$('#on').on('click', function () {
  $('#count').text('--');
  for (i=0; i<20; i++) {
    random[i] = Math.ceil((Math.random() * 4));
  }

/// Start game ///
$('#start').on('click', function () {
  $('#count').text(count);
  change1();
});

/// User plays ///
$('#one').on('mousedown', function () {
  $('#one').addClass('light1');
  clicked.push(1);
setTimeout(function () {
  $('#one').removeClass('light1');
}, 250);
checking();
});

$('#two').on('mousedown', function () {
  $('#two').addClass('light2');
  clicked.push(2);
  setTimeout(function () {
    $('#two').removeClass('light2');
  }, 250);
  checking();
});

$('#three').on('mousedown', function () {
  $('#three').addClass('light3');
  clicked.push(3);
  setTimeout(function () {
    $('#three').removeClass('light3');
  }, 250);
  checking();
});

$('#four').on('mousedown', function () {
  $('#four').addClass('light4');
  clicked.push(4);
  setTimeout(function () {
    $('#four').removeClass('light4');
  }, 250);
  checking();
});
});
