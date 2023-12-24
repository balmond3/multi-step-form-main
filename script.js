let currentStep = 1;

document.getElementById('nextBtn1').addEventListener('click', () => nextStep());
document.getElementById('prevBtn2').addEventListener('click', () => previousStep(1));
document.getElementById('nextBtn2').addEventListener('click', () => nextStep());
document.getElementById('prevBtn3').addEventListener('click', () => previousStep(2));
document.getElementById('nextBtn3').addEventListener('click', () => nextStep());
document.getElementById('prevBtn4').addEventListener('click', () => previousStep(3));
// document.getElementById('submitBtn').addEventListener('click', () => submitForm());



function nextStep() {
  document.getElementById('step' + currentStep).style.display = 'none';
  document.getElementById('circle' + currentStep).style.backgroundColor = 'transparent';
  document.getElementById('circle' + currentStep).style.color = '#FFF';
  currentStep++;
  document.getElementById('step' + currentStep).style.display = 'block';
  document.getElementById('circle' + currentStep).style.backgroundColor = 'hsl(228, 100%, 84%)';
  document.getElementById('circle' + currentStep).style.color = 'hsl(213, 96%, 18%)';
  


}

function previousStep(targetStep) {
  document.getElementById('step' + currentStep).style.display = 'none';
  document.getElementById('circle' + currentStep).style.backgroundColor = 'transparent';
  document.getElementById('circle' + currentStep).style.color = '#fff';
  currentStep = targetStep;
  document.getElementById('step' + currentStep).style.display = 'block';
  document.getElementById('circle' + currentStep).style.backgroundColor = 'hsl(228, 100%, 84%)';
  document.getElementById('circle' + currentStep).style.color = 'hsl(213, 96%, 18%)';
}

function toggleDate(){
  document.getElementsByClassName('monthly-toggle')
}

