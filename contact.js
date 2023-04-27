
//Javascript
// Event listener 
formElements.forEach((element) => {
   element.addEventListener('change', handleChange)
 })
 
 // Submit listener 
 form.addEventListener('submit', (e) => handleSubmit(e))