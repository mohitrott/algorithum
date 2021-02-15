var currentValue = 0;
var is_machine_3_hidden = true;
var tableValue = 2;
var b = 0;
var incDecCheck = false;
var problemValue = 'problemA';
var counts = [0, 0, 0, 0, 0];
var currentValue = 0;
var currentProblem = 'a';
var machines = [
  {
    output: '',
    input_1: '',
    input_2: '',
    operator_symbol: '',
    animationOccured: false
  },
  {
    output: '',
    input_1: '',
    input_2: '',
    operator_symbol: '',
    animationOccured: false
  },
  {
    output: '',
    input_1: '',
    input_2: '',
    operator_symbol: ''
  }
];
var thisRef = {
  mouseFlag: false,
  focusElement: {}
}

// pinch-to-zoom + double tap
var doubleTouchStartTimestamp = 0;

document.addEventListener("touchstart", touchHandler, {passive: false});

function touchHandler(evt)
{
  var event = evt.originalEvent || evt;
  var now = +(new Date());

  if (doubleTouchStartTimestamp + 500 > now)
  {
      //the event is double-tap
      //you can then prevent the behavior
      event.preventDefault();
  };
  doubleTouchStartTimestamp = now;
  
  if(event.touches.length > 1)
  {
      //the event is multi-touch
      //you can then prevent the behavior
      event.preventDefault()
  }
};

function mouseOverImageDec() {
  document.getElementById("blank-input-dec").src = "./image/Btn_H.png";
}

function mouseOutImageDec() {
  document.getElementById("blank-input-dec").src = "./image/Btn.png";
}
function mouseOverImageInc() {
  document.getElementById("blank-input-inc").src = "./image/Btn_H.png";
}

function mouseOutImageInc() {
  document.getElementById("blank-input-inc").src = "./image/Btn.png";
}



function showFormula() {
  var x = document.getElementById("algoResult");
  if (x.style.display === "block") {
    document.getElementById('toggelAlgo').innerHTML = 'Reveal Algorithm'
    x.style.display = "none";
  } else {
    document.getElementById('toggelAlgo').innerHTML = 'Hide Algorithm'
    x.style.display = "block";
  }
}


function numberOutput() {
  if (incDecCheck) {
    tableValue++;
    switch (problemValue) {
      case 'problemA':
        var output = (counts[0] + 5) * 2;
        break;
      case 'problemB':
        var output = ((counts[0] * 4) - 10) * 2;
        break;
      case 'problemC':
        var output = ((counts[0] * 6) - 3) / 3;
        break;

      default:
        break;
    }
    document.getElementById('right-input').value = output;
    document.querySelector("table tr:nth-child(" + tableValue + ") td").innerHTML = counts[0];
    document.querySelector("table tr:nth-child(" + tableValue + ") td:nth-child(2)").innerHTML = output;
    b++;
  }

  setTimeout(() => {
    if (b == 3) {
      document.querySelector('.test-input').classList.add('dull');
      document.getElementById("blank-input-dec").src = "./image/Btn_N.png";
      document.getElementById("blank-input-inc").src = "./image/Btn_N.png";
      document.getElementById('blank-input-dec').classList.add('dull');
      document.getElementById('blank-input-inc').classList.add('dull');
      document.getElementById('right-input').value = ''
      document.getElementById('left-input').value = ''
    }
  })
}


function problemA() {
  $('#machine-2-output').hide();
  document.querySelector('.machine').style.backgroundImage = "url('./image/M_fade.png')";
  $('.left-part').find('h1').html('Mystery Algorithm A');
  $('#algoResult').find('p').html('(Input + 5) x 2 = Output');
  document.getElementById("algoResult").style.display = 'none';
  document.getElementById('toggelAlgo').innerHTML = 'Reveal Algorithm';
  $('#algoResult').css('left', '30px');
  document.querySelector("table tr:nth-child(2) td").innerHTML = '2';
  document.querySelector("table tr:nth-child(2) td:nth-child(2)").innerHTML = '14';
  for (var i = 3; i < 6; i++) {
    document.querySelector("table tr:nth-child(" + i + ") td").innerHTML = '';
    document.querySelector("table tr:nth-child(" + i + ") td:nth-child(2)").innerHTML = '';
  }
  document.querySelector('.test-input').classList.remove('dull');
  document.getElementById('blank-input-dec').classList.remove('dull');
  document.getElementById('blank-input-inc').classList.remove('dull');
  document.getElementById("blank-input-dec").src = "./image/Btn.png";
  document.getElementById("blank-input-inc").src = "./image/Btn.png";
  problemValue = 'problemA';

}

