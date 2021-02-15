var app = angular.module("myApp", []);
app.filter('to_trusted', ['$sce', function ($sce) {
  return function (text) {
    return $sce.trustAsHtml(text);
  };
}])

app.controller("myCtrl", function ($scope) {
  var thisRef = $scope;
  thisRef.problem = {
    b4: {

      show: true,
      dropStart_y: 4,
      dropEnd_y: 14,
      dragStart_x: 1,
      dragEnd_x: 20
    },
    b5: {

      show: false,
      dropStart_y: 4,
      dropEnd_y: 16,
      dragStart_x: 1,
      dragEnd_x: 20
    }
  };
  thisRef.currentProblem = 'b4';
  thisRef.displaySolution = false;
  thisRef.startingIndex = 67;
  thisRef.lastLongLeft = false;
  thisRef.hiddenLongID = '';
  thisRef.totalLongs = 8;
  thisRef.hasClickListner = {};
  thisRef.focusElement = {};
  thisRef.inroPage = true;
  thisRef.mouseFlag = false;
  thisRef.showPreviousButton = false
  thisRef.initialScreen = true;
  thisRef.position = 1;
  thisRef.helperText = `Position ${thisRef.position}`;
  thisRef.showHelperText = false;
  thisRef.buttonsDisabled = false;
  thisRef.insContent = [
    ' Use the function machine to guess the mystery algorithm by testing your inputs and outputs against the input and output of the mystery algorithm.',
    ' Obtain additional input-output pairs from the mystery algorithm by selecting numbers in the "Test Input" box and clicking "Output."',
    ' Click "Reveal Algorithm" when you think your algorithm matches the mystery algorithm. Try to guess using as few input-output pairs as possible.'
  ];

  // Toggle Screens
  thisRef.toggleView = function () {
    thisRef.position = 1;
    thisRef.helperText = `Position ${thisRef.position}`;
    thisRef.inroPage = !thisRef.inroPage;

    if (thisRef.currentProblem == 'b5') {
      thisRef.toggleProblem('b4');
    }
    thisRef.displaySolution = false;
    // thisRef.resetProblem();
    // thisRef.addAccessibility();
  };



  // Toggle Instructions
  thisRef.toggleIns = function (key) {
    var target = $("#instruction");

    switch (key) {
      case 1:
        target.animate({ top: "987px" }, 500, function () {
          $("#instruction .bottomBtn").attr('tabindex', '-1');
          $("#instruction .topBtn").attr('tabindex', '0');
        });
        break;
      case 2:
        target.animate({ top: "-94px" }, 500, function () {
          $("#instruction .bottomBtn").attr('tabindex', '0');
          $("#instruction .topBtn").attr('tabindex', '-1');
        });
        break;
      default:
        break;
    }
  };


});


