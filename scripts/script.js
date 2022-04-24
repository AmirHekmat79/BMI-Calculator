let $ = document;
let TotalContainerElem = $.querySelector('#TotalContainer');
let cardElem = $.querySelector('.card');
let weightInput = $.querySelector('#weightInput');
let heightInput = $.querySelector('#heightInput');
let spanElem1 = $.querySelector('.sp1');
let spanElem2 = $.querySelector('.sp2');
let bmiMountElem = $.querySelector('.bmiMount');
let bmiTypeElem = $.querySelector('.bmiType');
let weightInputValue;
let heightInputValue; 
let finalHeight;
let BMIValue;
cardElem.style.background = 'linear-gradient(#f8f9fa,#bdc3c7)';
$.body.style.background ='linear-gradient( 135deg, #61d954, #2ebf75 )';

weightInput.addEventListener('input' ,BmiCalculator);

heightInput.addEventListener('input' ,BmiCalculator);

function BmiCalculator(){
      weightInput.blur();
      heightInput.blur();
      weightInputValue = weightInput.value;
      heightInputValue = heightInput.value;
      spanElem1.innerHTML = weightInputValue + 'kg';
      spanElem2.innerHTML = heightInputValue + 'cm' ;
      finalHeight = heightInputValue /100;
      BMIValue = weightInputValue / (finalHeight**2);
      bmiMountElem.innerHTML = BMIValue.toFixed(1);
      if(bmiMountElem.innerHTML < 18.5){
        bmiMountElem.style.color = ' rgb(243, 119, 77)';
        bmiTypeElem.innerHTML = 'Under Weight' ;
      }else if(bmiMountElem.innerHTML >= 18.5 && bmiMountElem.innerHTML <= 24.9 ){
        bmiMountElem.style.color = '#27ae60'; 
        bmiTypeElem.innerHTML = 'Normal Weight'; 
      }else if(bmiMountElem.innerHTML >= 25 && bmiMountElem.innerHTML < 29.9){
        bmiMountElem.style.color = '#e74c3c'; 
        bmiTypeElem.innerHTML = 'Over Weight';   
      }else{
        bmiMountElem.style.color = '#c0392b'; 
        bmiTypeElem.innerHTML = 'Obese'; 
      }
}