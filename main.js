
// Keyboard Event
//use boolean for init
//this code works by listening to the html name form
//if theres a keystroke on the from it will display the keystroke result to the list
const name = document.querySelector('#name');
name.addEventListener('input', e => {
  document.querySelector('.container').append(name.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
//assigning the class and id to javascript variables
//# means that it was an HTML id
//. means that it was an html class 
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for submit button
myForm.addEventListener('submit', onSubmit);

//function for verifying if the user has enter their username and password before pressing the submit btn
function onSubmit(e) {
  e.preventDefault();
  
  //if user hasn't enter name/email in the form it will showing error message
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    //classlist add is an function to add a string/vars to a list in the html class
    msg.classList.add('error');
    //showing the error message in HTML 
    msg.innerHTML = 'Please enter all fields';

    //reinitializing the data so the form table will be empty everytime use press submit 
    nameInput.value = '';
    emailInput.value = '';
    // Remove error after 4,5 seconds
    setTimeout(() => msg.remove(),4500);
  } else {
    // Create new list item with username and email
    
    const li = document.createElement('li');

    // Add text node with input values to the li list
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add the output to the HTML
    li.innerHTML = `<strong>${nameInput.value}</strong>: ${  emailInput.value}`;

    // Append to the #users/ id users ul element in HTML
    userList.appendChild(li);

   
    // Clear fields
    //reinitializing the data so the form table will be empty everytime use press submit 
    nameInput.value = '';
    emailInput.value = '';
  }
}