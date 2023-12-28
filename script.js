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
  var a = document.getElementById('circle' + currentStep);

  document.getElementById('step' + currentStep).style.display = 'none';
  a.style.backgroundColor = 'transparent';
  a.style.color = '#fff';
  currentStep = targetStep;

  b = document.getElementById('circle' + currentStep);
  document.getElementById('step' + currentStep).style.display = 'block';
  b.style.backgroundColor = 'hsl(228, 100%, 84%)';
  b.style.color = 'hsl(213, 96%, 18%)';
}



// toggle the plan when the toggler is clicked
let click = 1;

let toggle = document.getElementById('toggler');
toggle.addEventListener('change', () => toggleDate());

function toggleDate() {
  var a = document.getElementsByClassName('monthly-toggle')[0];
  var b = document.getElementsByClassName('yearly-toggle')[0];

isMonthly=!isMonthly;
  updatePlans();

  if (click % 2 === 0) {
    a.style.color = "hsl(213, 96%, 18%)";
    b.style.color = "hsl(231, 11%, 63%)";

 
  } else {
    a.style.color = "hsl(231, 11%, 63%)";
    b.style.color = "hsl(213, 96%, 18%)";
    
    
  }
  click++;

}


//create yearly and monthly elements relevant to the toggler

var yearlyPlan = document.querySelectorAll('.plan-type');

var isMonthly = true;


function updatePlans() {
  yearlyPlan.forEach(function (parent) {
    var child1 = parent.querySelector(".arcade-monthly");
    var child2 = parent.querySelector(".advanced-monthly");
    var child3 = parent.querySelector(".pro-monthly");

    var arcadeMonthly = 9;
    var arcadeYearly = 90;
    var advancedMonthly = 12;
    var advancedYearly = 120;
    var proMonthly = 15;
    var proYearly = 150;
   

    switch (true) {
      case !!child1:
        child1.textContent = isMonthly ? `$${arcadeMonthly}/mo` : `$${arcadeYearly}/yr`;
        handleToggleSpan(child1, isMonthly);
        break;
    
      case !!child2:
        child2.textContent = isMonthly ? `$${advancedMonthly}/mo` : `$${advancedYearly}/yr`;
        handleToggleSpan(child2, isMonthly);
        break;
    
      case !!child3:
        child3.textContent = isMonthly ? `$${proMonthly}/mo` : `$${proYearly}/yr`;
        handleToggleSpan(child3, isMonthly);
        break;
    }
  });
}
function handleToggleSpan(child, isMonthly) {
  // Check if a span was previously added and remove it
  var existingSpan = child.parentNode.querySelector('.demo-span');
  if (existingSpan) {
    existingSpan.parentNode.removeChild(existingSpan);
  }

  // Add a new span if in yearly mode
  if (!isMonthly) {
    var newSpan = document.createElement('span');
    newSpan.textContent = ' 2 months free ';
newSpan.style.fontWeight = '400';
    newSpan.classList.add('demo-span'); // Add a class to identify the span
    child.insertAdjacentElement('afterend', newSpan);
  }
}



// Initial update to set the plans based on the default state
updatePlans();