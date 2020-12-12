var elForm = document.querySelector('.js-form');

if(elForm) {
  var elInput = elForm.querySelector('.js-input');
  var elOutput = elForm.querySelector('.js-output');
}

  elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    var elUserNumber = Number(elInput.value);

    // Formula: (M°C × 9/5) + 32 = N°F
    var result = (elUserNumber * 9 / 5) + 32 ;
    elOutput.classList.add('text-danger', 'font-weight-bold', 'h5');

    elOutput.textContent = result;
  });



                      /* ===============
                             Y O' L
                      =================*/


  var piyoda = 3.6;
  var velosiped = 20.1;
  var mashina = 70;
  var samalyot = 800;

  var elRoadForm = document.querySelector('.js-road-form');

  if(elRoadForm) {
    var elRoadInput = elRoadForm.querySelector('.js-road-input');

    var piyodaOutput = elRoadForm.querySelector('.js-piyoda');
    var velosipedOutput = elRoadForm.querySelector('.js-velosiped');
    var mashinaOutput = elRoadForm.querySelector('.js-mashina');
    var samalyotOutput = elRoadForm.querySelector('.js-samalyot');
  }

  elRoadForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    var userInputRoadNumber = Number(elRoadInput.value);

    if(userInputRoadNumber > 0) {
      var piyodaResult = userInputRoadNumber / piyoda;
      var velosipedResult = userInputRoadNumber / velosiped;
      var mashinaResult = userInputRoadNumber / mashina;
      var samalyotResult = userInputRoadNumber / samalyot;

      piyodaOutput.textContent = piyodaResult.toFixed(1) + ' soat';
      velosipedOutput.textContent = velosipedResult.toFixed(1) + ' soat';
      mashinaOutput.textContent = mashinaResult.toFixed(1) + ' soat';
      samalyotOutput.textContent = samalyotResult.toFixed(1) + ' soat';

    }
  });


                  /* =================
                        XA / YO'Q
                  ==================*/

  var elYesyoqForm = document.querySelector('.js-xayoq-form');
  var elYesyoqInput = elYesyoqForm.querySelector('.js-xayoq-input');
  var elYes = elYesyoqForm.querySelector('.js-xa');
  var elNo = elYesyoqForm.querySelector('.js-yoq');
  var elRainCheckbox = elYesyoqForm.querySelector('.js-rain-checkbox');
  var elZalCheckbox = elYesyoqForm.querySelector('.js-zal-checkbox');


  elYesyoqForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

  });

  elYesyoqInput.addEventListener('keyup', function() {

    var elYesyoqInputNumber =Number(elYesyoqInput.value);

    if(elYesyoqInputNumber >= 5  && elYesyoqInputNumber <= 30) {
      elYes.classList.add('text-success');
      elNo.classList.remove('text-danger');
    } else {
      elNo.classList.add('text-danger');
      elYes.classList.remove('text-success');
    }
    return
  });

  elRainCheckbox.addEventListener('change', function() {
    if(true) {
      elNo.classList.add('text-danger');
      elYes.classList.remove('text-success');
    }else{
      elNo.classList.remove('text-danger');
    }
  });

  elZalCheckbox.addEventListener('change', function() {
    if(true) {
      elYes.classList.add('text-success');
      elNo.classList.remove('text-danger');
    }else {
      elNo.classList.add('text-danger');
    }
  });