function problemB() {
  $('#machine-2-output').show();
  document.querySelector('.machine').style.backgroundImage = "url('./image/M1.png')";
  $('.left-part').find('h1').html('Mystery Algorithm B');
  $('#algoResult').find('p').html('((Input x 4) - 10) x 2 = Output');
  document.getElementById("algoResult").style.display = 'none';
  document.getElementById('toggelAlgo').innerHTML = 'Reveal Algorithm';
  $('#algoResult').css('left', '-29px');
  tableValue = 2;
  b = 0;
  incDecCheck = false
  document.querySelector("table tr:nth-child(2) td").innerHTML = '2';
  document.querySelector("table tr:nth-child(2) td:nth-child(2)").innerHTML = '-4';
  for (var i = 3; i < 6; i++) {
    document.querySelector("table tr:nth-child(" + i + ") td").innerHTML = '';
    document.querySelector("table tr:nth-child(" + i + ") td:nth-child(2)").innerHTML = '';
  }
  document.querySelector('.test-input').classList.remove('dull');
  document.getElementById('blank-input-dec').classList.remove('dull');
  document.getElementById('blank-input-inc').classList.remove('dull');
  document.getElementById("blank-input-dec").src = "./image/Btn.png";
  document.getElementById("blank-input-inc").src = "./image/Btn.png";
  problemValue = 'problemB';
}

function problemC() {
  $('#machine-2-output').show();
  document.querySelector('.machine').style.backgroundImage = "url('./image/M1.png')";
  $('.left-part').find('h1').html('Mystery Algorithm C');
  $('#algoResult').find('p').html('((Input x 6) -3) / 3 = Output');
  document.getElementById("algoResult").style.display = 'none';
  document.getElementById('toggelAlgo').innerHTML = 'Reveal Algorithm';
  $('#algoResult').css('left', '-24px');
  document.querySelector("table tr:nth-child(2) td").innerHTML = '2';
  document.querySelector("table tr:nth-child(2) td:nth-child(2)").innerHTML = '3';
  tableValue = 2;
  b = 0;
  incDecCheck = false
  for (var i = 3; i < 6; i++) {
    document.querySelector("table tr:nth-child(" + i + ") td").innerHTML = '';
    document.querySelector("table tr:nth-child(" + i + ") td:nth-child(2)").innerHTML = '';
  }
  document.querySelector('.test-input').classList.remove('dull');
  document.getElementById('blank-input-dec').classList.remove('dull');
  document.getElementById('blank-input-inc').classList.remove('dull');
  document.getElementById("blank-input-dec").src = "./image/Btn.png";
  document.getElementById("blank-input-inc").src = "./image/Btn.png";
  problemValue = 'problemC';
}


function SelectProblem(problemId) {
  machines[0].input_1 = undefined;
  machines[0].input_2 = undefined;
  machines[1].input_2 = undefined;
  machines[2].input_2 = undefined;
  machines[0].operator_symbol = undefined;
  currentProblem = problemId;
  switch (problemId) {
    case 'a':
      is_machine_3_hidden = true;
      document.getElementById("left-input").value = '';
      document.getElementById("right-input").value = '';
      $('.machine3').hide();
      $('#hideImage').show();
      reset();
      problemA();
      break;

    case 'b':
      is_machine_3_hidden = false;
      document.getElementById("left-input").value = '';
      document.getElementById("right-input").value = '';
      $('.machine3').show();
      $('#hideImage').hide();
      // $('#machine-2-output').show();
      reset();
      problemB();
      break;

    case 'c':
      is_machine_3_hidden = false;
      document.getElementById("left-input").value = '';
      document.getElementById("right-input").value = '';
      $('.machine3').show();
      $('#hideImage').hide();
      document.getElementById("machine-0-input-1").value = '';
      // $('#machine-2-output').show();
      reset();
      problemC();
      break;

    default:
      break;
  }

}


//all increment and decrement operations
function testIncrement() {
  if (counts[0] < 10) {
    counts[0]++;
    incDecCheck = true;
    document.getElementById('right-input').value = ''
    document.getElementById('left-input').value = counts[0]
  }
}

function testDecrement() {
  if (counts[0] > -10) {
    counts[0]--;
    incDecCheck = true;
    document.getElementById('right-input').value = ''
    document.getElementById('left-input').value = counts[0]

  }
}

