function extractFormValues () {
    const form = document.querySelector('.myForm');

    const formData = {};

    Array.from(form.elements).forEach(element => {
        if (element.name) {
          if (element.type === 'checkbox') {
            formData[element.name] = element.checked;
          } else {
            formData[element.name] = element.value;
          }
        }
      })

    console.log('Form Data', formData)


    
}

 