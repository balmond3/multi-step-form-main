let currentStep = 1;

document.getElementById('nextBtn1').addEventListener('click', () => nextStep());
document.getElementById('prevBtn2').addEventListener('click', () => previousStep(1));
document.getElementById('nextBtn2').addEventListener('click', () => nextStep());
document.getElementById('prevBtn3').addEventListener('click', () => previousStep(2));
document.getElementById('nextBtn3').addEventListener('click', () => nextStep());
document.getElementById('prevBtn4').addEventListener('click', () => previousStep(3));
document.getElementById('submitBtn').addEventListener('click', () => submitForm());

function nextStep() {
  document.getElementById('step' + currentStep).style.display = 'none';
  currentStep++;
  document.getElementById('step' + currentStep).style.display = 'block';
}

function previousStep(targetStep) {
  document.getElementById('step' + currentStep).style.display = 'none';
  currentStep = targetStep;
  document.getElementById('step' + currentStep).style.display = 'block';
}