const productsControl = new ProductsController();


//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newTitleInput = document.querySelector('#newTitleInput');
    const newDescription = document.querySelector('#newDescription');
    const newDateInput = document.querySelector('#newDateInput');


    // Get the values of the inputs - variable names to be same as MySQL columns
    const title = newTitleInput.value;
    const description = newDescription.value;
    const date = newDateInput.value;
   

   // Clear the form
    newTitleInput.value = '';
    newDescription.value = '';
    newDateInput.value = '';
    

    // Add the task to the task manager
    productsControl.addItem(title, description, date);

});




