// Espera a que el DOM esté completamente cargado
/*document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón
    const scrollButton = document.getElementById('btn-primary');

    // Añade un evento de clic al botón
    scrollButton.addEventListener('click', () => {
        // Obtén todos los selectores
        const selectors = document.querySelectorAll('select');
        
        // Variable para controlar si se ha encontrado un elemento válido
        let found = false;

        // Recorre todos los selectores
        selectors.forEach((selector) => {
            if (!found) {
                // Obtén el texto seleccionado
                const selectedText = selector.value;
                console.log(selectedText)
                // Si hay un texto seleccionado
                if (selectedText) {
                    // Selecciona todos los elementos que podrían contener el texto
                    const elements = document.querySelectorAll('.element');
                    
                    elements.forEach((element) => {
                        if (!found && element.textContent.trim() === selectedText) {
                            // Desplázate al elemento encontrado
                            element.scrollIntoView({ behavior: 'smooth' });
                            found = true;
                        }
                    });

                    if (!found) {
                        alert('El elemento con el texto seleccionado no existe.');
                    }
                }
            }
        });

        // Si no se encontró ningún elemento válido
        if (!found) {
            alert('Por favor, selecciona un texto.');
        }
    });
});*/







// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón
    const scrollButton = document.getElementById('btn-primary');

    // Añade un evento de clic al botón
    scrollButton.addEventListener('click', () => {
        // Obtén todos los selectores
        const selectors = document.querySelectorAll('select');
        
        // Variable para controlar si se ha encontrado un elemento válido
        let found = false;

        // Recorre todos los selectores
        selectors.forEach((selector) => {
            if (!found) {
                // Obtén el valor seleccionado
                const selectedValue = selector.value;
  

                // Si hay un valor seleccionado
                if (selectedValue) {
                    // Selecciona el elemento correspondiente
                    const targetElement = document.getElementById(selectedValue);
                    if (targetElement) {


                        // Desplázate al elemento seleccionado
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                        // Resalta el elemento
                        targetElement.classList.add('highlight');

                        // Remueve el resaltado después de un tiempo
                        setTimeout(() => {
                            targetElement.classList.remove('highlight');
                        }, 3000); // 3 segundos de resaltado

                        found = true;
                    } else {
                        alert('El elemento no existe.');
                    }
                }
            }
        });

        // Si no se encontró ningún elemento válido
        if (!found) {
            alert('Por favor, selecciona un elemento.');
        }
    });
});

console.log('hola mundo');