function machineIncrement(mac_id, button_id, input_id) {
  if (counts[button_id] < 10) {
    counts[button_id]++;
    incDecCheck = true;
    machines[mac_id]['input_' + input_id] = counts[button_id];
    console.log('machines', machines);
    document.getElementById('machine-' + mac_id + '-input-' + input_id).value = counts[button_id];
    $('input[name="value1"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
    $('input[name="value2"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
    $('input[name="value3"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
    $('input[name="value' + (mac_id + 1) + '"]').css({'background-color': 'white','-webkit-background-color': '#fff'});
  }
  evaluateMachineExpression(mac_id);
}

function machineDecrement(mac_id, button_id, input_id) {
  if (counts[button_id] > -10) {
    counts[button_id]--;
    incDecCheck = true;
    machines[mac_id]['input_' + input_id] = counts[button_id];
    document.getElementById('machine-' + mac_id + '-input-' + input_id).value = counts[button_id];
    $('input[name="value1"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
    $('input[name="value2"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
    $('input[name="value3"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
    $('input[name="value' + (mac_id + 1) + '"]').css({'background-color': 'white','-webkit-background-color': '#fff'});
  }
  evaluateMachineExpression(mac_id);
}



// inc and dec hover and hover out
function mouseOverDec(ev) {
  document.getElementById(ev.target.id).src = "./image/Btn_H.png";
}

function mouseOutDec(ev) {
  document.getElementById(ev.target.id).src = "./image/Btn.png";
}

function mouseOverInc(ev) {
  document.getElementById(ev.target.id).src = "./image/Btn_H.png";
}

function mouseOutInc(ev) {
  document.getElementById(ev.target.id).src = "./image/Btn.png";
}

function mouseOverReset() {
  document.getElementById("reset").src = "./image/Reset_H.png";
}

function mouseOutReset() {
  document.getElementById("reset").src = "./image/Reset.png";
}


function performMachineOperation(id, e) {
  $('#aritmaticbtn'+[id+1]).find('input[type=radio] + label').css({'background-image': 'url(./image/airt.png)'})
  $('#aritmaticbtn'+[id+1]).find('input[type=radio]:checked + label').css({'background-image': 'url(./image/airthH.png)'})
  machines[id].operator_symbol = e.target.value;
  if (machines[id].operator_symbol == 'x') {
    machines[id].operator_symbol = "*"
  }
  $('input[name="value1"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
  $('input[name="value2"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
  $('input[name="value3"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'});
  $('input[name="value' + (id + 1) + '"]').css({'background-color': 'white','-webkit-background-color': '#fff'});

  machines[id].input_1 = document.getElementById("machine-" + id + "-input-1").value;
  machines[id].input_2 = document.getElementById("machine-" + id + "-input-2").value;

  evaluateMachineExpression(id);
}


// reset
function reset() {
  document.getElementById("machine-0-input-1").value = '';
  document.getElementById("machine-0-input-2").value = '';
  document.getElementById("machine-1-input-1").value = '';
  document.getElementById("machine-1-input-2").value = '';
  document.getElementById("machine-2-input-1").value = '';
  document.getElementById("machine-2-input-2").value = '';
  document.getElementById("machine-0-output").value = '';
  document.getElementById("machine-1-output").value = '';
  document.getElementById("machine-2-output").value = '';

  var animated_span_0 = document.getElementById("animate-output-0")
  animated_span_0.innerHTML = '';

  var animated_span_1 = document.getElementById("animate-output-1")
  animated_span_1.innerHTML = '';

  $('input[name="value1"]').css({'background-color': 'white','-webkit-background-color': '#fff '})
  $('input[name="value2"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'})
  $('input[name="value3"]').css({'background-color': '#bbc8ed','-webkit-background-color': '#bbc8ed'})



  counts = [0, 0, 0, 0, 0];

  machines = [
    {
      output: '',
      input_1: '',
      input_2: '',
      operator_symbol: '',
      animationOccured: false
    },
    {
      output: '',
      input_1: '',
      input_2: '',
      operator_symbol: '',
      animationOccured: false
    },
    {
      output: '',
      input_1: '',
      input_2: '',
      operator_symbol: ''
    }
  ];

  $('#aritmaticbtn1').find('label').css({'background-image': 'url(./image/airt.png)'})
  $('#aritmaticbtn2').find('label').css({'background-image': 'url(./image/airt.png)'})
  $('#aritmaticbtn3').find('label').css({'background-image': 'url(./image/airt.png)'})
  // $('input[type=radio]').each(function () {
  //   this.checked = false;
  // });
  // $('#a').each(function () {
  //   this.checked = true;
  // });
  // $('.radiobtn#a').checked=true;
  // document.getElementById("a").setAttribute('checked','true')
  // document.getElementById("m1-output").style.animation = 'example 3s 1'; 
}


function start() {
  $('.machine3').hide();
  $('#hideImage').show();
  reset();
  problemA();
  document.getElementById("left-input").value = '';
  document.getElementById("right-input").value = '';
  $('#a').each(function () {
    this.checked = true;
  });
}


function evaluateMachineExpression(id) {
  if (machines[id].input_1 !== '' && machines[id].operator_symbol !== '' && machines[id].input_2 !== '') {
    console.log('machines array', 'machine-' + (id + 1) + 'input-1');

    if (machines[id].input_1 == "Error") {
      machines[id].input_1 = 0;
    }

    if (machines[id].input_2 == 0 && machines[id].operator_symbol == '/') {
      $('.error' + (id + 1)).show();
      $(".error" + (id + 1)).delay(2000).hide(2);
      machines[id].output = 'ERROR';
    }
    else {
      machines[id].output = eval("(" + machines[id].input_1 + ")" + machines[id].operator_symbol + "(" + machines[id].input_2 + ")");
      var remainder = machines[id].output % 1;
      if (remainder != 0) {
        machines[id].output= Math.round((machines[id].output + Number.EPSILON) * 100000) / 100000
      }
    }

    //no animation output for 3rd machine
    if (id != 2) {
      document.getElementById("animate-output-" + id).innerHTML = machines[id].output;
    }
    document.getElementById("machine-" + id + "-output").value = machines[id].output;

    if (!machines[id].animationOccured) {
      if (id == 0) {
        var el = document.getElementById("animate-output-0");
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = 'example 2s 1';
      }
      else if (id == 1 && !is_machine_3_hidden) {
        var el = document.getElementById("animate-output-1");
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = 'example1 2s 1';
      }
      setTimeout(() => {
        //Animation has occured
        machines[id].animationOccured = true;
        if (id != 2) {
          document.getElementById("machine-" + (id + 1) + "-input-1").value = machines[id].output;
          machines[id + 1].input_1 = machines[id].output;
          updateOtherMachines(id);
        }
      }, 2000)
    }

    if (machines[id].animationOccured && id != 2) {
      document.getElementById("machine-" + (id + 1) + "-input-1").value = machines[id].output;
      machines[id + 1].input_1 = machines[id].output;
      updateOtherMachines(id);
    }
  }
}

function updateOtherMachines(id) {
  if (currentProblem == 'a') {
    evaluateMachineExpression(id + 1);
  }
  else if (currentProblem == 'c' || currentProblem == 'b') {
    evaluateMachineExpression(id + 1);
  }
}

$(".plus").click(function () {
  clicked = true;
  if (clicked) {
    $(plus).toggleClass('active');
    clicked = true;
  } else {
    $(plus3).removeClass('active');
    clicked = false;
  }
});


function addAccessibility() {
  $(document).on('mousedown', () => {
    thisRef.mouseFlag = true;
  });

  $(document).on('mouseup', () => {
    thisRef.mouseFlag = false;
  });

  $('[tabindex]').focus((e) => {
    thisRef.focusElement = e.target;
    if (thisRef.mouseFlag == true) {
      $(thisRef.focusElement).css({
        'outline': 'none'
      });
      return;
    }
    $(thisRef.focusElement).css({
      'outline-color': 'yellow',
      'outline-style': 'solid',
      'outline-width': '4px'
    });
    $(thisRef.focusElement).keypress(function (event) {
      if (event.key === 'Enter' || event.keyCode === 13) {
        $(thisRef.focusElement).trigger("click");
        handleSpecialCases(event);
      }
    });
  });
  $('[tabindex]').focusout((e) => {
    $(e.target).off('keypress');
    $(thisRef.focusElement).css({
      'outline': 'none'
    });
  });
};

function handleSpecialCases(event) {
  if (event.target.innerText === 'Open Instructions') {
    onSpecialCase(event.target, event.target.nextElementSibling);
  } else if (event.target.innerText === 'Close Instructions') {
    onSpecialCase(event.target, event.target.previousElementSibling);
  }
}

//handling special cases of accessibility
function onSpecialCase(target, sibling) {
  setTimeout(() => {
    $(sibling).trigger('focus');
  }, 500);
  if (target == null) return;
  $(target).attr('tabindex', '-1');
  $(target).css({
    'outline': 'none'
  });
  $(sibling).attr('tabindex', '0');
  if (!thisRef.mouseFlag) $(sibling).css({
    'outline-color': 'yellow',
    'outline-style': 'solid',
    'outline-width': '4px'
  });
}

$(document).ready(function () {
  addAccessibility();
});
