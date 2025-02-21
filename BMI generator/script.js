const form = document.querySelector('form');

form.addEventListener('submit', function(event){
   event.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const result = document.querySelector('#result');

   if (height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `enter valid number ${height}`;
   } else if (weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `enter valid number ${weight}`;
   } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //result display
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
        result.innerHTML = `${bmi} Under Weight`;
    } else if ( bmi > 18.6 && bmi < 24.9){
        result.innerHTML = `${bmi} Normal Weight`;
    }else {
        result.innerHTML = `${bmi} Over Weight`;
    }
   }
});